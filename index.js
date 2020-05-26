console.log("Hola Mundo");
console.log("Adios alv");

let linea = "";

for(let i=0;i<10;i++) {
    for (let j = 0; j < i; j++) {
        linea += "*";
    }
    console.log(linea);
    linea = "";
}
