export const contact = {
  email: 'upabove.admin@gmail.com',
  phone: '+91 99586 18406',
  /** Phone number in E.164 form for tel: links. */
  phoneHref: '+919958618406',
  instagram: 'https://www.instagram.com/upabove_ggn/',
  instagramHandle: '@upabove',
  /** wa.me link: the phone number without '+' or spaces, plus a pre-filled greeting. */
  whatsapp: `https://wa.me/919958618406?text=${encodeURIComponent('Hi UpAbove! I’d like to know more about your astronomy sessions.')}`,
} as const
