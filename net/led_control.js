const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const ledRed = new Led(8);
  const ledGreen = new Led(9);
  const ledBlue = new Led(10);

  // Wait for a second before starting
  board.wait(1000, () => {
    // Start listening for input from the command line
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", function(data) {
      switch (data.trim()) {
        case "1":
          ledRed.on();
          ledGreen.off();
          ledBlue.off();
          break;
        case "2":
          ledRed.off();
          ledGreen.on();
          ledBlue.off();
          break;
        case "3":
          ledRed.off();
          ledGreen.off();
          ledBlue.on();
          break;
        default:
          ledRed.off();
          ledGreen.off();
          ledBlue.off();
          break;
      }
    });
  });
});

