import parsePhoneNumber from 'libphonenumber-js'

export function formatPhoneNumberToCall(tel: string) {
  const defaultCountryCode = tel.startsWith('+') ? undefined : 'BR'
  const phoneNumber = parsePhoneNumber(tel, defaultCountryCode)
  if (phoneNumber) {
    return `0${phoneNumber.formatNational().replace(/\+|\(|\)|-|\s/g, '')}`
  }
  return `${tel.replace(/\+|\(|\)|-|\s/g, '')};`
}
