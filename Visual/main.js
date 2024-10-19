const container = document.getElementById('container');
//the canvas
const space = document.getElementById('space');
const spaceCtx = space.getContext('2d');
space.width = window.innerWidth;
space.height = window.innerHeight;
//gets the system's initial condition from session storage.
const simData = sessionStorage.getItem('simData');

let frame;

//displays the value of the range input type as it changes. In this case the range input type's value is the speed of the animation times normal (1/60) sec
function intervalfunc(){
    //element that displays the value of the range input type.   
    const rangeValue = document.getElementById('rangevalue');
    //gets the value of the range input type.
    const times = parseFloat(document.getElementById('timespeed').value);
    rangeValue.innerHTML = times+'x normal speed';
    dt = (1/6) * times;
  };
const delay = 10;
//updates the code inside the intervfunc as the user slides.
let interval = setInterval(
  intervalfunc, delay);
 
 
//button that starts the simulation 
const start = document.getElementById('start');
//div element associated with the input part of the page (choosing speed...)
const input = document.getElementById('input');
//starts the animation after start is clicked 
start.addEventListener('click', function() {
  input.style.display = 'none';
  clearInterval(interval);
  container.style.display = 'block';
  //calls the animation function
  motion();
});


//restarts the animation after restart is clicked
const restart = document.getElementById('restart');
restart.addEventListener('click', function () {
  //reloads the page
  location.reload();
});