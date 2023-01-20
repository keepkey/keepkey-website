import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `Roboto, sans-serif`,
    body: `Roboto, sans-serif`,
  },
  brand: {
    900: '#f6f7f7',
    800: '#020202',
    700: '#ba9862',
  },
  styles: {
    
    global: {
      'h1, h2, h3, h4': {
        fontWeight: '500'
      },
      h2: {
        fontSize: '36px',
      },
      h3: {
        fontSize: '30px',
      },
      h4: {
        fontSize: '20px',
      }
    },
  }
})

export default theme