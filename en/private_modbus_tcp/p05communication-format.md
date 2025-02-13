# Communication Format

## Unit Definition 

The following explains some of the symbols used in the examples and tables:

> **U8:** 1 Byte, 8-bit unsigned int
>
> **U16:** 2 Bytes, 16-bit unsigned int
>
> **FP32:** 4 Bytes, float
>
> **str:** String
>
> **System reset:** The user just enters the state after the mode switch or changes some settings (such as TCP offset, sensitivity, etc.). It will terminate the ongoing movement of the robot and clear all the cache commands, which is the same as the STOP state.

## Private protocol Format 

**Private protocol:**

Private protocol is an application layer message transmission protocol, including three message types: ASCII, RTU, and TCP. The standard Modbus protocol physical layer interface includes RS232, RS422, RS485 and Ethernet interfaces, and adopts master / slave communication.

Private protocol Process:

> 1\. Establish a TCP connection.
>
> 2\. Prepare Modbus messages.
>
> 3\. Use the send command to send a message.
>
> 4\. Waiting for a response under the same connection.
>
> 5\. Use the receive command to read the message and complete a data exchange.
>
> 6\. When the communication task ends, close the TCP connection.

Parameter:

> TCP Port: 502
>
> Protocol: 00 02

**Request Command Format**

| Format | Transaction Identifier U16 | ProtocolU16 | Length U16 | Register U8 |Parameter |
|--------------------------|----------------------------|-------------|------------|-------------|-----------|
| Length   | 2 Bytes      | 2 Bytes     | 2 Bytes    | 1 Byte      | n Bytes | 
 |Example\(Enable the robot\) | 00 01     | 00 02  | 00 03      | 0B   | 08 01 |    


**Response  Command Format**

<table data-header-hidden><thead><tr><th width="154"></th><th width="130"></th><th width="103"></th><th width="98"></th><th></th><th width="86"></th><th></th></tr></thead><tbody><tr><td>Format</td><td><p>Transaction Identifier</p><p>U16</p></td><td><p>Protocol</p><p>U16</p></td><td><p>Length</p><p>U16</p></td><td><p>Register</p><p>U8</p></td><td><p>Status</p><p>U8</p></td><td><p>Parameters</p><p></p></td></tr><tr><td>Length</td><td>2 Bytes</td><td>2 Bytes</td><td>2 Bytes</td><td>1 Byte</td><td>1 Byte</td><td>n Bytes</td></tr><tr><td><p>Example</p><p>Enable the robot</p></td><td>00 01</td><td>00 02</td><td>00 02</td><td>0B</td><td>00</td><td>none</td></tr></tbody></table>


Status Bit of the Response Format

* Bit 0,  reserved.
* Bit 1, reserved.
* Bit 2, reserved.
* Bit 3, reserved.
* Bit 4, 0 is normal. 1 means unable to move.
* Bit 5, 0 is normal, 1 means there is warning.&#x20;
* Bit 6, 0 is normal, 1 means there is error.
* Bit 7, reserved


**General notes:**

* Transaction Identifier: Generally, 1 is added after each communication to distinguish different communication data packets.
* Protocol : 00 02 means Modbus TCP protocol.
* Length: Indicates the next data length in bytes.
* Register: Device address.

## **Data in big endian and little endian:**

**This  protocol:**

> 1\. The transaction identifier (U16) are in big endian order.
>
> 2\. Protocol identifier (U16) and are in big endian order.
>
> 3\. Length (U16) of the message head are in big endian order.
>
> 4\. The 32-bit data (FP32, int32) in the parameter are in little endian order.
>
> 5\. Integer data(U16) include GPIO operation are in big endian order.



**Example:**

> Assume that the type of the variable x is int, located at address 0x100, there is a hexadecimal number 0x12345678 (high order is 0x12, low order is 0x78), and the byte order of the address range 0x100-0x103 depends on the type of machine:

**Big-endian method**



|      | 0x100 | 0x101 | 0x102 | 0x103 |      |
| ---- | ----- | ----- | ----- | ----- | ---- |
| ...  | 0x12  | 0x34  | 0x56  | 0x78  | ...  |

**Little-endian method**


|      | 0x100 | 0x101 | 0x102 | 0x103 |      |
|------|-------|-------|-------|-------|------|
| ...  | 0x78  | 0x56  | 0x34  | 0x12  | ...  |

