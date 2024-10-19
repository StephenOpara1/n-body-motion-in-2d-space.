const container = document.getElementById('container');
const addBody = document.getElementById('addbody');
const removeBtn = document.getElementById('remove');
var divcount = 0;
var bodies = [];
var body = [];

/*adds a body when the add button is clicked*/
addBody.addEventListener('click', 
  function () {
    const num = divcount+1;
    container.insertAdjacentHTML('beforeend',`<div id="body${divcount}"><h3>BODY ${num}</h3><span>Name:</span><br><input class="name" type="text"><br><span>Mass:</span><br><input class="mass" type="number"><br><span>Position y: </span><br><input class="py" type="number"><br><span>Position x: </span><br><input class="px" type="number"><br><span>Velocity y:</span><br><input class="vy" type="number"><br><span>Velocity x:</span><br><input class="vx" type="number"></div>`);
    bodies[divcount] = document.getElementById('body'+divcount);
    divcount+=1;
  });
    
/*removes the previous body when remove is clicked*/
removeBtn.addEventListener('click', 
  function () {
    if(divcount > 0){
    divcount -=1;
    const previousdiv = document.getElementById('body'+divcount);
    container.removeChild(previousdiv);
    bodies.pop();
    body.pop();
    } else{ ;};
    });
  
  
/*updates the properties of each body ad the value of their inputs change*/
  setInterval(function () {
  for (let i = 0; i < divcount; i++) {
    body[i] = {
      name: bodies[i].querySelector('.name').value,
      mass: parseFloat(bodies[i].querySelector('.mass').value),
      pY: parseFloat(bodies[i].querySelector('.py').value),
      pX: parseFloat(bodies[i].querySelector('.px').value),
      vY: parseFloat(bodies[i].querySelector('.vy').value),
      vX: parseFloat(bodies[i].querySelector('.vx').value)
    };
  }
},100);


/*stores the animation initial conditions data in section storage so it can be accessed by other html files*/
const atag = document.getElementsByTagName('a');
for(let i = 0; i< atag.length; i++){
atag[i].addEventListener('click', function(){
  const simData = JSON.stringify(body);
  sessionStorage.setItem('simData',simData);
})
};
