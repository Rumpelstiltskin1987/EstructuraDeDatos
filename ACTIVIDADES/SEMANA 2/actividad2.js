const contacts = [

];

const phoneNumbers = [

];

const addContact = (contact, phonenumber) => {
    contacts.push(contact);
    phoneNumbers.push(phonenumber);
}

const editContact = (contact, phonenumber) => {
    let pos = contact.indexOf(contact);
    contacts[pos] = contact;
    phoneNumbers[pos] = phonenumber;
}

const deleteContact = (contact) => {
    let pos = contact.indexOf(contact);
    contacts.splice(pos, 1);
    phoneNumbers.splice(pos, 1);
}

const printContacts = () => {
    for (let i = 0; i <= contacts.length - 1; i++){
        console.log(`Nombre : ${contacts[i]}, Telefono: ${phoneNumbers[i]}`);
    }
}

const agenda = (actionInput, name, phone) =>{
    console.log("Vienvenido a su agenda, seleccione la acción que desea realizar: ");
    console.log("1.- Agregar contacto")
    console.log("2.- Editar contacto")
    console.log("3.- Eliminar contacto")

    let action = actionInput;

    switch(action){
        case "1":
            addContact(name,phone);
            break;
        case "2":
            editContact(name,phone);
            break;
        case "3":
            deleteContact(name);
            break;
        default:
            console.log("Opción no válida, ingrese el número de la opción")
    }
}

agenda("1","Enrique","9983352665");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
printContacts();
console.log("=====================================================");
agenda("1","Irbing","9981865680");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
printContacts();
console.log("=====================================================");
agenda("1","Armando","9981487166");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
printContacts();
console.log("=====================================================");
agenda("2","Enrique Javier","2741155808");
console.log("=====================================================");
console.log("Se ha editado un contacto de la agenda");
printContacts();
console.log("=====================================================");
agenda("3","Enrique Javier","2741155808");
console.log("Se ha eliminado un contacto de la agenda");
printContacts();
