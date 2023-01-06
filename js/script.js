prompt("Please write your name:", "Name");
prompt("Please write your partner name:", "Jatin");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore === 100) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Congratulations!<br> You are made for each other!</h1>");
} else if (loveScore > 40) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " You love each other like<br> Ranjha loves Heer!</h1>");
} else if (loveScore > 10) {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + "RUN AWAY!!!!!</h1>");
} else {
  document.write("<h1>Your love score is " + loveScore + "%<br>" + " Sorry! Your partner will murder you.</h1>");
}