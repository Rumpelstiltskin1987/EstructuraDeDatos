let text = [
    ["H"],
    ["o"],
    ["l"],
    ["a"]
];


const stringText = () => {
    let message = "";
    for (let i = 0; i <= text.length - 1; i++){
        message = message + text[i];
    }
    console.log(message);
}

const addChar = (letter) => {
    text.push([letter]);
}

const deleteChar = (position) => {
    text.splice(position, 1)
}

const editChar = (letter, position) => {
    let i = parseInt(position);
    let j = 0;
    
    text[i][0] = letter;
}


addChar("!");
stringText();
console.log("=============================");
deleteChar(3);
stringText();
console.log("=============================");
editChar("a", 3);
stringText();
console.log("=============================");
