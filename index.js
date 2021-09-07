const express = require('express');
require('dotenv').config()

const app = express();

app.use('/api/v1/number/', require('./routes/numberRoutes'));

app.listen(process.env.PORT, function() {
    console.log('Server start!',
        `Example app listening on port ${process.env.PORT}!`);
});