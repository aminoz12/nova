// Script to generate OAuth 2.0 refresh token for Google Sheets API
// Run: node get-refresh-token.js
// Make sure to set your CLIENT_ID and CLIENT_SECRET first

const { google } = require('googleapis');
const readline = require('readline');

// ⚠️ REPLACE THESE WITH YOUR VALUES FROM GOOGLE CLOUD CONSOLE
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
const REDIRECT_URI = 'http://localhost:3000';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent', // Force consent screen to get refresh token
});

console.log('\n========================================');
console.log('Google OAuth 2.0 Setup');
console.log('========================================\n');
console.log('1. Visit this URL to authorize the application:');
console.log('\n' + authUrl + '\n');
console.log('2. After authorizing, you will be redirected to a page');
console.log('3. Copy the "code" parameter from the URL');
console.log('4. Paste it below\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the authorization code here: ', (code) => {
  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('\n❌ Error retrieving access token:', err.message);
      console.log('\nMake sure:');
      console.log('- You copied the full code from the URL');
      console.log('- Your CLIENT_ID and CLIENT_SECRET are correct');
      console.log('- The redirect URI matches: ' + REDIRECT_URI);
      rl.close();
      return;
    }
    
    console.log('\n✅ Success! Here are your tokens:\n');
    console.log('========================================');
    console.log('Add these to your .env.local file:');
    console.log('========================================\n');
    console.log('GOOGLE_CLIENT_ID=' + CLIENT_ID);
    console.log('GOOGLE_CLIENT_SECRET=' + CLIENT_SECRET);
    console.log('GOOGLE_REFRESH_TOKEN=' + token.refresh_token);
    console.log('GOOGLE_REDIRECT_URI=' + REDIRECT_URI);
    console.log('\n========================================\n');
    console.log('⚠️  Important:');
    console.log('- Save the REFRESH_TOKEN securely');
    console.log('- The refresh token will not be shown again');
    console.log('- Share your Google Sheet with the Google account email you used\n');
    
    rl.close();
  });
});

