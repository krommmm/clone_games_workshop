/*

var numero = 0;

for(var a=0;a<4;a++){
   numero++;


   
   document.querySelector(`.ok${numero}`).addEventListener("click", display`${numero}`);

   function `display${numero}`(){
      console.log("ça marche");

   }
}


------------------
let numeros = 0;
numeros++;

this[`CoolDynamicFunction${numeros}`] = () => { 
  console.log("I'm a cool dynamic function") 
}

CoolDynamicFunction1();

---------------------------------
 let z = 3;

let obj = {}
obj[`test${z}`] = "hello"

console.log(obj.test3);

----------------------------------
NE MARCHE PAS
for(var numero=1;numero<5;numero++){

 
   this[`CoolDynamicFunction${numero}`] = () => { 
      console.log("I'm a cool dynamic function");
    }

}

 CoolDynamicFunction1();
 CoolDynamicFunction2();
 CoolDynamicFunction3();


*/

