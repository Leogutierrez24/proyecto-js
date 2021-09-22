let user = "usuario";
let password = "nihon123";

//materias ya cursadas
class Asignaturas{
    constructor(nombre, calif){
        this.nombre = nombre.toUpperCase();
        this.calif = parseInt(calif);
        this.aprobado = false;
    }
    desaprobado(){
        if(this.calif >= 4){
            this.aprobado = true;
        } else {
            this.aprobado = false;
        }
    }
}

// materias
const materia1 = new Asignaturas("Anatomía", 8);
const materia2 = new Asignaturas("Bioética I", 3);
const materia3 = new Asignaturas("Medicina Familiar I", 4);

materia1.desaprobado();
materia2.desaprobado();
materia3.desaprobado();


//Materias a cursar
const materias = [];

class Materias {
    constructor(materias){
        this.id = materias.id
        this.materia = materias.materia
        this.turno = materias.turno
    }
}

// función que agrega las materias
const agregar = (codigoMateria) =>{
    let materia = materias.find(materias => materias.id == codigoMateria);
    if(materia){
        misMaterias.push(materia);
    } else {
        console.log("Esa materia no esta disponible");
    }
}

const histopack = new Materias({id: 1, materia: "Histología, Biología Celular, Embriología y Genética", turno: "mañana"});
materias.push(histopack);
const saludMental = new Materias({id: 2, materia: "Salud Mental", turno: "mañana"});
materias.push(saludMental);

const misMaterias = [];

/* Funciones */

//verifica el usuario
function userValid(){
    let validarUser = prompt("Ingresar usuario");
    let validarPass = prompt("Ingresar contraseña");
    
    if(validarUser != user || validarPass != password){
        alert("El usuario o la contraseña ingresada no son válidas, por favor intenta nuevamente");
        userValid();
    } else {
        alert("Bienvenido " + user);
        actividades();
    }
}

//muestra las actividades en caso de que ingrese el usuario
function actividades(){
    let accion = confirm("¿Desea realizar una acción?");
    if(accion == true){
    //mostrar que se puede hacer
    let accion2 = prompt("¿Qué acción desea realizar? A: Consultar estado de las materias B: Anotarme a materias");
    
    switch(accion2.toUpperCase()){
        case "A":
            verAsignaturas();
        break;
        case "B":
            agregarMaterias();
            break;
            default:
                alert("acción inválida");
                actividades();
            }
        } else {
            alert("OK");
    }
}
            
//muestra el estado de las asignaturas
function verAsignaturas(){
    let elegirMateria = prompt("¿Qué materia desea consultar?:");

    switch(elegirMateria.toUpperCase()){
        case "ANATOMIA" || "ANATOMÍA":
        if(materia1.aprobado == true){
        alert("Materia: " + materia1.nombre + " / Nota: " + materia1.calif + " / Estado: Aprobada");
        volverConsultar();
        } else {
        alert("Materia: " + materia1.nombre + " / Nota: " + materia1.calif + " / Estado: Debe recursar la materia");
        volverConsultar();
        }
        break;
        case "BIOETICA" || "BIOÉTICA":
        if(materia2.aprobado == true){
            alert("Materia: " + materia2.nombre + " / Nota: " + materia2.calif + " / Estado: Aprobada");
            volverConsultar();
        } else {
            alert("Materia: " + materia2.nombre + " / Nota: " + materia2.calif + " / Estado: Debe recursar la materia");
            volverConsultar();
        }
        break;
        case "MEDICINA":
            if(materia3.aprobado == true){
                alert("Materia: " + materia3.nombre + " / Nota: " + materia3.calif + " / Estado: Aprobada");
                volverConsultar();
            } else {
                alert("Materia: " + materia3.nombre + " / Nota: " + materia3.calif + " / Estado: Debe recursar la materia");
                volverConsultar();
            }
        break;
        default:
            alert("La materia que estas solicitando no cuenta con información aun.");
            volverConsultar();
    }
}

//vuelve a preguntar si quiere consultar por otra asignatura
function volverConsultar(){
    let consultarAgain = prompt("¿Desea hacer otra consulta?");
    
    if(consultarAgain == "si"){
        verAsignaturas();
    } else {alert("OK");}
}


function agregarMaterias(){
    let consulta = parseInt(prompt("Ingrese el código de la materia a cursar: 1) Paquete de Histologia 2) Salud Mental"));
    if((consulta > 0 && consulta < 3) && typeof(consulta) == 'number'){
        agregar(consulta);
        alert("¡Materia agregada!");
        agregarMasMaterias();
    } else {
        alert("El código de la materia no es válido o la materia no esta disponible");
        agregarMasMaterias();
    }
}

function agregarMasMaterias(){
    let seguirAgregando = confirm("¿Desea seguir agregando más materias?");
    if(seguirAgregando == true){
        agregarMaterias();
    } else {
        actividades();
    }
}

/* Procedimiento */
//userValid();