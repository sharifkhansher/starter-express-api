const express = require('express');
const app = express();
const { route } = require('./routes/wishlistroutes');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require("cors");
 const ConnectDB = require('./config/db');
 const path = require('path')
 ConnectDB()
 app.use("/uploads/images", express.static(path.join("uploads", "images")))

app.use(express.urlencoded({ extended: false }));

 const errorHandler = require('./middelware/errormiddelwaer');
const fileUpload = require('./utils/fileUpload');
app.use(cors())
// app.get("/getdataa",(req,res)=>{
//     res.json("Hello sarif....")
// })
 app.use('/api/addtocard', require('./routes/addtocartroutes'));
 app.use('/api/wishlish',require('./routes/wishlistroutes'));
 app.use('/api/shopeen', require('./routes/sginuproutes'));
 app.use('/api/address', require('./routes/addressroutes'));
app.use('/api/data',require('./routes/dataroutes'))
app.use('/api/intiles',require('./routes/intilesroutes'))

console.log("hii sharif khan sherani");



app.listen(port, () => {
    console.log(`port is colled ${port}`);
});

app.get('/ab',(req,res)=>{
    res.send("hellooo sharif")
})
    
    app.post("/create",
    fileUpload("profile").array("photo", 5),

    (req, res) => {
        console.log("====dddd.body==>>", req.body);
        console.log("------->>>", req.files);
        res.json({ message: "image added...", image: `http://localhost:5000/uploads/images/profile/${req.files[0].filename}` })
    }
);



