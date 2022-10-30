import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='dark:text-blue-500 text-red-500 text-3xl'>test</div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>click</button>
   
 
    </div>
  )
}
