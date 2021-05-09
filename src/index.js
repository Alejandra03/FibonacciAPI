const express = require('express');
const app = express();

const morgan = require('morgan');

app.set('port', 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/fibonacci', require('./routes/fibonacci'));

app.listen(app.get('port'), () => {
    console.log(`Server on port  ${app.get('port')}`);
});
