import NoTasks from '../components/notasks'
import DisplayTasks from '../components/displaytasks'
import axios from 'axios'
import { Box } from '@chakra-ui/react'

export async function getServerSideProps(ctx) {
    const host = ctx.req.headers.host
    const res = await axios.get(`http://${host}/api/actions/read`).then(res => res.data)
    return {
        props: { data: res }
    }
}

const Archive = ({ data }) => {
    const filteredData = data.data?.filter((item) => item.completed)

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

export default Archive