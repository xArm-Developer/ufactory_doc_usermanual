# System State(11-20)

## Enable/Disable servo (System reset)

**Register:11(0x0B)**

**warning**:<br>

The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.


```
// Request:
00 01 00 02 00 03 0B 08 01
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 03    U16, Length 
>
> //0B       U8, Register
>
> //08       U8, 
>
> Joint Number(Select all joints)
>
> 1-7：Motor joint(1-7)
>
> 8：Select all joint
>
> 
>
> //01       U8,
>
> Whether to enable the servo
>
> 1：Enable servo
>
> 0：Disable servo



```
// Response:
00 01 00 02 00 02 0B 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //0B      U8, Register
>
> //10      U8, State



## Motion state setting

**Register:12(0x0C)**

```
// Request:
00 01 00 02 00 02 0C 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //0C      U8, Register
>
> 
>
> //00      U8, 
>
> Motion Sate
>
> 0: Enter the motion mode
>
> 3: Suspend the current motion(Do not clear controller cache)
>
> 4: Stop all current motion (restart the system,clear controller cache)



```
// Response:
00 01 00 02 00 02 0C 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //0C      U8, Register
>
> //00      U8, State



## Get the motion state

**Register:13 (0x0D)**

```
// Request:
00 01 00 02 00 01 0D
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //0D       U8, Register



```
// Response:
00 01 00 02 00 03 0D 00 02
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //0D       U8, Register
>
> 
>
> //02       U8,
>
> Motion state：
>
> 1：In motion
>
> 2：Sleep
>
> 3：Suspend
>
> 4：Stop
>
> 5： System reset



## Get the number of commands in the command buffer

**Register:14 (0x0E)**

```
// Request:
00 01 00 02 00 01 0E
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //0E       U8, Register



```
// Response:
00 01 00 02 00 04 0E 00 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //0E       U8, Register
>
> //00       U8, State
>
> //00 00    U16, The number of commands in the buffer



## Get error and warning code

**Register:15 (0x0F)**

```
// Request:
00 01 00 02 00 01 0F
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //0F       U8, Register



```
// Response:
00 01 00 02 00 04 0F 00 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //0F       U8, Register
>
> //00       U8, State
>
> //00       U8, Error code
>
> //00       U8, Warning code



## Clear control box error (System reset)

**Register:16 (0x10)**

**warning**:<br>

The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.


```
// Request:
00 01 00 02 00 01 10
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //10       U8, Register



```
// Response:
00 01 00 02 00 02 10 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //10       U8, Register
>
> //00       U8, State



## Clear control box warning

**Register:17 (0x11)**

```
// Request:
00 01 00 02 00 01 11
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //11       U8, Register



```
// Response:
00 01 00 02 00 02 11 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //11       U8, Register
>
> //00       U8, State



## Setting the brake switches separately (System reset)

**Register:18 (0x12)**

```
// Request:
00 01 00 02 00 03 12 08 01
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 03    U16, Length 
>
> //12       U8, Register
>
> //08       U8,  1~6: Select motor joint separately  8: Select all joints
>
> //01       U8,  0: Disable Joint   1: Unlock Joint



```
// Response:
00 01 00 02 00 02 12 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //12       U8, Register
>
> //10       U8, State



## Setting the system motion mode (System reset)

**Register:19 (0x13)**

**warning**:<br>
This operation will terminate the ongoing movement of the robot and clear the cache commands, which is the same as the STOP state.


```
// Request:
00 01 00 02 00 03 13 00 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 03    U16, Length 
>
> //13       U8, Register
>
> //00       U8, Motion mode
>
> 0: Position control mode
>
> 1: Servo motion mode
>
> 2: Joint teaching mode (manual mode)
>
> 3: Cartesian teaching mode (not yet available)
>
> 4: Joint velocity control mode
>
> 5: Cartesian velocity control mode
>
> 6: Joint online trajectory planning mode
>
> 7: Cartesian online trajectory planning mode
>
> //00       U8, Payload detection before enabling manual mode. 0 is ON, 1 is OFF.



```
// Response:
00 01 00 02 00 02 13 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //13       U8, Register
>
> //00       U8, State

