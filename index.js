const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/data',(req,res)=>{
    res.sendFile(__dirname+'/practice.html')
});
app.post('/login',function(req,res){
    console.log(req.body.username);
    console.log(req.body.password);
    if(req.body.username=='bhagyam'&&req.body.password=='tarun')
    {
        res.redirect('/data');
    }
    else{
        res.redirect('/')
    }

})
app.listen(3000,()=>{console.log('server started')})