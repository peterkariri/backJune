const express=require("express")
const app=express()
const PORT=3000

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("hello this is the response")
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