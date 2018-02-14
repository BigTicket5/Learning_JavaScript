function classof(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classof(1));
console.log(classof({}));
console.log(classof(false));
console.log(classof('false'));

var a =[1,2,3,4,5];
a.splice(2,0,'a','b');
a.splice(2,2,[1,2],3);
console.log(a);
