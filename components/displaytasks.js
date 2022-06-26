import CardGridDisplay from './layouts/cardgrid'
import Card from './card'
import { Box, useDisclosure } from '@chakra-ui/react'
import DeletionAlert from './deletionalert'
import { useState } from 'react'

const DisplayTasks = ({ data: { data } }) => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    const [delData, setDelData] = useState({})

    const pinned = data.filter((item) => item.pinned)
    const notPinned = data.filter((item) => !item.pinned)

    return (
        <Box>
            {isOpen && <DeletionAlert data={delData} isOpen={isOpen} onClose={onClose} />}
            <CardGridDisplay>
                {pinned.sort((a, b) => parseInt(b.urgency) - parseInt(a.urgency)).map((card, index) => (
                    <Card key={index} delTaskDialog={(data) => { onToggle(); setDelData(data) }} data={card} />
                ))}
                {notPinned.map((card, index) => (
                    <Card key={index} delTaskDialog={(data) => { onToggle(); setDelData(data) }} data={card} />
                ))}
            </CardGridDisplay>
        </Box>
    )
}

export default DisplayTasks