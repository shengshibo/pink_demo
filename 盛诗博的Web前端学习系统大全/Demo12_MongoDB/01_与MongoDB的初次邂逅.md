### 数据库的分类
#### 数据库主要分成两种
    - 关系型数据库（RDBMS）
        - MySQL、Oracle、DB2、SQL Server......
        - 关系数据库中全都是表
    - 非关系型数据库（NoSQL Not Only SQL）
        - MongoDB、Redis......
        - 键值对数据库
        - 文档数据库MongoDB
### MongoDB简介
    - MongoDB是为快速开发互联网Web应用而设计的数据库系统
    - MongoDB的设计目标是极简、灵活、作为Web应用栈的一部分
    - MongoDB的数据模型是面向文档的，所谓文档是一种类似于JSON的结构，
        简单理解MongoDB这个数据库中存的的各种各样的JSON（BSON）
### 三个概念
    - 数据库（database）
        - 数据库是一个仓库，在仓库中可以存放集合
    - 集合（collection）
        - 集合类似于数组，在集合中可以存放文档
    - 文档（document）
        - 文档数据库中的最小单元，我们存储和操作的内容都是文档
### 安装MongoDB
    - 安装
    - 配置环境变量
        默认安装路径：C:\Program Files\MongoDB\Server\4.2\bin
    - 在c盘根目录
        - 创建一个文件夹data
        - 在data中创建一个文件夹db
    - 打开cmd命令行窗口
        - 输入mongod 启动mongodb服务器
        - 32位注意：
            - 启动服务器时需要输入如下内容
                - mongod --storageEngine=mmapv1 // 32位的也就只有第一次启动的时候需要使用这个
        - 指定数据库地址
            - mongod --dbpath C:\Users\sheng\Desktop\data\db
            - mongod --dbpath 数据库路径 --port 端口号
            - port后跟着的是一个端口号，尽量使用默认的就可以，如想要自定义，建议使用4位以上的端口号，最大不能超过65535
    - 再打开一个cmd窗口
        - 输入mongo，连接mongodb，出现>
    - 数据库（database）
        - 数据库的服务器
            - 服务器用来保存数据
            - mongod用来启动数据库服务器
        - 数据库的客户端
            - 客户端用来操作服务器，对数据进行增删改查的操作
            - mongo用来启动客户端
    - 将MongoDB设置为系统服务，可以自动在后台启动，不需要每次都手动启动
        1. 在c盘根目录下创建data（也可以在别的地方）
            - 在data下创建db和log文件夹
        2. 创建配置文件
            - 在目录C:\Program Files\MongoDB\Server\4.2下添加一个配置文件（具体根据安装的位置决定）
                mongod.cfg
        3. 以管理员的身份打开命令行窗口
        4. 执行如下的命令
            sc.exe create MongoDB binPath= "\"mongo的bin目录\mongod.exe\" --service --config=\"mongo的安装目录\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"

            sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\4.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
            ———————————————— 
            版权声明：本文为CSDN博主「Yucihent」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
            原文链接：https://blog.csdn.net/yucihent/article/details/83751600
        5. 启动mongodb服务
        6. 如果启动失败，证明上面的配置操作有误
            在控制台输入sc delete MongoDB删除之前配置的服务
            然后从第一步开始再来一次
### MongoDB基本概念
    数据库（database）
    集合（collection）
    文档（document）
        - 在MongoDB中，数据库和集合都不需要手动创建，
            当我们创建文档时，如果文档所在的集合或数据库不存在会自动创建数据库和集合
### MongoDB基本指令
    show dbs
    show databases
        - 显示当前所有数据库
    use 数据库名
        - 进入到指定的数据库中
    db
        - db表示的是当前所在的数据库
    show collections
        - 显示数据库中所有的集合
### MongoDB数据库CRUD（增删改查）的操作
    - 像数据库中插入文档
        