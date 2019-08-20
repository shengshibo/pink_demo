# Unity3D 学习

Unity 是一个游戏引擎，是程序的框架，一款游戏最最核心的代码。

https://www.bilibili.com/video/av28779788/?p=8

https://www.bilibili.com/video/av28779788/?p=13

https://www.bilibili.com/video/av28779788/?p=14

https://www.bilibili.com/video/av28779788/?p=23

https://www.bilibili.com/video/av28779788/?p=31

https://www.bilibili.com/video/av28779788/?p=46

https://www.bilibili.com/video/av28779788/?p=78

https://www.bilibili.com/video/av28779788/?p=94

https://www.bilibili.com/video/av28779788/?p=113

https://www.bilibili.com/video/av28779788/?p=115

https://www.bilibili.com/video/av28779788/?p=125

https://www.bilibili.com/video/av28779788/?p=126

https://www.bilibili.com/video/av28779788/?p=130

https://www.bilibili.com/video/av28779788/?p=131

https://www.bilibili.com/video/av28779788/?p=136

https://www.bilibili.com/video/av28779788/?p=137

https://www.bilibili.com/video/av28779788/?p=139

https://www.bilibili.com/video/av28779788/?p=140

https://www.bilibili.com/video/av28779788/?p=143

https://www.bilibili.com/video/av28779788/?p=145

https://www.bilibili.com/video/av28779788/?p=146

https://www.bilibili.com/video/av28779788/?p=153

http://www.cnblogs.com/zhaoqingqing/p/4288454.html Unity3D设计模式

https://www.cnblogs.com/bitzhuwei/p/unity-core-types.html Unity3D核心类图

https://blog.csdn.net/meegomeego/article/details/38439593 Unity3D一些常用的快捷键

一、近距离查看游戏对象

　　在Hierarchy视图中选择游戏对象，然后在Scene视图中按快捷键“F”来近距离查看该游戏对象。

 

二、游戏对象不在主摄像头中？

　　Hierarchy中双击选择需要显示的游戏对象，再单击Main Camera选中，最后Ctrl+Shift+F键盘即可。

 

三、旋转视图

　　Alt键 + 鼠标左键 可以任意拖动鼠标来旋转视图。如果x，y，z坐标轴恢复不了，可以先单击X轴（Y、Z）再鼠标右键选择“Free” 最后通过这个来调试。

 

四、缩放视图

　　滚动鼠标中键可以缩放整体视图。

 

五、变换工具栏

　　拖动工具：Q  移动工具：W  旋转工具:快捷键为 E  缩放工具:R

 

 

六、MonoDevelop几个常用的快捷键

CTRL+K  删除光标所在行的该行后面的代码

CTRL + ALT +C  注释/不注释该行

CTRL+ DOWN  像鼠标滚轮一样向下拖

CTRL + UP 像鼠标滚轮一样向上拖

CTRL + F  查找该脚本

CTRL + SHIFT + F 查找全部脚本

CTRL + H 替换代码

CTRL + SHIFT +W 关掉所有脚本

 

七、飞行模式（透视模式下正交模式下是不行的）：（第一人称视角看） 鼠标右键+WSAD 可以前后左右 QE上下

 

八、按住Ctrl键移动物体会以一定的增量来移动物体

　　Edit-Snap Setting 栅格和捕捉设置

![img](http://images.cnitblog.com/i/285504/201403/080756580964175.png)

 

 八、Ctrl+Shift 使物体在另一个物体上移动,物体在被相交的物体上移动

 

九、顶点吸附 选中物体，按键盘V键 就可以看到物体的顶点：可以快速使两个物体定位

​     关闭顶点吸附：Shift+V

十、给物体添加图标

![img](http://images.cnitblog.com/i/285504/201403/080815030815139.png)

今天的Unity3D小技巧

​	[Unity3d 判断物体是否在可见范围内](https://www.cnblogs.com/HemJohn/p/4839823.html)

unity中自带两个回调函数：

void OnBecameVisible()//当物体可见时，回调一次。

void OnBecameInvisible()//当物体不可见时，回调一次。

在untiy编辑器中，无论调试窗口还是编辑窗口，只要能看到物体，OnBecameVisible都会被调用

1. 在游戏中如需要判断两个点是否一致就用距离，需要判断两个点的距离，当前位置接近与目标点就视为到达了。给两个点最小距离定义一个阈值
2. 如果有多个脚本需要同时使用，可以在类上加一个特性
   1. [RequireComponent(typeof(EnemyAnimation))]
3. 