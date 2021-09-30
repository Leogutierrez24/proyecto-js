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

    infoContent.innerHTML = `<h3 class="infoTitle">Información</h3>
                                <p>Nombre y apellido: ${logedUser.nombre}</p>
                                <p>N° de libreta universitaria: ${logedUser.libreta}</p>
                                <p>Email: ${logedUser.mail}</p>
                            `;
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

    if(logedUser.libreta != 24012){
        materiasContent.innerHTML = `<h3>Tu información todavía no ha sido cargada en el sistema</h3>`;
    } else {
        for(const materia of materias24012){
            let materiaInfo = document.createElement('div')
            materiaInfo.innerHTML = `<p>Materia: ${materia.nombre}</p>
                             <p>Código de la materia: ${materia.codigo}</p>
                             <p>Nota final: ${materia.calif}</p>
                             <p>Estado de la materia: ${materia.estado}</p>`;
            materiasContent.appendChild(materiaInfo);
        }
    }
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

    console.log('trabajando acá');
}

function logout(){
    localStorage.removeItem('usuarioLogeado');
    location.href = '../pages/login.html';
}

logoutButton.onclick = () => {
    logout();
}

infoButton.onclick = () => {
    mostrarInfo();
}

materiasButton.onclick = () => {
    mostrarMaterias();
}

inscripButton.onclick = () => {
    mostrarInscrip();
}