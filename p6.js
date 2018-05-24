

var readline1 = require('readline-sync');

var methods = {};	
methods.deleteElementReturnNewArray=function()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango","Grapse"];
	console.log("Original Array "+fruits);
		var pos = readline1.question("please enter position from where you want to delete Element ");
	var index=Number(pos);
	
	index=index-1;
	var arr2=[];
	arr2=fruits.filter((num,i)=>{
		if(i!=index)
			return num;
	});

	console.log("After Element Deletion "+arr2);
	
}
exports.data= methods
 



