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
    - 向数据库中插入文档
        db.<collection>.insert(doc)
            - 向集合中插入一个文档
            - 例子：向test数据库中的stus集合中插入一个新的学生对象
                {name:"孙悟空",age:6,gender:"男"}
                db.stus.insert({name:"孙悟空",age:6,gender:"男"})
    db.<collection>.find()
        - 查询当前集合中所有的文档
#### 插入文档
    - db.<collection>.insert()
        - 向集合中插入一个或多个文档
        - 可以传一个对象或者传一个数组
        - 当我们向集合中插入文档时，如果没有给文档指定id属性，则数据库会自动为文档添加_id
            该属性用来作为文档的唯一标识
        - _id我们可以自己指定，如果我们指定了_id数据库就不会自动添加了，如果自己指定了_id也必须确保它的唯一性
    - db.<collection>.insertOne()
        - 插入一个文档对象
    - db.<collection>.insertMany()
        - 插入多个文档对象
#### 查询文档
    - db.<collection>.find()
        - find()用来查询集合中所有符合条件的文档
        - find()可以接收一个对象作为条件参数
            {}表示查询集合中所有的文档
            {属性:值}查询属性是指定值的文档
        - fond()返回的是一个数组，后面甚至可以加索引去查找对应的对象
    - db.<collection>.findOne()
        - 用来查询集合中符合条件的第一个文档
        - findOne()返回的是一个文档对象
    - db.<collection>.find({}).count()
        - 查询所有结果的数量，.length()貌似也可以查询数量，但他们的实现方式不同，这个可以去去百度具体的查一查
#### 修改文档
    - db.<collection>.update(查询条件, 新对象)(默认情况下只修改查询到的第一个)
        - update()默认情况下会使用新对象来替换旧的对象
        - 如果需要修改指定的属性，而不是替换，需要使用"修改操作符"来完成修改
            $set可以用来修改文档中的指定属性
            $unset可以用来删除文档中的指定属性（和$set使用方法一样，只不过$unset后的对象只看属性名，属性值是什么无所谓）
        - update()默认只会修改一个
        - 实例：
            - db.stus.update({name:"沙和尚"},{age:28})
            - db.stus.update({name:"沙和尚"},{$set:{age:16}})
    - db.<collection>.updateMany()
        - 同时修改多个符合条件的文档
    - db.<collection>.updateOne()
        - 修改一个符合条件的文档
    - db.<collection>.replaceOne()
        - 替换一个文档
#### 删除文档
    - db.<collection>.remove()
        - remove()可以根据条件来删除文档，传递条件的方式和find()一样
        - 删除符合条件的所有文档(默认情况下删除多个)
            如果remove()第二个参数传递一个true，则只会删除一个
        - 如果值传递一个空对象作为参数，则会删除集合中的所有文档（相当于清空集合，这种方式删除性能略差）
            如真的想要清空集合，建议直接db.<collection>.drop()删除集合，如需要空集合，再重新添加
    - db.<collection>.deleteOne()

    - db.<collection>.deleteMany()

    - db.<collection>.drop()
        - 删除集合
    - db.dropDatabase()
        - 删除当前数据库
###### 一般数据库中的数据都不会删除，所以删除的方法很少调用（数据才是最值钱的！）
###### 一般会在数据中添加一个字段，来表示数据是否被删除，也就是假删除
#### 练习中出现的问题
    - MongoDB的属性值也可以是一个文档，当一个文档的属性值是一个文档时，我们称这个文档叫做内嵌文档
    - MongoDB支持直接通过内嵌文档的属性进行查询，如果要查询内嵌文档则可以通过.的形式来匹配
        如果要通过内嵌文档来对文档进行查询，此时属性名必须使用引号
    - 可以对数组中的单个元素进行匹配
    - $push用于向数组中添加一个新的元素，这个有重复也可以添加
    - $addToSet向数组中添加一个新的元素，如果数组中已经存在了该元素，则添加失败
    - 案例：向numbers中插入20000条数据
        // 7.4s
        for (var i = 1; i <= 20000; i++) {
            db.numbers.insert({num: i})
        }
        // 0.4s
        var arr = []
        for (var i = 1; i <= 20000; i++) {
            arr.push({num: i})
        }
        db.numbers.insert(arr)
        - 使用数据库能少调用就少调用，读取数据比较慢，所以第一个效率没有第二个高
