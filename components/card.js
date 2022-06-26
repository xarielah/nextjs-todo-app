import {
    Box,
    Text,
    Heading,
    Divider,
    useColorModeValue,
    Progress,
    Flex,
    Badge,
    HStack
} from '@chakra-ui/react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
// import { useRef } from 'react'


const Card = ({ data, delTaskDialog }) => {
    // const [delAlert, setDelAlert] = useState(false)
    const cardBg = useColorModeValue('gray.50', 'gray.700')

    const creationDate = new Date(data.createdAt)
    const fixDate = (n) => n > 9 ? n : '0' + n

    // const progressColor = (n) => {
    //     switch (n) {
    //         case n > 7:
    //             return 'pink.400'
    //         case n > 5:
    //             return 'orange.400'
    //         default:
    //             return 'teal.400'
    //     }
    // }

    const displayDate = `${fixDate(creationDate.getUTCDate() + 1)}/${fixDate(creationDate.getUTCMonth() + 1)}/${creationDate.getUTCFullYear()}`
    const displayHour = `${fixDate((creationDate.getUTCHours() + 3) === 24 ? 0 : creationDate.getUTCHours() + 3)}:${fixDate(creationDate.getUTCMinutes())}`

    return (
        <Box
            bg={cardBg}
            maxW="300px"
            maxH="300px"
            boxShadow={'md'}
            borderTop={`10px solid ${data.color === '#FFFFFF' ? '#CCC' : data.color}`}
            borderRadius={'md'}>

            {data.pinned ? <Box mx={3} mt={3}>
                <Flex align="center" justify={'space-between'}>
                    <HStack>
                        <StarIcon />
                        <Text>Pinned</Text>
                    </HStack>

                    <DeleteIcon
                        cursor={'pointer'}
                        _hover={{ color: 'red' }}
                        onClick={() => delTaskDialog(data)} />

                </Flex>
            </Box>
                :
                <Box mx={3} mt={3} className="task-options">
                    <Flex align="center" justify={'flex-end'}>

                        <DeleteIcon
                            cursor={'pointer'}
                            _hover={{ color: 'red' }}
                            onClick={() => delTaskDialog(data)} />

                    </Flex>
                </Box>}

            <Box px={5} pb={5}>

                <Box my={4}>
                    <Box>
                        <Heading size="md">{data.title} <Badge>{data.cat}</Badge></Heading>
                        <Text as="sub">Created at {displayDate} {displayHour}</Text>
                    </Box>

                    <Divider my={2} />

                    <Text>{data.desc}</Text>
                </Box>
                <Box>
                    <Text as="sub">Level of urgency:</Text>
                    <Progress mt={1} value={parseInt(data.urgency) !== 0 ? parseInt(data.urgency) : 1} size='sm' borderRadius={'md'} max={10} colorScheme={'teal'} />
                </Box>
            </Box>
        </Box >
    )
}

export default Card