# 1. 前言
UFACTORY Studio是一个控制机械臂的图形化用户应用程序，可以用来设置机械臂参数，实时控制机械臂姿态，可以通过拖拽Blockly命令来创建机械臂的运动程序。UFACTORY Studio提供了完善的机器人系统状态信息、故障提示与故障处理方案，即使您通过Python SDK/C++/ROS或机械臂自定义TCP协议来创建您的程序，我们仍然建议您在调试、编程阶段，始终保持UFACTORY Studio处于运行状态。    

UFACTORY Studio可通过浏览器访问，现已兼容的浏览器有：Google Chrome、Firefox、Safari、Microsoft Edge(Chromium内核)。   

适用产品：**xArm5、xArm6、xArm7、UFACTORY 850、Lite6。**
# 2. 连接机械臂
## 2.1 硬件连接
&ensp;&ensp;推荐控制器与PC直连，以xArm为例如下图： 
![[cable_connection_cn.jpg]]
&ensp;&ensp;其他连接方式请参考硬件连接。


## 2.2 软件连接
机械臂默认IP为192.168.1.xxx，**请确保电脑IP和机械臂IP处于同一网段，但不能完全一致。**即PC端的IPV4网段必须在192.168.1.1-192.168.1.255之间。
如何设置电脑IP请参考[快速安装手册-软件连接](https://www.cn.ufactory.cc/_files/ugd/896670_96742aa662884c389854f66dad3c4cbe.pdf)。   

打开浏览器，在搜索栏中输入**控制器IP+:18333**，可快速访问UFACTORY Studio。 

例如：控制器IP为192.168.1.201
访问链接：<u>192.168.1.201:18333</u></br>
![[ufactory_studio_cn.jpg]]

# 3. 实时控制界面
&ensp;&ensp;用于实时控制机械臂的位置，调整机械臂的运动姿态，末端工具，轨迹录制等。
![[live_control_cn.png]]
## 3.1 产品基础信息
&ensp;&ensp;产品信息界面显示产品基础信息，如型号，机械臂IP，固件及软件版本，机械臂状态，模式，负载，安装方式等。  </br>  
![[product_info_cn.png]]
* **IP地址：** 显示当前机械臂控制器的IP。  
* **模式：** 显示机械臂当前模式，默认为位置模式。  
* **负载：** 显示手臂当前的负载参数，默认为0kg。  
* **安装：** 显示手臂当前的安装方式，默认为水平。 
* **位置信息：** 显示机械臂当前TCP坐标[X,Y,Z,R,P,Y]。若选择轴角显示方式，则为[X,Y,Z,Rx,Ry,Rz]。可在辅助功能中切换。     
* **关节信息：** 显示机械臂各关节角度，单位为度。

## 3.2 使能和STOP按钮
![[enable_stop_cn.png]]
* **使能：** 使能机械臂各关节，使能成功后，该按钮消失。  
* **STOP：** 机械臂立刻停止运动并清除所有缓存指令，不会断机械臂的使能状态。**软急停。**
# 4. Blockly界面
&ensp;&ensp;Blockly是一个图形化编程工具，可以通过拖拽代码块的方式编程来控制机械臂，无需手动编写代码。
## 4.1 页面简介
![[blockly_home_cn.png]]
![[icon_run.png]] **运行：** 运行当前Blockly项目。
![[icon_pause_1.png]] **暂停：** 暂停正在运行的Blockly项目。
![[icon_convert.png]] **转Python：** 跳转到Python IDE模块。
![[icon_save.png]] **保存：** 保存对Blockly项目的更改。
![[icon_zoom_log.png]] **缩放日志区：** 隐藏/显示日志区域。
![[icon_zoom.png]] **缩放3D区：** 隐藏/显示3D模型区域。
![[icon_option_cn.png]] **文件操作：** 新建、导入、下载、复制、重命名、删除。
## 4.2 Blockly工作区
&ensp;&ensp; 将代码块拖入到操作面板，**代码块执行的顺序是自上而下，从左至右**，可同时拖拽改代码块后面连着的代码。拖拽代码块到左边非工作区删除，或者可以选择代码块后按键盘Enter/Delete键。
![[icon_blockly_1.png]] **重置：** 页面回到默认大小和代码块居中位置。
![[icon_blockly_2.png]] **放大：** 放大代码块。
![[icon_blockly_3.png]]**缩小：** 缩小代码块。