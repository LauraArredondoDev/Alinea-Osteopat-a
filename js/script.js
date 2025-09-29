function enviarMail() {

    const listaInputs = document.querySelectorAll('form input, form textarea');

    let deboEnviarMail = true;

    for(const input of listaInputs) { //Se comprueba cada campo, si no es válido se cambia deboEnviarMail a falso, si es correcto se deja en true y se comprueba el siguiente

        if(comprobarCampoCorrecto(input.id) == false) { 
            deboEnviarMail = false; 
        }
    }

    if(deboEnviarMail) { 
        const nombre = document.getElementById('input-nombre');
        const apellidos = document.getElementById('input-apellidos');
        const telefono = document.getElementById('input-telefono');
        const correo = document.getElementById('input-correo');
        const textarea = document.getElementById('input-mensaje');
        const saltoLineaGmail = '%0D%0A';
        const mensajeCorreo = textarea.value + saltoLineaGmail + 'Un saludo' + saltoLineaGmail + nombre.value + ' ' + apellidos.value + ', ' + telefono.value + ', ' + correo.value;
        const correoClinica = 'lauraarredondodev@gmail.com';
        const urlGmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + correoClinica + '&su=Cita&body=' + mensajeCorreo;

        window.open(urlGmail, '_blank');
    }
    
}

function comprobarCampoCorrecto(idCampo) {

    const esVacio = comprobarCampoVacio(idCampo); //esVacio devolverá true o false

    const campo = document.getElementById(idCampo);

    let caracteresCorrectos = false;

    if(campo.value.trim() !== '') { //si el campo NO está vacío se llama a la función comprobarCaracteresCorrectos para validad el campo de teléfono y correo

        caracteresCorrectos = comprobarCaracteresCorrectos(idCampo); 
        //caracteresCorrectos será true si el formato del campo es correcto, sino será false

    }

    const todoCorrecto = !esVacio && caracteresCorrectos; //Devuelve true si el campo NO está vacío y si los caracteres con correctos. Si uno de los 2 no se cumple devuelve false.

    return todoCorrecto;
}

function comprobarCampoVacio(idCampo) {

    const campo = document.getElementById(idCampo);

    const spanVacioNombre = document.getElementById('error-vacio-input-nombre');
    const spanVacioApellidos = document.getElementById('error-vacio-input-apellidos');
    const spanVacioTelefono = document.getElementById('error-vacio-input-telefono');
    const spanVacioCorreo = document.getElementById('error-vacio-input-correo');
    const spanVacioMensaje = document.getElementById('error-vacio-input-mensaje');

    let campoVacio = campo.value.trim() === '';

    if(!campoVacio) { //si el campo NO esta vacio
        
        campo.style.borderColor='#dee2e6'

        switch(idCampo) { 
            case 'input-nombre':
                spanVacioNombre.style.display='none';
                break;
            case 'input-apellidos':
                spanVacioApellidos.style.display='none';
                break;
            case 'input-telefono':
                spanVacioTelefono.style.display='none';
                break;
            case 'input-correo':
                spanVacioCorreo.style.display='none';
                break;
            case 'input-mensaje':
                spanVacioMensaje.style.display='none';
                break;
            default:
                break;
        }

    } else { //si el campo SÍ está vacío

        campo.style.borderColor='red';

        switch(idCampo) {
            case 'input-nombre':
                spanVacioNombre.style.display='block';
                break;
            case 'input-apellidos':
                spanVacioApellidos.style.display='block';
                break;
            case 'input-telefono':
                spanVacioTelefono.style.display='block';
                break;
            case 'input-correo':
                spanVacioCorreo.style.display='block';
                break;
            case 'input-mensaje':
                spanVacioMensaje.style.display='block';
                break;
            default:
                break;
        }
    }

    return campoVacio;
}

function comprobarCaracteresCorrectos(idCampo) {

    if(idCampo === 'input-telefono') {

        return comprobarTelefonoCorrecto(idCampo);

    } else if( idCampo === 'input-correo') {

        return comprobarCorreoCorrecto(idCampo);
    }
}

function comprobarTelefonoCorrecto(idCampo) {

    const campo = document.getElementById(idCampo);

    const spanCaracteresIncorrectosTelefono = document.getElementById('error-caracteres-input-telefono');

    const esTelefonoValido = /^\d{9}$/;

    if(esTelefonoValido.test(campo.value)) { //si el teléfono Sí tiene 9 números

        campo.style.borderColor='#dee2e6';

        spanCaracteresIncorrectosTelefono.style.display='none';

        return true;

    } else { //el telefono NO es valido

        campo.style.borderColor='red';

        spanCaracteresIncorrectosTelefono.style.display='block';

        return false;

    }

}

function comprobarCorreoCorrecto(idCampo) {

    const campo = document.getElementById(idCampo);

    const spanCaracteresIncorrectosCorreo = document.getElementById('error-caracteres-input-correo');

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
    if (correoRegex.test(campo.value)) { //si el texto SÍ tiene forma de correo

        campo.style.borderColor='#dee2e6';

        spanCaracteresIncorrectosCorreo.style.display = 'none';

        return true;

    } else { //si el texto NO tiene forma de correo

        campo.style.borderColor='red';

        spanCaracteresIncorrectosCorreo.style.display = 'block';

        return false;
    }
}
