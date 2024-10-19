let T;
let dura;
function output(){
//input time of user.
const duration = document.getElementById('time').value;
T = parseFloat(duration);
//stores the value of duration externally in dura.
dura = duration;
const text = duration.replace(/[0-9]/g, '').toLowerCase();
//input has been properly handled by doing the necessary unit conversion, the function handling the simulation is called.
motion();
};

const func = [
function minToSec(m) {
  const n = m*60;
  return n;
},
function hourToSec(h) {
  const n = h*60*60;
  return n;
},
function dayToSec(d) {
  const n = d*(24*60*60);
  return n;
},
function weekToSec(w) {
  const n = w*7*24*60*60;
  return n;
},
function monthToSec(m){
  const n = m*31*24*60*60;
  return n;
},
function yearToSec(y) {
  const n = y*365*24*60*60;
  return n;
}];

const units = ['minute','hour','day','week','month','year'];



function compare() {
  units.forEach(function (unit) {
    
  });
};