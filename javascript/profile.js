const logedUser = JSON.parse(localStorage.getItem('usuarioLogeado'));

function mostrarInfo(){
    infoButton.style.background = '#fff';
    infoButton.style.color = '#265fff';
    materiasContent.style.display = 'none';
    inscripContent.style.display = 'none';

    infoContent.innerHTML = `<h3 class="infoTitle">Información</h3>
                                <p>Nombre y apellido: ${logedUser.nombre}</p>
                                <p>N° de libreta universitaria: ${logedUser.libreta}</p>
                                <p>Email: ${logedUser.mail}</p>
                            `;
}

infoButton.onclick = () => {
    mostrarInfo();
}

function mostrarMaterias(){
    materiasButton.style.background = '#fff';
    materiasButton.style.color = '#265fff';
    infoContent.style.display = 'none';
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

materiasButton.onclick = () => {
    mostrarMaterias();
}