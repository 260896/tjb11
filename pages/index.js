import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Thương hiệu casino chuyên nghiệp số 1 Châu Á</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
