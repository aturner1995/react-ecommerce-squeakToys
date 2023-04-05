import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import stripeRouter from './routes/stripe.js'
import cors from 'cors';
import path from 'path'


dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB")
})
    .catch((err) => {
        console.log(err);
    })

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/stripe', stripeRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})