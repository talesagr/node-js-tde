require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/user/userRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING

if (!MONGO_DB_CONNECTION_STRING) {
    console.error('Variável de ambiente MONGO_DB_CONNECTION_STRING não definida.');
    process.exit(1);
}

mongoose.connect(MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.log(err));
