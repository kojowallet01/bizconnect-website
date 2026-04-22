// Central config — update contact details here only
export const WHATSAPP_NUMBER = '233537984448'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const EMAIL = 'bizconnectworldwide@gmail.com'

// Social profiles — update these with real URLs before launch
export const SOCIAL_INSTAGRAM = 'https://www.instagram.com/bizconnecttechnologies'
export const SOCIAL_FACEBOOK = 'https://www.facebook.com/bizconnecttechnologies'
export const SOCIAL_LINKEDIN = 'https://www.linkedin.com/company/bizconnect-technologies'

export function waLink(service: string) {
  const msg = encodeURIComponent(
    `Hi Bizconnect Technologies, I'm interested in your ${service} services. I'd like to learn more.`
  )
  return `${WHATSAPP_URL}?text=${msg}`
}

export function mailLink(service: string) {
  const subject = encodeURIComponent(`Enquiry: ${service}`)
  const body = encodeURIComponent(
    `Hi Bizconnect Technologies,\n\nI'm interested in your ${service} services. I'd like to learn more about what you offer and discuss my needs.\n\nThank you.`
  )
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`
}
