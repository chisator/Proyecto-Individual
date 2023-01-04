const express = require('express');
const app = express();
const path=require('path')
const port=process.env.PORT || 3000

app.listen(port,()=>console.log('Servidor corriendo en puerto '+ port))

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/index.html')))
app.get('/register',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/register.html')))
app.get('/login',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/login.html')))
