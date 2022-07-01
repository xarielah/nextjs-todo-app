import { SimpleGrid, Flex } from '@chakra-ui/react'

const GridLayout = ({ children }) => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            {children}
        </SimpleGrid>
    )
}

export default GridLayout