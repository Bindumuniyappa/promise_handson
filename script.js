function age(a,b){
    return a+b;
}
function detail(name,age){
    console.log(`${name},${age}`)
}
detail("bindu",age(10,12));

// setTimeout(() => {
// let count=1;
//     console.log(count++);
//     setTimeout(() => {
//         console.log(count++);
//         setTimeout(() => {
//             console.log(count++);
//             setTimeout(() => {
//                 console.log(count++);
//                 setTimeout(() => {
//                     console.log(count++);
//                     setTimeout(() => {
//                         console.log(count++);
//                         setTimeout(() => {
//                             console.log(count++);
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// function callback1(cb){
//     for(let i =1;i<=7;i++){
//         cb(i);
//     }
// }
// callback1(function cb(i){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// });

const newPromise=new Promise((resolve,reject) => {
    let batch="EA18";
    if(batch==="EA18"){
        resolve("Welcome to batch EA18");
    }
    else{
        reject("please try again later");
    }
})

newPromise.then((x)=>{
    console.log(x)
}).catch((x)=>{
    console.log(x);
})

    