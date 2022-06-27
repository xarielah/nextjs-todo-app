import { Container, Box, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Head from 'next/head'
import Navbar from '../navbar'
import { useRouter } from 'next/router'


const LinkButton = ({ children, link }) => {
    return (
        <NextLink href={link}>
            <Link style={{ textDecoration: 'none' }}>
                <Button colorScheme={link === '/archive' ? 'linkedin' : 'teal'}>{children}</Button>
            </Link>
        </NextLink>
    )
}

const MainPageLayout = ({ children }) => {
    const router = useRouter()

    return (
        <Box>
            <Head>
                <title>Your beloved Todo Application!</title>
                <meta name="description" content="Todo Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <Container maxW='container.xl' mt={5}>

                <Box align="center">
                    {router.route !== '/archive' ?
                        <LinkButton link={'/archive'}>
                            Archive
                        </LinkButton>
                        :
                        <LinkButton link={'/'}>
                            Home
                        </LinkButton>
                    }
                </Box>

                {children}
            </Container>
        </Box>
    )
}

export default MainPageLayout