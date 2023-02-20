let person = {
    name: "Maria",
    age: 19,
    height: "158 cm",
    eyeColor: "blue"
}

console.log(person);

function getValues () {
    for (let key in person) {
		
        if (person.hasOwnProperty(key)) {

           console.log(`Ключ - ${key}: значение - ${person[key]}`); 
       } 
    
   }
   
}
getValues ();