
// script.js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

// Vertex Shader
const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 uv;

  void main() {
    gl_Position = vec4(position, 0, 1);
    uv = position;
  }
`;

// Fragment Shader
const fragmentShaderSource = `
  varying vec2 uv;
  uniform float time;

  void main() {
    vec2 center = vec2(0.5, 0.5);
    float radius = 0.5 + 0.2 * sin(time);
    float distance = length(uv - center);
    
    vec4 color = vec4(
      uv.x + 0.1 * sin(time + uv.x), 
      uv.y + 0.1 * cos(time + uv.y), 
      uv.x * uv.y + 0.1 * sin(time * uv.x * uv.y), 
      1.0
    );
    
    color.rgb *= 1.0 - distance / radius;
    
    gl_FragColor = color;
  }
`;

// Create shaders
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// Create program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

// Define vertex data (full-screen quad)
const vertices = new Float32Array([
  -1, -1,
  1, -1,
  -1, 1,
  1, 1
]);

// Create vertex buffer
const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Set vertex attribute
const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

// Add time uniform to fragment shader
const timeLocation = gl.getUniformLocation(program, 'time');

// Animation loop
function animate(timestamp) {
  // Update time uniform
  gl.uniform1f(timeLocation, timestamp / 1000);
  
  // Draw full-screen quad
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
