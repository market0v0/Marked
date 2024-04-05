// utils.ts
export const progress = (
  question: string,
  MAX_QUESTION_LENGTH: number
): number => {
  return (question.length / MAX_QUESTION_LENGTH) * 100
}

export function ensureQuestionMark (str: string): string {
  // Check if the string ends with a question mark
  // Ensure the first letter is uppercase
  const stringWithUppercase = str.charAt(0).toUpperCase() + str.slice(1)

  // Check if the string ends with a question mark
  if (stringWithUppercase.endsWith('?')) {
    return stringWithUppercase // If it ends with a question mark, return the original string
  } else {
    // If it doesn't end with a question mark, add one and return the modified string
    return stringWithUppercase + '?'
  }
}

import CryptoJS from 'crypto-js'


export const encryptData = (message1: string, message2: string, message3: string): string => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify({ message1, message2, message3 }),
    'secret-key'
  ).toString()

  return encodeURIComponent(encryptedData)
}
