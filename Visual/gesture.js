
let currentP = [];
let currentX;
let currentX0;
let currentY;
let currentY0;


/*makes moving around the page possible*/
path.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    currentY = e.touches[0].clientY;
    currentX = e.touches[0].clientX;
  }
})


path.addEventListener('touchmove', (e) => {
  event.returnValue = false;
  event.preventDefault();
   if(e.touches.length === 1){
     currentY0 = currentY;
    currentX0 = currentX
     currentY = e.touches[0].clientY;
     currentX = e.touches[0].clientX;
      axisCenter.x += currentX-currentX0;
      axisCenter.y += currentY-currentY0;
      grid();
   }
});

path.addEventListener('touchend', () => {
  currentP = [];
});





let startDistance;
let startY;
let startX;
let scale0;
let currentDistance;
let currentDistance0;
let startScale;

path.addEventListener('touchstart', (k) => {
  if (k.touches.length === 2) {
    startDistance = getDistance(k.touches[0], k.touches[1]);
    startY = (k.touches[0].clientY+k.touches[1].clientY)/2;
    startX = (k.touches[0].clientX+k.touches[1].clientX)/2;
    currentDistance = startDistance;
    startScale = scale ;
  }
});

path.addEventListener('touchmove', (k) => {
  event.returnValue = false;
  event.preventDefault();
  if (k.touches.length === 2) {
    scale0 = scale;
    currentDistance0 = currentDistance;
    currentDistance = getDistance(k.touches[0], k.touches[1]);
    const pinchScale = currentDistance/currentDistance0;
    scale *= pinchScale;
    axisCenter.y += (axisCenter.y-startY)*(scale-scale0)*(1/startScale);
    axisCenter.x += (axisCenter.x-startX)*(scale-scale0)*(1/startScale);
    grid();
  }
});






function getDistance(p1, p2) {
  const dx = p2.clientX - p1.clientX;
  const dy = p2.clientY - p1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}
