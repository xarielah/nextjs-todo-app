import { Box, Heading, Text, VStack, Link, Button, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const FourOFour = () => {
  const BTNClr = useColorModeValue('teal', 'purple');
  return (
    <VStack spacing={9} p={{ base: 5, sm: 9, md: 14 }}>
      <Box>
        <Heading fontSize="9em">404</Heading>
      </Box>
      <Heading size="2xl">Where do you think you&apos;re going punk?</Heading>
      <Text fontSize="1.3em">
        There is nothing for you to look for here, you may return to the home-page and stay safe. wink wink.
      </Text>
      <Box>
        <NextLink href="/">
          <Link style={{ textDecoration: 'none' }}>
            <Button colorScheme={BTNClr}>Go To Safe-Shore</Button>
          </Link>
        </NextLink>
      </Box>
    </VStack>
  );
};

export default FourOFour;
