// window.setTimeout(function (){
//     alert('HAMMERTIME');
// },5000)

// function hammerTime(time){
//     console.log("its running")
//     window.setTimeout(function(){
//         alert(`${time} is hammertime!`)
//     },3000)
// }

// hammerTime(W8D45000)


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
    let first, second;
  
    reader.question('Would you like some tea?', (res) => {
      first = res;
      console.log(`You replied ${res}.`);
    });
  
    reader.question('Would you like some biscuits?', (res) => {
      second = res;
      console.log(`You replied ${res}.`);
    });
  
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
  }

  teaAndBiscuits();

