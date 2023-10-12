// CLASES
class Usuario {
    constructor(nombres, apellidos, cedula, telefono, especialidad) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.telefono = telefono;
        this.especialidad = especialidad;
    }
}
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const cedula = document.getElementById("cedula");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
const consultorio = document.getElementById("consultorio");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const formulariomedicos = document.getElementById("registro_medicos-form");
const formulariopacientes = document.getElementById("registro_pacientes-form");

formulariomedicos.addEventListener("submit", function (event) {
    event.preventDefault();

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorCedula = cedula.value;
    let valorTelefono = telefono.value;
    let valorEspecialidad = especialidad.value;

    let medico = new Usuario(
        valorNombres,
        valorApellidos,
        valorCedula,
        valorTelefono,
        valorEspecialidad
    );

    medico.consultorio = consultorio.value;
    medico.correo = correo.value;

    let medicos = JSON.parse(localStorage.getItem("medicos")) || [];
    medicos.push(medico);
    localStorage.setItem("medicos", JSON.stringify(medicos));

    alert("Médico registrado con éxito");
});

const mostrarmedicos = function () {
    let medicos = [];
    let cuerpoTabla = document.getElementById("cuerpo-tabla-medicos"); 
    let localMedicos = localStorage.getItem("medicos");
    if (localMedicos) {
        medicos = JSON.parse(localMedicos);
    }

    medicos.forEach((medico) => {
        let fila = document.createElement("tr"); 
        let celdaNombres = fila.insertCell(); 
        let celdaApellidos = fila.insertCell();
        let celdaCedula = fila.insertCell(); 
        let celdaConsultorio = fila.insertCell(); 
        let celdaTelefono = fila.insertCell(); 
        let celdaCorreo = fila.insertCell(); 
        let celdaEspecialidad = fila.insertCell(); 
        let celdaPaciente = fila.insertCell();
        celdaNombres.textContent = medico.nombres;
        celdaApellidos.textContent = medico.apellidos;
        celdaCedula.textContent = medico.cedula;
        celdaConsultorio.textContent = medico.consultorio;
        celdaTelefono.textContent = medico.telefono;
        celdaCorreo.textContent = medico.correo;
        celdaEspecialidad.textContent = medico.especialidad;
        celdaPaciente.textContent = medico.Paciente;

        cuerpoTabla.appendChild(fila);
    });
};
if (window.location.href.endsWith("registro_medicos.html")) {
} else if (window.location.href.endsWith("listado_medicos.html")) {
    mostrarmedicos();
}