import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="font-body bg-dark-500 text-white">
    <NextNprogress
      color="#fca311"
      startPosition={0.3}
      stopDelayMs={150}
      height={3}
      options={{ showSpinner: false }}
      showOnShallow={true}
    />
    <Component {...pageProps} />
  </div>
}

export default MyApp
