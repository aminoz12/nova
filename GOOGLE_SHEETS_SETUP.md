# Google Sheets Integration Setup

This guide explains how to set up Google Sheets integration to automatically save devis (quote request) data to a Google Sheet.

## Prerequisites

1. A Google account
2. A Google Sheet with the following columns (in order):
   - Nom
   - Entreprise
   - Adresse
   - Email
   - Téléphone
   - Service
   - Description
   - Urgence

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create a Service Account

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `nova-ssi-sheets` (or any name you prefer)
   - Description: `Service account for Google Sheets integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Create and Download Service Account Key

**⚠️ IMPORTANT: If you encounter an error about "iam.disableServiceAccountKeyCreation", see the [Alternative Setup Methods](#alternative-setup-methods-oauth-20) section below.**

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file

**If you get an error about service account key creation being blocked**, you have two options:
- **Option A (Recommended)**: Use OAuth 2.0 with a personal Google account (see Alternative Setup Methods below)
- **Option B**: Contact your Google Workspace administrator to disable the policy constraint

## Step 4: Extract Credentials from JSON

Open the downloaded JSON file and extract:
- `client_email`: The service account email (looks like `nova-ssi-sheets@project-id.iam.gserviceaccount.com`)
- `private_key`: The private key (starts with `-----BEGIN PRIVATE KEY-----`)

## Step 5: Share Google Sheet with Service Account

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (from Step 4) as an editor
4. Make sure to give it "Editor" permissions
5. Click "Send"

## Step 6: Get Your Google Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part - this is your Google Sheet ID

## Step 7: Configure Environment Variables

Add the following variables to your `.env.local` file:

```env
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
GOOGLE_SHEET_NAME=Sheet1
```

**Important Notes:**
- The `GOOGLE_PRIVATE_KEY` must include the `\n` characters (newlines) - they will be automatically converted
- If your sheet tab has a different name than "Sheet1", update `GOOGLE_SHEET_NAME`
- Make sure the private key is wrapped in quotes and includes the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers

## Step 8: Verify the Setup

1. Make sure your `.env.local` file is properly configured
2. Restart your Next.js development server
3. Submit a test devis request from the `/devis` page
4. Check your Google Sheet - a new row should appear with the data

## Troubleshooting

### Error: "GOOGLE_SHEET_ID is not configured"
- Make sure `GOOGLE_SHEET_ID` is set in your `.env.local` file
- Restart your development server after adding the variable

### Error: "The caller does not have permission"
- Make sure you've shared the Google Sheet with the service account email
- Verify the service account has "Editor" permissions

### Error: "Invalid credentials"
- Double-check that `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` are correct
- Make sure the private key includes the `\n` characters and is properly formatted

### Data not appearing in the sheet
- Check the browser console and server logs for errors
- Verify the sheet name matches `GOOGLE_SHEET_NAME`
- Make sure the sheet has the correct column headers in the first row

## Column Order

The data will be inserted in this exact order:
1. Nom (Full name: firstName + lastName or name)
2. Entreprise (Company name)
3. Adresse (Address)
4. Email
5. Téléphone (Phone)
6. Service (Service name)
7. Description (Project description or message)
8. Urgence (Urgency level)

Make sure your Google Sheet has these columns in the first row (header row).

---

## Alternative Setup Methods (OAuth 2.0)

If you cannot create service account keys due to organization policies, you can use OAuth 2.0 with a personal Google account instead. This method is simpler and doesn't require service account keys.

### Method 1: OAuth 2.0 with Personal Google Account (Recommended Alternative)

This method uses your personal Google account credentials instead of a service account.

#### Step 1: Create OAuth 2.0 Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Click "Create Credentials" > "OAuth client ID"
4. If prompted, configure the OAuth consent screen:
   - Choose "External" (unless you have a Google Workspace account)
   - Fill in the required information (App name, User support email, Developer contact)
   - Add scopes: `https://www.googleapis.com/auth/spreadsheets`
   - Add test users if needed (your email address)
   - Save and continue
5. For Application type, select "Web application"
6. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`
7. Click "Create"
8. **Save the Client ID and Client Secret** - you'll need these

#### Step 2: Get OAuth 2.0 Refresh Token

You need to generate a refresh token. Here's a simple way using a Node.js script:

1. Create a file `get-refresh-token.js` in your project root:

```javascript
const { google } = require('googleapis');
const readline = require('readline');

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/api/auth/callback/google';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this url:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', (code) => {
  oauth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    console.log('Refresh Token:', token.refresh_token);
    console.log('Access Token:', token.access_token);
    rl.close();
  });
});
```

2. Run: `node get-refresh-token.js`
3. Follow the URL, authorize the app, and copy the code
4. Paste the code and you'll get a refresh token

#### Step 3: Update the Code to Use OAuth 2.0

Update `src/lib/googleSheets.ts` to use OAuth 2.0:

```typescript
import { google } from 'googleapis'

async function getAuthClient() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  return oauth2Client
}

// ... rest of the function remains the same
```

#### Step 4: Update Environment Variables

Add to your `.env.local`:

```env
# OAuth 2.0 Configuration (Alternative to Service Account)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=your-refresh-token
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_SHEET_ID=your-google-sheet-id-here
GOOGLE_SHEET_NAME=Sheet1
```

**Note**: Make sure to share your Google Sheet with the Google account email you used for OAuth (the account that authorized the app).

### Method 2: Contact Administrator

If you're in a Google Workspace organization and need service account keys:

1. Contact your Google Workspace administrator
2. Ask them to disable the policy constraint `iam.disableServiceAccountKeyCreation`
3. They need the role "Administrator des règles d'administration" (roles/orgpolicy.policyAdmin)
4. Once disabled, you can follow the original service account setup method

### Method 3: Use a Personal Google Cloud Project

If you're using a Google Workspace account with restrictions:

1. Create a new Google Cloud project using a **personal Gmail account** (not Workspace)
2. Follow the original service account setup steps
3. This personal project won't have the organization policy restrictions

**Note**: This method works well for development and small projects, but for production, consider using a proper service account with Workload Identity Federation (more advanced setup).
