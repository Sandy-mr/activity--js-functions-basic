//------------------------------------------------------------------
// TASK 2 : columnsToPercentWidth()
//
//  Write a function called columnsToPercentWidth() that accepts the number of columns
//  as input and returns a string with the width percentage
//
//  Examine the functionality of `columnsToPctWidth` in the function below
//.   Formula: ( 100 / «input» )
//
//. Note: you may want to use the `parseInt()` utility to convert a decimal to an integer
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//
//------------------------------------------------------------------
function columnsToPercentWidth(porc){
	if (porc===0  || 100/porc < 0){
		return "0%";
	}else{
		var result = 100/porc
		return (parseInt(result)) + "%";
	}
}



console.log("====== columnsToPercentWidth ======")

console.assert(columnsToPercentWidth(1) === "100%")
console.assert(columnsToPercentWidth(2) === "50%")
console.assert(columnsToPercentWidth(3) === "33%")
console.assert(columnsToPercentWidth(4) === "25%")
console.assert(columnsToPercentWidth(5) === "20%")
console.assert(columnsToPercentWidth(6) === "16%")
console.assert(columnsToPercentWidth(10) === "10%")

// Handle input of 0 or negative numbers
console.assert(columnsToPercentWidth(0) === "0%")
console.assert(columnsToPercentWidth(-3) === "0%")



