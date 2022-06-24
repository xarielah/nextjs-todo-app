import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'

const MainPageLayout = ({ children }) => {
    return (
        <Box>
            <Head>
                <title>Your beloved Todo Application!</title>
                <meta name="description" content="Todo Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <Container maxW='container.xl' mt={5}>
                {children}
            </Container>
        </Box>
    )
}

export default MainPageLayout