class estudiante {
    constructor(
        nombre,
        aPaterno,
        aMaterno,
        matricula,
    ){
        this.nombre = nombre;
        this.aPaterno = aPaterno;
        this.aMaterno = aMaterno;
        this.matricula = matricula;
    }
}

class nota {
    constructor(
        matricula,
        materia,
        nota
    ){
        this.matricula = matricula;
        this.materia = materia;
        this.nota = nota
    }
}

class registroDeEstudiantes {
    constructor() {
        this.estudiantes = [];
        this.notas =[];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
        console.log(`Se ha añadido el estudiante ${estudiante.nombre}`);
    }

    agregarNotas(nota) {
        this.notas.push(nota);
        console.log(`Se ha agregado la nota de la materia ${nota.materia}`);
    }

    promedio(matricula) {
        let estudianteAux = this.estudiantes.filter(estudiante => estudiante.matricula === matricula)
        let notasAux = this.notas.filter(nota => nota.matricula === matricula)
        let suma = 0;
        let promedio = 0;

        for (let i = 0; i <= notasAux.length - 1; i++) {
            suma = suma + notasAux[i].nota;
        }
        promedio = suma / notasAux.length;

        console.log(`El promedio de ${estudianteAux[0].nombre} ${estudianteAux[0].aPaterno} ${estudianteAux[0].aMaterno} es : 
        ${promedio}`);
    }

    listarEstudiantes(){
        console.log("#################################################");
        console.log("Listado de estudiantes");
        console.log(" ");
        console.log("-----------------------------");
        for (let estudiante of this.estudiantes) {
            console.log(`MATRICULA: ${estudiante.matricula}`);
            console.log(`NOMBRE: ${estudiante.nombre} ${estudiante.aPaterno} ${estudiante.aMaterno}`);
            console.log("-----------------------------");
        }
    }
}

let registro = new registroDeEstudiantes();

registro.agregarEstudiante(new estudiante("Enrique Javier", "Ortega", "Cabrera", "203855"));
registro.agregarEstudiante(new estudiante("Guzman", "Alonzo", "Martínez", "203856"));
registro.agregarEstudiante(new estudiante("Brian", "Gomez", "Gomez", "203857"));
registro.agregarEstudiante(new estudiante("Carlos", "Ricalde", "Ricalde", "203858"));
registro.agregarNotas(new nota("203855","Estructura de Datos", 10));
registro.agregarNotas(new nota("203855","Taller de Lectura y Redacción", 9));
registro.agregarNotas(new nota("203855","Circuitos Eléctricos y Electrónicos", 10));
registro.agregarNotas(new nota("203856","Estructura de Datos", 9));
registro.agregarNotas(new nota("203856","Taller de Lectura y Redacción", 9));
registro.agregarNotas(new nota("203856","Circuitos Eléctricos y Electrónicos", 10));
registro.agregarNotas(new nota("203857","Estructura de Datos", 9));
registro.agregarNotas(new nota("203857","Taller de Lectura y Redacción", 9));
registro.agregarNotas(new nota("203857","Circuitos Eléctricos y Electrónicos", 9));
registro.agregarNotas(new nota("203858","Estructura de Datos", 8));
registro.agregarNotas(new nota("203858","Taller de Lectura y Redacción", 9));
registro.agregarNotas(new nota("203858","Circuitos Eléctricos y Electrónicos", 8));
registro.listarEstudiantes();
registro.promedio("203855");
registro.promedio("203856");
registro.promedio("203857");
registro.promedio("203858");