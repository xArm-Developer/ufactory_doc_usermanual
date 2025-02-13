---
简介: UFACTORY Lite 6的运动学和动力学参数
---

# Lite6

**1.修改DH参数**

| Size Parameters: (unit:mm)        | Joint Coordinate Definition              |
|-----------------------------------| ---------------------------------------- |
| ![image](../assets/image(30).png) | ![image](../assets/image(31).png)|



| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 243.3 | 0          | 0     |
| Joint2     | -90               | 0     | -90        | 0     |
| Joint3     | -90               | 0     | 180        | 200   |
| Joint4     | 0                 | 227.6 | 90         | 87    |
| Joint5     | 0                 | 0     | 90         | 0     |
| Joint6     | 0                 | 61.5  | -90        | 0     |

**2.标准DH参数**

| Size Parameters: (unit:mm)                  | Joint Coordinate Definition              |
| ------------------------------------------- | ---------------------------------------- |
| ![image](../assets/image(33).png) | ![image](../assets/image(34).png)|


| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 243.3 | -90        | 0     |
| Joint2     | -90               | 0     | 180        | 200   |
| Joint3     | -90               | 0     | 90         | 87    |
| Joint4     | 0                 | 227.6 | 90         | 0     |
| Joint5     | 0                 | 0     | -90        | 0     |
| Joint6     | 0                 | 61.5  | 0          | 0     |


**3.质量参数**



| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](../assets/image(35).png) | ![image](../assets/image(36).png)|


| Dynamics | Mass(kg) | Center of Mass(mm)   |
| :------- | :------- | :------------------- |
| Link1    | 1.411    | [-0.36, 41.95, -2.5] |
| Link2    | 1.34     | [179.0, 0.0, 58.4]   |
| Link3    | 0.953    | [72.0, -35.7, -1.0]  |
| Link4    | 1.284    | [-2.0, -28.5, -81.3] |
| Link5    | 0.084    | [0.0, 10.0, 1.9]     |
| Link6    | 0.13     | [0.0, -1.94, -10.2]  |
