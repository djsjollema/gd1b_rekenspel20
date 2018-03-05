const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');

let assignments = [];
let counter = 0;

myInput.addEventListener('keydown',inputHandler,false);

function inputHandler(evt){
  if(evt.keyCode == 13){
    assignments[counter].myAns = myInput.value;
    console.log(assignments);
    counter++;
    makeSum();
  }
}

function makeSum(){
  let sum = {};
  sum.numA = getNumber();
  sum.numB = getNumber();
  sum.ans = eval(sum.numA * sum.numB);
  assignments.push(sum);
  myAssignment.innerHTML = assignments[counter].numA + " x " + assignments[counter].numB + " = " + assignments[counter].ans;
}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

makeSum();
