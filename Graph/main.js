const body = JSON.parse(sessionStorage.getItem('simData'));
const input = document.getElementById('input');
const container = document.getElementById('container');
let bodyIndex;
let graphName;
let timeStep;
let timeBegin;
let timeStop;
//creates buttons representing each body in the input element.
for (var i = 0; i < body.length; i++) {
  input.insertAdjacentHTML('beforeend',`
  <button>${body[i].name}</button>
`);
bodyBtn();
};

//stores the index of the body chosen by the user by clicking respective buttons

function bodyBtn() {
const btns = input.getElementsByTagName('button');
for (var k = 0; k < btns.length; k++) {
  const i = k;
  btns[k].addEventListener('click', function () {
      bodyIndex = i;
      input.innerHTML = `
      <i id='header'>${body[i].name} Graph Of</i>
      <br><br>
      <ul>
      <li>Position</li>
      <li>Velocity</li>
      <li>Acceleration</li>
      <li>Force</li>
      </ul>
      <button id='back1'>Back</button>
      `;
      //
      back1();
      //listens for the clicking of any item on the list
      li();
  })
}
}

//
function back1() {
  const back1 = document.getElementById('back1');
  
  back1.addEventListener('click',function () {
    input.innerHTML = `<i id="header">Choose Body.</i><br><br>`
    //returns input to it's previous state.
    for (var i = 0; i < body.length; i++) {
    input.insertAdjacentHTML('beforeend',`
    <button>${body[i].name}</button>
    `);
    bodyBtn();
};
  })
}


function li() {
  const lis = input.getElementsByTagName('li');
  for (var j = 0; j < lis.length; j++) {
    const k = j;
    lis[j].addEventListener('click' ,function () {
        graphName = lis[k].innerText;
        input.style.display = 'block';
        //changes the content of input 
        input.innerHTML = `
        <i id="header">Others</i>
        <br><br>
        <h3>Time step in sec.;</h3>
        <input id='timeStep' type="number"><br>
        <h3>Start Time</h3>
        <input id='timeBegin' type="text"><br>
        <h3>Stop Time</h3>
        <input id='timeStop' type="text"><br><br><br>
        <button id="back2">Back</button>
        <button id="plot">Plot</button>

        `;
        back2();
        plotBtn();
    })
  }
}

function back2() {
  const back2 = document.getElementById('back2');
  back2.addEventListener('click', function () {
      input.innerHTML = `
      <i id='header'>${body[bodyIndex].name} Graph Of</i>
      <br><br>
      <ul>
      <li>Position</li>
      <li>Velocity</li>
      <li>Acceleration</li>
      <li>Force</li>
      </ul>
      <button id='back1'>Back</button>
      `;
      //
      back1();
      //listens for the clicking of any item on the list
      li();
  })
}

//listens for the plot button 
function plotBtn() {
  const plot = document.getElementById('plot');
  plot.addEventListener('click', function () {
    timeStep = document.getElementById("timeStep").value;
    timeBegin = document.getElementById('timeBegin').value;
    timeStop = document.getElementById("timeStop").value;
    input.style.display = 'none';
    container.style.display='block';
    inputHandler();
  })
}