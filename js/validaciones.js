//  Validar nombre 

/**
 * Verificar que lo que se está introduciendo es un String.
 * Verificar que todo lo q hay en el String son solo letras (ni números. ni carácteres especiales).
 */

/** 
*Función para validar un texto.
*@param {string} nombre 
*@retun {boolean} boolean true or false.
*/
function validarNombre(nombre) {
    const name = nombre.trim();
    //console.log("sin limpiar: ", nombre, " y limpio: ", name)
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    //if(!pattern.test(input.value))
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("entro en el if")

        return false
    } else {
        return true
    }

}

console.log(validarNombre(" Maria Jose "))
console.log(validarNombre("    "))
console.log(validarNombre(" m3ra   i9olp "))

//  Validar email
function validarEmail(email) {
    const correo = email.trim(); //con trim elimina los espacios sonramtes delante y detras.
    //console.log("sin limpiar: ", correo, " y limpio: ", correo)
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (typeof correo !== 'string' || correo === "" || !pattern.test(correo)) {
        console.log("entro en el if")

        return false
    } else {
        return true
    }
}

console.log(validarEmail(" correo@gmail.com "))
console.log(validarEmail("    "))
console.log(validarEmail(" m3ra   i9olp "))


/**
 * Localizar que el @ esté bien colocado (nombreusuario@servidor).
 * Que termine en "." + extensión del servidor (buscar listado).
 * ¿? Como se gestiona ¿? con Verificación por correo ¿? listado de servidores ¿?
 */

//  Validar url
function validarurl(miurl) {
    const url = miurl.trim();//con trim elimina los espacios sobrantes delante y detras del texto
    const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    //if(!pattern.test(input.value)){
    if (typeof url !== 'string' || url === "" || !pattern.test(url)) {/*El pattern.test(name)se utiliza para que el usuario no meta caracteres eje:+?``[] */
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarurl(" https://www.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es-correcta.html"))
console.log(validarurl("    "))
console.log(validarurl(" ww.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es "))
//lawebdelprogramador.comlawebdelprogramador.com
//Código de JavaScript - función para validar si una url es correcta
//Función que mediante expresiones regulares verifica si una url es correcta o no.


//  Validar fecha
function validarFecha(fecha1) {
    const fecha = fecha1.trim();
    const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
    if (typeof fecha !== 'string' || fecha === "" || !pattern.test(fecha)) {
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarFecha(" 2023/04/23 "))
console.log(validarFecha("  "))
console.log(validarFecha(" 09-04-2023 "))

//  Validar una hora/tiempo



//  Validar fecha y hora de nacimiento
//  Validar mes
//  Validar semana
//  Validar numero
//  Validar intervalo
//  Validar telefono

/**
 * Verificar que son numeros.
 * Limitar la entrada de números a 9.
 *
 */

//  Validar termino de busqueda
//  Validar color favorito 