const deleteUser = async (url) => {
    let idEliminar = document.getElementById('id').value
    await axios.delete(url+idEliminar);
    formulario.reset();
    alert("Usuario Eliminado");
}

export default deleteUser;