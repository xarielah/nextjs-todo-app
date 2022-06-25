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
    useColorModeValue
} from '@chakra-ui/react'
import ColorModesSwitch from './colormodeswitch'
import { SearchIcon, AddIcon } from '@chakra-ui/icons'
import NewTaskForm from './createform'

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()

    const bgNav = useColorModeValue('teal.50', 'gray.700')

    return (
        <Box bg={bgNav} p={5}>
            <Container maxW={'container.lg'}>

                <Flex align="center">

                    <InputGroup>
                        <InputLeftAddon cursor="pointer">
                            <SearchIcon />
                        </InputLeftAddon>
                        <Input bg={useColorModeValue('white', 'gray.800')} placeholder="Search in your notes..." />
                    </InputGroup>

                    <Box>
                        <Button p={0} onClick={onToggle} size="sm" ml={3} colorScheme={'teal'}>
                            <AddIcon p={0} color="white" />
                        </Button>
                    </Box>
                    <Box mx={2}>
                        <ColorModesSwitch />
                    </Box>

                </Flex>

                <Slide direction='bottom' color="teal.200" in={isOpen} style={{ zIndex: 10 }}>
                    <NewTaskForm />
                </Slide>

            </Container>
        </Box>
    )
}

export default Navbar