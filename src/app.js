const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');


const app = express();

const limiter= rateLimit({
    max: 100000,
    WindowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in one hour!' 
});

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(hpp());

app.use('api/v1', limiter);

//TODO: excepcionde de rutas no encontradas


//TODO: controlador de errores


module.exports = app;