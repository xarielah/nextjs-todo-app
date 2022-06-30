import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Container,
  Flex,
  Button,
  Slide,
  useDisclosure,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import ColorModesSwitch from './colormodeswitch';
import { SearchIcon, AddIcon, CloseIcon } from '@chakra-ui/icons';
import NewTaskForm from './createform';
import { useState } from 'react';

const SearchInput = () => (
  <InputGroup>
    <InputLeftAddon cursor="pointer">
      <SearchIcon />
    </InputLeftAddon>
    <Input
      boxShadow={{ base: 'md', md: 'none' }}
      w={{ base: '80%', md: '100%' }}
      bg={useColorModeValue('white', 'gray.800')}
      placeholder="Search in your notes..."
    />
  </InputGroup>
);

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [displaySearch, setDisplaySearch] = useState(false);
  const toggleSearchBar = () => setDisplaySearch(prev => !prev);

  const BTNClr = useColorModeValue('teal', 'purple');
  const bgSearchSlider = useColorModeValue('#CCFFFF44', '#CCAAFF33');
  const bgNav = useColorModeValue('teal.50', 'gray.700');

  return (
    <Box bg={bgNav} py={5} px={{ base: 0, md: 5 }}>
      <Container maxW={'container.lg'}>
        <Flex align="center" justify={'space-between'} flexDirection={{ base: 'row-reverse', md: 'row' }}>
          <Box display={{ base: 'none', md: 'block' }}>
            <SearchInput />
          </Box>

          <Flex gap={3} flexDirection={'row'}>
            <Button p={0} onClick={onToggle} size="sm" ml={3} colorScheme={BTNClr}>
              <AddIcon p={0} color={useColorModeValue('white', 'teal.800')} />
            </Button>

            <ColorModesSwitch />
          </Flex>

          <Slide
            direction="top"
            in={displaySearch}
            style={{
              zIndex: 10,
              padding: '17px',
              top: `${displaySearch ? 80 : 0}`,
              backdropFilter: 'blur(3px)',
              backgroundColor: bgSearchSlider,
            }}>
            <Flex align="center">
              <SearchInput />
              <Button boxShadow={'md'} size="sm" p={0} colorScheme={BTNClr} onClick={toggleSearchBar}>
                <CloseIcon />
              </Button>
            </Flex>
          </Slide>

          <Box display={{ base: 'block', md: 'none' }}>
            <Button size="sm" colorScheme={BTNClr} p={0} onClick={toggleSearchBar}>
              <SearchIcon />
            </Button>
          </Box>
        </Flex>

        <Slide direction="bottom" color="teal.200" in={isOpen} style={{ zIndex: 10 }}>
          <NewTaskForm onClose={onClose} />
        </Slide>
      </Container>
    </Box>
  );
};

export default Navbar;
