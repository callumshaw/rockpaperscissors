//THE GAME COUNT
let a = 0;
let b = 0;
let x = 5

//THE RESULT (WHO WINS)
function draw () {
  document.getElementById('insert').innerHTML = 'Draw';
}
function computerwin () {
  a++;
  document.getElementById('insert').innerHTML = `Computer Wins Round ${a} Of 5 To Win Game`;
//  document.getElementById('insert').appendChild(compwintwo);
}
function playerwin () {
  b++;
  document.getElementById('insert').innerHTML = `Player Wins Round ${b} Of 5 To Win Game`;
}

//THE WHY (WHAT CHOSEN)
function rockscissor (){
  document.getElementById('choice').innerHTML = `Rock Crushes Scissors`;
}
function rockpaper (){
  document.getElementById('choice').innerHTML = `Paper Covers Rock`;
}
function scissorpaper (){
  document.getElementById('choice').innerHTML = `Scissors Cut Paper`;
}


//THE WORKINGS
function thing (play) {

function computerselection () {
  let computer = Math.floor(Math.random() * 3);
  if (computer == 0){
    return "rock";
  }
  else if (computer == 1) {
    return "paper";
  }
  else if (computer == 2) {
    return "scissors";
  }
  }

let comp = computerselection();

if (comp == play) {
  draw();
  var compcapped = capitalize(comp);
  document.getElementById('choice').innerHTML = `You Both Chose ${compcapped}`;
}
else if (comp == "rock" && play == "scissors") {
   computerwin ();
   rockscissor();
   console.log(a);
}
else if (comp == "rock" && play == "paper") {
  playerwin ();
  rockpaper ();
  console.log(b);
}
else if (comp == "paper" && play == "rock") {
   computerwin ();
   rockpaper ();
   console.log(a);
}
else if (comp == "paper" && play == "scissors") {
    playerwin ();
    scissorpaper ()
    console.log(b);
}
else if (comp == "scissors" && play == "paper") {
   computerwin ();
   scissorpaper ()
   console.log(a);
}
else if (comp == "scissors" && play == "rock") {
  playerwin ();
  rockscissor();
  console.log(b);
  }



  if (a == x) {
    document.getElementById('insert').innerHTML = '<b>COMPUTER WINS THE GAME!</b> <em>Click Rock, Paper Or Scissors To Start Again...</em>';
    a = 0;
    b = 0;
  }
  else if (b == x) {
    document.getElementById('insert').innerHTML = '<b>PLAYER WINS THE GAME!</b> <em>Click Rock, Paper Or Scissors To Start Again...</em>';
    a = 0;
    b = 0;
  }
}

//THE INPUT
document.getElementById("rock").addEventListener("click", function() {
    thing("rock");
});
document.getElementById("paper").addEventListener("click", function() {
    thing("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
    thing("scissors");
});
document.getElementById("promptpara").onclick = function() {
    var pp = prompt("rock, paper or scissors?");
    var lowpp = pp.toLowerCase();
    thing (lowpp);
};

//MISC FUNCTION USED ABOVE
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}
