# c#(c sharp)学习笔记

```csharp
class HelloWorld
{
	static void Main()
	{
		System.Console.WriteLine("Hello World!");
	}
}
```

* 配置好 csc 的环境变量后，在 cmd 中输入 csc + cs文件的路径即可编译cs文件

```csharp
using System;
namespace HelloWorldApplication
{
	class HelloWorld
	{
		static void Main(string[] args)
		{
			/* 我的第一个 c# 程序 */
			Console.WriteLine("HelloWorld");
			Console.ReadKey();
		}
	}
}
```

* 程序的第一行 using System; - using 关键字用于在程序中包含 System 命名空间。一个程序一般有多个 using 语句
* 下一行是 namespace 声明。一个 namespace 里包含了一系列的类。HelloWorldApplication 命名空间包含了类 HelloWorld
* 下一行是 class 声明。类 HelloWorld 包含了程序使用的数据和方法声明。类一般包含多个方法。方法定义了类的行为。在这里，HelloWorld 类只有一个 Main 方法
* 下一行定义了 Main 方法，是所有 c# 程序的入口点。Main 方法说明当执行时 类将做什么动作
* 下一行 /* ... */ 将会被编译器忽略，且它会在程序中添加额外的注释
* Main 方法通过语句 Console.WriteLine("HelloWorld");指定了它的行为。WriteLine是一个定义在 System 命名空间中的 Console 类的一个方法。该语句会在屏幕上显示消息"HelloWorld！"。
* 最后一行 Console.ReadKey();是针对 VS.NET 用户的。这使得程序会等待一个按键的动作，防止程序从 Visual Studio .NET 启动时屏幕会快速运行并关闭
* 以下几点值得注意
  * c# 是大小写敏感的
  * 所有的语句和表达式必须以分号（;）结尾
  * 程序的执行从 Main 方法开始
  * 与 Java 不同的是，文件名可以不同于类的名称

## 编译 & 执行 C# 程序

如果您使用 Visual Studio.Net 编译和执行 C# 程序，请按下面的步骤进行：

- 启动 Visual Studio。
- 在菜单栏上，选择 File -> New -> Project。
- 从模板中选择 Visual C#，然后选择 Windows。
- 选择 Console Application。
- 为您的项目制定一个名称，然后点击 OK 按钮。
- 新项目会出现在解决方案资源管理器（Solution Explorer）中。
- 在代码编辑器（Code Editor）中编写代码。
- 点击 Run 按钮或者按下 F5 键来运行程序。会出现一个命令提示符窗口（Command Prompt window），显示 Hello World。

您也可以使用命令行代替 Visual Studio IDE 来编译 C# 程序：

- 打开一个文本编辑器，添加上面提到的代码。
- 保存文件为 **helloworld.cs**。
- 打开命令提示符工具，定位到文件所保存的目录。
- 键入 **csc helloworld.cs** 并按下 enter 键来编译代码。
- 如果代码没有错误，命令提示符会进入下一行，并生成 **helloworld.exe** 可执行文件。
- 接下来，键入 **helloworld** 来执行程序。
- 您将看到 "Hello World" 打印在屏幕上。

```csharp
using System;

namespace RectangleApplication
{
    class Rectangle
    {
        // 成员变量
        double length;
        double width;

        public void Acceptdetails()
        {
            length = 4.5;
            width = 3.2;
        }
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("length:{0}", length);
            Console.WriteLine("width:{0}", width);
            Console.WriteLine("Area:{0}", GetArea());
        }
    }

    class ExecuteRectangle
    {
        static void Main(String[] args)
        {
            Rectangle r = new Rectangle();
            r.Acceptdetails();
            r.Display();
            Console.ReadLine();
        }
    }
}
```

* using 关键字
  * 在任何 c# 程序中的第一条语句都是 using System;
  * using 关键字用于在程序中包含命名空间。一个程序可以包含多个 using 语句

* class 关键字

  * class 关键字用于声明一个类

* c# 中的注释

  * 注释是用于解释代码。编译器会忽略注释的条目。在 C# 程序中，多行注释以 /* 开始，并以字符 */ 终止

  * ```csharp
    /* 这里是注释
    这里是注释
    这里是注释 */
    ```

  * 单行注释用 // 符号表示

  * ```csharp
    // end class Rectangle
    ```

* 

http://www.runoob.com/csharp/csharp-inheritance.html

