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
/*for(const materia of materias24012){
        let materiaInfo = document.createElement('div')
        materiaInfo.innerHTML = `<p>Materia: ${materia.nombre}</p>
                         <p>Código de la materia: ${materia.codigo}</p>
                         <p>Nota final: ${materia.calif}</p>
                         <p>Estado de la materia: ${materia.estado}</p>`;
        materiasContent.appendChild(materiaInfo);
    } <- sin jquery*/

/*infoContent.innerHTML = `<h3 class="infoTitle">Información</h3>
                                <p>Nombre y apellido: ${logedUser.nombre}</p>
                                <p>N° de libreta universitaria: ${logedUser.libreta}</p>
                                <p>Email: ${logedUser.mail}</p>
                            `; <- sin jquery*/

// api clima
$('.clima-btn').on('click', () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=1e5bac46d6a1fc1683ce1565c1b8f3bf`;
    $.get(url, apiClima);
});

// EJECUCIÓN
infoButton.style.background = '#fff';
infoButton.style.color = '#265fff';
infoContent.style.display = 'block';

// qué mostrar en "Perfil"
$("#informacion").append(`<p>Nombre y apellido: ${logedUser.nombre}</p>
<p>N° de libreta universitaria: ${logedUser.libreta}</p>
<p>Email: ${logedUser.mail}</p>`);

// qué mostrar en "Materias"
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

// qué mostrar en "Inscripciones -> Mis inscripciones"
if(logedUser.libreta){
    if(logedUser.libreta === 24012){
        for(const inscrip of inscripciones24012){
            $('.inscrip-info').append(`
            <div class="inscrip-details">
                <h4>${inscrip.nombre} ${inscrip.codigo}</h4>
                <p>Profesor: ${inscrip.profesor}</p>
                <p>Aula: ${inscrip.aula}</p>
                <p>Turno: ${inscrip.turno}</p>
            </div>`);
        }
    } else {
        $('.inscrip-info').append(`<h3 class="noInscrip">No haz realizado ninguna inscripción aún.</h3>`);
    }
} else {
    $('.inscrip-info').append(`<h3 class="noInscrip">Ups! Ha ocurrido un error</h3>`);
}

// qué mostrar en "Inscripciones -> Inscripciones abiertas"
if(logedUser.libreta){
    for(const matDisponibles of inscripMaterias)
        $('.mostrar-inscrip').append(`<table class="materias-disponibles">
            <td>${matDisponibles.nombre} ${matDisponibles.codigo}</td>
            <td>Profesor: ${matDisponibles.profesor}</td>
            <td>Aula: ${matDisponibles.aula}</td>
            <td>Turno: ${matDisponibles.turno}</td>
            <td><button id="inscribir-btn"><span>inscribirse</span></button></td>
        </table>`);
} else {
    $('.inscrip-info').append(`<h3 class="noInscrip">Ups! Ha ocurrido un error</h3>`);
}

