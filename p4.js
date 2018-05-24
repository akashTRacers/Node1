

	
var methods = {};	
methods.mapMania=function(){
	var arr1 = [2,4,6,8];
	var plus5 = arr1.map((val, i, arr1) => {
  return val*2;
});

console.log(plus5);

}
exports.data = methods;
	