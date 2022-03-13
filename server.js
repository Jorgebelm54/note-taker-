
const express = require('express');

//route modules
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

//server 
const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.urlencoded({ extended:true }));

app.use(express.json());


app.use(express.static('public'));

//use api router
app.use('/api', apiRoutes);

//html router
app.use('/', htmlRoutes);

app.listen (PORT, function(err) {
    if (err) console.log('server setup error')
    console.log("Server listening on port", PORT);
});