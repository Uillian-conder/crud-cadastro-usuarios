import express from 'express';
import userRoutes from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);


app.listen(8800);