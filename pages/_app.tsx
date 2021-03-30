import '../styles/index.css'
import { Provider } from 'next-auth/client'
import Footer from '@/components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  )
}

export default MyApp
