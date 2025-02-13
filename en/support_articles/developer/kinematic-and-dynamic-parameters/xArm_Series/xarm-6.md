---
description: Kinematic and Dynamic Parameters of xArm 6
---

# xArm 6

**1. Modified D-H Parameters**


![](../../../assets/image(42).png)


<table><thead><tr><th width="147.33333333333331">Kinematics</th><th width="117">theta(rad)</th><th width="99">d(mm)</th><th width="123">alpha(rad)</th><th width="104">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>-pi/2</td><td>0</td><td>T2_offset</td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>0</td><td>a2</td><td>T3_offset</td></tr><tr><td>Joint4</td><td>0</td><td>342.5</td><td>-pi/2</td><td>77.5</td><td>0</td></tr><tr><td>Joint5</td><td>0</td><td>0</td><td>pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint6</td><td>0</td><td>97</td><td>-pi/2</td><td>76</td><td>0</td></tr></tbody></table>

**2. Standard D-H Parameters**

![](../../../assets/image(43).png)

<table><thead><tr><th width="147.33333333333331">Kinematics</th><th width="117">theta(rad)</th><th width="99">d(mm)</th><th width="123">alpha(rad)</th><th width="104">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>-pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>0</td><td>a2</td><td>T2_offset</td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>-pi/2</td><td>77.5</td><td>T3_offset</td></tr><tr><td>Joint4</td><td>0</td><td>342.5</td><td>pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint5</td><td>0</td><td>0</td><td>-pi/2</td><td>76</td><td>0</td></tr><tr><td>Joint6</td><td>0</td><td>97</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>


**‘Tx\_offset’** is the offset joint angle from the mathematical zero position to the mechanical zero position shown in the picture.


a2 = sqrt(284.5^2+53.5^2) = 289.48866;

T2\_offset = -atan(284.5/53.5) = -1.3849179 (-79.34995°);

T3\_offset = -T2\_offset = 1.3849179 (79.34995°);



**3. Mass Parameters**

![](../../../assets/image(44).png)

**xArm 6 - Model 1**

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.177</td><td>[0.15, 27.24, -13.75]</td></tr><tr><td>Link2</td><td>2.011</td><td>[36.7, -220.9, 33.56]</td></tr><tr><td>Link3</td><td>1.725</td><td>[69.77, 113.5, 11.6]</td></tr><tr><td>Link4</td><td>1.211</td><td>[-0.2, 20.0, 26.0]</td></tr><tr><td>Link5</td><td>1.206</td><td>[63.87, 29.3, 3.5]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

**xArm 6 - Model 2**

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.46</td><td>[0.13, 30.1, -12.0]</td></tr><tr><td>Link2</td><td>2.21</td><td>[38.2, -226.6, 34.7]</td></tr><tr><td>Link3</td><td>1.925</td><td>[70.6, 117.2, 10.4]</td></tr><tr><td>Link4</td><td>1.36</td><td>[0.18, 17.7, -23.0]</td></tr><tr><td>Link5</td><td>1.354</td><td>[65.2, 31.8, 3.11]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

**xArm 6 - Model 3**

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.382</td><td>[0.13, 29.4, -12.4]</td></tr><tr><td>Link2</td><td>2.267</td><td>[38.8, -227.8, 34.96]</td></tr><tr><td>Link3</td><td>1.875</td><td>[70.4, 116.3, 10.7]</td></tr><tr><td>Link4</td><td>1.319</td><td>[-0.2, 18.0, -22.9]</td></tr><tr><td>Link5</td><td>1.34</td><td>[65.1, 30.96, 3.15]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

**xArm 6 - Model 4**

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.53</td><td>[-0.164, 35.94, -6.5]</td></tr><tr><td>Link2</td><td>2.242</td><td>[40.84, -240.3, 32.54]</td></tr><tr><td>Link3</td><td>2.019</td><td>[71.4, 126.8, 10.9]</td></tr><tr><td>Link4</td><td>1.361</td><td>[0.185, 14.66, -21.97]</td></tr><tr><td>Link5</td><td>1.345</td><td>[68.24, 33.42, 2.64]</td></tr><tr><td>Link6</td><td>0.173</td><td>[0.8, -3.59, -13.26]</td></tr></tbody></table>
