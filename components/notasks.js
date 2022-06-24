import { VStack, Text, Heading } from '@chakra-ui/react'

const NoTasks = () => {
    return (
        <VStack spacing={2}>
            <Heading size="xl">Sadly...</Heading>
            <Heading size="md">No tasks exist in out database...</Heading>
            <Text>Want to create some?</Text>
        </VStack>
    )
}

export default NoTasks