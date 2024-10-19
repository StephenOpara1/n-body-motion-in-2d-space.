const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

var vertShaderText = `
precision mediump float;
attribute vec2 vertP;
attribute vec3 vertC;
varying vec3 fragC;
void main(){
  fragC = vertC;
  gl_Position = vec4(vertP, 0, 1);
}
`;
var fragShaderText = `
precision mediump float;
varying vec3 fragC;
void main(){
  gl_FragColor = vec4(fragC, 1);
}
`;

function webGl() {
  gl.clearColor(1,0.5,0,1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
  var vertShader = gl.createShader(gl.VERTEX_SHADER);
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  
  gl.shaderSource(vertShader, vertShaderText);
  gl.shaderSource(fragShader,fragShaderText);
  
  gl.compileShader(vertShader);
  if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
    console.error('Error compiling vertex shader;', gl.getShaderInfoLog(vertShader));
  }
  
  gl.compileShader(fragShader);
  if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
    console.error('Error compiling fragment shader;', gl.getShaderInfoLog(fragShader));
  }
  
  var program = gl.createProgram();
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error linking program', gl.getProgramInfoLog(program));
  }
  
  var triVert = [
     0, 0.5,   1.0, 0.0, 0.0,
    -0.5,-0.5, 0.0, 1.0, 0.0,
     0.5,-0.5, 0.0, 0.0, 1.0
    ];
  var triVertBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triVertBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triVert), gl.STATIC_DRAW);
  
  var pAttriLoc = gl.getAttribLocation(program, 'vertP');
  var cAttriLoc = gl.getAttribLocation(program, 'vertC');
  gl.vertexAttribPointer(
    pAttriLoc,
    2,
    gl.FLOAT,
    gl.FALSE,
    5*Float32Array.BYTES_PER_ELEMENT,
    0
    );
  gl.vertexAttribPointer(
    cAttriLoc,
    3,
    gl.FLOAT,
    gl.FALSE,
    5*Float32Array.BYTES_PER_ELEMENT,
    2*Float32Array.BYTES_PER_ELEMENT
    );
  gl.enableVertexAttribArray(pAttriLoc);
  gl.enableVertexAttribArray(cAttriLoc);
  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

webGl();