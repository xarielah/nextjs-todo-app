import NoTasks from '../components/notasks'
import axios from 'axios'
import { Box } from '@chakra-ui/react'

export async function getServerSideProps(ctx) {
  const host = ctx.req.headers.host
  const res = await axios.get(`http://${host}/api/actions/read`).then(res => res.data)
  return {
    props: { data: res }
  }
}

const Home = ({ data }) => {

  return (
    <Box
      boxShadow={'sm'}
      borderRadius={'md'}
      p={10}>
      {data.count === 0
        ?
        <NoTasks />
        : <>
          שדג
        </>}
    </Box>
  )
}

export default Home