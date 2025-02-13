# What should I do if I swap the robot control box?

Each xArm/UF850 should come with a control box, and there’s no problem replacing the other control box. What should I do if I swap the control box? Are there any calibration parameters saved in the control box?

**1. Configuration file**

Export and import the configuration file easily to the new control box via 'Settings-General-Advanced Settings-Logic-Export/Import Configuration'.

![](../assets/image(37).png)

**2. ‘Blcokly Project’ and ‘Recording File’**

Export and import the projects via the ‘Blockly’/’Recording’ module.

![](../assets/image(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1).png)

![](../assets/image(2)(1)(1)(1)(1)(1)(1).png)

**3. Friction parameters**

The first 6 characters of SN help to identify the model of your robot.

![](../assets/SerialNumber(1).png)

Regardless of the model of the control box:


1. If your arm is 13xx model or UFactory 850: The firmware version must be v1.12.10+

Press down the E stop button and release, the friction parameters will load automatically.

2. If your arm is 12xx model:

Please provide the SN and contact us<[support@ufactory.cc](mailto:support@ufactory.cc)> to remotely put the original friction parameters into the new control box.


The calibration parameters are not saved in the control box, swapping another control box will not affect the accuracy of the robot.


#### Appendix: 

1. What parameters are saved in the configuration file?

* Motion: Acceleration, Position Step, Attitude Step, Teach Sensitivity, Collision Sensitivity, Initial Position.
* TCP payload, TCP offset
* Safety: Safety Boundary, Reduced Mode.
* Mounting: Tilt Angle, Rotate Angle.
* Coordinate System(word\_offset).

2. How to simply judge if the friction parameters are loaded successfully?

1\) You should see the 'Recording' module on UFactory Studio software.

2\) You can enable the manual mode on the ‘Live Control’ page.

3. The main difference between xArm 12xx and 13xx?

[http://help.ufactory.cc/en/articles/5688912-the-main-difference-between-xarm-xf-xi-xs12xx-and-xarm-xf-xi-xs13xx](http://help.ufactory.cc/en/articles/5688912-the-main-difference-between-xarm-xf-xi-xs12xx-and-xarm-xf-xi-xs13xx)
