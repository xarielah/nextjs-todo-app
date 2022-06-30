import { ChakraProvider } from '@chakra-ui/react' // TODO: Import theme from ./lib
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import { useState, useMemo } from 'react'
import { SearchContext } from '../components/searchContext'

function MyApp({ Component, pageProps, router }) {
  const [searchTerm, setSearchTerm] = useState('')

  const value = useMemo(() => ({
    searchTerm: searchTerm.trim(),
    setSearchTerm: (term) => setSearchTerm(term)
  }), [searchTerm])

  return (
    <SearchContext.Provider value={value}>
      <ChakraProvider>
        <AnimatePresence initial exitBeforeEnter>
          <Layout>
            <Component {...pageProps} router={router.path} />
          </Layout>
        </AnimatePresence>
      </ChakraProvider>
    </SearchContext.Provider>
  )
}

export default MyApp
