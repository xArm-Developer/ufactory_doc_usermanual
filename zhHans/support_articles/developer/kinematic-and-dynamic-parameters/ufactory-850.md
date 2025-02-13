---
简介: UFactory 850的运动学和动力学参数
---

# UFactory 850


**1.修改DH参数**

| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](../assets/850_sizeparamater.png) | ![image](../assets/850_modifiedDH_and_Dynamics(2).png)|


| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 364   | 0          | 0     |
| Joint2     | 90                | 0     | 90         | 0     |
| Joint3     | 90                | 0     | 180        | 390   |
| Joint4     | 0                 | 426   | -90        | 150   |
| Joint5     | 0                 | 0     | -90        | 0     |
| Joint6     | 0                 | 90    | 90         | 0     |

**2.标准DH参数**

| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](../assets/image(20).png) | ![image](../assets/image(22).png)|


| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 364   | 90         | 0     |
| Joint2     | 90                | 0     | 180        | 390   |
| Joint3     | 90                | 0     | -90        | 150   |
| Joint4     | 0                 | 426   | -90        | 0     |
| Joint5     | 0                 | 0     | 90         | 0     |
| Joint6     | 0                 | 90    | 0          | 0     |


**3.质量参数**



| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](../assets/image(20).png) | ![image](../assets/image(23).png)|


| Dynamics | Mass(kg) | Center of Mass[x,y,z]-Modified DH Coordinate System |
| :------- | :------- | :-------------------------------------------------- |
| Link1    | 4.811    | [-0.049, 13.92, -20.31]                             |
| Link2    | 3.166    | [327.98, 0.074, 6.48]                               |
| Link3    | 2.247    | [130.23, 105.18, 8.97]                              |
| Link4    | 2.12     | [0.016, -38.47, -98.3]                              |
| Link5    | 1.346    | [-0.42, -17.6, -1.42]                               |
| Link6    | 0.225    | [0.15, 1.38, -13.97]                                |
