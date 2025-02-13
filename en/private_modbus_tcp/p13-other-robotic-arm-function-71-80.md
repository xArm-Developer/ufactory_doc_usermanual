# Other Robotic Arm Function(71-80)

## Set coordinate system

**Register: 73 (0x49)**

**warning**<br>
The coordinate system parameter to be set is to describe the robot base in the coordinate system you define



```
// Request:
00 01 00 02 00 19 49 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00    
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 19    U16, Length 
>
> //49       U8, Register
>
> //00 00 C8 43	FP32, Cartesian offset X=400mm
>
> //00 00 00 00	FP32, Cartesian offset Y=0
>
> //00 00 48 43	FP32, Cartesian offset Z=200mm
>
> //DB 0F 49 40	FP32, Cartesian offset Roll=πrad
>
> //00 00 00 00	FP32, Cartesian offset Pitch=0
>
> //00 00 00 00	FP32, Cartesian offset Yaw=0



```
// Response:
00 01 00 02 00 02 49 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //49       U8, Register
>
> //00       U8, State



## Calculate the attitude offset of two given points

**warning**<br>
Given two coordinate points of the robotic arm, the offset coordinate between them can be calculated.


**Register: 76 (0x4C)**


```
// Request:
00 01 00 02 00 33 4C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 00 00 00 00 C8 42 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00   
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 33    U16, Length 
>
> //4C       U8, Register
>
> //00 00 C8 43	FP32, X=400
>
> //00 00 00 00	FP32, Y=0
>
> //00 00 48 43	FP32, Z=200
>
> //DB 0F 49 40	FP32, Roll=π
>
> //00 00 00 00	FP32, Pitch=0
>
> //00 00 00 00	FP32, Yaw=0
>
> //00 00 C8 43	FP32, X=400
>
> //00 00 00 00	FP32, Y=0
>
> //00 00 C8 42	FP32, Z=100
>
> //DB 0F 49 40	FP32, Roll=π
>
> //00 00 00 00	FP32, Pitch=0
>
> //00 00 00 00	FP32, Yaw=0
>
> //00	FP32, 
>
> Representation of input pose:
>
> 0 : RPY（Roll,Pitch,Yaw）
>
> 1 : axial angle（Rx,Ry,Rz）
>
> 
>
> //00	FP32, 
>
> Representation of output pose:
>
> 0 : RPY（Roll,Pitch,Yaw）
>
> 1 : axial angle（Rx,Ry,Rz）




```
// Response:
00 01 00 02 00 1A 4C 00 00 00 00 00 00 00 00 00 00 00 C8 C2 00 00 80 99 00 00 00 80 00 00 00 00
```




> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 1A    U16, Length 
>
> //4C       U8, Register
>
> //00       U8, State
>
> //00 00 00 00	FP32, Cartesian offset X=0
>
> //00 00 00 00	FP32, Cartesian offset Y=0
>
> //00 00 C8 C2	FP32, Cartesian offset Z=-100mm
>
> //00 00 80 99	FP32, Cartesian offset Roll=-0
>
> //00 00 00 80	FP32, Cartesian offset Pitch=-0
>
> //00 00 00 00	FP32, Cartesian offset Yaw=0



## Self-collision detection switchSet geometric model for self-collision detection

**Register: 77 (0x4D)**

```
// Request:
00 01 00 02 00 02 4D 01  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //4D       U8, Register
>
> //01       U8, 
>
> 0: turn off self-collision detection
>
> 1: turn on self-collision detection



```
// Response:
00 01 00 02 00 02 4D 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //4D       U8, Register
>
> //00       U8, State



## Set geometric model for self-collision detection

**Register: 78 (0x4E)**

```
// Request:
00 01 00 02 00 0E (2+x*4) 4E 00 00 A0 41 00 00 F0 41 00 00 48 42 16 
```


> Request Description
> //00 01    U16, Transaction ID<br>
> //00 02    U16, Protocol Identifier
> //00 0E    U16, Length((2+x*4)) 
> //4E       U8, Register
> //00 00 A0 41    
> //00 00 F0 41
> //00 00 48 42    3*FP32,
> Parameter 1 (Geometric model is a cuboid)
> x=20,y=30,z=50
> Additional definition parameter area: x maximum is 6, the actual length depends on the number of parameters required by the tool type definition. 
> If there is no parameter, there is no data here.
>
> End tool type:
> 1) Custom detection model (additional parameters are required):
> *Cylinder:
> Additional definition parameters are: 
> radius (mm), height (mm)
> *Cuboid:
> Additional definition parameters are: 
> length[x(mm)] ,width[y(mm)], height[z(mm)] consistent with the direction of the default TCP coordinate system.
>
> 2) Supported detection models (no need to define additional parameters):
> No end tool, xArm gripper, xArm vacuum gripper, xArm BIO gripper, Robotiq 2F-85 gripper, Robotiq 2F-140 gripper.
>
> //16    U8, 
> Parameter 2 
> (end tool type number = 22)
> End tool type number:
> 1)Custom detection models (additional parameters are required):
> Cylinder: 21
> Cuboid: 22
>
> 2) Supported detection models (no need to define additional parameters):
> No end tools: 0
> xArm gripper: 1
> xArm vacuum gripper: 2
> xArm BIO gripper: 3
> Robotiq 2F-85 gripper: 4
> Robotiq 2F-140 gripper: 5




```
// Response:
00 01 00 02 00 02 4E 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //4E       U8, Register
>
> //00       U8, State



## Simulation Robot

**Register: 79 (0x4F)**

```
// Request:
00 01 00 02 00 02 4F 01
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //4F       U8, Register
>
> //01       U8,
>
> 0: Real robot
>
> 1: Simulation



```
// Response:
00 01 00 02 00 02 4F 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //4F       U8, Register
>
> //00       U8, State



## Global setting for Cartesian motion velocity continuous

**Register: 80 (0x50)**

```
// Request:
00 01 00 02 00 02 50 00  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //50       U8, Register
>
> //00       U8, 
>
> 0 :speed discontinuity，default
>
> 1 :speed continuous



```
// Response:
00 01 00 02 00 02 50 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //50       U8, Register
>
> //00       U8, State

