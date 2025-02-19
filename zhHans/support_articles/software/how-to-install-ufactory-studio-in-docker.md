

# 如何在docker中安装UFactory Studio?

在docker 安装 UFACTORY Studio 来控制UFACTORY仿真机械臂，而无需真正的机械臂！

**准备工作：**

* 下载并安装docker，docker官网下载链接： **https://www.docker.com/** （若官网无法访问，可找其他安装方法）

 如果你按照以下步骤进行操作，默认开启仿真xArm 6机械臂.


### 1.获取镜像

```
    docker pull danielwang123321/uf-ubuntu-docker
```

### 2.创建容器


* 如果想使用Ufatory Studio仿真和xArm的SDK,请输入：

```
docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -p 30001:30001 -p 30002:30002 -p 30003:30003  danielwang123321/uf-ubuntu-docker
```

* 如果只需要使用Ufactory Studio仿真，请输入：
```
docker run -it --name uf_software -p 18333:18333 danielwang123321/uf-ubuntu-docker
```


### 3.运行机械臂的固件和UFactory Studio

```
    /xarm_scripts/xarm_start.sh 6 6
```

**Note: 6 6 代表xArm 6, 重启容器后根据你的需求选择机械臂型号**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```

### 4.连接机械臂ip

在浏览器中搜索： 127.0.0.1:18333

**如果需要使用xArm SDK**
 
请把程序中的IP地址修改为：127.0.0.1


### 5.使用外部 IDE（如 VSCode 或 Pycharm）运行 “Blockly-to-Python” 代码

如果你从内部 Python IDE 复制了 “Blockly-to-Python” 代码，并在你的计算机上使用外部 IDE（如 VSCode 或 Pycharm）运行，请确保在实例化代码的那一行中添加 `check_joint_limit=False`，如下所示：

```python
arm = XArmAPI('127.0.0.1', baud_checkset=False, check_joint_limit=False)
```

### 注意事项：
1. 在 Ubuntu 24.04 x86-64 和 Windows 11 x86-64 下进行测试。
2. 一些有用的命令：
   - **显示正在运行的容器**：
     ```
     docker ps
     ```

   - **停止运行的容器**：
     ```
     docker stop <容器 ID 或 容器名称>
     ```

   - **启动容器 "uf_software"**：
     ```
     docker start uf_software
     ```

   - **进入容器 "uf_software" 的 shell**：
     ```
     docker exec -it uf_software /bin/bash
     ```

### 发布说明

**2025.2.5**

- 添加了使用外部 IDE（如 VSCode 和 Pycharm）运行 “Blockly-to-Python” 代码的方法。
- 修改了针对 Linux Ubuntu 24.04 x86-64 的命令。
