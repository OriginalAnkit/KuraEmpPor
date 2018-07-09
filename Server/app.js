var express = require("express");
var cors = require("cors");
var app = express();

var emp = require("./emp.model");
mongoose = require("mongoose");

var bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/empPor");

app.post("/_addEmp", (req, res) => {
  console.log(req.body);
  emp.create(req.body, (err, emp) => {
    if (err) {
      console.log(err);
      res.json("{err:err}")
    } else {
      //   console.log(emp);
      res.json(emp);
    }
  })

})

app.get("/_getAllEmp",(req,res)=>{
  console.log("getting");
  emp.find({},(err,emps)=>{
    if(err){
      console.log(err);
      res.json("{error:error}");
    }else{
      console.log("++++++++++++",emps);
      res.json(emps);
      // res.json({error:"error"});

    }
  })
})


app.get("/_oneEmp/:id",(req,res)=>{
  emp.findById(req.params.id, function (err, car) {
    if (err) {
        console.log(err);
      res.json("{error:error}");
    } else {
        res.json(car)
    }
})
})



app.listen(3000, () => {
  console.log("listening at 3000");
})
