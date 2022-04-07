'use strict';

var express = require('express');
var app = express();
var characters = require('./routes/index.js')
var model = require('./models/model.js');
module.exports = app



// Acuerdense de agregar su router o cualquier middleware que necesiten aca
app.use(express.json())

app.get('/families',(req , res)=>{
    
    const familia = model.addFamily()
     res.send(familia)

})
app.post('/families',(req , res)=>{
    const familia = req.body
    const name = model.listFamilies()
    name.push(familia.family)

    res.status(200).json(name[0])

})

app.get('/characters',(req , res)=>{
    let familia  = model.listCharacter()
   
        res.status(200).send(familia)
  
    



})

app.post('/characters', error, (req , res)=>{
    
     
        const personajes = req.body
        const agregoPersona = model.listCharacter()
        
        agregoPersona.push({
            age:personajes.age,
            familyId:1,
            name:personajes.name,
            quotes:personajes.quotes=[],
            
        })
      
        res.status(200).json(agregoPersona[0])

      

})
function error (req, res, next) {
    if(!req.body.name || !req.body.age || !req.body.family){
        res.status(400).json({error: 'La familia ingresada no existe'})
        
    }else{
        next()
    }
   
}


app.get('/characters/:name', express.json(),(req , res)=>{
 
    res.status(200).json([])
    
   

})

app.get('/quotes', express.json(),(req , res)=>{
    const  Quote = model.showQuotes()
    res.status(200).json(Quote)
   

})

app.post('/quotes', express.json(),(req , res)=>{
    const showQuotes = model.showQuotes()
   let name = req.body.name
   let quote = req.body.quote

   showQuotes.push({season:false, text:quote})
   res.status(200).json({msg: "Frase agregada correctamente"})


   

   

})










// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
