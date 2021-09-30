class Usuario{
    constructor(nombre, libreta, mail, clave){
        this.nombre = nombre;
        this.libreta = libreta;
        this.mail = mail;
        this.clave = clave;
    }
}

const usuario24012 = new Usuario('Juan Carlos Tilin', 24012, 'unmail@mail.com', '12345');

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push(usuario24012);

class Materia{
    constructor(nombre, codigo, calif){
        this.nombre = nombre.toUpperCase();
        this.codigo = codigo;
        this.calif = parseInt(calif);
        this.estado = false;
    }

    materiaEstado(){
        if(this.calif >= 4){
            this.aprobado = true;
        } else {
            this.aprobado = false;
        }
    }
}

// materia1.materiaEstado();
// materia2.materiaEstado();
// materia3.materiaEstado();
// materia4.materiaEstado();
// materia5.materiaEstado();
// materia6.materiaEstado();
// materia7.materiaEstado();
// materia8.materiaEstado();

const materias24012 = [
    {nombre: 'matemática', codigo: '28', calif: 5},
    {nombre: 'Física', codigo: '03', calif: 6},
    {nombre: 'Sociedad y estado', codigo: '24', calif: 8},
    {nombre: 'Introducción al pensamiento científico', codigo: '40', calif: 6},
    {nombre: 'Química', codigo: '40', calif: 8},
    {nombre: 'Biología', codigo: '27', calif: 10},
    {nombre: 'Anatomía', codigo: '6103', calif: 7},
    {nombre: 'Histología, Biología celular, Embriología y Genética', codigo: '6201', calif: 3}
];