
class librarybook {
    constructor(
      title,
      author,
      year
    ) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.infoBook = `
          Detalle del libro:
          Nombre        : ${this.title},
          Autor         : ${this.author},
          Año de edición: ${this.year}
          `;
    }
    mostrarInfo() {
      console.log(this.infoBook);
    }
  }
  
  const book1 = new librarybook(
    "Cien Años de Soledad",
    "Gabriel García Márquez",
    "1967"
  );
  
  const book2 = new librarybook(
    "El principito",
    "GAntoine de Saint-Exupéry",
    "1943"
  );
  
  book1.mostrarInfo();
  book2.mostrarInfo();

