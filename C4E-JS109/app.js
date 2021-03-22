// let myCofe = {
//     cofename: 1,
//     cityname: "hanoi"
    
// }
// let myCofe2 = {
//     cofename:2,
//     cityname: "hanoi"
// }
// let data =[myCofe,myCofe2]

let coffe = [
    {
        name:"Aho",
        city:"Hanoi"
    },
    {
        name:"alo",
        city:"Hung Yen"
    },
    {
        name:"blo",
        city:"Ha noi"
    }
]

function rederItem(doc){
    let myFrom = document.getElementById("cafe-list");
    let li = document.createElement("Li");
    let name = document.createElement("span");
    let city = document.createElement("span");
let cross = document.createElement("div");
name.textContent = doc.name;
city.textContent = doc.city;
li.appendChild(name);
li.appendChild(city);
myFrom.append(li);

}
for ( let i = o; i<coffe.length;i++)
{
renderItem(cafes[i]);
}

