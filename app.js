let express = require ("express");
let app = express();
// this code is used to serve assets
app.use(express.static("public"))
// code to set files as ejs (so they dont need to be named later)
app.set("view engine", "ejs")

//route 
app.get("/", function(req, res){
    res.locals.title='Aries Insight'
    res.render("index",)
})
app.get("/Benefits", function(req, res){
    res.locals.title='Benefits'
    res.render("benefits",)
})

app.get("/endorsements", function(req,res){
    res.locals.title='Endorsements'
    res.render("endorsements")
})
app.get("/features", function(req,res){
    res.locals.title='features'
    res.render("features")
})
app.get("/news", function(req,res){
    res.locals.title='News'
    res.render("news")
})
app.get("/videos", function(req,res){
    res.locals.title='Videos'
    res.render("videos")
})
//catch all route: 
app.get("*", function(req, res){
    res.send("You seem to be in the wrong place!")
})

// need a listen to actually listen for http requests
app.listen( function(){
    console.log("server is running on port 5000")
})