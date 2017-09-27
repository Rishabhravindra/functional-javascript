const getStdin = require('get-stdin');

var promise = getStdin();
promise.then(str => {
// initialize the chemical element variable with a string
var elementList =["Carbon", "C",  6 ];
// function that takes another function and a data type as an argument
// returns someAction()
function doSomething(someAction, element) {
	someAction = eval(someAction);
 return someAction(element);
}

// return element object
function getElement(el) {
  return elementList[0];
}

// return element symbol
function getSymbol(el) {

   return elementList[1];
}

// return atomic number
function getAtomicNumber(el) {
   return elementList[2];
}


// run initialize function after input is read
    var commandList = [];
        commandList = str.split("\n");

    for (var i = 0; i < commandList.length; i++) {
        commandList[i] = commandList[i].split(" ");
    }    
	commandList.pop();

	commandList.forEach(
		function(data) { console.log(  doSomething(data[0], data[1]))
		});
	
	// for (var i =0; i<commandList.length; i++){
	// 	console.log(doSomething(commandList[1][0], commandList[1][1]));
	// }
	}
);
