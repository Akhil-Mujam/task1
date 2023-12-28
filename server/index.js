const express= require('express')
const app = express()
const model = require('./Database/Model')
const bodyParser = require('body-parser');
app.use(express.json())
const path =require('path')
require('./Database/Connect')
app.use(bodyParser.urlencoded({ extended: true }));
const static_path = path.join(__dirname,'./public/index.html')
app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.send('welcom')
  });

app.post('/register',async(req,res) =>{


    const {name,email,password,cpassword} = req.body;
    if(password.length>=8 && password == cpassword)
    {
            const user = new model({
            name:name,
            email:email,
            password:password,
            cpassword:cpassword
        })

       const data =  await user.save();

        return res.send("Registration is successfull"+data)
    }
    else{
        return res.send("password error")
    }
})

const port = 5500
app.listen(port,()=>{
    console.log('port is running')
})