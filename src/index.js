const express = require("express");
const path = require('path');
const fileRoute = require('../routes/file.route.js');
const port = process.env.PORT || 5000
const app = express();

const viewsPath = path.join(__dirname, "./templates/views")
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use("/api/localfile", fileRoute);

app.use("",(req,res)=>{
    res.send("API Page !!")
})
 

app.listen(port, () => {
    console.log("Server is in play!! ", port)
})