let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]


 /////Ejercicio 10
function ingresar_informacion(){
    let informacion = prompt("Ingrese un usuario (Nombre , Apellido, Edad, Profesion)")
    let cadena = informacion.split(',')
    users.push({id:users.length+1,nombre:cadena[0],apellido:cadena[1],edad:cadena[2],profesion:cadena[3]})
    console.log(users)
 }
// ingresar_informacion()
////Ejercicio 11
nuevaFecha = new Date();
ultimo = users.length - 1
const nuevoUsuario = users.splice(ultimo,1,
        {id: 7, nombre: "Sandro", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: nuevaFecha}
    )
//let informacion = new Date();
console.log(nuevoUsuario)
console.log(users)

//// Ejercicio 12
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
function ordenar(reverse) {
    for(index in users){
        users[index].created_at = new Date(users[index].created_at)
    }
    if (reverse === true) {
        users.sort((a, b) => b["created_at"] - a["created_at"])
    }else{
        users.sort((a, b) => a["created_at"] - b["created_at"]) 
    }
    console.log(users)
}

//////Ejercicio  13
function filtrarusuario(mes, anio) {
    let usuariofiltrado = users.filter(
      (element) => new Date(element.created_at).getMonth() === (mes - 1) && new Date(element.created_at).getFullYear() === anio
    );
    console.log(usuariofiltrado);
  }
  filtrarusuario(7,2022);
//////Ejercicio 14

  let opciones = prompt (
    'Bienvenido Administrador'+
'\n1. Crear Usuario Nuevo ' +
'\n2. Leer Usuarios: ' +
'\n3. Actualizar Usuario ' +
'\n4. Borrar Usuario '
)

switch (opciones) {
case '1':
    insertarusuario()
    break

case '2': 
    leerusuario()
    break

case '3':
    actualizarusuario()
    break

case '4':
    borrarusuario()
    break


}

// CREATE

function insertarusuario (){

let idusuario = prompt ("Ingrese la información del usuario (nombre, apellido, edad, profesion)")
if (idusuario===users.id){
    console.log(users.id)
}
let cadenausuario = usuarionuevo.split (", ")
let id = users.length +1
let dia = new Date()
users.push (
    {
        id:id,nombre:cadenausuario[0], apellido: cadenausuario[1], edad: cadenausuario[2], profesion: cadenausuario[3], created_at: cadenausuario[4], dia:dia
    }
)
console.log(users)
}


// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
function leerusuario(){
const tablausuarios = document.getElementById("tabla")
const table = document.createElement("table")
table.setAttribute("border", "1")
tablausuarios.append(table)

// HEADERS
const tr = document.createElement("tr")
table.append(tr)
for(const prop in users[0]){
const th = document.createElement("th")
th.textContent = prop
th.style.cursor = "pointer"
th.addEventListener("click", () => {
    sortUsuario(prop)
    table.innerHTML = ""
    table.append(tr)
    createTableBody()
})
tr.append(th)
}
// TABLE BODY
function createTableBody(){
for(const index in users){
    const trb = document.createElement("tr")
    for(const prop in users[index]){
        const td = document.createElement("td")
        td.textContent = users[index][prop]
        trb.append(td)
    }
    table.append(trb)
}
}
}

// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
const boton = document.getElementById ("modificar")
boton.addEventListener ("click", () => {
let modificarusuario = prompt ("Ingrese el id del usuario a modificar")
if (modificarusuario<users.length) {
        actualizarusuario()
        

}else{
    alert('no se aplican cambios')
}
})

function actualizarusuario (){
let usuarionuevo = prompt ("Ingrese la información del usuario (nombre, apellido, edad, profesion)")
let cadenausuario = usuarionuevo.split (", ")
let id = users.length +1
let modificacion = new Date ()
users.push (
    {
        id:id,nombre:cadenausuario[0], apellido: cadenausuario[1], edad: cadenausuario[2], profesion: cadenausuario[3], modificacion:modificacion
    }
)
console.log(users)
}

// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.

// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.

// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.
