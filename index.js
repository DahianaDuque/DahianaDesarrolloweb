 // 10 Variables let 
 
 let Nombre = "Maria";
 let Peso = 58;
 let Edad = "23";
 let Ciudad = "Barranquilla";
 let Colorfavorito = "Rosa";
 let MateriaFavorita = "Ingles";
 let CancionFavorita = "Nosensen-Sabrina";
 let Numerodehermanos= "3";
 let Altura = 1.64;
 let ComidaFavorita = "Sushi";
 
 // 5 Variables const

const DiaSemana= 7;
const Meses= 12;
const HorasDia= 24;
const MinutosHora= 60;
const SegundosMinuto= 60;

//Operaciones con las variables

let MasaCorporal = Peso/(Altura*Altura)
console.log("El Imc de " + Nombre+" es " + MasaCorporal)

let Diasvividos = Edad * (365 * Meses /12)
console.log(Nombre+" Ha vivido "+Diasvividos+ "dias")

let minutosmes = 30*HorasDia*MinutosHora
console.log ("Un mes tiene "+ minutosmes +" minutos")

let segudosemanas = DiaSemana*HorasDia*MinutosHora*SegundosMinuto
console.log ("Hay"+ segudosemanas + "Segundos por semanas")


//Operador  Ternario
 
let Mayoredad = Edad>= 18 ? "Es mayor de edad": "No es mayor de edad";
console.log("La persona "+ Nombre + "es :" +Mayoredad )

let Esfan = CancionFavorita === "Nosense-Sabrina" ? "Es su cancion favorita": "No es su cancion favorita"
console.log(Nombre+"tiene de cancion favorita"+Esfan)

let Tienehermanos= Numerodehermanos >= 2 ? "Tiene varios hermanos ": "Tiene uno o ningun hermano"
console.log(Nombre+"Tiene "+Tienehermanos)

let comidafav = ComidaFavorita === "sushi"? "Si es su comida favorita":"No es su comida favorita"
console.log("la comida favorita de : "+Nombre +" es "+ comidafav)

let colorfav = Colorfavorito === "Rosa" ? "Si su color favorito es rosa": "No , su color favorito no es el rosa "
console.log ("El color favorito de :" +Nombre+ "es :"+colorfav+)