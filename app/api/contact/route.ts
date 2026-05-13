import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// CORS-Header für alle Responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// OPTIONS-Handler für CORS-Preflight
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: corsHeaders,
    }
  )
}

// POST-Handler für Kontaktformular
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, name, company, email, service, betreff, message, privacyAccepted } = body

    // Honeypot: unsichtbares Feld; Bots füllen es oft aus. Gleiche Antwort wie Erfolg, damit nichts auffällt.
    const honeypot =
      typeof body.website === 'string' ? body.website.trim() : String(body.website ?? '').trim()
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200, headers: corsHeaders })
    }

    // Unterstützung für beide Formate: altes Format (firstName/lastName/service) und neues Format (name/betreff)
    const finalName = name || (firstName && lastName ? `${firstName} ${lastName}` : '')
    const finalSubject = betreff || service || ''

    const trimmedName = typeof name === 'string' ? name.trim() : ''
    const hasSplitName = Boolean(String(firstName || '').trim() || String(lastName || '').trim())
    const isShortHomeContact =
      trimmedName.length > 0 && !hasSplitName

    // Validierung
    if (!finalName?.trim() || !email) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus' },
        {
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    if (!isShortHomeContact && (!finalSubject || !message)) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus' },
        {
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        { error: 'Bitte akzeptieren Sie die Datenschutzhinweise' },
        { 
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { 
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    // Prüfen ob alle SMTP-Einstellungen gesetzt sind
    if (!process.env.SMTP_HOST) {
      console.error('SMTP_HOST nicht konfiguriert')
      return NextResponse.json(
        { error: 'SMTP_HOST nicht konfiguriert. Bitte setzen Sie SMTP_HOST in Ihrer .env.local Datei.' },
        { 
          status: 500,
          headers: corsHeaders,
        }
      )
    }
    
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP-Credentials nicht konfiguriert')
      return NextResponse.json(
        { error: 'SMTP-Anmeldedaten nicht konfiguriert. Bitte setzen Sie SMTP_USER und SMTP_PASSWORD in Ihrer .env.local Datei.' },
        { 
          status: 500,
          headers: corsHeaders,
        }
      )
    }
    
    if (!process.env.SMTP_PORT) {
      console.error('SMTP_PORT nicht konfiguriert')
      return NextResponse.json(
        { error: 'SMTP_PORT nicht konfiguriert. Bitte setzen Sie SMTP_PORT in Ihrer .env.local Datei.' },
        { 
          status: 500,
          headers: corsHeaders,
        }
      )
    }

    // HTML-Escape Funktion
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }
      return text.replace(/[&<>"']/g, (m) => map[m])
    }

    // Nodemailer Transporter konfigurieren
    const smtpPort = parseInt(process.env.SMTP_PORT)
    const isSecure = smtpPort === 465
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure, // true für 465 (SSL), false für andere Ports (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Zusätzliche Optionen für verschiedene SMTP-Server
      tls: {
        // Nicht selbstsignierte Zertifikate ablehnen
        rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
      },
    })

    // SMTP-Verbindung testen
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP-Verbindung fehlgeschlagen:', verifyError)
      return NextResponse.json(
        { error: 'E-Mail-Server-Verbindung fehlgeschlagen. Bitte überprüfen Sie Ihre SMTP-Einstellungen.' },
        { 
          status: 500,
          headers: corsHeaders,
        }
      )
    }

    // Service-Optionen Mapping
    const serviceLabels: { [key: string]: string } = {
      'neue-website': 'Neue Website erstellen',
      'website-optimieren': 'Bestehende Website optimieren',
      'seo': 'SEO & Sichtbarkeit',
      'sonstiges': 'Sonstiges'
    }

    // Eingaben escapen für Sicherheit
    const safeCompany = company ? escapeHtml(company) : 'Nicht angegeben'
    const safeEmail = escapeHtml(email)
    const emailBetreff = isShortHomeContact
      ? 'Kontaktformular Startseite'
      : serviceLabels[finalSubject] || finalSubject
    const messageBody = isShortHomeContact
      ? (typeof message === 'string' && message.trim() ? message.trim() : 'Keine Angabe')
      : String(message)
    const safeService = emailBetreff
    const safeBetreffHtml = escapeHtml(String(emailBetreff))
    const safeMessage = escapeHtml(messageBody).replace(/\n/g, '<br>')
    const fullName = finalName

    // E-Mail-Inhalt
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'kontakt@319webdesign.com',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Neue Kontaktanfrage</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
            ${company ? `<p><strong>Unternehmen:</strong> ${safeCompany}</p>` : ''}
            <p><strong>E-Mail:</strong> ${safeEmail}</p>
            <p><strong>${isShortHomeContact ? 'Anlass' : 'Betreff'}:</strong> ${safeBetreffHtml}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; margin-top: 0;">${isShortHomeContact ? 'Worum geht\'s?' : 'Nachricht'}:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
      text: `
Neue Kontaktanfrage

Name: ${fullName}
${company ? `Unternehmen: ${company}` : ''}
E-Mail: ${email}
${isShortHomeContact ? 'Anlass' : 'Betreff'}: ${safeService}

${isShortHomeContact ? 'Worum geht\'s?' : 'Nachricht'}:
${messageBody}
      `,
    }

    // E-Mail senden
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet' },
      { 
        status: 200,
        headers: corsHeaders,
      }
    )
  } catch (error: any) {
    console.error('Fehler beim Senden der E-Mail:', error)
    
    // Spezifischere Fehlermeldungen
    let errorMessage = 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentifizierung fehlgeschlagen. Bitte überprüfen Sie Ihre SMTP-Anmeldedaten.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Verbindung zum E-Mail-Server fehlgeschlagen. Bitte überprüfen Sie Ihre SMTP-Einstellungen.'
    } else if (error.response) {
      errorMessage = `E-Mail-Server-Fehler: ${error.response}`
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { 
        status: 500,
        headers: corsHeaders,
      }
    )
  }
}
