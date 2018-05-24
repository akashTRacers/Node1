

var readline = require('readline-sync');

console.log("Enter 1 for printing numbers 1 to 100");
console.log("Enter 2 for join two array with out using inbuilt funcion");
console.log("Enter 3 for join two array using inbuilt funcion");
console.log("Enter 4 for use the map function to double all elements in the array");
console.log("Enter 5 for merge two objects into a single object");
console.log("Enter 6 for Delete an item i from array  without changing original array");
console.log("Enter 7 for add and remove object key from an object");
console.log("Enter 8 for delete an item at index i from array in original array");
console.log("Enter 9 for print star pyramid");

var choice = readline.question("What is your choice? ");
var ch=Number(choice);
console.log("your choice is "+choice);

switch(ch)
{
	case 1: 
			var p1 = require('./p1.js');
			p1.data.count();
			break;
	case 2: 

			var p2 = require('./p2.js');
			p2.data.joinArray();
			break;

	case 3: 	
		var p3 = require('./p3.js');
			p3.data.joinArray();
			break;	

	case 4: 	
		var p4 = require('./p4.js');
			p4.data.mapMania();
			break;			

	case 5: 	

		var p5 = require('./p5.js');
			p5.data.mergeObject();
			break;	

	case 6: 	
	
		var p6 = require('./p6.js');
			
	
			p6.data.deleteElementReturnNewArray();
			break;	

	case 7: 	

		var p7 = require('./p7.js');
			console.log('7');
			p7.data.addDeleteObjectKey();
			break;	

	case 8:
			var p8 = require('./p8.js');
			
			
			p8.data.deleteElementFromArray();
			break;			

	case 9:
			var p9 = require('./p9.js');
			
			
			p9.data.pyramids();
			break;			
	default: 
		console.log("invalid choice");
		break;



}
