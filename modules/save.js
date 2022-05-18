const save = async (url) => {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value
    await axios.post(url, {
        nombre: name,
        apellido: lastName,
        correo: email
    })
}

export default save;