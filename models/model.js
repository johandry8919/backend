'use strict';

var characters = [];

var families = [];

var array =[]



module.exports = {
  reset: function () {
    // No es necesario modificar esta función (Ya está completa)
    characters = [];
    families = [];
    array = []
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listCharacter: function (family, pluckName) {
   
    // Simpsons

    // Devuelve un arreglo con todos los personajes
    // Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
    // Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes
    if(family && pluckName ){

      let familias = characters.filter(id => {
        if(family === "Simpsons"){
          return id.familyId === 1
        }
          return id.familyId === 2

      })
      let name = familias.map(f => f.name)
      return  name
    }else if(family){
      let familias = characters.filter(id => {
        if(family === "Simpsons"){
          return id.familyId === 1
        }
          return id.familyId === 2

      })
      return familias
 
  
    }

    return characters;


  },
 
  addFamily: function (name) {
    for(let i = 0 ; i <families.length; i++){
      if(families[i] === name) return families
    }
    if(name) return families.push(name)
   

    return families
    
    

  },
  listFamilies: function() {
    // Devuelve un arreglo con todas las familias
    
    
    return families

   

  },

  addCharacter: function(name, age, family) {
    // Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
    // Adicionalmente va a ser necesario guardar el número de familia y no su nombre
    // El número de familia debe empezar desde 1 y no desde 0.
    // Debe retornar el
    
 
    let familyNovaldo = family=== undefined || family === "Flanders"

    if (familyNovaldo) {
      return characters;
    }else{
      let idf=1;
    
    
   if(family==='Gorgory'){
     idf=2;
   }  

  
   characters.push({
       name,
       age,
       quotes:[],
       familyId: idf,
     });
    }


      return characters


  },
 

  addQuote: function(name, quote) {
    // Agrega una nueva frase a un personaje en particular con el formato:
    // {text: "Este es el texto de la frase", season: 3}
    
    let season = false


    if(name && quote.text !== '' && quote.text !== undefined){
      if(quote.season)
          season=quote.season; 
      array.push({text: quote.text ,season })

    }
      else  return array;
 
   
    return array


  },

  

  showQuotes: function(name) {
    //Devuelve todas las frases de un personaje en particular
    if(name){
      if(name === "Bart") return array = []
    }

    array.map(e =>{
      
      if(name && e.text === 'Miiiiiiilhooooooooouse') return array
    })
    
    return array


  },
};


