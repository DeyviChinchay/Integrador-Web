// reserva.js

// Función para mostrar el modal con el mensaje de confirmación
function mostrarModal(mensaje) {
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = mensaje;
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

//funcion para poder registrar una reserva 
function reservaPost(data) {
    try{
        console.log(typeof data)
        console.log(data)
        fetch('https://server-hotel-pi.vercel.app/reservation', {
            method : "POST" ,
            headers: {
                'Content-Type': 'application/json ; charset=UTF-8'
            },
            body: JSON.stringify(data),
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            console.log("Los datos fueron enviados correctamente:", data);
        })
        .catch(error => {
            console.error("UPS... algo salió mal:", error);
            console.log(typeof data)
            console.log(data)
        });
    }catch(Exception){
        console.log(Exception);
    } 
    
}


// Función para guardar la reserva
function guardarReserva() {
    const reserva = obtenerDatosFormulario();
    const mensaje = `
        <p><strong>Nombre:</strong> ${reserva.nombre}</p>
        <p><strong>Apellidos:</strong> ${reserva.apellidos}</p>
        <p><strong>Dni:</strong> ${reserva.dni}</p>
        <p><strong>Teléfono:</strong> ${reserva.telefono}</p>
        <p><strong>Número de Adultos:</strong> ${reserva.adultos}</p>
        <p><strong>Número de Niños:</strong> ${reserva.ninos}</p>
        <p><strong>Fecha de Ingreso:</strong> ${reserva.fecha_ingreso}</p>
        <p><strong>Fecha de Salida:</strong> ${reserva.fecha_salida}</p>
    `;
    const data = {
        customerName : reserva.nombre,
        customerDni : reserva.dni,
        roomId : "6",
        checkinDate : reserva.fecha_ingreso,
        durationHours : "12"
    }
    reservaPost(data);
    mostrarModal(`Reserva Guardada:<br>${mensaje}`);
}

// Función para registrar la reserva
function registrarReserva() {
    const reserva = obtenerDatosFormulario();
    const mensaje = `
        <p>La reserva ha sido registrada exitosamente.</p>
        <p><strong>Nombre:</strong> ${reserva.nombre}</p>
        <p><strong>Apellidos:</strong> ${reserva.apellidos}</p>
        <p><strong>Dni:</strong> ${reserva.dni}</p>
        <p><strong>Teléfono:</strong> ${reserva.telefono}</p>
        <p><strong>Número de Adultos:</strong> ${reserva.adultos}</p>
        <p><strong>Número de Niños:</strong> ${reserva.ninos}</p>
        <p><strong>Fecha de Ingreso:</strong> ${reserva.fecha_ingreso}</p>
        <p><strong>Fecha de Salida:</strong> ${reserva.fecha_salida}</p>
    `;
    mostrarModal(mensaje);
}

// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const adultos = document.getElementById('adultos').value;
    const ninos = document.getElementById('ninos').value;
    const fecha_ingreso = document.getElementById('fecha_ingreso').value;
    const fecha_salida = document.getElementById('fecha_salida').value;

    return {
        nombre,
        apellidos,
        dni,
        telefono,
        adultos,
        ninos,
        fecha_ingreso,
        fecha_salida
    };
}

//Redireccionar al index.html

function Redireccionar(){
    window.location.href = '../index.html'
}


