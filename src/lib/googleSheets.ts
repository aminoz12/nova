import { google } from 'googleapis'

// Initialize Google Sheets API
// Supports both Service Account and OAuth 2.0 authentication methods
async function getAuthClient() {
  // Method 1: OAuth 2.0 (if refresh token is provided)
  if (process.env.GOOGLE_REFRESH_TOKEN) {
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
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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
    const auth = await getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not configured')
    }

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

    // Append row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:H`, // Columns A to H
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return { success: true }
  } catch (error: any) {
    console.error('Error inserting to Google Sheet:', error)
    throw error
  }
}

