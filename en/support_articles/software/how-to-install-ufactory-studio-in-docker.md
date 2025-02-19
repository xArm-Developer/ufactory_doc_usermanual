
# How to install UFACTORY Studio in Docker
 Implemented via docker: Control simulated UFACTORY robots in UFACTORY Studio
  without the need for a real robot arm!

**Preparation:**

* Download and install docker, docker website:[Docker: Accelerated Container Application Development 2](https://www.docker.com/)

If you follow the guidance, you will start the xArm 6 robot by default.

#### 1. Get the docker image <a href="#id-1.get-the-docker-image" id="id-1.get-the-docker-image"></a>

```
docker pull danielwang123321/uf-ubuntu-docker
```

#### 2. Create and run container <a href="#id-2.create-and-run-container" id="id-2.create-and-run-container"></a>


* include web simulation and SDK ports(**Recommend**)


```
docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -p 30001:30001 -p 30002:30002 -p 30003:30003  danielwang123321/uf-ubuntu-docker
```


* only use UFACTORY Studio web simulation(**Not recommend**)

```
docker run -it --name uf_software -p 18333:18333 danielwang123321/uf-ubuntu-docker
```


#### 3.Run the xArm robot firmware and UFACTORY Studio <a href="#id-3.run-the-xarm-robot-firmware-and-ufactory-studio" id="id-3.run-the-xarm-robot-firmware-and-ufactory-studio"></a>

```
/xarm_scripts/xarm_start.sh 6 6
```

**Note: The 6 6 means xArm 6, restarting the container choose the robot according to your preferences:**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```

#### 4. Access the UFACTORY Studio <a href="#id-4.access-the-ufactory-studio" id="id-4.access-the-ufactory-studio"></a>

Run a web browser and input 127.0.0.1:18333 or locathost:18333

If there is a prompt of “Unable to get robot SN …” comes out on the web simulation page, click “Close" and then you can use the web simulation.

**If you need to use xArm SDK**

If you need connect the simulated robot and run your codes in your host computer, for example running your python codes, change the IP address to 127.0.0.1 and run.

### 5.Run the “Blockly-to-Python” codes with external IDE like VSCode or Pycharm
In case you copy the “Blockly-to-Python” codes from the internal Python IDE and run in the external IDE like VSCode or Pycharm on your computer, make sure add “check_joint_limit=False” in the line of instantiation like this

```
arm = XArmAPI('127.0.0.1', baud_checkset=False, check_joint_limit=False)
```

**Note:**

1-Test under Ubuntu 24.04 x86-64 and Windows 11 x86-64

2-Some uesfull commands

```
//Show the running container
  docker ps
//Stop the running container
  docker stop <container ID or container name >
//Start the container ''uf_software"
  docker start uf_software
//Enter the shell of the container “uf_software”
  docker exec -it uf_software /bin/bash
```

#### Release notes
2025.2.5

1.Add methoed of running “Blockly-to-Python” codes with external IDE like VSCode and Pycharm.

2.Modify the commands for Linux Ubuntu 24.04 x86-64