* 接口定义了所有类继承接口时应遵守的语法合同。接口定义了语法合同"是什么"部分,派生类定义了语法合同"怎么做"部分
* 接口定义了属性、方法和事件，这些都是接口的成员。接口只包含了成员的声明。成员的定义是派生类的责任。接口提供了派生类应遵循的标准结构
* 接口使得实现接口的类或结构在形式上保持一致
* 抽象类在某种程度上与接口类似，但是，它们大多只是用在当只有少数方法由基类声明由派生类实现时

## 接口的主要特点

1. 通过接口可以实现多重继承，c#接口的成员不能有public、protected、internal、private 等修饰符。原因很简单，接口里面的方法都需要由外面接口实现去实现方法体，那么其修饰符必然是public。c#接口中的成员默认是public的，java 中是可以加 public 的
2. 接口成员不能有 new、static、abstract、override、virtual 修饰符。有一点要注意，当一个接口实现一个接口，这两个接口中有相同的方法时，可用 new 关键字隐藏父接口中的方法
3. 接口中只包含成员的签名，接口没有构造函数，所以不能直接使用 new 对接口进行实例化。接口中只能包含方法、属性、事件和索引的组合。接口一旦被实现，实现类必须实现接口中的所有成员，除非实现类本身是抽象类
4. c# 是单继承，接口是解决 c# 里面类可以同时继承多个基类的问题

### 接口和抽象类的区别

1. 接口用于规范，抽象类用于共性。抽象类是类，所以只能被单继承，但是接口却可以一次实现多个
2. 接口中只能声明方法、属性、事件、索引器。而抽象类中可以有方法的实现，也可以定义非静态的类变量
3. 抽象类可以提供某些方法的部分实现，接口不可以。抽象类的实例是它的子类给出的。接口的实例是实现接口的类给出的
4. 在抽象类中加入一个方法，那么它的子类就同时有了这个方法。而在接口中加入新的方法，那么实现它的类就要重新编写
5. 接口成员被定义为公共的，但抽象类的成员也可以是私有的、受保护的、内部的、或受保护的内部成员
6. 此外接口不能包含字段、构造函数、解析函数、静态成员或常量
7. 在vs中实现接口时会发现有两个选项，一个是实现接口，一个是显示实现接口。实现接口就是我们平时理解的实现接口，而显示实现接口的话实现的方法是属于接口的，而不是属于实现类的

## C# 命名空间

1. 命名空间的设计目的是提供一种让一组名称与其他名称分隔开的方式。在一个命名空间中声明的类的名称与另一个命名空间中声明的相同的类的名称不冲突

2. **定义命名空间**

   1. 命名空间的定义是以关键字 namespace 开始，后跟命名空间的名称

   2. ```c#
      namespace namespace_name
      {
          // 代码声明
      }
      ```

      为了调用支持命名空间版本的函数或变量，会把命名空间的名称至于前面，如下所示：

      ```c#
      namespace_name.item_name
      ```

C# 异常处理时建立在四个关键词之上的：try、catch、finally、throw

1. try：一个 try 块标识了一个将激活的特定的异常的代码块。后跟一个或多个 catch 块
2. catch：程序通过异常处理程序捕获异常。catch 关键字表示异常的捕获
3. finally：finally 块用于执行给定的语句，不管异常是否被抛出都会执行。例如，打开一个文件，不管是否出现异常文件都要被关闭
4. throw：当问题出现时，程序抛出一个异常。使用 throw 关键字来完成

Ctrl + A => Ctrl + K + F 格式化代码（整理代码）

* 数据类型转换有一个叫做 TryParse的方法

  * 这个方法返回的是能否转换成功的bool类型

  * 第一个参数是需要转换的字符串，第二个参数是out 输出参数，为返回的转换结果

  * 以下为例子:

  * ```c#
    private static bool TryParse(string str, out int result)
    ```

* 装箱操作是先在堆中创建一块区域，分别是常见放变量的区域、同步块索引、类型对象指针，然后将栈中的变量复制到堆中，最后把内存地址给予栈帧中的使用块

* ```c#
  // 可变字符串 一次开辟可以容纳10个字符大小的空间
  // 有点：避免产生垃圾
  StringBuilder builder = new StringBuilder(10);
  for (int i = 0; i < 10; i++)
  {
  	builder.Append(i);
  }
  builder.Append("嘻嘻嘻嘻");
  string result = builder.ToString();
  ```

* 