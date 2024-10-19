//the upper bar of the page
const head = document.getElementById('head');
//button in the input box that starts the calculation after being clicked.
const solv = document.getElementById('solve');
//div containing the inout element where the time of interest is typed.
const input = document.getElementById('input');
//div containing the divs containing the conditions of the respective bodies after time T.
const data = document.getElementById('data');
//button responsible for preparing the page for another calculation.
const refresh = document.getElementById('refresh');


solv.addEventListener('click', function(){
  //the head becomes visible 
  head.style.display = 'block';
  //removes the input region of the page
  input.style.display = 'none';
  //
  data.style.display = 'block';
  //a condition for the calculation to run.
  running = true;
    //function handling user input (unit conversion).
    output();
});


//displays the system's conditions based on the input time on the page.
function display() {
  //dura represents the time for which the conditions are true.
  head.innerHTML ='System Condition After ' + dura;
  //creates divs for each body's condition 
  for(let i = 0; i < body.length; i++){
  data.insertAdjacentHTML('beforeend',`
    <div>
  <i>${body[i].name}</i><br><br>
  <span>Mass:</span><br>
  <span>${(body[i].mass).toExponential(2)} Kg</span><br><br>
  <span>Position X:</span><br>
  <span>${(position[i].x).toExponential(2)} m</span><br>
  <span>Position Y:</span><br>
  <span>${(position[i].y).toExponential(2)} m</span><br><br>
  <span>Velocity X:</span><br>
  <span>${(velocity[i].x).toExponential(2)} m/s</span><br>
  <span>Velocity Y:</span><br>
  <span>${(velocity[i].y).toExponential(2)} m/s</span><br><br>
  <span>Acceleration X:</span><br>
  <span>${(acel[i].x).toExponential(2)} m/s²</span><br>
  <span>Acceleration Y:</span><br>
  <span>${(acel[i].y).toExponential(2)} m/s²</span>
  </div>
  `)
  }
}

refresh.addEventListener('click', function(){
  //stops the calculation when restart is clicked to stop JavaScript from running it before the page is reloaded();
  running = false;
  head.style.display = 'none';
  //removes the input region of the page
  input.style.display = 'block';
  //
  data.style.display = 'none';
  elapsedtime = 0;
})