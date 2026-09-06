export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, projectType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'smoad5456@gmail.com';

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: `Portfolio — ${name}`, email: FROM_EMAIL },
        to: [{ email: TO_EMAIL, name: 'Mouad Sehli' }],
        replyTo: { email, name },
        subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        text: `Name: ${name}\nEmail: ${email}\n${company ? `Company: ${company}\n` : ''}${projectType ? `Project Type: ${projectType}\n` : ''}${budget ? `Budget: ${budget}\n` : ''}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo error:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
