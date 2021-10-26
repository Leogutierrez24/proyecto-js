// VARIABLES Y FUNCIONALIDADES

const logedUser = JSON.parse(localStorage.getItem('usuarioLogeado'));

function mostrarInfo(){
    infoButton.style.background = '#fff';
    infoButton.style.color = '#265fff';
    infoContent.style.display = 'block';

    materiasButton.style.background = '#265fff';
    materiasButton.style.color = '#fff';
    materiasContent.style.display = 'none';

    inscripButton.style.background = '#265fff';
    inscripButton.style.color = '#fff';
    inscripContent.style.display = 'none';
}

function mostrarMaterias(){
    materiasButton.style.background = '#fff';
    materiasButton.style.color = '#265fff';
    materiasContent.style.display = 'block';

    infoButton.style.background = '#265fff'
    infoButton.style.color = '#fff';
    infoContent.style.display = 'none';

    inscripButton.style.background = '#265fff';
    inscripButton.style.color = '#fff';
    inscripContent.style.display = 'none';
}

function mostrarInscrip(){
    inscripButton.style.background = '#fff';
    inscripButton.style.color = '#265fff';
    inscripContent.style.display = 'block';

    infoButton.style.background = '#265fff'
    infoButton.style.color = '#fff';
    infoContent.style.display = 'none';

    materiasButton.style.background = '#265fff';
    materiasButton.style.color = '#fff';
    materiasContent.style.display = 'none';
}

function logout(){
    localStorage.removeItem('usuarioLogeado');
    localStorage.removeItem('inscripcionesDelUsuario');
    location.href = '../pages/login.html';
}

function apiClima(resp, status){
    if(status === 'success'){
        let clima = resp.main;
        let temp = clima.temp;
        let tempCelsius = temp - 273;
        $('.api-info').append(`<p class="clima-resp">La temperatura ahora es de ${parseInt(tempCelsius)}°C</p>`);
        $('.clima-btn').hide();
    }
}

$('#logout-button').on('click', () => {
    logout();
});

$('#info-btn').on('click', () => {
    mostrarInfo();
});

$('#materias-btn').on('click', () => {
    mostrarMaterias();
});

$('#inscrip-btn').on('click', () => {
    mostrarInscrip();
});

$('#show-inscrip').on('click', () =>{
    $('.inscrip-info').slideToggle('slow');
});

$('#show-inscripAbiertas').on('click', () => {
    $('.mostrar-inscrip').slideToggle('slow');
});

// api clima
$('.clima-btn').on('click', () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=1e5bac46d6a1fc1683ce1565c1b8f3bf`;
    $.get(url, apiClima);
});

/* EJECUCIÓN */
infoButton.style.background = '#fff';
infoButton.style.color = '#265fff';
infoContent.style.display = 'block';

// Perfil
$("#informacion").append(`<p>Nombre y apellido: ${logedUser.nombre}</p>
<p>N° de libreta universitaria: ${logedUser.libreta}</p>
<p>Email: ${logedUser.mail}</p>`);

// Materias
if(logedUser.libreta != 24012){
    $('#materias').append(`<h3>Tu información todavía no ha sido cargada en el sistema</h3>`);
} else {
    for(const materia of materias24012){
        $('#materias').append(`<div class="materia-details">
            <p>Materia: ${materia.nombre}</p>
            <p>Código de la materia: ${materia.codigo}</p>
            <p>Nota final: ${materia.calif}</p>
            <p>Estado de la materia: ${materia.estado}</p>
        </div>
        `)
    }
}

// inscripciones
if(usuariosInscripciones.length !== 0){
    for(const inscrip of usuariosInscripciones){
        $('.inscrip-info').append(`
        <div class="inscrip-details">
            <h4>${inscrip.nombre} ${inscrip.codigo}</h4>
            <p>Profesor: ${inscrip.profesor}</p>
            <p>Aula: ${inscrip.aula}</p>
            <p>Turno: ${inscrip.turno}</p>
        </div>`);}
} else {
    $('.inscrip-info').append(`<p>Todavía no tenes inscripciones.</p>`);
}
if(materiasDisponibles.length !== 0){
    for(const matDisponibles of materiasDisponibles){
    $('.mostrar-inscrip').append(`<table class="materias-disponibles">
        <td>${matDisponibles.nombre} ${matDisponibles.codigo}</td>
        <td>Profesor: ${matDisponibles.profesor}</td>
        <td>Aula: ${matDisponibles.aula}</td>
        <td>Turno: ${matDisponibles.turno}</td>
        <td><button class="inscribir-btn" id="inscribirme-${matDisponibles.codigo}"><span>inscribirse</span></button></td>
    </table>`);}
} else {
    $('.inscrip-info').append(`<p>No hay materias para inscribirse.</p>`);
}

$('#inscribirme-6103').on('click', () => {
    const verifInscripciones = usuariosInscripciones.find(inscripcion => inscripcion.codigo === "6103");

    if(!verifInscripciones){
        usuariosInscripciones.push(inscripcion1);
        localStorage.setItem('inscripcionesDelUsuario', JSON.stringify(usuariosInscripciones));
        console.log("Inscripción exitosa");
        $('#inscribirme-6103').prop('disabled', true);
    } else {
        alert("Ya estas inscripto a esta materia");
    }
});

$('#inscribirme-6201').on('click', () => {
    const verifInscripciones = usuariosInscripciones.find(inscripcion => inscripcion.codigo === "6201");

    if(!verifInscripciones){
        usuariosInscripciones.push(inscripcion2);
        localStorage.setItem('inscripcionesDelUsuario', JSON.stringify(usuariosInscripciones));
        console.log("Inscripción exitosa");
        $('#inscribirme-6201').prop('disabled', true);
    } else {
        alert("Ya estas inscripto a esta materia");
    }
});

$('#inscribirme-6301').on('click', () => {
    const verifInscripciones = usuariosInscripciones.find(inscripcion => inscripcion.codigo === "6301");

    if(!verifInscripciones){
        usuariosInscripciones.push(inscripcion3);
        localStorage.setItem('inscripcionesDelUsuario', JSON.stringify(usuariosInscripciones));
        console.log("Inscripción exitosa");
        $('#inscribirme-6301').prop('disabled', true);
    } else {
        alert("Ya estas inscripto a esta materia");
    }
});

$('#inscribirme-7540').on('click', () => {
    const verifInscripciones = usuariosInscripciones.find(inscripcion => inscripcion.codigo === "7540");

    if(!verifInscripciones){
        usuariosInscripciones.push(inscripcion4);
        localStorage.setItem('inscripcionesDelUsuario', JSON.stringify(usuariosInscripciones));
        console.log("Inscripción exitosa");
        $('#inscribirme-7540').prop('disabled', true);
    } else {
        alert("Ya estas inscripto a esta materia");
    }
})

$('#inscribirme-6108').on('click', () => {
    const verifInscripciones = usuariosInscripciones.find(inscripcion => inscripcion.codigo === "6108");

    if(!verifInscripciones){
        usuariosInscripciones.push(inscripcion5);
        localStorage.setItem('inscripcionesDelUsuario', JSON.stringify(usuariosInscripciones));
        console.log("Inscripción exitosa");
        $('#inscribirme-6108').prop('disabled', true);
    } else {
        alert("Ya estas inscripto a esta materia");
    }
})