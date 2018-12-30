const baseSpacing = 5

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    bg: '#00010A',
    darkblue: '#151828',
    deepblue: '#090E21'
  },

  spacing: {
    base: baseSpacing,
    small: baseSpacing * 2,
    medium: baseSpacing * 3,
    big: baseSpacing * 4,
    huge: baseSpacing * 5
  },

  radius: 3,

  font: {
    family: 'sans-serif',
    weights: {
      normal: 400,
      thin: 200,
      bold: 600
    },
    sizes: {
      default: 16,
      small: 12,
      big: 18,
      h1: 42,
      h2: 24
    }
  },

  breakpoints: {
    desktop: 1190,
    tablet: 768,
    phone: 420
  }
}

export default theme
