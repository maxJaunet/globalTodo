import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postItRoutes from './routes/postItRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const CONNECTION_URL = process.env.MONGO_URL;


const app = express();

app.use(express.json({ limit: '25mb', extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/postIt', postItRoutes);
app.use('/category', categoryRoutes);


// ====================================================
// Database connection
// ====================================================

const PORT = process.env.PORT || 5000;


// Connection to DB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

