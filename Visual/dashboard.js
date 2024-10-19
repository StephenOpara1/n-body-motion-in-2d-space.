const infobar = document.getElementById('infobar');
const dist = document.getElementById('distance');
const speed = document.getElementById('V');
const a = document.getElementById('acceleration');
let interv = null;
let count = 0;
const range = 25;

function updateInfo(n){
  dist.innerHTML = (distance(0,0,position[n].x, position[n].y)).toExponential(2)+'m';
        
  speed.innerHTML = (distance(0,0, velocity[n].x, velocity[n].y)).toExponential(1)+'m/s';
        
  a.innerHTML = (distance(0,0, acel[n].x, acel[n].y)).toExponential(1)+'m/s²';
};




path.addEventListener('click', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  let found = false; // Flag to check if a body is found

  body.forEach((val, k) => {
    const xp = axisCenter.x + meterToPixel(position[k].x);
    const yp = axisCenter.y - meterToPixel(position[k].y);

    if ((Math.abs(xp - x) <= range) && (Math.abs(y - yp) <= range) && !found) {
      if (count == 0) {
        count = 1;
        infobar.style.display = 'block';
        if (interv) {
          clearInterval(interv);
        }
        interv = setInterval(function() {
          updateInfo(k);
        }, 100);
        found = true; // Set the flag once a body is found
      } else {
        clearInterval(interv);
        interv = setInterval(function() {
          updateInfo(k);
        }, 100);
        found = true; // Stop the loop once the body is found
      }
    }
  });

  // If no body is found, hide the infobar
  if (!found) {
    count = 0;
    infobar.style.display = 'none';
  }
});

for(let s = 0; s < body.length; s++){
  container.insertAdjacentHTML('beforeend',`<span class='bod' id='bod${s}'>${body[s].name}</span>`);
};


let offset = 8;
setInterval(
  function () {
    for(let s = 0; s < body.length; s++){
      var bod = document.getElementById('bod'+s);
      bod.style.left = axisCenter.x + meterToPixel(position[s].x)+offset+'px';
      bod.style.top = axisCenter.y - meterToPixel(position[s].y)+'px';
    }
  }
  ,20);