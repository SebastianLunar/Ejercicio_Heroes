const search = async (url) => {
    let email = document.getElementById('email').value
    const { data } = await axios.get(url)
    let buscarCorreo = data.find(user => user.correo === email)

    const { nombre, apellido, correo, id } = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
}

export default search;