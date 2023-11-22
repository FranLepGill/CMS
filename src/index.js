const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/', require('./routes/Main'));
app.use('/api/game', require('./routes/game'));

app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!');
});
