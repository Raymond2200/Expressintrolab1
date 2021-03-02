express = require("express")

let app = express();

const attendance = [
    {name: "Horse" , present: true},
    {name: "Cow" , present: false},
    {name: "Bunny" , present: true},
    {name: "Snake" , present: true}]

app.listen(3000, function() {})

app.get("/",function(req,res) {
    res.send("testing")
})

app.get("/home",function(req,res) {
    res.render("testsite.ejs" , {attendance: attendance})
})