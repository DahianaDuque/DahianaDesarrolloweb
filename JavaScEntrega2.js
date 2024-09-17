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

