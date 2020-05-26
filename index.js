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

console.log('\n')

for(let i=0;i<10;i++) {
    for (let j = 0; j < 10; j++) {
        linea += "*";
    }
    console.log(linea);
    linea = "";
}
