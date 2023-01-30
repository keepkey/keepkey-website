import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `Roboto, sans-serif`,
    body: `Roboto, sans-serif`,
  },
  brand: {
    900: '#f6f7f7',
    800: '#020202',
    700: '#ba9862',
  },
  colors: {
    gold: {
      100: "#b79862",
      200: "#b59761",
      300: "#8F7340",
      400: "#775821"
    }
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
      },
      'p, a, ul, li, i': {
        fontSize: '18px',
        letterSpacing: '0.025em',
        fontWeight: '300'
      },
      a: {
        color: 'gold.300',
        transitionProperty: 'all',
        transitionDuration: 'normal',
        fontWeight: '500',
        _hover: {
          color: 'gold.400',
        }
      },
    },
  }
})

export default theme