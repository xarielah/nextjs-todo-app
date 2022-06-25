import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    Container,
    Flex,
    Button,
    Link
} from '@chakra-ui/react'
import { SearchIcon, AddIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Navbar = () => {
    return (
        <Box bg='teal.50' p={5}>
            <Container maxW={'container.lg'}>

                <Flex align="center">

                    <InputGroup>
                        <InputLeftAddon cursor="pointer">
                            <SearchIcon />
                        </InputLeftAddon>
                        <Input bg="white" placeholder="Search in your notes..." />
                    </InputGroup>

                    <Box>
                        <NextLink href="/create">
                            <Link>
                                <Button p={0} size="sm" ml={3} colorScheme={'teal'}>
                                    <AddIcon p={0} color="white" />
                                </Button>
                            </Link>
                        </NextLink>
                    </Box>

                </Flex>

            </Container>
        </Box>
    )
}

export default Navbar