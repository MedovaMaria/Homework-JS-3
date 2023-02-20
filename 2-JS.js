let person = {
    name: "Maria",
    age: 19,
    height: "158 cm",
    eyeColor: "blue"
}
 
 function isObjHas (string, object) {
    if (string in object) {
        return true
    }
    else {
        return false
    }

 }
 console.log(isObjHas ('name', person));
