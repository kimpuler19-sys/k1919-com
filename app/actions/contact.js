'use server'
import { Resend } from 'resend'

export async function submitContact(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  if (!name || !email || !message) {
    return { error: 'All fields are required' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  
  try {
    await resend.emails.send({
      from: 'Kimpuler Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Failed to send message. Please try again.' }
  }
}