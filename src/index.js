const express = require('express');
const {PORT} = require('./config/serverConfig.js')

const setupandStartServer = async () => {
const app = express();
app.listen(PORT,() =>{
    console.log(`The Server has Started on ${PORT}`);

})

}