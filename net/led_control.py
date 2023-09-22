import serial
import time

# Replace 'COMx' with the actual COM port of your Arduino
serial_port = '/dev/tty.usbmodem101'  # On Windows, it will be like 'COM3' or 'COM4'
baud_rate = 9600

# Establish serial connection
ser = serial.Serial(serial_port, baud_rate, timeout=1)
time.sleep(2)  # Allow some time for the connection to be established

def set_led_color(color):
    if color == '1':
        ser.write(b'1')
    elif color == '2':
        ser.write(b'2')
    elif color == '3':
        ser.write(b'3')

try:
    while True:
        color = input("Enter LED color (1 = Red, 2 = Green, 3 = Blue): ")
        set_led_color(color)
except KeyboardInterrupt:
    print("\nExiting...")
finally:
    ser.close()  # Close the serial connection when done

