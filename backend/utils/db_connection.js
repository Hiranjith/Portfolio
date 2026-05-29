import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.error("DB_URI_TYPE:", typeof process.env.MONGO_URI);
        console.error("DB_URI_VALUE:", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
        
    } catch (error) {
        console.error(`ERROR :  ${error.message}`);
        process.exit(1)
    }
}

export default connectDb