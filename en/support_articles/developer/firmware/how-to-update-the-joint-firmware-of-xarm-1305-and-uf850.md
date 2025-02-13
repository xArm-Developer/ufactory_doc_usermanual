# How to update the joint firmware of xArm(1305) and UF850?

Product: XF1305, XI1305, XS1305, UF850.


Please contact technical support<[support@ufactory.cc](mailto:support@ufactory.cc)>for confirmation before updating the joint firmware.


1. Get the xArm-tool-gui tool and the joint firmware from the support team.
2. Enable the robot.
3. Enter Robot IP, and click Connect. It will show the servo version, as the picture below, it's V5.0.7.

![](../../assets/image(2).png)

4. Switch to '1300/850 Test tool', choose 'Driver board for all joint', click 'Get Joint SN', it will show the SN of each joint.

![](../../assets/image(1)(1).png)

5. Click 'Install driver', **press down the E STOP button and release**, then click 'Next'.

It will load the joint firmware from ...\resources\firmwares\850\_1305board automatically,  wait for 1-2 minutes, the arm will reboot itself.

![](../../assets/image(2)(1).png)

![](../../assets/image(3).png)

6. Reconnect the arm again, check the Servo version.

See the below picture, it is updated to V5.0.8.

![](../../assets/image(4).png)
