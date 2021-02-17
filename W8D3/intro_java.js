// function mysteryScoping1() {
//     var x = 'out of block'; //functional scope
//     if (true) {
//       var x = 'in block';  //functional scope
//       console.log(x);
//     }
//     console.log(x); //overide the first x because var is functional varaible
//   }

// mysteryScoping1(); //in block, in block


// function mysteryScoping2() {
//     const x = 'out of block';  //block scope
//     if (true) {
//         const x = 'in block';  //block score
//         console.log(x);         
//     }
//     console.log(x);             
//   }

// mysteryScoping2() //in block, out of block


// function mysteryScoping3() {
//     const x = 'out of block'; //block scope
//     if (true) {
//       var x = 'in block';  //cannot overide the x
//       console.log(x);   
//     }
//     console.log(x);
//   }

// mysteryScoping3() //erros

// function mysteryScoping4() {
//     let x = 'out of block'; //block scope
//     if (true) {
//       let x = 'in block';   //block scope
//       console.log(x);   
//     }
//     console.log(x);
//   }

//   mysteryScoping4()//in block, out of block


// function mysteryScoping5() {
//     let x = 'out of block'; //block scope
//     if (true) {
//       let x = 'in block';   //block scope
//       console.log(x);
//     }
//     let x = 'out of block again'; //block scope
//     console.log(x); //error
// }

// mysteryScoping5()

// function madLib(verb,adj,noun) {
//     console.log('We shall ${verb} the ${adj} ${noun}.');
// };

madLib = (verb,adj,noun) => {
    console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
};
madLib('make', 'best', 'guac');

function isSubstring(searchString,subString) {
    console.log(searchString.includes(subString))
}

isSubstring("time", "ti")

function fizzBuzz(array) {
    let arr=[]
    array.forEach(n => {
        if ((n % 3 ===0 && n % 5 !== 0 ) || (n % 3 !==0 && n % 5 === 0 )) {
            arr.push(n)
        }
    });
    return arr
}

console.log(fizzBuzz([1,2,3,5,6,8,9,15]))

function isPrime(num) {
    for(i = 2; i < num; i++ ){
        if (num % i === 0) return false 
    }
    return 1 < num 
}

console.log(isPrime(5))


function sumOfNPrimes(n){
    let count = 0;
    let sum = 0;
    for(let i = 2; count < n; i++){
        if (isPrime(i)){
            count ++;
            sum += i
        }
    }
    return sum
}

console.log(sumOfNPrimes(3))