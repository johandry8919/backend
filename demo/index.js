var characters =  []
 
 function addCharacter (name, age, family) {
    // Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
    // Adicionalmente va a ser necesario guardar el número de familia y no su nombre
    // El número de familia debe empezar desde 1 y no desde 0.
    // Debe retornar el
    // let familyId = 1


    
 
        characters.push(
            {
            quotes: [],
            familyId: 1,
            name,
            age,
            family,
          }
    
          )
          
          for(let i = 1 ; i< characters.length; i++){
            characters[i].familyId++
         }
        
         for(let i = 0; i< characters.length; i++){
             if(characters[i].family === "Flanders"){
                return characters
             }
         }
     

 

    
  
 
       return characters


  }
  addCharacter('Homero', 36, "Simpsons")
  addCharacter('Bart', 10, "Simpsons")
  addCharacter('Homero', 36, "Flanders")
  console.log(characters)
