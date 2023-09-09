/*
 * Class = Clase: es una fabrica de objetos
 * Contructor = a la maquina que fabrica los objetos
 * Parametros = caracteristicas de la maquina
 * Objeto = producto de la maquina (this)
 * Objetos tienen propiedades = parametros de la maquina
 * Objetos tienen metodos = funciones de la maquina
 * Instanciar = crear un objeto de una clase
 */

class OniichanPC {
    constructor(
      gabinete,
      motherboard,
      procesador,
      ram,
      tipoDiscoDuro,
      tarjetaVideo
    ) {
      this.gabinete = gabinete;
      this.motherboard = motherboard;
      this.procesador = procesador;
      this.ram = ram;
      this.tipoDiscoDuro = tipoDiscoDuro;
      this.tarjetaVideo = tarjetaVideo;
  
      this.infoPc = `
          La pc de oniichanPC tiene las siguientes caracteristicas:
          Gabinete: ${this.gabinete},
          Motherboard: ${this.motherboard},
          Procesador: ${this.procesador},
          Ram: ${this.ram},
          Tipo de Disco Duro: ${this.tipoDiscoDuro},
          Tarjeta de Video: ${this.tarjetaVideo}
          `;
    }
    mostrarInfo() {
      console.log(this.infoPc);
    }
  }
  
  const pc1 = new OniichanPC(
    "Gamer",
    "Asus",
    "Intel Core i9",
    "64GB",
    "SSD 3 TB",
    "Nvidia RTX 4080"
  );
  
  const pc2 = new OniichanPC(
    "Gamer",
    "Gigabyte",
    "Intel Core i7",
    "16GB",
    "SSD 254TB",
    "Nvidia RTX 4080"
  );
  
  pc1.mostrarInfo();
  pc2.mostrarInfo();