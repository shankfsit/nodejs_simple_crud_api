require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const rtsIndex = require('./routes/router.index');

const app = express();
const port = 3003;


app.use(bodyParser.json());

app.use('/api', rtsIndex);


app.listen(port, () => {
    console.log(`Server is started at port : ${port}`);
});