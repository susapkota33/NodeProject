const express = require('express');
const app = express();

app.get('/multiply',(req,res)=>{
    var a= req.query.a;
    var b= req.query.b;
    var c = parseInt(a)*parseInt(b);
    if(isNaN(b)){
        res.send("Error: b value is not a number");
    }
    else{
        res.send({c});
    }
});
app.get('/add',(req,res)=>{
    var a= req.query.a;
    var b= req.query.b;
    var c = parseInt(a)+parseInt(b);
    if(c>1000){
        res.send("Error: Number is greater than 1000");
    }
    else{
        res.send({c});
    }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));


