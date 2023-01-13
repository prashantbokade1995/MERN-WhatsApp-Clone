import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const DBconnection = async () => {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@chatapp.xzb7so3.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(url);
        console.log('Database connected');
    } catch (error) {
        console.log("something error to connect with database", error);
    }
}
export default DBconnection;