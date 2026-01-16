// Test script to verify Google Sheets integration
const fs = require('fs')
const { google } = require('googleapis')

// Load .env.local manually
function loadEnv() {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8')
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=:#]+)=(.*)$/)
      if (match) {
        const key = match[1].trim()
        let value = match[2].trim()
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }
        process.env[key] = value
      }
    })
  } catch (error) {
    console.error('Error loading .env.local:', error.message)
  }
}

loadEnv()

async function testGoogleSheets() {
  try {
    console.log('🔍 Testing Google Sheets connection...\n')

    // Check environment variables
    console.log('📋 Environment Variables:')
    console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? '✅ Set' : '❌ Missing')
    console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Set (' + process.env.GOOGLE_PRIVATE_KEY.substring(0, 30) + '...)' : '❌ Missing')
    console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✅ ' + process.env.GOOGLE_SHEET_ID : '❌ Missing')
    console.log('GOOGLE_SHEET_NAME:', process.env.GOOGLE_SHEET_NAME || 'Sheet1 (default)')
    console.log('')

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing required environment variables')
    }

    // Setup authentication
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    console.log('🔐 Authenticating...')
    const authClient = await auth.getClient()
    console.log('✅ Authentication successful\n')

    // Initialize Sheets API
    const sheets = google.sheets({ version: 'v4', auth: authClient })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'

    // Test 1: Get spreadsheet metadata
    console.log('📊 Getting spreadsheet info...')
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId,
      })
      console.log('✅ Spreadsheet found:', spreadsheet.data.properties.title)
      console.log('   Sheets:', spreadsheet.data.sheets.map(s => s.properties.title).join(', '))
    } catch (error) {
      if (error.code === 403) {
        console.error('❌ Permission denied! Make sure you shared the sheet with:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
      } else if (error.code === 404) {
        console.error('❌ Sheet not found! Check GOOGLE_SHEET_ID')
      } else {
        console.error('❌ Error:', error.message)
      }
      throw error
    }
    console.log('')

    // Test 2: Read existing data
    console.log('📖 Reading existing data from row 3...')
    try {
      const readResult = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A3:H`,
      })
      const rows = readResult.data.values || []
      console.log('✅ Found', rows.length, 'rows of data (starting from row 3)')
      if (rows.length > 0) {
        console.log('   First row:', rows[0])
      }
    } catch (error) {
      console.error('❌ Error reading data:', error.message)
      if (error.message.includes('Unable to parse range')) {
        console.error('   Check GOOGLE_SHEET_NAME. Current value:', sheetName)
      }
    }
    console.log('')

    // Test 3: Insert test data
    console.log('✍️  Inserting test data...')
    const testData = [
      'Test User',
      'Test Company',
      'Test Address',
      'test@example.com',
      '0600000000',
      'Test Service',
      'This is a test entry',
      'Normal'
    ]

    try {
      const appendResult = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A3:H`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [testData],
        },
      })

      console.log('✅ Test data inserted successfully!')
      console.log('   Updated range:', appendResult.data.updates?.updatedRange)
      console.log('   Updated rows:', appendResult.data.updates?.updatedRows)
    } catch (error) {
      console.error('❌ Error inserting data:', error.message)
      if (error.code === 403) {
        console.error('   Permission denied! Share the sheet with:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
      }
      throw error
    }

    console.log('\n✅ All tests passed! Google Sheets integration is working correctly.')
  } catch (error) {
    console.error('\n❌ Test failed:', error.message)
    if (error.response) {
      console.error('   Status:', error.response.status)
      console.error('   Details:', JSON.stringify(error.response.data, null, 2))
    }
    process.exit(1)
  }
}

testGoogleSheets()

