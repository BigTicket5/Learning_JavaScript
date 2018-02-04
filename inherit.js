function inherit(p){
    if(p===null) throw TypeError();
    if(Object.create) return Object.create(p);
    var t = typeof p;
    if(t!="object" && t!="function") throw TypeError();
    function f(){}
    f.prototype = p;
    return new f();
}
var p = {
    x:1.0,
    y:1.0,
    get r(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    },
    set r(newvalue){
        var oldvalue = Math.sqrt(this.x*this.x+ this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};

var q = inherit(p);
q.x = 2, q.y = 2
console.log(q.r);
console.log(q.theta);
console.log(p.r);
console.log(p.theta);