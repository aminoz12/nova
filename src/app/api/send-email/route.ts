import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message, service } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px 40px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                      DEMANDE DE CONTACT
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <!-- Contact Information -->
                    <div style="background-color: #f9fafb; border-left: 4px solid #dc2626; padding: 24px; margin-bottom: 24px; border-radius: 4px;">
                      <h2 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Informations du Contact
                      </h2>
                      <table width="100%" cellpadding="8" cellspacing="0">
                        ${name ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0; width: 140px;"><strong>Nom:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${name}</td></tr>` : ''}
                        ${phone ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Téléphone:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></td></tr>` : ''}
                        ${service ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Service:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0; font-weight: 500;">${service}</td></tr>` : ''}
                      </table>
                    </div>

                    ${message ? `
                    <!-- Message -->
                    <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 24px; border-radius: 4px;">
                      <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Message
                      </h2>
                      <div style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; background-color: #ffffff; padding: 16px; border-radius: 4px; border: 1px solid #fee2e2;">
                        ${message}
                      </div>
                    </div>
                    ` : ''}
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0; line-height: 1.5;">
                      Ce message a été envoyé depuis le formulaire de contact du site web<br>
                      <strong style="color: #dc2626;">Nova SSI</strong> - Protection Incendie
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: `"nova-ssi" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: 'contact@nova-ssi.fr',
      subject: 'DEMANDE DE CONTACT',
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: 'Email envoyé avec succès' })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email: ' + error.message },
      { status: 500 }
    )
  }
}

