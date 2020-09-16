
import routes from '../routes/ticketsRoutes';
import mongoose from 'mongoose';

require('../routes/ticketsRoutes')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3000;
const dbUrl = 'mongodb+srv://admin:nimda@cluster0.hhtsq.mongodb.net/angulardb';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        console.log('mongo db connection', err);
})

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


app.listen(PORT, () => console.log('App running on port', PORT));



