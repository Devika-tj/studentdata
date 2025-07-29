const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
var data=[{'id':1,'name':'Miya','age':22,'location':"trivandrum"},
    {'id':2,'name':'Liya','age':23,'location':"Kochi"},
        {'id':3,'name':'Meera','age':24,'location':"Alapppuzha"},
]

// Get operation
function studentroutes(nav){
router.get('/',(req,res)=>{
    res.render("home",{
        title:'EJS',
        data,
        nav

    
    })
})
}

// Rendering form page

router.get('/form',(req,res)=>{
    res.render("addstudent",{
        title:'Form',
        nav


    })
})

// Post Operation
router.post('add',(req,res)=>{
   data.push(req,body),
   res.redirect("/basic")
        

})
module.exports=studentroutes