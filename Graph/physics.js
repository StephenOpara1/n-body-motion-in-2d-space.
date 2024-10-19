//stored the data needed to plot the graph
let graphData = [];

function graphNameToArray(arrayName, j){
  switch (arrayName) {
    case 'Position':
      return graphData.push({x: position[j].x, y: position[j].y});
    case 'Velocity':
      return graphData.push({x: velocity[j].x, y: velocity[j].y});
    case 'Acceleration':
      return graphData.push({x: acel[j].x, y: acel[j].y});
  }
}

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

//distance between two bodies based on their x and y coordinates 
function distance(x1,y1,x2,y2) {
 var y = (y2-y1)**2;
 var x = (x2-x1)**2;
 var n = (y+x)**0.5
  return n;
}


//stores the current condition of the calculation to be used for the next time step
let velocity = [];
let position = [];
let acel = [];
 


//pushes the data from the array body to the arrays above to be used by the code
for(let h = 0; h < body.length; h++){
  var vix = body[h].vX;
  var viy = body[h].vY;
  velocity.push({x: vix,y:viy});
  var X = body[h].pX;
  var Y = body[h].pY;
  position.push({x:X,y:Y});
  acel.push({x:0,y:0});
};


let sX;
let sY;
//length of the simulation time step
let dt;
//stores how much time has passed
let elapsedtime = 0;


//function behind the system's physics.
function motion() {
  let graphInfo = graphNameToArray(graphName, bodyIndex);
  //continues running the simulation until elapsed time is equal to the input time of the user represented by the variable T.
  while(elapsedtime <= timeStop){
for(let j = 0; j < body.length; j++){
  //stores the value of the below for loop temporarily 
  let acelX = 0;
  let acelY = 0;
  //calculates the acceleration caused by each body except the body itself 
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
      acelX += A * dx / R;
      acelY += A * dy / R;
    } else { ;};
  };
  
  if (j == bodyIndex) {
    graphInfo;
  }
  //stores the value of each body's acceleration in the acel array 
  acel[j].x = acelX;
  acel[j].y = acelY;
  //calculates and stores the displacement caused by that acceleration in the sX and sY variables
  sX = S(acel[j].x, velocity[j].x, dt);
  sY = S(acel[j].y, velocity[j].y,dt);
  //calculates the change in velocity caused by that acceleration and updates the value of the velocity array
  velocity[j].x += acel[j].x * dt;
  velocity[j].y += acel[j].y * dt;
  
  //updates the position array
  position[j].x += sX;
  position[j].y += sY;
}
  //updates how much time has passed 
  elapsedtime += dt;
  }
  plotGraph();
  }


