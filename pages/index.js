import axios from 'axios';
import DisplayData from '../components/displaydata';

export async function getServerSideProps(ctx) {
  const url = process.env.PROD ? process.env.PROD : process.env.LOCAL;
  const res = await axios.get(`${url}/api/actions/read`).then(res => res.data);
  return {
    props: { data: res },
  };
}

const Home = ({ data }) => {
  const filteredData = data.data?.filter(item => !item.completed);

  return <DisplayData filteredData={filteredData} />;
};

export default Home;
