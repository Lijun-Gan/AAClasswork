function printCallback(word){
    console.log(word)
}

function titleize(name,callback){
    let title = name.map(function(w){
        
        return w[0].toUpperCase() + w.slice(1)
    });
  
    title.forEach(function(name) {

        let sent = `Mx. ${name} Jingleheimer schmidt`
        callback(sent)
    });

}


// titleize(["mary", "brian", "leo"], printCallback);

function Elephant(name, height, tricks){
    this.name =  name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
    const tru = `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`
    console.log(tru)
};
Elephant.prototype.grow = function() {
    this.height += 12;
};
Elephant.prototype.addTrick = function(trick){
    this.tricks.push(trick)
    return this.tricks
};
Elephant.prototype.play = function(){
    const trick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
    const play = `${this.name} is ${trick} `
    console.log(play)
}

// ele = new Elephant("lala", 12, ["drinking water","paiting a pictire"])


// console.log(ele.name)
// console.log(ele.height)
// console.log(ele.tricks)
// ele.trumpet()
// ele.grow()
// console.log(ele.height)
// console.log(ele.addTrick("rolling over"))
// ele.play()


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.__proto__.paradeHelper = function(elephant) {
    let sent = ` ${elephant.name} is trotting by!`
    console.log(sent)
};

// Elephant.paradeHelper(kate);

// herd.forEach(Elephant.paradeHelper )

function dinerBreakfast(){
    let order =  ["cheesy scrambled eggs"];
    console.log(`I'd like ${order.join(" ")} please`) //why this line cannot moved down to 83?
    return function(newOrder){
        // if (newOrder) {
            order.push(`and ${newOrder}`)
            console.log(`I'd like ${order.join(" ")} please`)
            // };
        }
        
    }

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");