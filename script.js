let [milliseconds, seconds, minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector('timer-display');
let int = null;

document.getElementById('start-button').addEventListener('click',() => {
  if(int !== null){
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

function displayTimer(){
  console.log('it works')
}