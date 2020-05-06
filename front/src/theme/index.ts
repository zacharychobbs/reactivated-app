import { theme } from '@chakra-ui/core'
console.log(theme)
export default {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: 'rgba(71,253,167,0.1)',
      100: '#affed8',
      200: '#51fdaa',
      300: '#43ee9c',
      400: '#3edd90',
      500: '#47fda7',
      600: '#33b576',
      700: '#2c9b65',
      800: '#227b50',
      900: '#14482f',
    },
    secondary: {
      50: '#8f92a7',
      100: '#7a7d95',
      200: '#646883',
      300: '#4f5371',
      400: '#393e60',
      500: '#393e60',
      600: '#24294e',
      700: '#1d2146',
      800: '#191d42',
      900: '#16193e',
    },
  },
}
