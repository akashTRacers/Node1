var readline1 = require('readline-sync');


var methods = {};	
methods.addDeleteObjectKey=function()
{

var obj1= {"Name":"Akash","Age":22,"Address":"Indore","Class":20};
console.log(obj1);
var choice1 = readline1.question("If you want to add key enter 'add' else 'delete' ");

switch(choice1){
			case "add":
					var key = readline1.question("please enter key");

					var value =readline1.question("Please enter value");
					obj1[key] = value;

				
					console.log(obj1);
					break;


			case "delete":
					var key = readline1.question("Please enter Key, you want to delete");
					delete obj1[key];
					
					console.log(obj1);
					break;

			default: 
					var key = prompt("Invalid Choice");
					

}
}	
exports.data=methods;


