const express = require('express');
const app = express();
const { route } = require('./routes/wishlistroutes');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require("cors");
 const ConnectDB = require('./config/db');
 ConnectDB()

app.use(express.urlencoded({ extended: false }));

 const errorHandler = require('./middelware/errormiddelwaer')
app.use(cors())
// app.get("/getdataa",(req,res)=>{
//     res.json("Hello sarif....")
// })
 app.use('/api/addtocard', require('./routes/addtocartroutes'));
 app.use('/api/wishlish',require('./routes/wishlistroutes'));
 app.use('/api/signup', require('./routes/sginuproutes'));
 app.use('/api/address', require('./routes/addressroutes'));
app.use('/api/data',require('./routes/dataroutes'))
app.listen(port, () => {
    console.log(`port is colled ${port}`);
});