prompt("Please write your name:", "Name");
let person = prompt("Please write your partner name:", "Jatin");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore === 100) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Congratulations!<br> You and " + person + " are made for each other!</h1>");
} else if (loveScore > 40) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " You and " + person + " love each other like<br> Ranjha loves Heer!</h1>");
} else if (loveScore > 10) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + "RUN AWAY!!!!!</h1>");
} else {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Sorry! " + person + " will murder you.</h1>");
}
