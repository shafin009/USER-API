const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/myRoutes');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.status(400).send('hello world');
})

app.listen(PORT, () => {
    console.log('server is running', PORT);
})