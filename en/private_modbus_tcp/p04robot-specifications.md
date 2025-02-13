# Robot specifications



Maximum Speed: 180°/s

Working Range:

|      | **xarm5** |**xarm6**   | **xarm7**   |**Lite6**  |**850**   |
| ------- | ---------- | ----------- | ----------- | ----------- | ----------- |
| Joint 1 | ±360°      | ±360°       | ±360°       | ±360°   | ±360°   |
| Joint 2 | -118°～120° | -118°～120° | -118°～120° | ±150°   | ±132°   |
| Joint 3 | -225°～11°  | -225°～11°  | ±360°       | -3.5°～300° | -242°～3.5° |
| Joint 4 | -97°～180°  | ±360°       | -11°～225°  | ±360°    | ±360°  |
| Joint 5 | ±360°      | -97°～180°  | ±360°       | ±124°    | ±124°   |
| Joint 6 |             | ±360°   | -97°～180°  | ±360°    | ±360°   |
| Joint 7 |             |      | ±360°       |       |        |       |





## Range of various motion parameters of the robotic arm 

**xArm5/6/7**

|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～1000mm/s    | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |

**Lite 6**

|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～500mm/s     | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |


**850**

|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～1000mm/s    | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |


Note:

1\. In the TCP motion (Cartesian space motion) commands, if a motion command involves both position transformation and attitude transformation, the attitude rotation speed is generally calculated automatically by the system. In this situation, the specified speed parameter is the maximum linear speed, range from  0 to 1000 mm/s.

2\. When the expected TCP motion only changes the attitude (roll, pitch, yaw), with position (x, y, z) remains unchanged, the specified speed is the attitude rotation speed, so the range 0 to 1000 corresponds to 0 to 180 °/s.
