const express = require('express');

const setupandStartServer = async () => {
const app = express();
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`The Server has Started on ${PORT}`);

})

}