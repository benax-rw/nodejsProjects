import socket
import serial

# Server IP and port
server_ip = "82.165.97.169"
server_port = 11223

# Arduino serial port
arduino_port = "/dev/tty.usbmodem101"
arduino_baud_rate = 9600

# Create a socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
client_socket.connect((server_ip, server_port))

# Create a serial connection to Arduino
arduino_serial = serial.Serial(arduino_port, arduino_baud_rate)

try:
    while True:
        data = client_socket.recv(1024)
        if not data:
            break
        received_data = data.decode().strip()
        print("Received:", received_data)
        
        # Send the received data to the Arduino
        arduino_serial.write(received_data.encode())
except KeyboardInterrupt:
    print("\nExiting...")
finally:
    client_socket.close()
    arduino_serial.close()

