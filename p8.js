
var readline1 = require('readline-sync');


var methods = {};	
methods.deleteElementFromArray=function()

{
	var fruits = ["Banana", "Orange", "Apple", "Mango","Grapse"];
	console.log("Original fruits "+fruits)
	var pos = readline1.question("please enter position from where you want to delete Element");

	var index=Number(pos);
	
	index=index-1;
	delete fruits[index];
	console.log("After Element Deletion " +fruits);

}
 
exports.data= methods


