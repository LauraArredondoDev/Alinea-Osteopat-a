function enviarMail() {
    const inputNombre = document.getElementById('input-nombre');
    const inputApellidos = document.getElementById('input-apellidos');
    const inputTelefono = document.getElementById('input-telefono');
    const inputCorreo = document.getElementById('input-correo');
    const inputTextArea = document.getElementById('input-mensaje');
    const form = document.getElementById('formulario');

    const nombre = inputNombre.value;
    const apellidos = inputApellidos.value;
    const telefono = inputTelefono.value;
    const correo = inputCorreo.value;
    const textArea = inputTextArea.value;
    const saltoLineaGmail = '%0D%0A';
    const mensaje = textArea + saltoLineaGmail + 'Un saludo' + saltoLineaGmail + nombre + ' ' + apellidos + ', ' + telefono + ', ' + correo;

    
    

    // lista con los elementos del formulario
    let campos = form.querySelectorAll('input, textarea')
    let valido = true;

    //Recorremos los campos para comprobar si están vacios
    for (let i = 0; i < campos.length; i++) {
        let campo = campos[i];

        if(campo.value.trim() === ' ') { //Si campo está vacío se pone el borde rojo y el formulario no es válido
            campo.style.border = '2px solid red';
            valido = false;

        }else { //Si campo está completo se pone el borde verde y se abre la ventana de gmail
            campo.style.border = '2px solid green';
            window.open(urlGmail, '_blank');
        }
    }

    const emailClinica = 'lauraarredondodev@gmail.com';
    const urlGmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + emailClinica + '&su=Cita&body=' + mensaje;

    // window.open(urlGmail, '_blank');

}