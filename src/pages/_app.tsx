import 'styles/styles.scss'
import React from 'react'
import type { AppProps } from 'next/app'
import { ManagedUI, FontGlobalCSS } from 'components/ui'

const Noop: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>{children}</>
)

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <FontGlobalCSS />
      <ManagedUI>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedUI>
    </>
  )
}
