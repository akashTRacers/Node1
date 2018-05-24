
var methods = {};	
methods.mergeObject=function(){

var obj1=
{"Name":"Akash","Age":22};

var obj2=
{"Address":"Indore","Class":20};


for(var val in obj2){
obj1[val]=obj2[val];
}

console.log(obj1);

}
exports.data = methods;

