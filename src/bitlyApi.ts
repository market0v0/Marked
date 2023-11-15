// bitlyApi.ts
import axios from 'axios'

const BITLY_ACCESS_TOKEN = 'YOUR_BITLY_ACCESS_TOKEN'

export const shortenUrl = async (longUrl: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: longUrl,
        domain: 'bit.ly' // Optional: You can specify a custom short domain if you have one
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`
        }
      }
    )

    return response.data.id
  } catch (error) {
    console.error('Error shortening URL:', error.message)
    throw error
  }
}
