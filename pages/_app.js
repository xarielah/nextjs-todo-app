import { ChakraProvider } from '@chakra-ui/react' // TODO: Import theme from ./lib
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {

  return (
    <ChakraProvider>
      <AnimatePresence initial exitBeforeEnter>
        <Layout>
          <Component {...pageProps} router={router.path} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
