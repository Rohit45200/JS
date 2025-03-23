// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function Demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// Demo();
// console.log("done & bye")

//..................................
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
    
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();
// console.log("your program seccussfully  created")

// setTimeout(function(){
//     console.log("rohit kumar");
// }, 2000);

// console.log("hello guise")

// let h1 = document.querySelector("h1");

// function changecolor(color , delay , nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//         }, delay);
// }

// changecolor("red" , 1000 , () =>{
//     changecolor("orange" , 1000, () => {
//         changecolor("green" , 1000 , () => {
//             changecolor("blue" , 1000)
//         })
//     })
// });


// function savetoDb(data , success , failure){
//     let internetspeed = Math.floor(Math.random() * 10)+ 1;
//     if(internetspeed > 4){
//         success();
//     }
//     else{
//        failure();

//     }
// }

// savetoDb("rohit kumar" , 
// () => { 
//     console.log("your data was saved",data)
//     savetoDb(
//         "hello world",
//         () => {
//             console.log("sucess data")
//         },
//         () => {
//             console.log("data is failure")
//         }

//     )
// },
// () => {
//     console.log("weak connection data. data not saved");
// }
// );


// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed = Math.floor(Math.random() * 10) +1;
//         if(internetspeed > 4){
//             resolve("sucess : data was saved");
           
//         } 
//         else{
//             reject("failure : weak conection");
//         }
//     })
// }

// savetoDB("rohit kumar")

//  savetoDB("madan kumar");
//     .then (() => {
//         console.log("data1 : saved, promises was resolved");
//         savetoDB("misra ji");
//         .then(() => {
//             console.log("data2 saved")
//         })
//     });
//     .catch(() => {
        
//     })
    

// async function greet(){
//     n.b()
//     return"rohit kumar";
// }

// greet()

// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setInterval(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             reject();
//         }, 1000);
//     })
    
// }

// async function demo() {
//     await getnum();
//

// let url = "https://catfact.ninja/fact"


// async function fetchdat(url){

//     const data = await fetch(url);
//     console.log(data.json());   
    
// }
// fetchdat(url)
// let url = "https://catfact.ninja/fact2"

// async function  fetchdata(url) {
//     const data = await fetch(url);
//     console.log(data.json());
// }
// fetchdata(url);

// async function getfetch() {
//     let res = await fetch(url);
//     let data = await res.json()
//     console.log(data)
//     console.log(res);
//     console.log(data.fact);
//     console.log("rohit kmar")
    
// }
// getfetch();

// let btn = document.querySelector("button");
// let url2 = "https://www.bing.com/search?qs=AS&pq"
// btn.addEventListener("click", async()=>{
   
//     // let facts  = await getFacts();
//     // // console.log(facts);
//     // let p = document.querySelector("#facts");
//     // p.innerText = facts;
//     let link = await getimage();
//     console.log(link);
// });




// async function  getimage() {
//     try{
//         let res = await axios.get(url2);
//         console.log(res.data.message);
//     }catch(e) {
//         console.log("Error-",e)
//         return "/"
//     }
    

// } 

// getimage();

// let url = "https://catfact.ninja/fact"

// async function getjockes() {
//     try{
//         const config = {Headers:{accept:"application/json"}}
//         let res = await axios.get(url,config);
//         console.log(res.data)
//     } catch(Error){
//         console.log(Error);
        
//     }
     
// } 

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let p = document.getElementById("#result");
btn.addEventListener("click" , async () => {
    getcollege();
    
})

let country = "nepal";
async function getcollege() {
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(Error){
        console.log(Error);

    }
}



