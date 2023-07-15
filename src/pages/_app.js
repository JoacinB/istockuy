import customTheme from '@/components/customTheme'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default MyApp