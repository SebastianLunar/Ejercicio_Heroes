const edit = async (url) => {
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM = document.getElementById('id').value

    await axios.put(url + idM, {
        nombre: nameM,
        apellido: lastNameM,
        correo: emailM,
        id: idM
    });
    alert("Datos actualizados");
}

export default edit;