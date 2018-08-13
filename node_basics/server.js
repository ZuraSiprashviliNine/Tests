
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';

let app = express();

app.use(morgan());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.route('/', (req, res) => {
    res.end('x');
});

app.listen(config.port, config.host, () => {
    console.log(`app is listening at port: ${config.port}, and host: ${config.host}`);
});