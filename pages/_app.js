import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState, Fragment } from 'react'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import {StoreProvider} from '../utils/Store'
import { SessionProvider, useSession } from 'next-auth/react'

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {

  let selectedTheme =  typeof window !== 'undefined' ? localStorage.getItem('theme') : "dark"
  return(
    <Fragment>

    <SessionProvider session={session}>
      <StoreProvider>
      <ThemeProvider enableSystem={true} attribute="class" >
      <Layout >
      {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
          )}
        </Layout>
      </ThemeProvider>
      </StoreProvider>
      </SessionProvider>
    </Fragment>
  )
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return children;
}

export default MyApp
