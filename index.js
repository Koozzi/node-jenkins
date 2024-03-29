const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Setup express
const app = express()
app.use(express.json())

// CORS issue
app.use(cors())

// Start server
app.listen(5000, () => {
    console.log('The server has started on port 5000')
});

// Set up mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if(err) throw err;
    console.log("MongoDB connection established!");
})

app.get('/hello', (req, res) => {
    res.send('world!');
});

// Routers
app.use("/users", require("./routes/userRouter"));