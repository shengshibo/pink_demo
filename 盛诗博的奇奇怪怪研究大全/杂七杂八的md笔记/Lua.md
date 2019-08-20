# Lua

1. type(val) 判断参数类型

2. #“xxx” #后接字符串计算字符串长度

3. 在数字字符串上计算可以转换成数字类型

4. 字符串拼接用 .. 例如： “111” .. "222"

5. Lua 中的 for循环 

6. ```lua
   for k, v in pairs(a) do
       print(k .. " : " .. v)
   end
   ```

7. Lua索引从1开始

8. Lua中遇到赋值语句会先计算右边所有的值然后再执行赋值操作，所以我们可以进行这样的交换变量的值

9. ```lua
   x, y = y, x;
   a[i], a[j] = a[j], a[i];
   ```

10. 再Lua中应该尽可能的使用局部变量

    1. 避免命名冲突
    2. 访问局部变量的速度比全局变量更快

11. 多值赋值经常用来交换变量，或将函数调用返回给变量

12. ```lua
    a, b = f()
    ```

13. 在table的索引使用方括号或者.

    1. ```lua
       t[i];
       t.i; -- 当索引为字符串类型时的一种简化写法
       gettable_event(t, i) -- 采用索引访问本质上是一个类似这样的函数调用
       ```

14. string.find 有两个返回值，返回匹配字符串的开始和结束的下标，如果没有匹配则返回nil

15. Lua函数可以接受可变数目的参数，和c语言类似，在函数参数列表中使用三点...表示函数有可变的参数

16. ipairs{...} 表示一个由所有变长参数构成的数组

17. ```lua
    local arg = {1, 3, 12, 34, 6, 17};
    #arg -- table的长度
    select("#", ...) -- 这种方式也是可以获取可变参数的数量
    ```

18. lua中符号唯一与别的语言不同的是不等于 ~= 表示不等于而不是 !=

19. ```lua
    .. -- 连接两个字符串
    # -- 一元运算符，返回字符串或表的长度
    ```

20. Lua中的字符串方法

    1. ```lua
       string.upper(argument); -- 字符串全部转为大写字母
       string.lower(argument); -- 字符串全部转为小写字母
       string.gsub(mainString, findString, replaceString, num); -- 在字符串中替换，mainString为要替换的字符串，findString为被替换的字符串，replaceString为要替换的字符，num为替换次数（可以忽略，则全部替换）
       string.find(str, substr, [init, [end]]); -- 在一个指定的目标字符串中搜索指定的内容（第三个参数为索引），返回其具体位置。不存在则返回nil
       string.reverse(arg); -- 字符串反转
       string.format(...); -- 返回一个类似printf的格式化字符串
       string.char(arg);
       string.byte(arg[,int]); -- char 将整形数字转成字符并连接，byte转换字符为整数值（可以指定某个字符，默认第一个字符）
       string.len(arg); -- 计算字符串长度
       string.rep(string, n); -- 返回字符串string的n个拷贝
       .. -- 连接两个字符串
       string.gmatch(str, pattern); -- 返回一个迭代器函数，每一次调用这个函数，返回一个在字符串str找到的下一个符合pattern描述的子串。如果参数pattern描述的字符串没有找到，迭代函数将返回nil
       string.match(str, pattern, init); -- string.match()只寻找源字符串str中的第一个配对，参数init可选，指定搜寻过程的起点，默认为1.在成功配对时，函数将返回匹配表达式中的所有捕获结果；如果没有设置捕获标记，则返回整个配对字符串。当没有成功的配对时，返回nil
       ```

21. table操作

    1. ```lua
       table.concat(table [, sep [, start [, end]]]) -- concat 是 concatrnate 的缩写。table.concat()函数列出参数中指定table的数组部分从start位置到end位置的所有元素，元素间以指定的分隔符隔开
       table.insert(table, [pos,] value) -- 在table的数组部分指定位置（pos）插入值为value的一个元素。pos参数可选，默认为数组部分末尾
       table.maxn(table) -- 指定table中所有正数key值中最大的key值。如果不存在key值为正数的元素，则返回0（Lua5.2之后该方法已经不存在了）
       table.remove(table [,pos]) -- 返回table数组部分位于pos位置的元素。其后的元素会被前移。pos参数可选，默认为table长度，即从最后一个元素删起。
       table.sort(table [, comp]) -- 对给定的table进行升序排序
       ```

22. Lua 协同程序

    1. ```lua
       coroutine.create() -- 创建coroutine，返回coroutine，参数是一个函数，当和resume配合使用的时候就唤醒函数调用
       coroutine.resume() -- 重启coroutine，和create配合使用
       coroutine.yield() -- 挂起coroutine，将coroutine设置为挂起状态，这个和resume配合使用能有很多有用的效果
       coroutine.status() -- 查看coroutine的状态。coroutine有三种状态：dead、suspended、running
       coroutine.wrap() -- 创建coroutine，返回一个函数，一旦你调用这个函数，就进入coroutine，和create功能重复
       coroutine.running() -- 返回正在跑的coroutine，一个coroutine就是一个线程，当使用running的时候，就是返回一个corouting的线程号
       ```

23. ```lua
    --[[
    有一些还未了解的
    http://www.runoob.com/lua/lua-iterators.html -- Lua 迭代器
    http://www.runoob.com/lua/lua-metatables.html -- Lua 元表
    http://www.runoob.com/lua/lua-debug.html -- Lua Debug调试
    http://www.runoob.com/lua/lua-garbage-collection.html -- Lua 垃圾回收
    http://www.runoob.com/lua/lua-object-oriented.html -- Lua 面向对象（继承相关）
    --]]
    ```

24. 