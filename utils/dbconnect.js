import mongoose from "mongoose";

const ConnectDB = async () => mongoose.connect(process.env.DB_HOST)
    .then(() => console.log('Database connection establishd...'))
    .catch((e) => console.log('Bad Database connection attempt: ', e))

export default ConnectDB