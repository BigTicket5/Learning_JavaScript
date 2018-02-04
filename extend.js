Object.defineProperty(Object.prototype,
    "extend",
    {
        writable: true,
        enumerable: false,
        configurable: true,
        value: function(o){
            var names = Object.getOwnPropertyNames(o);
            for(var i=0;i<names.length;i++){
                if(names[i] in this) continue;
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                Object.defineProperty(this, names[i], desc);
            }
        }
    }
);

var  p ={
    x:1,
    y:'sss'
};
 var q ={};
 q.extend(p);
console.log(q.x);
console.log(q.y);

