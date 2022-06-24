import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    Container
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <Box bg='teal.50' p={5}>
            <Container maxW={'container.lg'}>
                <InputGroup>
                    <InputLeftAddon cursor="pointer">
                        <SearchIcon />
                    </InputLeftAddon>
                    <Input bg="white" placeholder="Search in your notes..." />
                </InputGroup>
            </Container>
        </Box>
    )
}

export default Navbar