import { google } from 'googleapis'

// Initialize Google Sheets API
// Supports both Service Account and OAuth 2.0 authentication methods
async function getAuthClient() {
  // Method 1: OAuth 2.0 (if refresh token is provided)
  if (process.env.GOOGLE_REFRESH_TOKEN) {
    console.log('Using OAuth 2.0 authentication')
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000'
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    return oauth2Client
  }

  // Method 2: Service Account (default method)
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    console.log('Using Service Account authentication:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    
    if (!privateKey || !privateKey.includes('BEGIN PRIVATE KEY')) {
      throw new Error('Invalid GOOGLE_PRIVATE_KEY format. Make sure it includes the full private key with BEGIN/END markers.')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    return auth
  }

  throw new Error('Google Sheets authentication not configured. Please set either GOOGLE_REFRESH_TOKEN (OAuth 2.0) or GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY (Service Account) in your environment variables.')
}

// Insert devis data into Google Sheet
export async function insertDevisToSheet(data: {
  firstName?: string
  lastName?: string
  name?: string
  company: string
  address: string
  email: string
  phone: string
  service: string
  projectDescription?: string
  message?: string
  urgency: string
}) {
  try {
    console.log('Starting Google Sheets insertion...')
    
    const auth = await getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not configured')
    }

    console.log('📋 Google Sheets configuration:', {
      spreadsheetId: spreadsheetId.substring(0, 20) + '...',
      sheetName,
      hasAuth: !!auth,
      envSheetName: process.env.GOOGLE_SHEET_NAME
    })

    // Combine first name and last name, or use name if provided
    const fullName = data.firstName && data.lastName
      ? `${data.firstName} ${data.lastName}`.trim()
      : data.name || ''

    // Map service values to readable names
    const serviceNames: { [key: string]: string } = {
      "Évaluation des Risques d'Incendie": "Évaluation des Risques d'Incendie",
      "Installation d'Extincteurs": "Installation d'Extincteurs",
      "BAES (Éclairage de Secours)": "BAES (Éclairage de Secours)",
      "Désenfumage": "Désenfumage",
      "RIA (Robinets d'Incendie Armés)": "RIA (Robinets d'Incendie Armés)",
      "Installation d'Alarmes Incendie": "Installation d'Alarmes Incendie",
      "Maintenance d'Alarmes Incendie": "Maintenance d'Alarmes Incendie",
      "Systèmes de Sécurité Intégrés": "Systèmes de Sécurité Intégrés",
      "Formation Incendie": "Formation Incendie",
      "Autre": "Autre"
    }

    const displayService = serviceNames[data.service] || data.service

    // Prepare row data in the order: Nom, Entreprise, Adresse, Email, Téléphone, Service, Description, Urgence
    const rowData = [
      fullName || '',
      data.company || '',
      data.address || '',
      data.email || '',
      data.phone || '',
      displayService || '',
      data.projectDescription || data.message || '',
      data.urgency || ''
    ]

    // Escape sheet name if it contains spaces or special characters
    const escapedSheetName = sheetName.includes(' ') || sheetName.includes("'") 
      ? `'${sheetName.replace(/'/g, "''")}'` 
      : sheetName

    console.log('✍️ Attempting to insert to Google Sheet:', {
      spreadsheetId: spreadsheetId.substring(0, 20) + '...',
      sheetName,
      escapedSheetName,
      rowData
    })

    // Get existing data starting from row 3
    console.log('🔍 Checking existing data from row 3...')
    let existingRows: any[] = []
    try {
      const existingData = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${escapedSheetName}!A3:H1000`,
      })
      existingRows = existingData.data.values || []
      console.log('📊 Found', existingRows.length, 'existing rows')
    } catch (error: any) {
      console.log('⚠️ Could not read existing data:', error.message)
      // Continue anyway - we'll use append
    }

    // Find the first empty row (where column A is empty)
    let targetRow = null
    for (let i = 0; i < existingRows.length; i++) {
      const row = existingRows[i]
      if (!row || row.length === 0 || !row[0] || String(row[0]).trim() === '') {
        targetRow = 3 + i
        break
      }
    }

    let result
    if (targetRow !== null) {
      // Found an empty row, try to fill it
      console.log('📝 Filling empty row', targetRow)
      try {
        result = await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${escapedSheetName}!A${targetRow}:H${targetRow}`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [rowData],
          },
        })
        console.log('✅ Successfully filled row', targetRow)
        return { success: true, row: targetRow }
      } catch (updateError: any) {
        console.log('⚠️ Update failed (row may not exist), using append:', updateError.message)
        // Fall through to append
      }
    }

    // No empty row found or update failed - use append
    console.log('📝 Appending new row after existing data')
    result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${escapedSheetName}!A3:H`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData],
      },
    })

    const updatedRange = result.data.updates?.updatedRange
    console.log('✅ Successfully appended row:', updatedRange)

    return { success: true, updatedRange }
  } catch (error: any) {
    console.error('❌ Error inserting to Google Sheet:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      statusText: error.response?.statusText,
      errors: error.response?.data?.error,
      details: error.response?.data?.error?.details
    })
    
    // Provide more helpful error messages
    if (error.code === 403 || error.response?.status === 403) {
      throw new Error('Permission denied. Make sure you shared the Google Sheet with: ' + process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    } else if (error.code === 404 || error.response?.status === 404) {
      throw new Error('Google Sheet not found. Check GOOGLE_SHEET_ID and make sure the sheet exists.')
    } else if (error.message?.includes('Unable to parse range')) {
      throw new Error('Invalid sheet name. Check GOOGLE_SHEET_NAME (current: ' + (process.env.GOOGLE_SHEET_NAME || 'Sheet1') + ')')
    }
    
    throw error
  }
}

