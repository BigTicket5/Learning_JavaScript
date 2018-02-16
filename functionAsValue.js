var operators = {
    add: function(x,y) {return x+y;},
    subtract: function(x,y){return x-y;},
    multiply: function(x,y){return x*y;},
    divide: function(x,y){return x/y;},
    pow: Math.pow
}

function operate(operation, operand1, operand2){
    if(typeof operators[operation] === "function")
        return operators[operation](operand1,operand2);
    else throw "unkown operator";
}

var i = operate("add","hello",operate("add"," ","world"));
var k = operate("pow",10,2);

console.log(i);
console.log(k);

function constfuncs(){
    var funcs = [];
    for(var i=0;i<10;i++) funcs[i] = function(){return i;};
    return funcs;
}

var funcs = constfuncs();
console.log(funcs[5]());