function add (a, b) {
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b) {
   return a * b;
}
function divide(a, b) {
   return b !== 0 ? (a / b) : undefined;
}

function sortArray(array) {
    if (!Array.isArray(array)) return [];
    return array.sort((a, b) => a - b);
}
