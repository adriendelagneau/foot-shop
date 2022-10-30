import { ThemeProvider } from 'next-themes'
import { Fragment } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Fragment>
    <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
