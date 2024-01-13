const http = require("http");
const express = require('express');
//const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//app.use(bodyParser.urlencoded(extended: false));
app.use(express.urlencoded({extended: true}));
//app.use(express.json());
app.use(adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);