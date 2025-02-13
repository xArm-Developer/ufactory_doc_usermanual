# Motion Parameter Setting(31-40)

## Set the jerk of the Cartesian space translation

**Register:31 (0x1F)**

```
// Request:
00 01 00 02 00 05 1F 00 00 FA 44 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 05    U16, Length 
>
> //1F       U8, Register
>
> //00 00 FA 44       FP32, TCP Jerk=2000 mm/s³



```
// Response:
00 01 00 02 00 04 1F 00 00 01  
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //1F       U8, Register
>
> //00       U8, State
>
> //00 01    U16, The number of commands in the buffer



## Set the maximum acceleration of the Cartesian space translation

R**egister:32 (0x20)**

```
// Request:
00 01 00 02 00 05 20 00 80 BB 45 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 05    U16, Length 
>
> //20       U8, Register
>
> //00 80 BB 45       FP32, Maximum acceleration=6000 mm/s²



```
// Response:
00 01 00 02 00 04 20 00 00 01  
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //20       U8, Register
>
> //00       U8, State
>
> //00 01    u16, The number of commands in the buffer



## Set the joint space jerk

**Register:33 (0x21)**

```
// Request:
00 01 00 02 00 05 21 00 40 1C 46 
```


> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 05    U16, Length 
>
> //21       U8, Register
>
> //00 40 1C 46       FP32, Jerk=10000 rad/s³



```
// Response:
00 01 00 02 00 04 21 00 00 01  
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //21       U8, Register
>
> //00       U8, State
>
> //00 01    u16, The number of commands in the buffer



## Set joint space max acceleration

**Register:34 (0x22)**

```
// Request:
00 01 00 02 00 05 22 00 00 C8 43
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 05    U16, Length 
>
> //22       U8, Register
>
> //00 00 C8 43       FP32, Jerk=10000 rad/s³



```
// Response:
00 01 00 02 00 04 22 00 00 01  
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //22       U8, Register
>
> //00       U8, State
>
> //00 01    u16, The number of commands in the buffer



## Set TCP offset

**Register:35 (0x23)**

**warning**<br>
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.

```
// Request:
00 01 00 02 00 19 23 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 

```


> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 19    U16, Length 
>
> //23       U8, Register
>
> //00 00 C8 43	FP32, x=400 mm
>
> //00 00 00 00	FP32, y=0 mm
>
> //00 00 48 43	FP32, z=200 mm
>
> //DB 0F 49 40	FP32, roll=π
>
> //00 00 00 00	FP32, pitch=0
>
> //00 00 00 00	FP32, yaw=0



```
// Response:
00 01 00 02 00 02 23 10 
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //23       U8, Register
>
> //10       U8, State



## Set TCP payload

**Register:36 (0x24)**


```
// Request:
00 01 00 02 00 11 24 00 00 80 3F 00 00 C8 43 00 00 00 00 00 00 48 43 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 11    U16, Length 
>
> //24       U8, Register
>
> //00 00 80 3F	FP32, Payload=1kg
>
> //00 00 C8 43	FP32, Payload center of mass X=400mm
>
> //00 00 00 00	FP32, Payload center of mass Y=0
>
> //00 00 48 43	FP32, Payload center of mass Z=200mm



```
// Response:
00 01 00 02 00 02 24 20
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //24       U8, Register
>
> //20       U8, State



## Set collision detection sensitivity (System reset)

**Register:37(0x25)**

**warning**<br>
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.

```
//Request
00 01 00 02 00 02 25 04 
```


> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //25       U8, Register
>
> //04       U8, Detect sensitivity=4



```
// Response:
00 01 00 02 00 02 25 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //25       U8, Register
>
> //10       U8, State



## Set teaching sensitivity for manual mode (System reset)

**Register:38(0x26)**

**warning**<br>
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.

```
//Request
00 01 00 02 00 02 26 04 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //26       U8, Register
>
> //04       U8, Teach sensitivity=4



```
// Response:
00 01 00 02 00 02 26 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //26       U8, Register
>
> //10       U8, State



## Delete the current system configuration parameters

**Register:39 (0x27)**

```
//Request
00 01 00 02 00 01 27 
```

> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //27       U8, Register



```
// Response:
00 01 00 02 00 02 27 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //27       U8, Register
>
> //10       U8, State



## Save the current system configuration parameters

**Register:40 (0x28)**

```
//Request
00 01 00 02 00 01 28 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //28       U8, Register



```
// Response:
00 01 00 02 00 02 28 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //28       U8, Register
>
> //10       U8, State

