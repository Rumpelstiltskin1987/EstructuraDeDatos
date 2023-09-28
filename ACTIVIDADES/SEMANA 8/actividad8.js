class PilaLimitada {
    constructor()
    {
        this.Pila = [];
    }

    push(item) {
        let limite = this.Pila.length
        if (limite < 3) {
            this.Pila.push(item);
            console.log(`Se ha agredado el elemento "${item}" a la pila`);
        } else {
            console.log(`La pila se ecuentra llena, no es posible agregar otro elemento`);
            console.log(`Elimine un elemento para poder agregar uno nuevo a la pila`);
        }

    }

    pop() {
        console.log(`Se ha eliminado el elemento: "${this.Pila.pop()}"`);
    }

    peek() {
        console.log(`El elemento tope de la pila es: "${this.Pila.pop()}"`);
    }
}

let nuevaPila = new PilaLimitada;

nuevaPila.push("A");
nuevaPila.push("B");
nuevaPila.push("C");
nuevaPila.push("D");
nuevaPila.pop();
nuevaPila.push("D");
nuevaPila.peek();
