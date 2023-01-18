// Chakra theme.js

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#f6f7f7',
    800: '#020202',
    700: '#ba9862',
  },
}

const styles = {
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

// 3. extend the theme
const theme = extendTheme({ config, colors, styles })

export default theme