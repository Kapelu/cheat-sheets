// Variables primitivas

// Crea una variable de tipo string.
const nuevoString = 'Daniel'

// Crea una variable de tipo number.
const nuevoNumero = 159

// Crea una variable de tipo boolean.
const nuevoBoolean = true

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - 7 === 3

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * 4 === 40

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === 1

// Funciones

// Debe retornar un string.
function devolverString(string) {
	// Tu código:
	return string
}

// ⛔️ "X" e "Y" son números.

// Retorna el resultado de su suma.
function suma(x, y) {
	// Tu código:
	return x + y
}

// Retorna el resultado de la resta.
function resta(x, y) {
	// Tu código:
	return x - y
}

// Retorna el resultado de su división.
function divide(x, y) {
	// Tu código:
	return x / y
}

// Retorna el resultado de su multiplicación.
function multiplica(x, y) {
	// Tu código:
	return x * y
}

// Obten el resto de la división de "x" entre "y".
function obtenerResto(x, y) {
	// Tu código:
	return x % y
}

function sonIguales(x, y) {
	// Retorna True si "x" e "y" son iguales.
	// De lo contrario, retorna False.
	// Tu código:
	return x === y ? true : false
}

// Retorna True si los dos strings tienen la misma longitud. De lo contrario, retorna False.
function tienenMismaLongitud(str1, str2) {
	// Tu código:
	return str1.length === str2.length ? true : false
}

// Retorna True si el argumento "num" es menor que noventa. De lo contrario, retorna False.
function menosQueNoventa(num) {
	// Tu código:
	return num < 90 ? true : false
}

// Retorna True si el argumento "num" es mayor que cincuenta. De lo contrario, retorna False.
function mayorQueCincuenta(num) {
	// Tu código:
	return num > 50 ? true : false
}

// Retorna True si "num" es par. De lo contrario, retorna False.
function esPar(num) {
	// Tu código:
	return num % 2 === 0 ? true : false
}

// Retorna True si "num" es impar. De lo contrario, retorna False.
function esImpar(num) {
	// Tu código:
	return num % 2 !== 0 ? true : false
}

// Retorna el valor de "num" elevado al cuadrado.
function elevarAlCuadrado(num) {
  // Tu código:
  return num **2
}

// Retorna el valor de "num" elevado al cubo.
function elevarAlCubo(num) {
  // Tu código:
  return num ** 3
}

// Retorna el valor de "num" elevado al exponente "exponent".
function elevar(num, exponent) {
  // Tu código:
  return num ** exponent
}

// Redondea "num" al entero más próximo y retórnalo.
function redondearNumero(num) {
  // Tu código:
  return Math.round(num)
}

// Redondea "num" hacia arriba y retórnalo.
function redondearHaciaArriba(num) {
  // Tu código:
  return Math.ceil(num)
}

// Genera un número al azar entre 0 y 1 y retórnalo.
function numeroRandom() {
  // Tu código:
  return Math.random()
}

// La función recibe un entero. Devuelve como resultado un string que indica si el número
// es positivo o negativo.
// Si el número es positivo ---> "Es positivo".
// Si el número es negativo ---> "Es negativo".
// Si el número es 0, devuelve False.
function esPositivo(num) {
// Tu código:
	return num > 0 ? 'Es positivo' : num < 0 ? 'Es negativo' : false
}

// Agrega un símbolo de exclamación al final del string "str" y retórnalo
// Ejemplo: "hello world" ---> "hello world!"
function agregarSimboloExclamacion(str) {
	// Tu código:
	return str + '!'
}

// Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
// Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
function combinarNombres(nombre, apellido) {
	// Tu código:
	return nombre + ' ' + apellido
}

// Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
// Ejemplo: "Martin" ---> "Hola Martin!"
function obtenerSaludo(nombre) {
	// Tu código:
	return 'Hola ' + nombre + '!'
}

// Retornar el área de un rectángulo teniendo su altura y ancho.
function obtenerAreaRectangulo(alto, ancho) {
	// Tu código:
	return alto * ancho
}

// La función recibe como argumento la medida de un lado de un rectángulo.
// Debes retornar su perímetro.
function retornarPerimetro(lado) {
	// Tu código:
	return lado * 4
}

// Calcula el área de un triángulo y retorna el resultado.
function areaDelTriangulo(base, altura) {
	// Tu código:
	return (base * altura) / 2
}

// Supongamos que 1 euro equivale a 1.20 dólares.
// Debes calcular el valor recibido como argumento pasándolo a dolares.
function deEuroAdolar(euro) {
	// Tu código:
	return euro * 1.20
}

// Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
// Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
// Si no es vocal, tambien debe retornar "Dato incorrecto".
function esVocal(letra) {
	// Tu código:
	return letra.length > 1 ? 'Dato incorrecto' : 'aeiou'.includes(letra) ? 'Es vocal' : 'Dato incorrecto'
}

module.exports = {
	nuevoString,
	nuevoNumero,
	nuevoBoolean,
	nuevaResta,
	nuevaMultiplicacion,
	nuevoModulo,
	devolverString,
	suma,
	resta,
	divide,
	multiplica,
	obtenerResto,
	tienenMismaLongitud,
	sonIguales,
	menosQueNoventa,
	mayorQueCincuenta,
	esPar,
	esImpar,
	elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
	numeroRandom,
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
}
