//1 
var colors = ["blue", "red", "white", "green", "yellow"];
//2
console.log(colors.index[0]);
//3
console.log(colors.index[3]);
//4
colors.splice(4, 1, "ultraviolet");
//5 
var fourthColor = colors.index[3];
//6
colors.push("brown");
//7  
colors.unshift("pink");
//8
console.log(colors.length);
//9
console.log(colors.pop());
//10

for (i = 0; i < colors.length; i++) {
    console.log(colors[i])
};

//11
for (i = 0; i < colors.length; i++) {
    console.log(i + colors[i])

};
//12
var lastColor = colors[colors.length -1 ]
console.log(lastColor);
// 1
let Person = {
    Name: "thai",
    age: "24",
    add: "thanh tri ha noi ",

}
//2
console.log("hello,my name is " + Person.Name)
//3
// 120<iq<200
Person.IQ = 120 + Math.floor(Math.random() * 80);
//4
Person.greeting = "Hello,it nice to meet you";
//5
Person.sayHello = "hello,my name is" + this.name;
//6
console.log(Person.sayHello)
//7'
Person.name = 'Billgate'
console.log(Person.sayHello)
//8
Person.testIQ = function () {
    if (Person.IQ > 150) {
        console.log("you are smart")
    }
    else {
        console.log("im not")
    }
}
//9
Person.testIQ()
//10
Person.IQ = 100 + Math.floor(Math.random() * 80);
Person.testIQ()
//13 

function PersonForm(name, age){
    this.name = name
    this.age = age
    this.greeting = function(){
        console.log("Hello" + this.name)
    }
}
let person1 = new PersonForm("ABC", 12)
let person2 = new PersonForm("DEF", 12)
person1.greeting()
person2.greeting()
console.log(person1)
// Function with array
//1
let Input = [1, 2, 3]
Array.isArray(Input);

//2


numbers = [3, 4, 5]
numbersCopy = numbers.slice();
//3
var myArray = [7, 9, 0, -2]
//4

let n = Number(prompt("enter your number"))
numbers = [1, 2, 3, 4, 5];
numbersCopy = numbers.slice(0, n);
//5
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
//7
var a = "hello world";
var b = a.toUpperCase();
var c = a.toLocaleLowerCase();
// 
// Tao ra 1 bien string rong: let myString = ""
// for qua string
// if string o vi tri thu i: string[i] == string[i].toUpperCase(): myString += string[i].toLowerCase
// else: myString += string[i].toUpperCase()
//
// FUNCTION WITH OBJECT


//1
var myOJ = {
    Namephone: "xiaomi mimix",
    Price: 999,
    Brand: "Xiaomi",
    Chipset: "Snapdragon855",

}
console.loge(myOJ);
//2
delete myOJ.Brand;
//3

var objsize = Object.objsize(myOJ);
console.log('Size of the current object : ' + objsize);
//4
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
   //5
