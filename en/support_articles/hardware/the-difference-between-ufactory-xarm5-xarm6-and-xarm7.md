

# The difference between UFACTORY xArm5, xArm6 and xArm7

The purpose of this article is to describe the differences between UFACTORY
  xArm5, xArm6 and xArm7.
### 1. Specifications
|                       | **SPECIFICATION** |        |        |
| --------------------- | ----------------- | ------ | ------ |
|                       | xArm 5 Lite       | xArm 6 | xArm 7 |
| Payload(kg)           | 3kg               | 5kg    | 3.5kg  |
| Reach(mm)             | 700mm             | 700mm  | 700mm  |
| Degrees of Freedom    | 5                 | 6      | 7      |
| Maximum Speed(m/s)    | 1m/s              | 1m/s   | 1m/s   |
| Weight(kg, body only) | 11.2kg            | 12.2kg | 13.7kg |

|               | xArm 5 Lite  | xArm 6      | xArm 7      |
| ------------- | ------------ | ----------- | ----------- |
| Maximum Speed | 180°/s       | 180°/s      | 180°/s      |
| Joint1        | ±360°        | ±360°       | ±360°       |
| Joint2        | -118° ~ 120° | -118°～120° | -118°～120° |
| Joint3        | -225°~11°    | -225°~11°   | ±360°       |
| Joint4        | -97°~180°    | ±360°       | -11°～225°  |
| Joint5        | ±360°        | -97°~180°   | ±360°       |
| Joint6        |              | ±360°       | -97°~180°   |
| Joint7        |              |             | ±360°       |



### 2. Motion Characteristics

* Cartesian control

xArm 5 Lite: Due to the robot configuration,**the actual flexible degrees**of freedom of linear and circular motions **in Cartesian space is 4**, which is \[x, y, z, yaw], similar to a SCARA manipulator with four degrees of freedom. Before initiating Cartesian control movement, it is necessary to ensure that the end flange surface of xArm5 and the base are completely parallel. If mounted on a horizontal plane, the roll and pitch should be \[± 180 degrees, 0 degrees], otherwise the trajectory is likely to have no solution.

[How to align the tool end flange of xArm 5 Lite?](../faq/how-to-align-the-tool-end-flange-of-xarm-5-lite.md)
