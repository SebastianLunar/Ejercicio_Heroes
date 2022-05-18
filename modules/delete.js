const deleteUser = async (url) => {
    let idEliminar = document.getElementById('id').value
    await axios.delete(url+idEliminar)
}

export default deleteUser;