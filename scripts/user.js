import save from "../modules/save.js"
import search from "../modules/search"
import edit from "../modules/edit.js"
import deleteUser from "../modules/delete.js"
let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url = 'https://ejercicioheroes.herokuapp.com/usuarios/'

//------------Guardar----------------/
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    save(url)
})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () => {
   search(url)
})

//-------------Editar---------------/
btnEditar.addEventListener('click', async () => {
    edit(url)
})

//------------Eliminar----------------/

btnEliminar.addEventListener('click', async () => {
    deleteUser(url)
})