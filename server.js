const express=require("express")
const app=express()
const path=require("path")
const PORT=3000

app.set("view engine","ejs") //used to set the view eninge to expressejs

//configuring the express to serve/render public files 

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/login",(req,res)=>{
 res.render("login")
})
app.get("/sign",(req,res)=>{
     res.render("signup")

})
app.get("/dashboard",(req,res)=>{
     res.render("dashboard")

})
app.listen(PORT,()=>{
 console.log(`the port is active on ${PORT}`)
})