"use strict";
var a = 5;
var b = 6;
var c = [a, b, 7.8, 3];
var sum = function (a, b) { return a + b; };
console.log("cause I'm here");
console.log("debug testing", sum(a, b));
c.map(function (el) { return console.log(el * 2); });
console.log('intermedia');
c = [sum(a, b)];
console.log("cause I'm here 2", c);
//# sourceMappingURL=app.js.map