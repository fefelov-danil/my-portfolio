import localFont from 'next/font/local'

export const montserrat = localFont({
  src: [
    { path: '../public/fonts/Montserrat-Regular.woff', weight: '300' },
    { path: '../public/fonts/Montserrat-Medium.woff', weight: '400' },
    { path: '../public/fonts/Montserrat-SemiBold.woff', weight: '600' },
    { path: '../public/fonts/Montserrat-Bold.woff', weight: '800' },
  ],
  variable: '--font-montserrat',
})

export const muller = localFont({
  src: [{ path: '../public/fonts/MullerExtraBold.woff2', weight: '600' }],
  variable: '--font-muller',
})
