const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(3030, '82.165.97.169', () => {
    console.log('Connected to headless system');
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    // Send user input to the server
    client.write(input);
});

client.on('data', (data) => {
    console.log('Received response from headless system:', data.toString());
});

client.on('close', () => {
    console.log('Connection closed');
});

