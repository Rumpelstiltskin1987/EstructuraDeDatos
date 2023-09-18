let book = [

];

let library = [

];

const addbook = (titleBook, author, year) => {

    book.title = titleBook;
    book.author = author;
    book.year = year;

    let copyOfBook = {...book}

    library.push(copyOfBook);
    console.log(`Se ha añadido el libro: ${titleBook}`);
}

const deleteBook = (titleBook) => {
    let index = null;
    for (let i = 0; i <= library.length - 1; i++){
        if (library[i].title == titleBook) {
            index = i;
            library.splice(index,1);
            console.log(`Se ha eliminado el libro ${titleBook}`);
            break;
        }
    }
}

const editBook = (titleBook,author,year) => {
    for (let i = 0; i <= library.length - 1; i++){
        if (library[i].title == titleBook) {
            index = i;
            library[i].title == titleBook;
            library[i].author == author;
            library[i].year == year;
            console.log(`Se ha editado el libro ${titleBook}`);
            break;
        }
    }
}

const printListBooks = () => {
    for (let i = 0; i <= library.length - 1; i++){
        console.log(`Libro: ${library[i].title}`);
        console.log(`Autor: ${library[i].author}`);
        console.log(`Año  : ${library[i].year}`);
        console.log("------------------------------------------------");
    }

}


const manageLibrary = (actionInput, titleBook, autorBook, yearBook) => {
    console.log("#######################################");
    console.log("Por favor elija una opción: ");
    console.log("1.- Agregar libro");
    console.log("2.- Editarlibro ");
    console.log("3.- Eliminar libro");
    console.log("4.- Imprimir listado de libros");
    console.log("#######################################");

    switch(actionInput){
        case "1":
            addbook(titleBook, autorBook, yearBook);
            break;
        case "2":
            editBook(titleBook, autorBook, yearBook);
            break;
        case "3":
            deleteBook(titleBook);
            break;
        case "4":
            console.log("*** LISTADO DE LIBROS EXISTENTES ***");
            console.log("------------------------------------------------");
            printListBooks();
            break;
        default:
            console.log("Opción no válida, ingrese el número de la opción");
    }
}


manageLibrary("1","Cien Años de Soledad","Gabriel García Márquez","1967");
manageLibrary("1","El principito","Antoine de Saint-Exupéry","1943");
manageLibrary("1","Sincrodestino","Deepak Chopra","2003");
manageLibrary("1","Cuerpos sin edad, mentes sin tiempo","Deepak Chopra","1993");
manageLibrary("4","","","");
manageLibrary("3","Cien Años de Soledad","","");
manageLibrary("2","Cuerpos sin edad, mentes sin tiempo","Deepak Chopra","2000");