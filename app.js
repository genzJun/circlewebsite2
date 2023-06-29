const express = require('express');
const app = express();
const port=3000;
app.set('view engine', 'ejs');



app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/bulletin_board.ejs",(req,res)=>{
    res.render("bulletin_board.ejs");
});

app.get("/boardadd.ejs",(req,res)=>{
    res.render("boardadd.ejs");
});



app.listen(port,()=>{
    console.log("server started on port 3000");
});
