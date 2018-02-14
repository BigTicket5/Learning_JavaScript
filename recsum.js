"use strict";
function flexisum(a){
    var total = 0;
    for(var i =0;i<arguments.length;i++){
        var element = arguments[i],n;
        if(element==null) continue;
        if(Array.isArray(element))
            n = flexisum.apply(this,element);
        else if(typeof element === "function")
            n = Number(element());
        else
            n = Number(element);
        if(isNaN(n))
            throw Error("error!");
        total += n;    
    }
    return total;
}

var a1 = [1,3,4,7,8];
console.log(flexisum(a1));
var a2 = [1,[1,1,1],[1,[1,1,1],1,[1,[1,1,1]]]];
console.log(flexisum(a2));