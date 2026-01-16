import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { insertDevisToSheet } from '@/lib/googleSheets'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, firstName, lastName, company, email, phone, address, service, message, projectDescription, urgency, type } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const subject = type === 'devis' 
      ? `Nouvelle demande de devis de ${firstName || name} ${lastName || ''}`.trim()
      : 'DEMANDE DE CONTACT'

    // Map service values to readable names
    const serviceNames: { [key: string]: string } = {
      'fire-risk-assessment': 'Évaluation des Risques',
      'fire-alarms': 'Alarmes Incendie',
      'extinguishers': 'Extincteurs',
      'emergency-lighting': 'Éclairage de Secours',
      'fire-training': 'Formation Incendie',
      'other': 'Autre',
      'evaluation': 'Évaluation des risques',
      'installation': 'Installation d\'alarmes',
      'maintenance': 'Maintenance',
      'extincteurs': 'Extincteurs',
      'baes': 'Éclairage BAES',
      'desenfumage': 'Désenfumage',
      'ria': 'RIA',
      'formation': 'Formation',
      'autre': 'Autre',
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
    
    const displayService = service ? (serviceNames[service] || service) : ''

    let htmlContent = `
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
                      ${type === 'devis' ? 'NOUVELLE DEMANDE DE DEVIS' : 'DEMANDE DE CONTACT'}
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
                        ${firstName ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0; width: 140px;"><strong>Prénom:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${firstName}</td></tr>` : ''}
                        ${lastName ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Nom:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${lastName}</td></tr>` : ''}
                        ${name && !firstName && !lastName ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Nom:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${name}</td></tr>` : ''}
                        ${company ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Entreprise:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${company}</td></tr>` : ''}
                        ${email ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Email:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></td></tr>` : ''}
                        ${phone ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Téléphone:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></td></tr>` : ''}
                        ${address ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Adresse:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${address}</td></tr>` : ''}
                      </table>
                    </div>

                    ${service ? `
                    <!-- Service Details -->
                    <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 24px; margin-bottom: 24px; border-radius: 4px;">
                      <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Détails ${type === 'devis' ? 'du Devis' : 'du Service'}
                      </h2>
                      <table width="100%" cellpadding="8" cellspacing="0">
                        <tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0; width: 140px;"><strong>Service:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0; font-weight: 500;">${displayService}</td></tr>
                        ${urgency ? `<tr><td style="color: #6b7280; font-size: 14px; padding: 8px 0;"><strong>Urgence:</strong></td><td style="color: #111827; font-size: 14px; padding: 8px 0;">${urgency}</td></tr>` : ''}
                      </table>
                    </div>
                    ` : ''}

                    <!-- Message -->
                    <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 24px; border-radius: 4px;">
                      <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Message
                      </h2>
                      <div style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; background-color: #ffffff; padding: 16px; border-radius: 4px; border: 1px solid #fee2e2;">
                        ${message || projectDescription || 'Aucun message fourni'}
                      </div>
                    </div>
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
      replyTo: email || process.env.SMTP_USER,
      subject: subject,
      html: htmlContent,
    })

    // If it's a devis request, also insert into Google Sheets
    if (type === 'devis') {
      try {
        await insertDevisToSheet({
          firstName,
          lastName,
          name,
          company: company || '',
          address: address || '',
          email: email || '',
          phone: phone || '',
          service: displayService || service || '',
          projectDescription,
          message,
          urgency: urgency || ''
        })
      } catch (sheetError: any) {
        // Log the error but don't fail the request if Google Sheets fails
        console.error('Error inserting to Google Sheets:', sheetError)
        // Continue - email was already sent successfully
      }
    }

    return NextResponse.json({ success: true, message: 'Email envoyé avec succès' })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email: ' + error.message },
      { status: 500 }
    )
  }
}

