let serial; // Declare a variable for the serial port

function setup() {
  createCanvas(400, 400);
  serial = new p5.SerialPort(); // Create a new serial port object
  serial.open('/dev/tty.usbmodem101'); // Replace with the appropriate serial port name

  // Set a callback function to read data from the serial port
  serial.on('data', onDataReceived);
}

function draw() {
  background(220);
  // Your drawing code here
}

// Callback function to handle received data
function onDataReceived() {
  let data = serial.readStringUntil('\n'); // Read the incoming data until a newline character
  if (data) {
    // Do something with the received data
    console.log(data);
  }
}

