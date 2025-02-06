//spread operator
let arr=[1,2,3,4,5];
let arr2=[...arr,6,7,8,9];
function sum( a,b,c,d,e,f,g,h){
    return a+b+c+d+e+f+g+h;
}

let b=sum(...arr,...arr2);

// console.log(b);

let obj={
    name:'aditya',
    age:21,
}
let obj2={
    ...obj,
    city:'bbsr',
    country:'india',
}
let {city,country}=obj2;
console.log(city,country);