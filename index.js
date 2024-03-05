const express= require("express");
const app=express();

const port=3000;

app.use(express.urlencoded({extended:true}));
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let posts=[
    {
    id:'1a',
    username:'heramb',
    quote:'work',
    },
    {   id:'1b',
        username:'srabhi',
        quote:'work harder',
    },
    {   id:'1c',
        username:'dasu',
        quote:'i love anu',
    }
];

app.get("/",(req,res)=>{
console.log("server working well");
res.send("this page is working!")
});

app.get("/posts",(req,res)=>
{console.log("working");

    res.render("index.ejs",{ posts });

});
app.get("/posts/new",(req,res)=>
{
console.log("posts new working");
res.render("new.ejs");
});
app.post("/posts",(req,res)=>
{
    console.log(req.body);
    let { username,quote }=req.body;
    posts.push({ username,quote });
    res.redirect("/posts");
});
app.listen(port,()=>
{
console.log("server is working");
});

app.get("/posts/:id",(req,res)=>
{
let { id }=req.params;
for(post of posts)
{
    if(post.id==id)
    {
        console.log("the post is found");
        res.send("found bhai!");
        console.log( {post} );
    }
}
console.log("the request is working");
});
