const express=require("express");

const router=express.Router();
var i;
var j;
var x;
var app=express();

var bodyParser=require('body-parser');
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/",function(req,res)
{
    res.render("list",{ni:i,na:j,nh:x});
});

app.get("/submit",function(req,res)
{ 
    res.render("submit");
});

app.post("/",function(req,res)
{
    i=req.body.n;
    j=req.body.m;
    x=req.body.k;
    res.redirect("/");
});
app.listen(3000,function(err)
{
    console.log("Listening on port 3000");
});

