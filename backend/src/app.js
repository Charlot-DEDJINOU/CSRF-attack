const express = require('express');
const app = express();
const cors = require('cors'); // Importez le package CORS
const path = require('path');

const apiRoutes = require('./routes/api');
const routemap = require('express-routemap');
const baseDir = path.resolve(__dirname, '..');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: '*',
    credentials: false
}));

app.use('/api', apiRoutes);
app.use(express.static(path.join(baseDir, 'public')));


routemap(app);

module.exports = app;