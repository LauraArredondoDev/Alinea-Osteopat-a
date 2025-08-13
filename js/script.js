function enviarMail() {
    const inputNombre = document.getElementById('input-nombre');
    const inputApellidos = document.getElementById('input-apellidos');
    const inputTelefono = document.getElementById('input-telefono');
    const inpitCorreo = document.getElementById('input-correo');
    const inputTextArea = document.getElementById('input-mensaje');

    const nombre = inputNombre.value;
    const apellidos = inputApellidos.value;
    const telefono = inputTelefono.value;
    const correo = inpitCorreo.value;
    const textArea = inputTextArea.value;
    const saltoLineaGmail = '%0D%0A';
    const mensaje = textArea + saltoLineaGmail + 'Un saludo' + saltoLineaGmail + nombre + ' ' + apellidos + ', ' + telefono + ', ' + correo;

    const emailClinica = 'lauraarredondodev@gamil.com';
    const urlGmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + emailClinica + '&su=Cita&body=' + mensaje;

    window.open(urlGmail, '_blank');
}