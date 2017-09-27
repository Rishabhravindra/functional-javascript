// function that takes another function and a data type as an argument
// returns someAction()
function doSomething(someAction, element) {
 return someAction(element);
}

// return element object
function getElement(el) {
  return elementList[el];
}

// return element symbol
function getSymbol(el) {
   return elementList[el].symbol;
}

// return atomic number
function getAtomicNumber(el) {
   return elementList[el].atomicNumber;
}

// initialize the chemical element variable with a string
var elementList ={ "Carbon":{ "symbol": "C",
                              "atomicNumber": 6 },
                 "Krypton":{ "symbol": "Kr",
                              "atomicNumber": 36 }}
var element = "Carbon";

// call the doSomething function and pass getElement() as a parameter
var elemObject = doSomething(getElement, element);
console.log(elemObject);
// "Carbon"

// call the doSomething function and pass getSymbol() as a parameter
var symbol = doSomething(getSymbol, element);
console.log(symbol);
// C

// call the doSomething function and pass getAtomicNumber() as a parameter
var atNumber = doSomething(getAtomicNumber, element);
console.log(atNumber);
// 6