import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const app = express();

app.use(express.json())

const mongoURI = 'mongodb://127.0.0.1:27017/mern-auth?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.0'

mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB!'))
.catch((err) => console.log('Failed to connect : ', err.message));


app.listen(3000, () => {
    console.log('Sever is listening to port 3000')
})




app.use("/backend/user", userRoutes);
app.use("/backend/auth", authRoutes);