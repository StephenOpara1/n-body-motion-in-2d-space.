//note that the average distance between bodies in meters is equal to 400px of the screen.

//gets the simulation initials 
const body = JSON.parse(simData);
/*in meters*/
let scale = 1;
let averageDistance = 0;
let averageCoordinate = {x:0,y:0};
//intersection point of the x and y coordinates 
let axisCenter = {x:window.innerWidth/2, y:window.innerHeight/2};


function distance(x1,y1,x2,y2) {
 var y = (y2-y1)**2;
 var x = (x2-x1)**2;
 var n = (y+x)**0.5
  return n;
}

//converts meters to pixel using the fact that I chose the average distance between bodies to be equal half the window size on screen.
function meterToPixel(m) {
  const p = m*window.innerHeight/((averageDistance/scale)*2);
  return p;
}

//converts meters to pixels based on the same fact
function pixelToMeter(p) {
  const m = p*(averageDistance/scale)/(window.innerHeight/2);
  return m;
}


//calcalculates the average distance between bodies in meters and stores it in the averageDistance variable.
for(let k = 1; k < body.length; k++){
  averageDistance += distance(body[0].pX,body[0].pY, body[k].pX, body[k].pY)/(body.length-1);
}

//solves for the average coordinate of the bodies and stores it in the averageCoordinate object.
for(let i = 0; i < body.length; i++){
  averageCoordinate.x += body[i].pX/(body.length);
  averageCoordinate.y += body[i].pY/(body.length);
}


//html element serving as the x axis
const xaxis = document.getElementById('xaxis');
const yaxis = document.getElementById('yaxis');
//html element at the top of the screen showing the y value in meters at that point with respect to axisCenter
const topy = document.getElementById('topy');
//does the same for the bottom of the screen 
const bottomy = document.getElementById('bottomy'); 
//same for right 
const rightx = document.getElementById('rightx');
//same for left
const leftx = document.getElementById('leftx');
//html element saying 0 at the intersection point of the two axis.
const center = document.getElementById('center');

//responsible for setting the average coordinate
 axisCenter.x -= meterToPixel(averageCoordinate.x);
 axisCenter.y += meterToPixel(averageCoordinate.y);
 
 
 //updates the coordinates and values of html elements associated with position based on user gestures such as scaling and scrolling.
function grid(){
  //set's the position of the x and y axis based on the coordinates of their center
  xaxis.style.top = axisCenter.y+'px';
  yaxis.style.left = axisCenter.x+'px';

//updates the value of html elements at the sides of the screen showing the coordinate at that point.
  topy.innerHTML = (pixelToMeter(axisCenter.y)).toExponential(1)+'m';
  topy.style.left = axisCenter.x+'px';

  bottomy.innerHTML = (pixelToMeter(axisCenter.y-window.innerHeight)).toExponential(1)+'m';
  bottomy.style.left = axisCenter.x+'px';

  rightx.innerHTML = (pixelToMeter(window.innerWidth-axisCenter.x)).toExponential(1)+'m';
  rightx.style.top = axisCenter.y+'px';

  leftx.innerHTML = (pixelToMeter(-axisCenter.x)).toExponential(1)+'m';
 leftx.style.top = axisCenter.y+'px';


 center.style.left = axisCenter.x +'px';
 center.style.top = axisCenter.y +'px';

};

//calls the grid function once the page is loaded.
grid();