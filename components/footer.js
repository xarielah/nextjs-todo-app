import { Box, Divider, Container, Text, Link } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <Divider />
      <Container p={4}>
        <Box align="center">
          <Text>
            Developed by{' '}
            <Link href="/" target={'_blank'}>
              <BsGithub style={{ display: 'inline' }} /> xarielah
            </Link>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
