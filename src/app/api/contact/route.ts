import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email service helper
async function sendConfirmationEmail(to: string, name: string) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    console.warn('Resend not configured - skipping confirmation email');
    return false;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: to,
      subject: 'Thank you for reaching out!',
      html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #e11d48, #d97706); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .header h1 { color: white; margin: 0; }
                  .content { background: #fafaf9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .footer { text-align: center; padding: 20px; color: #78716c; font-size: 14px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Thank You for Reaching Out!</h1>
                  </div>
                  <div class="content">
                    <h2>Hi ${name},</h2>
                    <p>Thank you for contacting me! I've received your message and will get back to you as soon as possible.</p>
                    <p>I typically respond within 24-48 hours. In the meantime, feel free to explore my portfolio or connect with me on social media.</p>
                    <p>Looking forward to working with you!</p>
                    <p>Best regards,<br><strong>Jyoti Soni</strong></p>
                  </div>
                  <div class="footer">
                    <p>This is an automated confirmation email. Please do not reply to this message.</p>
                  </div>
                </div>
              </body>
            </html>
            `,
    });

    if (error) {
      console.error('Resend error:', error);
      return false;
    }

    console.log('Confirmation email sent:', data);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}

// Send notification email to site owner
async function sendNotificationEmail(formData: any) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
    console.warn('Resend not configured - skipping notification email');
    return false;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #e11d48, #d97706); padding: 20px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
                  .content { background: #fafaf9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #57534e; }
                  .value { color: #1c1917; margin-top: 5px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>📬 New Contact Form Submission</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Name:</div>
                      <div class="value">${formData.name}</div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value">${formData.email}</div>
                    </div>
                    <div class="field">
                      <div class="label">Phone:</div>
                      <div class="value">${formData.phone || 'Not provided'}</div>
                    </div>
                    <div class="field">
                      <div class="label">Inquiry Type:</div>
                      <div class="value">${formData.messageType}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message:</div>
                      <div class="value">${formData.message}</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
            `,
    });

    if (error) {
      console.error('Resend notification error:', error);
      return false;
    }

    console.log('Notification email sent:', data);
    return true;
  } catch (error) {
    console.error('Error sending notification email:', error);
    return false;
  }
}

// Google Sheets helper
async function sendToGoogleSheets(data: any) {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK;

  if (!webhookUrl) {
    console.warn('Google Sheets webhook URL not configured');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      console.log('Data sent to Google Sheets successfully');
      return true;
    } else {
      console.error('Google Sheets response not OK:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, messageType, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const formData = {
      name,
      email,
      phone: phone || 'Not provided',
      messageType,
      message,
    };

    // Send to Google Sheets (non-blocking)
    sendToGoogleSheets(formData).catch(err =>
      console.error('Google Sheets error:', err)
    );

    // Send notification email to site owner (non-blocking)
    sendNotificationEmail(formData).catch(err =>
      console.error('Notification email error:', err)
    );

    // Send confirmation email to user (non-blocking)
    sendConfirmationEmail(email, name).catch(err =>
      console.error('Confirmation email error:', err)
    );

    return NextResponse.json({
      success: true,
      message: 'Message received successfully! Check your email for confirmation.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
