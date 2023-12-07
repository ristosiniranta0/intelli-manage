/* soph_code.js */

// This code generates fractal patterns using the Mandelbrot set algorithm
// It allows the user to interactively zoom and pan on the fractal

// Constants for the fractal calculation
const MAX_ITERATIONS = 200;         
const BAILOUT_RADIUS = 4;

// Canvas properties
const canvasWidth = 800;
const canvasHeight = 600;

// Zoom and pan properties
let zoom = 1;
let offsetX = 0;
let offsetY = 0;

// Function to initialize the canvas
function initializeCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.appendChild(canvas);
  return canvas.getContext("2d");
}

// Function to map a point on the canvas to a point in the fractal plane
function mapPixelToComplex(x, y) {
  const real = (x - canvasWidth / 2) / zoom + offsetX;
  const imag = (y - canvasHeight / 2) / zoom + offsetY;
  return { real, imag };
}

// Function to check if a complex number belongs to the Mandelbrot set
function isInMandelbrotSet(c) {
  let z = { real: 0, imag: 0 };
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const tempReal = z.real * z.real - z.imag * z.imag + c.real;
    const tempImag = 2 * z.real * z.imag + c.imag;
    z = { real: tempReal, imag: tempImag };
    if (z.real * z.real + z.imag * z.imag > BAILOUT_RADIUS)
      return i;
  }
  return -1;
}

// Function to draw the Mandelbrot fractal on the canvas
function drawFractal(context) {
  for (let y = 0; y < canvasHeight; y++) {
    for (let x = 0; x < canvasWidth; x++) {
      const c = mapPixelToComplex(x, y);
      const iteration = isInMandelbrotSet(c);
      if (iteration === -1) {
        context.fillStyle = "black";
        context.fillRect(x, y, 1, 1);
      } else {
        const hue = 360 * (iteration / MAX_ITERATIONS);
        const saturation = Math.sqrt(iteration / MAX_ITERATIONS) * 100;
        context.fillStyle = `hsl(${hue}, ${saturation}%, 50%)`;
        context.fillRect(x, y, 1, 1);
      }
    }
  }
}

// Function to handle mousewheel event for zooming
function handleMouseWheel(event) {
  const scaleFactor = 1.1;
  const isZoomIn = event.deltaY < 0;

  if (isZoomIn) {
    zoom *= scaleFactor;
    offsetX = (offsetX + event.offsetX) * scaleFactor - event.offsetX;
    offsetY = (offsetY + event.offsetY) * scaleFactor - event.offsetY;
  } else {
    zoom /= scaleFactor;
    offsetX = (offsetX + event.offsetX) / scaleFactor - event.offsetX;
    offsetY = (offsetY + event.offsetY) / scaleFactor - event.offsetY;
  }

  drawFractal(ctx);
}

// Function to handle mousemove event for panning
function handleMouseMove(event) {
  const deltaX = event.movementX * zoom;
  const deltaY = event.movementY * zoom;
      
  offsetX -= deltaX;
  offsetY -= deltaY;
      
  drawFractal(ctx);
}

// Function to start the rendering and event listeners
function startRendering() {
  const ctx = initializeCanvas();
  drawFractal(ctx);

  //Zoom event listener
  document.addEventListener("wheel", handleMouseWheel);

  //Panning event listeners
  let isMouseButtonDown = false;
  document.addEventListener("mousedown", () => isMouseButtonDown = true);
  document.addEventListener("mouseup", () => isMouseButtonDown = false);
  document.addEventListener("mousemove", (event) => {
    if (isMouseButtonDown)
      handleMouseMove(event);
  });
}

// Start the rendering and event listeners
startRendering();