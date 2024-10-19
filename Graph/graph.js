const W = window.innerWidth;
const H = window.innerHeight;

const graphX = document.getElementById('graphX');
graphX.width = 0.95*W;
graphX.height = 0.4*H;

const graphY = document.getElementById('graphY');
graphY.width = 0.95*W;
graphY.height = 0.4*H;

const graphXY = document.getElementById('graphXY');
graphXY.width = 0.95*W;
graphXY.height = 0.4*H;

let graphDataX = [];
let graphDataY = [];
let maxX; let minX;
let maxY; let minY;


function xYSeperator() {
  for (var n = 0; n < graphData.length; n++) {
    graphDataX.push(graphData[n].x);
    graphDataY.push(graphData[n].y);
  }
  
  maxX = Math.max(...graphDataX);
  maxY = Math.max(...graphDataY);
  minX = Math.min(...graphDataX);
  minY = Math.min(...graphDataY);
};



function plotGraph() {
  xYSeperator();
};