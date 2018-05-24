
	 
    var methods = {};   
methods.pyramids=function(){

     var rows = 5, k = 0;
	 	str="";
        for(var i = 1; i <= rows; ++i, k = 0) {
            for(var space = 1; space <= rows - i; ++space) {
                str+="  ";
            }

            while(k != 2 * i - 1) {
                str=str+"* ";
                ++k;
            }

            str=str+"\n";
        }
        console.log(str);

    }
    exports.data=methods;
