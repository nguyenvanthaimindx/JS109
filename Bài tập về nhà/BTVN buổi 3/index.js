let myEmperorpenguin = {
    "Name" : "little king",
    "High": 122, //cm,
    "color": ["blue","white"],
    "origin": "the south pole",
  "Ability" : ["swim", "fly"],



}
// console.log(myEmperorpenguin.Name);
// alert ("hello . I am Nguyen Thai's penguin " + " and my name is " + myEmperorpenguin.Name)
// myEmperorpenguin.chirp = function(){
//     console.log(chipchip)
// }
// console.log(myEmperorpenguin )
// myEmperorpenguin.chipchip


// myEmperorpenguin.canFly = false

// console.log(myEmperorpenguin)

myEmperorpenguin.sayhello = function(){
    console.log("hello . I am Nguyen Thai's penguin " + " and my name is " + this.Name)
}
myEmperorpenguin.sayhello()
myEmperorpenguin.name= "Penguin MC"
console.log(myEmperorpenguin.name)
//8
myEmperorpenguin.fly= function(){
    if(this.canFly== true)}