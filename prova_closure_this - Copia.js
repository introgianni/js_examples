    var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
    {name:"Tommy", playerID:987, age:23},
    {name:"Pau", playerID:87, age:33}
    ]
    }

    var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg     :function () {

    var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
    return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
    }
    }

    //If we run the code below,
    // the gameController.avgScore property will be set to the average score from the appController object
   
    // Don't run this code, for it is just for illustration; we want the appController.avgScore to remain nul
     appController.avg.apply(gameController, gameController.scores);




var data = [
        { name: "Samantha", age: 12 }, 
        { name: "Alexis", age: 14 }
    ];
   var user = {
          
            data: [
                { name: "T. Woods", age: 37 },
                { name: "P. Mickelson", age: 43 }
            ],
            showData: function(event) {
                var randomNum = ((Math.random() * 2 | 0) + 1) - 1; 
                 console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
            }
        }
   //  var showUserData = user.showData;
var showUserData = user.showData;
    showUserData.bind(user);   
showUserData();
        var user = {
        tournament: "The Masters",
        data: [
            { name: "T. Woods", age: 37 },
            { name: "P. Mickelson", age: 43 }
        ],
        clickHandler: function() {
            var tempPerson = this;
            this.data.forEach(function(person) {
                 console.log("What is This referring to? " + tempPerson); 
                console.log(person.name + " is playing at " + tempPerson.tournament);
             })
        }
    }
    user.clickHandler(); 

    ////////////////////////////////////////////////////////////////////////////////////esempio/closure//////////////////////////////
    var add = function() {
        var counter = 0;
        var inner = function() {
            return counter += 1;
        }
        counter += 1;
        inner();
    };
    add();


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
