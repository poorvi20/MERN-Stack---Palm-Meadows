const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const path = require("path")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const guestsRouter = require('./routes/guests');
const bookingsRouter = require('./routes/bookings');
const roomslistRouter = require('./routes/roomslist');
const availableRoomsRouter = require('./routes/availableRooms');

app.use('/guests', guestsRouter);
app.use('/bookings', bookingsRouter);
app.use('/roomslist', roomslistRouter);
app.use('/availableRooms', availableRoomsRouter);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('Server is running on port: 5000');

});