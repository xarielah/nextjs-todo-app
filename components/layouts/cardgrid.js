import { SimpleGrid } from '@chakra-ui/react'

const GridLayout = ({ children }) => {
    return (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>

            {children}
        </SimpleGrid>
    )
}
{/* </SimpleGrid> */ }
{/* <SimpleGrid column={[4, null, 1]} spacing={10}> */ }

export default GridLayout