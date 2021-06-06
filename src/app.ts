let a = 5
let b = 6
let c = [a, b, 7.8, 3]
const sum = (a:number, b:number) => a+b

console.log("cause I'm here")

console.log("debug testing", sum(a,b))
c.map(el=> console.log(el*2))
console.log('intermedia')
 c = [sum(a,b)]
console.log("cause I'm here 2", c)