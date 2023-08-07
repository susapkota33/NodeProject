const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/multiply',(req,res)=>{
    var a= req.query.a;
    var b= req.query.b;
    var c = parseInt(a)*parseInt(b);
    if(isNaN(b||a)){
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

app.get('/number', (req, res) => {
    let number=[]
    for(i=0;i<5;i++){
        number[i]=Math.floor(Math.random()*10)+1;
    }

    res.send(`The Five Random Numbers are ${number}`);
 });



 module.exports.handler = serverless(app);

//const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running at port ${PORT}`));


