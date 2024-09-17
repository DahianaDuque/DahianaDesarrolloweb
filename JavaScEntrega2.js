const numeros = [6,7,8,9,10]
const nombres = ["Maria","Juana","Jorge","Javier"]
const edades = [19,22,45,28]
const precios = [150,230,100,200,500]

//.Reduce
const sumanumeros = numeros.reduce((acumu,num) => acumu + num,0)
console.log(sumanumeros)

const preciototal = precios.reduce((acumu, precio)=> acumu + precio,0)
console.log(preciototal)

//.Filter
const numerofiltr = numeros.filter(num => num > 9)
console.log(numerofiltr)

const nombresfiltr = nombres.filter(nombres => nombres.length > 7)
console.log(nombresfiltr)

//.Map
const nummultipli = numeros.map(num => num* 7)
console.log(nummultipli)

const preciosfor = precios.map(precio => `$${precio}`)
console.log(preciosfor)

//.ForEach
nombres.forEach(nombres => console.log(nombres))

edades.forEach((edad, index, arr) => arr[index] = edad + 1);
console.log(edades);

//Funciones flecha

//Funcion con 0 parametros 
const saludo = () => "Hola!"
console.log(saludo())

//Funcion con 1 parametros
const numerocuadrado = num => num* num
console.log(cuadrado(6))

//Funcion con 2 parametros
const sum = (a,b,c) => a+b
console.log(sum(6,7))

//Funcion con mas de 2 parametros
 const message = (nombre,edad,color) => `${nombre},tiene ${edad} de edad y su color favorito es el ${color} `
 console.log(message("Biatriz","33","Azul"))

 //Funcion con valor por defecto

 const multi = (a,b =2) => a*b
 console.log(multi(5))