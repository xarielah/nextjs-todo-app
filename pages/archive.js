import axios from 'axios'
import DisplayData from '../components/displaydata'

export async function getServerSideProps(ctx) {
    const host = ctx.req.headers.host
    const res = await axios.get(`http://${host}/api/actions/read`).then(res => res.data)
    return {
        props: { data: res }
    }
}

const Archive = ({ data }) => {
    const filteredData = data.data?.filter((item) => item.completed)

    return <DisplayData filteredData={filteredData} />
}

export default Archive