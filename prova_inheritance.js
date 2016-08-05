
function closureExample() {
        var i = 0;

        var innerfunc = function(counter) {
            console.log('counter value is ' + counter);
            setTimeout(function() {
                console.log('counter value is ' + counter);
            }, 1000);
        };
        for (i = 0; i < 3; i++) {

            innerfunc(i);
        }

    }
    // call the example function
    closureExample();

var cashRegister = {
    total:0,
    //Dont forget to add your property
    lastTransactionAmount:0,
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount=itemCost;
    },
     voidlastTransactionAmount: function() {
        this.total -=  this.lastTransactionAmount;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidlastTransactionAmount();
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

var userAccount = new Object ();
console.log(userAccount.__proto__);
function Penguin2(name) {
    this.name = name;
    this.numLegs = 2;
}
function Penguin3(name) {
    this.name = name;
    this.numLegs = 2;
     this.array = [];
}
function Emperor2(color){
    Penguin3.call(this);
    this.color;
    }
function Emperor3(color){
    Penguin3.call(this);
    this.color;
}
function Emperor3(color){
     Penguin3.call(this);
    this.color;
}
   Emperor2.prototype=new Penguin3(); 
    //Emperor3.prototype=Penguin3.prototype;
    var emperor2 =new Emperor2("black");
    console.log(emperor2.name);
      emperor2.name="pippo";
      emperor2.array.push("aa");
 console.log( emperor2.array[0]);
     var emperor_seconda_istanza =new Emperor2("black");
    console.log( emperor_seconda_istanza.name);
    console.log( emperor_seconda_istanza.array[0]);
    Emperor3.prototype=Object.create(Penguin3.prototype);
       var emperor_terza_istanza =new Emperor3("red");
    console.log( emperor_terza_istanza.name);
    console.log( emperor_terza_istanza.array[0]);
   
   
   console.log(emperor2);
// create an "emperor" object and print the numemperor3ber of legs it has

function Penguin(name,numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create your Emperor class here and make it inherit from Penguin

function Emperor(name, legs,color){
     Animal.call(this, name, legs) 
     this.color=color;
    }
    Emperor.prototype=Penguin.prototype;
    var emperor =new Emperor("ciccio",2, "black");
   console.log("gambe: "+emperor.numLegs);
// create an "emperor" object and print the number of legs it has


function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
} 
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin(name, legs, color) {
    this.color = color;
    Animal.call(this, name, legs) 
}

// create a sayName method for Penguins here

Penguin.prototype=Animal.prototype; 
var pinguino1=new Penguin("ping1",2,"blaack");
console.log(pinguino1);
var pinguino2=new Penguin("ping2",2,"yellow");
console.log(pinguino2);
console.log(pinguino2.name);

var pianta={
	nome: "acero"
}
console.log(pianta);
function Pianta1(){
	this.nomePianta="Generic Plant";
}
console.log(Pianta1); 
var pianta1=new Pianta1();
console.log(pianta1);
pianta1.origine="Sud America"; 
pianta1.specie="Pianta1";
console.log(pianta1);
function Albero(daFrutto){
	this.daFrutto=daFrutto;
}
Albero.prototype=Pianta1.prototype; 
var albero=new Albero(true);
console.log(albero instanceof Albero);
console.log(albero instanceof Pianta1);

console.log(albero.hasOwnProperty('nomePianta'));
console.log(albero.hasOwnProperty('daFrutto'));

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
var list= function(){
    var contactsLength=contacts.length;
    for (i=0; i<contactsLength;i++) {   
        printPerson(contacts[i]);
    }
}
    
list();

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference("jhg","");

// Our Person constructor
function Person (name, age){
    this.name=name;
      this.age=age;
    
}

// Now we can make an array of people

family=[];
family.push(new Person("alice",40));
family.push(new Person("bob",42));
family.push(new Person("michelle",8));
family.push(new Person("timmy",6));

// loop through our new array
for (i=0;i<family.length;i++){
   console.log( family[i].name);
}



// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
}; 
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25

var susan={
    age:25,
    setAge:setAge
    };
susan.setAge(35);
// here, update Susan's age to 35 using the method


var review;
var getReview= function (movie) {
switch(movie){
 case "Toy Story 2": {
    review= "Great story. Mean prospector.";
    break;
    }
 case "Finding Nemo": {
    review= "Cool animation, and funny turtles.";
    break;}
 case "The Lion King": {
    review= "Great songs.";
    break;
    }
    default:  review= "I don't know!";
  }
  return review;
 }
console.log(getReview("Toy Story 2"));


var movies={
    "Toy Story 2":"Great story. Mean prospector.",
     "Finding Nemo":"Cool animation, and funny turtles.",
      "The Lion King":"Great songs."
    }
var getReview1 = function (movie) {
if (movies[movie]) return movies[movie];
else  return "I don't know!";
};
console.log(getReview1("Toy Story 2"));

var i;
for (i=1;i<=20;i++){
    if (i%3===0){
    console.log("Fizz");}
    else  if(i%5===0) {console.log("Buzz");}
    else  console.log(i);
};

friends =new Object();
friends.bill={firstName:"Bill",
                lastName:"",
                number:"1233",
                address:["via","via2"]};
friends.steve={firstName:"Steve",
                lastName:"",
                number:"123345",
                 address:["via3","via4"]};
var list=function(friends){
    var friend;
    for (friend in friends){console.log("contatto: "+friend);}
    };
var search=function(name){ 
    var friend;
    for (friend in friends){
        if (friends[friend].firstName == name){
            console.log("Trovato "+name+"="+JSON.stringify(friends[friend]));
            return friends[friend];
        }
    }
};
list(friends);
search("Steve");

function Fruit () {};
var f= new Fruit();
console.log(f);
f.propOggett='propOggett';
var g= new Fruit();
console.log(g);
console.log(f.hasOwnProperty('color'));
console.log(f.hasOwnProperty('toString'));
console.log('color' in f);
console.log('toString' in f);
Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

console.log('color' in f);
console.log(f.hasOwnProperty('color'));
object1={name:"gianni",age:42};
 for(var prop in object1) {
  console.log(prop);
     
      console.log(object1.prop);
  }
object2= new Object();
object2.age=2;
object3= new Object();
object3["surnname"]="doddddd";


function Animale()  { 
 this.eats= true;
 this.reproduce=true;
};
var animal = { eats: true,
               reproduce:true,
               eat: function() {this.full = true}
              };
function Coniglio() {this.jumps= true};
var animale =new Animale();
Coniglio.prototype=Animale.prototype;
var coniglio=new Coniglio();
Coniglio.prototype.sleep=true;

console.log(animale)
console.log(coniglio); // true



var rabbit = { jumps: true};
rabbit.__proto__ = animal // inherit
rabbit.eats=false;
animal.eat();
rabbit.eat();
console.log(rabbit);
console.log("reproduce "+rabbit.hasOwnProperty('reproduce'));
//console.log(rabbit instanceof Rabbit);
document.getElementById("demo").innerHTML = "rabbit eats:"+rabbit.eats;
