'use server'
import { Resend } from 'resend'

export async function submitContact(formData) {
  console.log('🔑 RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY) // Logs true/false

  if (!process.env.RESEND_API_KEY) {
    return { error: 'Server configuration error. Please contact support.' }
  }
  // ... rest of your code
}