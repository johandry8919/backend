'use strict';

var express = require('express');
var app = express();
var characters = require('./routes/index.js')
var model = require('./models/model.js');
module.exports = app



// Acuerdense de agregar su router o cualquier middleware que necesiten aca


app.get('/families', express.json(),(req , res)=>{
    
    const familia = model.addFamily()
      res.status(200).send(familia)

})
app.post('/families', express.json(),(req , res)=>{
    const familia = req.body
    const name = model.listFamilies()
    name.push(familia.family)
    for(let i = 0; i < name.length; i++){
       
        res.json(name[i])
    }

})

app.get('/characters', express.json(),(req , res)=>{
    const chareter = model.addCharacter()
    if(chareter) return  res.status(200).json(chareter)
        
    
    
    
   

})
app.post('/characters', express.json(),(req , res)=>{

        
        
        let familyId = 1
        let personajes = req.body
        let agregoPersona = model.listCharacter()
        agregoPersona.push({
            age:personajes.age,
            familyId:familyId++,
            name:personajes.name,
            quotes:personajes.quotes=[],
            
        })

        for(let i = 0 ; i< agregoPersona.length; i++){
            if(req.body.family) return res.status(200).json(agregoPersona[i])
                else res.status(400).json({msg: 'La familia ingresada no existe'})

                
            
        }

})

app.get('/characters/:name', express.json(),(req , res)=>{
    const  chareter = model.addCharacter()
    res.status(200).json(chareter)
   

})

app.get('/quotes', express.json(),(req , res)=>{
    const  Quote = model.showQuotes()
    res.status(200).json(Quote)
   

})

app.post('/quotes', express.json(),(req , res)=>{
    const showQuotes = model.showQuotes()
   let name = req.body.name
   let quote = req.body.quote
   console.log(showQuotes)

   showQuotes.push({season:quote, text:name})
   res.status(200).json({msg: "Frase agregada correctamente"})


   

   

})








// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
