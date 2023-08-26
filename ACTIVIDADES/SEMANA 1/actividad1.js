// SUMA

const suma = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 + num2 ;

    console.log(`La suma es ${resultado}`)
};

// RESTA

const resta = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 - num2 ;

    console.log(`La resta es ${resultado}`)
};

// MULTIPLICACION

const multiplicacion = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 * num2 ;

    console.log(`La multiplicación es ${resultado}`)
};

// DIVISION

const division = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 / num2 ;

    console.log(`La divisón es ${resultado}`)
};

// OPERACIONES

const operaciones = (parm1,parm2,operacion) => {
    switch(operacion){
        case "suma":
            suma(parm1,parm2);
            break;
        case "resta":
            resta(parm1,parm2);
            break;
        case "multiplicacion":
            multiplicacion(parm1,parm2);
            break;
        case "division":
            division(parm1,parm2);
            break;
        default:
            console.log("Solo se permiten las operaciones: SUMA, RESTA, MULTIPLICACION y DIVISION")
    }

}

operaciones(5,10,"suma");
operaciones(5,10,"resta");
operaciones(5,10,"multiplicacion");
operaciones(5,10,"division");
