const logedUser = JSON.parse(localStorage.getItem('usuarioLogeado'));

// qué mostrar en "Perfil"
$("#informacion").append(`<h3 class="infoTitle">Información</h3>
<p>Nombre y apellido: ${logedUser.nombre}</p>
<p>N° de libreta universitaria: ${logedUser.libreta}</p>
<p>Email: ${logedUser.mail}</p>`);

// qué mostrar en "Materias"
if(logedUser.libreta != 24012){
    // materiasContent.innerHTML = `<h3>Tu información todavía no ha sido cargada en el sistema</h3>`;
    $('#materias').append(`<h3>Tu información todavía no ha sido cargada en el sistema</h3>`);
} else {
    for(const materia of materias24012){
        $('#materias').append(`
        <div class="materia-details">
            <p>Materia: ${materia.nombre}</p>
            <p>Código de la materia: ${materia.codigo}</p>
            <p>Nota final: ${materia.calif}</p>
            <p>Estado de la materia: ${materia.estado}</p>
        </div>
        `)
    }
}

// qué mostrar en "Inscripciones"
if(logedUser.libreta){
    if(logedUser.libreta === 24012){
        for(const inscrip of inscripciones24012){
            $('#inscripciones').append(`
            <div class="inscrip-details">
                <p>Materia: ${inscrip.nombre}<p>
                <p>Código: ${inscrip.codigo}</p>
                <p>Turno: ${inscrip.turno}</p>
            </div>`);
        }
    } else {
        $('#inscripciones').append(`<h3 class="noInscrip">No haz realizado ninguna inscripción aún.</h3>`);
    }
} else {
    $('#inscripciones').append(`<h3 class="noInscrip">Ups! Ha ocurrido un error</h3>`);
}

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