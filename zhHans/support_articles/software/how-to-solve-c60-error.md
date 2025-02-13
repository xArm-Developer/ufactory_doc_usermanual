
# 如何解决C60错误

C60：关节伺服模式线速度超出限制

适用固件版本：V2.3.0+

适用studio版本：V2.3.0+

出于安全考虑，即使是关节运动，我们也会在伺服模式下设置TCP速度限制。对于xArm系列和UF850，限制速度为1200mm/s，对于lite6，限制速度为500mm/s

当手臂伸展工作时，TCP速度极易超过阈值。因此，我们提高了阈值并提供了一个可自行设置限制的参数，请在安全评估后谨慎修改。

* set_linear_spd_limit_factor

* get_linear_spd_limit_factor

1- factor(倍数)* 1000 =TCP 速度限制值，默认倍数是1.2

2-__xArm系列/UF850:__  1.2* 1000 =1200mm/s ；__Lite6:__ 1.2*500 =600mm/s

3-在调用函数set_linear_spd_limit_factor之后，再调用save_conf来保存该设置。



```python
def set_linear_spd_limit_factor(self, factor):
Set linear speed limit factor (default is 1.2)
Note:
    1. only available if firmware_version >= 2.3.0
    2. only available in mode 1

:param factor: speed limit factor
:return: code
    code: See the API Code Documentation for details.


def get_linear_spd_limit_factor(self):
Get linear speed limit factor
Note:
    Only available if firmware_version >= 2.3.0

:return: tuple((code, factor)), only when code is 0, the returned result is correct.
    code: See the API Code Documentation for details.
    factor: linear speed limit factor
```

