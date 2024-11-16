import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import serverInfoRoutes from './routes/serverInfoRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/serverinfo', serverInfoRoutes);

dotenv.config();


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;


app.listen(PORT, async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`server is running at PORT: ${PORT} and database is connected successfully`);
    }
    catch (err) {
        console.log(err)
        console.log('database not connected');
    }
})
