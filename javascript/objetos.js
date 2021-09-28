class Usuario{
    constructor(nombre, libreta, mail, clave){
        this.nombre = nombre;
        this.libreta = libreta;
        this.mail = mail;
        this.clave = clave;
    }
}

const usuario24012 = new Usuario('Juan Carlos Tilin', 24012, 'unmail@mail.com', '12345');

const usuarios = [];

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

// const materia1 = new Materia('matemática', '28', 5);
// const materia2 = new Materia('Física', '03', 6);
// const materia3 = new Materia('Sociedad y estado', '24', 8);
// const materia4 = new Materia('Introducción al pensamiento científico', '40', 6);
// const materia5 = new Materia('Química', '05', 8);
// const materia6 = new Materia('Biología', '27', 10);
// const materia7 = new Materia('Anatomía', "6103", 7);
// const materia8 = new Materia('Histología, Biología celular, Embriología y Genética', "6201", 3);

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

// materias24012.push(materia1, materia2, materia3, materia4, materia5, materia6, materia7, materia8);

