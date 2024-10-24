// * Dada la siguiente problemática: ¿puede un número X formarse
// * usando la suma de 2 elementos de un array?
// ! Ejemplo 1
// ? Input: nums = [1,4,3,9], requiredSum = 8
// ? Output: False
// ! Ejemplo 2
// ? Input: nums = [1,2,4,4], requiredSum = 8
// ? Output: True

// ! Desarrolle (en pseudo código o su lenguaje de preferencia):
// ? 1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
// ? programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
// ? importante es realizar el desarrollo en el menor tiempo posible.

// El algorito a implementar es una busqueda de pares, donde se compara cada elemento del array con el siguiente.
// Esta función tiene una complejidad de O(n^2), por lo que es muy ineficiente para arrays de grandes tamaños, pero es perfecto para ejemplos de este tipo, además es facil y rápido de implementar.
function sumaDeDosElementos(nums: number[], requiredSum: number): boolean {
	// Primero comenzamos el primer bucle, y guardamos el primer elemento[0] del array para luego hacer la suma en otro bucle.
	for (let i = 0; i < nums.length; i++) {
		let primerElemento = nums[i];
		// En este punto, ya guardamos el primer elemento y ahora comenzamos el segundo bulce para poder comparar las sumas
		for (let j = 0; j < nums.length; j++) {
			// Se guarada el segundo elemento que sera el dinámico en el bucle, el cual comparará la suma con el primer elemento guaradado
			let segundoElemento = nums[j];
			// Ahora hacemos la suma y comparamos si es igual al requerido, además se verifica que los indicies no sean iguales, es decir que no se sume el número(en el mismo indice) a si mismo.
			if (primerElemento + segundoElemento === requiredSum && i !== j) {
				return true;
			}
		}
	}
	// Retorna false en caso de que no se encuentre el resultado buscado
	return false;
}

console.log(sumaDeDosElementos([1, 4, 3, 9], 8));
console.log(sumaDeDosElementos([1, 2, 4, 4], 8));
sumaDeDosElementos([1, 4, 3, 9], 8);
sumaDeDosElementos([1, 2, 4, 4], 8);

// ! Ejemplo 1
// ? Input: nums = [1,4,3,9], requiredSum = 8
// ? Output: False
// ! Ejemplo 2
// ? Input: nums = [1,2,4,4], requiredSum = 8
// ? Output: True

// ? 2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
// ? que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
// * Ante cualquier duda o ambigüedad en el enunciado, es libre de hacer todas las suposiciones
// * necesarias, siempre y cuando las especifique.
// El segundo algoritmo tendra un enfoque en conjunto con una ecuación complementaria, es decir, esto puede llevar a mas tiempo de desarrollo pero la eficiencia es mayor ya que su complejidad algoritmica sera de O(n) al tener una sola iteración.
function sumaDeDosElementos2(nums: number[], requiredSum: number): boolean {
	// Para guardar los elementos ya evaluados, se crea un nuevo objeto Set, con Set se puede guardar elementos únicos y verificar si ya se ha evaluado o no, lo bueno de set son sus funciones para verificar(has) y agregar(add), la velocidad de .has supera al metodo .includes.
	const conjunto = new Set();
	// Se crea el bucle para iterar el array
	for (let i = 0; i < nums.length; i++) {
		// Se calcula el complemento, en este caso num, es lo que le faltaría para poder alcanzar el número requerido, es decir, es el numero que tengo que hayar para que que la cuenta sea correcta
		// Seria algo como "complemento=y-x" donde 'y' seria el número requerido y 'x' el elemento actual de la iteración
		let num = requiredSum - nums[i];
		// Con el metodo has, lo que hacemos es verificar si el complemento existe en el conjunto
		if (conjunto.has(num)) {
			// Esto retornaria true ya que el número que necesito encontrar, es decir, el número complementario para poder llegar al número requerido ya fue visto en el array, por lo que sus sumas deberán devolver el numero requerido
			// nums[i] + num = requiredSum
			// donde:
			// nums[1] es el número actual de la iteración
			// num es el numero complementario, cualculado con la ecuacion "complemento=y-x"=>"num=requiredSum-nums[i]"
			// requiredSum es el número requerido.
			// Para comprobar 👇
			// console.log(nums[i]+num)
			// 👆 esto deberia de devolver el número requerido
			return true;
		}
		// Se guarda el numero en el conjunto para poder ser comparado con el complemento, la clave de la función es esta parte, ya que si el complemento coincide con el número almacenado en el conjunto, entonces se puede llegar al número requerido.
		conjunto.add(nums[i]);
	}
	// Retorna false en caso de que los pares no den el resultado requerido
	return false;
}
console.log(sumaDeDosElementos2([1, 4, 3, 9], 8));
console.log(sumaDeDosElementos2([1, 2, 4, 4], 8));
sumaDeDosElementos2([1, 4, 3, 9], 8);
sumaDeDosElementos2([1, 2, 4, 4], 8);

// ! Ejemplo 1
// ? Input: nums = [1,4,3,9], requiredSum = 8
// ? Output: False
// ! Ejemplo 2
// ? Input: nums = [1,2,4,4], requiredSum = 8
// ? Output: True
