class empleado {
    constructor(
        nombre,
        apellido,
        Id,
        cargo,
        salario
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.Id = Id;
        this.cargo = cargo;
        this.salario = salario;
    }
}

class empresa {
    constructor() {
        this.empleados = [];
    }

    añadirEmpleado(empleado) {
        this.empleados.push(empleado);
        console.log(`Se ha añadido el empleado ${empleado.nombre}`);
    }

    editarEmpleado(nombre,apellido,cargo,salario,Id) {
        let indice = this.empleados.findIndex(empleado => empleado.Id == Id);
        let nombreAnterior = this.empleados[indice].nombre;
        this.empleados[indice].nombre = nombre;
        this.empleados[indice].apellido = apellido;
        this.empleados[indice].Id = Id;
        this.empleados[indice].cargo = cargo;
        this.empleados[indice].salario = salario;
        console.log(`Se ha editado el empleado ${nombreAnterior}`);
    }

    eliminarEmpleado(Id) {
        let indice = this.empleados.findIndex(empleado => empleado.Id == Id);
        let nombreEmpleado = this.empleados[indice].nombre;
        this.empleados.splice(indice,1);
        console.log(`Se ha elminado el empleado ${nombreEmpleado}`);
    }

    listarEmpleados(){
        console.log("#################################################");
        console.log("Listado de empleados");
        console.log(" ");
        console.log("-----------------------------");
        for (let empleado of this.empleados) {
            console.log(`ID: ${empleado.Id}`);
            console.log(`Empleado:${empleado.nombre}`);
            console.log(`Apellido:${empleado.apellido}`);
            console.log("-----------------------------");
        }
    }
}

let nuevaEmpresa = new empresa();

nuevaEmpresa.añadirEmpleado(new empleado("Enrique Javier", "Ortega Cabrera", "1", "Desarrollador Jr.","$15,000.00"));
nuevaEmpresa.añadirEmpleado(new empleado("Guzman", "Alonzo Martinez", "2", "Desarrollador Jr.","$15,000.00"));
nuevaEmpresa.añadirEmpleado(new empleado("Brian", "Gomez", "3", "Desarrollador Semi.","$20,000.00"));
nuevaEmpresa.listarEmpleados();
nuevaEmpresa.editarEmpleado("Javier","Ortega Cabrera","Desarrollador Semi","$20,000.00","1");
nuevaEmpresa.listarEmpleados();
nuevaEmpresa.eliminarEmpleado("1");
nuevaEmpresa.listarEmpleados();