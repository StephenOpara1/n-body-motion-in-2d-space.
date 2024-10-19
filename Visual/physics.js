const path = document.getElementById('path');
const pathCtx = path.getContext('2d');
path.width = window.innerWidth;
path.height = window.innerHeight;


const G = 0.000000000066743;

/*calculates the magnitude of the acceleration caused by a body m*/
function accel(m,r) {
  var a = G*m/(r**2);
  return a;
}
/*calculates the distance traveled by an object under the influence of an acceleration a with initial velocity of u and time t*/
function S(a,u,t){
  var s = u*t + 0.5*a*(t**2);
  return s;
}

const colors = ['red','cyan','magenta','orange','greenyellow']
/*stores the current conditions of the animation like force and acceleration in the x and y directions*/
let velocity = [];
let position = [];
let acel = [];
 
function update() {
for(let h = 0; h < body.length; h++){
  var vix = body[h].vX;
  var viy = body[h].vY;
  velocity.push({x: vix,y:viy});
  var X = body[h].pX;
  var Y = body[h].pY;
  position.push({x:X,y:Y});
  acel.push({x:0,y:0});
}}
update();


/*the animation itself*/
let sX;
let sY;
let dt;
function motion() {
  spaceCtx.clearRect(0,0,window.innerWidth,window.innerHeight);
for(let j = 0; j < body.length; j++){
  for( let k = 0; k < body.length; k++){
    if(j !== k){
      var xn = position[k].x; 
      var xo = position[j].x;
      var yn = position[k].y;
      var yo = position[j].y;
      var dx = xn - xo;
      var dy = yn - yo;
      var R = distance(xn,yn,xo,yo);
      var A = accel(body[k].mass, R);
      acel[j].x += A * dx / R;
      acel[j].y += A * dy / R;
    } else { ;};
  };
  
  sX = S(acel[j].x, velocity[j].x, dt);
  sY = S(acel[j].y, velocity[j].y,dt);
  
  velocity[j].x += acel[j].x * dt;
  velocity[j].y += acel[j].y * dt;
  
  var X = axisCenter.x + meterToPixel(position[j].x);
  var Y = axisCenter.y - meterToPixel(position[j].y);
  
  spaceCtx.beginPath();
  spaceCtx.arc(X, Y, 8, 0, 2*Math.PI);
  spaceCtx.fillStyle = colors[j];
  spaceCtx.fill();
  
  
  pathCtx.strokeStyle = colors[j];
  pathCtx.lineWidth = 2;
  pathCtx.beginPath();
  pathCtx.moveTo(axisCenter.x+meterToPixel(position[j].x),
  axisCenter.y-meterToPixel(position[j].y));
  position[j].x += sX;
  position[j].y += sY;
  pathCtx.lineTo(axisCenter.x+meterToPixel(position[j].x),
  axisCenter.y-meterToPixel(position[j].y));
  pathCtx.stroke();
  
  acel[j].x = 0;
  acel[j].y = 0;
}
requestAnimationFrame(motion);
}
