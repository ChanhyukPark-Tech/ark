import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: 1.5,
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
    minHeight: '100%',
  },
  body: {
    backgroundColor: 'bg.canvas',
    color: 'fg.default',
    fontFamily: 'var(--font-inter), sans-serif',
    flexGrow: '1',
    _dark: {
      colorScheme: 'dark',
    },
  },
  'html, body': {
    display: 'flex',
    flexDirection: 'column',
    height: 'unset !important', // TODO possbile issue in panda
  },
  '*, *::before, *::after': {
    borderColor: 'border.default',
    borderStyle: 'solid',
  },
  '*::placeholder': {
    opacity: 1,
    color: 'fg.placeholder',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'var(--font-mona-sans), sans-serif',
  },
  a: {
    textDecoration: 'none',
  },
  hr: {
    borderBottomWidth: '1px',
  },
  pre: {
    fontFamily: 'var(--font-roboto-mono)',
    fontSize: '0.8125rem',
    '--shiki-color-text': 'colors.gray.100',
    '--shiki-color-background': 'colors.brown.600',
    '--shiki-token-constant': 'colors.gray.100',
    '--shiki-token-string': 'colors.gray.100',
    '--shiki-token-comment': 'colors.gray.100',
    '--shiki-token-keyword': 'colors.gray.100',
    '--shiki-token-parameter': 'colors.gray.100',
    '--shiki-token-function': 'colors.gray.100',
    '--shiki-token-string-expression': 'colors.gray.100',
    '--shiki-token-punctuation': 'colors.gray.100',
    '--shiki-token-link': 'colors.gray.100',
    '& code': {},
  },
})
