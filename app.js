const express=require('express')
const app=express()
const port=5000

app.set('view engine','ejs')
const path=require('path');
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))
const navbar=[{link:"/basic",name:'Home'},
    {link:'/basicform',name:'Add Student'}
]


const basicroutes=require('navbar/basicroutes')(navbar);
app.use('/basic',basicroutes);
app.listen(port,()=>{
    console.log(`server is running at ${port} `)
})