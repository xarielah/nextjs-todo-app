import { Container, Box, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';
import Navbar from '../navbar';
import { useRouter } from 'next/router';
import MenuList from '../menu';

const MainPageLayout = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>Your beloved Todo Application!</title>
        <meta name="description" content="Todo Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container maxW="container.xl" mt={5}>
        <Box align="center">
          <MenuList route={router.asPath} />
        </Box>

        {children}
      </Container>
    </Box>
  );
};

export default MainPageLayout;
