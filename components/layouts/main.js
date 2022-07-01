import { Container, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import { useRouter } from 'next/router';

const MainPageLayout = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>Your beloved Todo Application!</title>
        <meta name="description" content="Todo Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar router={router} />

      <Container maxW="container.xl" mt={5} h={'100vh'}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default MainPageLayout;
