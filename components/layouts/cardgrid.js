import { SimpleGrid } from '@chakra-ui/react'

const GridLayout = ({ children }) => {
    return (
        <SimpleGrid column={5} spacing={10}>
            {children}
        </SimpleGrid>
    )
}

export default GridLayout