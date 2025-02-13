# Terms and Definitions

## Unit Definition

| Parameter              | Python-SDK     | Blockly        | Communication Protocol |
| ---------------------- | -------------- | -------------- | ---------------------- |
| X/Y/Z                  | millimeter（mm） | millimeter（mm） | millimeter（mm）         |
| Roll/Pitch/Yaw         | degree（°）      | degree（°）      | radian（rad）            |
| J1（J2 /J3/J4/J5/J6/J7） | degree（°）      | degree（°）      | radian（rad）            |
| TCP Speed              | mm/s           | mm/s           | mm/s                   |
| TCP Acceleration       | mm/s²          | mm/s²          | mm/s²                  |
| TCP Jerk               | mm/s³          | mm/s³          | mm/s³                  |
| Joint Speed            | °/s            | °/s            | rad/s                  |
| Joint Acceleration     | °/s²           | °/s²           | rad/s²                 |
| Joint Jerk             | °/s³           | °/s³           | rad/s³                 |

## Terms and Definitions

### **Control Box**

> The control box, core part of the robotic arm, is the integration of the robotic arm control system.

### **End Effector**

> The end effector, installed on the front end of the wrist of the robotic arm, is used to install special tools (such as gripper, vacuum gripper, etc.), which can directly perform work tasks.

### **Enable Robotic Arm**

> Power on the robotic arm and turn on the motor of the robotic arm. After the robotic arm is enabled, it can start to move normally.

### **TCP**

> Tool center point.

### **TCP Motion**

> TCP motion is the Cartesian space motion, with target position in Cartesian space coordinate and the end follows the specified trajectory(arc, line, etc.).

### **TCP Payload（End Payload）**

> The payload weight refers to the actual (end tool +other object) weight in Kg; the X / Y / Z-axis indicates the position of the center of mass of the TCP relative to the default tool coordinate system,with unit of mm.

### **TCP Offset(Tool Center Point Offset)**

> Set the relative offset between the default tool coordinate system at flange center and the actual tool coordinate system, with distance unit of mm.

### **Roll/Pitch/Yaw**

> Roll / Pitch / Yaw sequentially rotates around the X / Y / Z of the selected coordinate system (base coordinate system).The following describes the roll/pitch/yaw orientation representation of {B} relative to {A}:For example, the coordinate system {B} and a known reference coordinate system {A} are first superposed. First rotate {B} around by γ, then around by β, and finally around by α.Each rotation is around a fixed axis of the reference coordinate system {A}. This method is called the XYZ fixed angle coordinate system, and sometimes they are defined as the roll angle, pitch angle, and yaw angle.The above description is shown in the following figure:The equivalent rotation matrix is:


Rxyz(γ,β,α)=Rz(α)Ry(β)Rx(γ)


> Note: γ corresponds to roll; β corresponds to pitch; α corresponds to yaw.

![](assets/RPY.png)

### **Axis-Angle**

> Rx / Ry / Rz representation also, using 3 values to represent the pose (but not three rotation angles), which is the product of a three-dimensional rotation vector \[x, y, z] and a rotation angle\[phi (scalar)].
>
> The characteristics of the axis angle:
>
> Assume the rotation axis is \[x , y, z], and the rotation angle is φ.
>
> Then the representation of the axial angle:

```
[Rx, Ry, Rz] = [x * φ, y * φ, z * φ] 
```

> Note:
>
> 1\. \[x, y, z] is a unit vector, and phi is a non-negative value.
>
> 2\. The vector length (modulus) of \[Rx, Ry, Rz] can be used to estimate the rotation angle, and the vector direction is the rotation direction.
>
> 3\. If you want to express reverse rotation, invert the rotation axis vector \[x, y, z], and the value of φ remains unchanged.
>
> 4\. Using φ and \[x, y, z] can also derive the attitude representation as unit quaternion

```
q = [cos (φ / 2), sin (φ / 2) * x, sin (φ / 2) * y, sin (φ / 2) * z]
```

> For example:The vector of the rotation axis represented by the base coordinate system is \[1, 0, 0], and the rotation angle is 180 degrees (π), then the axis angle representation of this pose is \[π, 0, 0]. The rotation axis is \[0.707, 0.707, 0] and the rotation angle is 90 degrees (π / 2), then the axis angle posture is

```
[0.707 * (π / 2), 0.707 * (π / 2), 0]
```

### **Coordinates**

![](assets/coordinates.png)

#### **The Base Coordinate System**

* The base coordinate system is a Cartesian coordinate system based on the mounting base of the robotic arm and used to describe the motion of the robotic arm.(front and back: X axis, left and right: Y axis, up and down: Z axis)

#### **Tool Coordinate System**

* Consists of tool center point and coordinate orientation. If the TCP offset is not set, the default tool coordinate system is located at flange center. For tool coordinate system based motion: The tool center point is taken as the zero point, and the trajectory of the robotic arm refers to the tool coordinate system.

#### **User Coordinate System**

* The user coordinate system can be defined as any other reference coordinate system rather than the robot base.

### **Manual Mode**

> In this mode, the robotic arm will enter the ‘zero gravity’ mode, since the gravity is compensated, the user can guide the robotic arm position directly by hand.

### **Teach Sensitivity**

> Teach sensitivity range is from 1 to 5 level. The larger the set value, the higher the teach sensitivity level, and the less the force required to drag the joint in the manual mode.

### **Collision Sensitivity**

> The collision sensitivity range is from 0 to 5 level. When it is set to 0, it means that collision detection is not enabled. The larger the set value, the higher the collision sensitivity level, and the smaller the force required to trigger the collision protection response of the robotic arm.

### **GPIO**

> General-purpose input and output.
>
> For the input, you can check the potential of the pin by reading a register;
>
> For the output, you can write a certain register to make this pin output high or low potential;

### **Safety Boundary**

> When this mode is activated, the boundary range of the cartesian space of the robotic arm can be limited. If the tool center point (TCP) exceeds the set safety boundary, the robotic arm will stop moving.

### **Reduced Mode**

> When this mode is activated, the maximum linear velocity of the Cartesian motion of the robotic arm, the maximum joint speed, and the range of the joint motion will be limited.
