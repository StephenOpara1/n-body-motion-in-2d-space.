const time = document.getElementById('time');
const unitChoice = document.getElementById('unitChoice');
let unitConverterIndex;
let unitValue;

time.addEventListener('focus', () => {
  unitChoice.style.display = 'block';
});
  
  
const unitConverter = [
function secToSec(s) {
  return s;
},
function hourToSec(h) {
  const n = h*60*60;
  return n;
},
function yearToSec(y) {
  const n = y*365*24*60*60;
  return n;
}];

  
unitChoice.addEventListener('change', () => {
  const selectedUnit = unitChoice.value;
  unitConverterIndex = parseFloat(selectedUnit);
  switch (unitConverterIndex) {
    case 0:
      unitValue = 'sec';
      break;
    case 1:
      unitValue = 'hrs';
      break;
    case 2:
      unitValue = 'yrs';
      break;
    default:
  }
});



let T;
let duration;
function output(){
T = parseFloat(time.value);
duration = T;
T = unitConverter[unitConverterIndex](T);
dt = parseFloat(timeStep);
motion();
};

  
