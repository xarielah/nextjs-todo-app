import NoTasks from '../components/notasks'
import DisplayTasks from '../components/displaytasks'
import { Box } from '@chakra-ui/react'

const DisplayData = ({ filteredData }) => {

    return (
        <Box
            boxShadow={'sm'}
            borderRadius={'md'}
            p={{ base: 2, sm: 5, md: 10 }}
            justify="center">

            {filteredData.length === 0
                ?
                <NoTasks />
                :
                <DisplayTasks data={filteredData} />}
        </Box>
    )
}

export default DisplayData