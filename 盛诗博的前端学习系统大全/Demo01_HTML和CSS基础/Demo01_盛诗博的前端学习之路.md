# HTML&CSS基础

1. 介绍

   1. 软件的架构 C/S 客户端/服务器，B/S 浏览器/服务器
   2. B/S本质上也是C/S，使用浏览器作为软件的客户端
   3. 因为浏览器可以跨平台，所以开发一遍就好
   4. 但是B/S架构没有C/S架构安全，因为采用的是通用的HTTP协议而C/S是采用自有协议
   5. B/S架构也有HTTPS协议它是在http基础上加了安全套接字，相对于http来说https更加安全

2. 编写网页时一定写 H5 的文档声明

   1. "<!DOCTYPE HTML>"

3. 首先了解的编辑器 nodepad++  和 sublime

4. 告诉浏览器网页所采用的字符集

   1. 使用meta标签来设置网页的一些元数据

   2. meta是一个自结束标签，编写一个自结束标签可以在开始标签后加/

   3. <meta charset="utf-8"/>

5. HTML中一共有6个标题标签 h1-h6

   1. 我们使用后html标签时，关心的是标签的语义，我们使用的标签都是语义化的
   2. h1标签表示网页中的主要内容，是最重要的标签，h2-h6依次递减
   3. 对于搜索引擎来说h1标签仅次于title，搜索引擎检索完title，会立即查看h1中的内容，h1标签非常重要，会影响到页面在搜索引擎中的排名，页面只能写一个h1标签

6. 段落标签 "<p></p>"用于表示内容中的一个自然段 使用p标签来表示一个段落

   1. p标签独占一行，并且段与段之间会有一个间距

7. 在html中，字符之间写再多空格，浏览器也会当成一个空格解析，换行业会当成一个空格。

   1. 在页面中可以使用“br标签来表示一个换行，br标签是一个自结束标签”

8. hr标签也是自结束标签，可以在页面中生成一条水平线

9. HTML中，一些如< >这种特殊字符是不能直接使用的，需要使用一些特殊的符号来表示这些特殊字符，这些特殊符号我们成为实体，浏览器解析到实体时，会自动将实体转换为其对应的字符

   1. 实体语法  & + 实体的名字 + ;

      1. ```html
         < &lt;
         > &gt;
         空格 &nbsp;
         版权符号 &copy;
         ```

10. ```html
    <!-- 
    	使用img标签来向网页中引入一个外部图片，img标签也是一个自结束标签
    属性：
    	src：设置一个外部图片的路径
    	alt：可以用来设置在图片不能显示时，对图片的描述
    	搜索引擎可以通过alt属性来识别不同的图片
    	如果不写alt属性，则搜索引擎不会对img中的图片进行收录
    	width：可以用来修改图片的宽度，一般使用px作为单位
    	height：可以用来修改图片的高度，一般使用px作为单位
    	
    	宽度和高度两个属性如果只设置一个，另一个也会同时等比例调整大小。如果两个值同时指定则按照你指定的值来设置。一般开发中除了自适应的页面，不建议设置width和height
    -->
    <img src="1.gif" alt="这是一个动物" width="100px" height="300px" />
    <!-- 
    	src属性配置的是图片的路径，目前我们所要使用的路径全都是相对路径。
    	相对路径：
    		相对路径指相对于当前资源所在目录的位置
    		<img src="abc/def/2.gif"/>
    		可以使用../ 来返回一级目录，返回几级目录就写几个../
    		<img src="../../img/2.gif" alt="这是一个大松鼠"/>
    -->
    <!--
    	图片的格式
    		JPEG(JPG)
    			JPEG图片支持的颜色比较多，图片可以压缩，但是不支持透明
    			一般是用JPEG来保存照片等颜色丰富的图片
    		GIF
    			GIF支持的颜色少，只支持简单的透明，支持动态图
    			图片颜色单一或者是动态图时可以使用
    		PNG
    			PNG支持的颜色多，并且支持复杂的透明
    			可以用来显示颜色复杂的透明图片
    	图片的使用原则
    		效果不一致，使用效果好的
    		效果一致，使用小的
    -->
    ```

11. ```html
    <html>
        <head>
            <meta charset="utf-8"/>
            <title></title>
            <!--
    			使用mera标签还可以用来设置网页的关键字
    		-->
            <meta name="keywords" content="HTML5,JavaScript,前端,Java"/>
            <!--
    			还可以用来指定网页的描述
    			搜索引擎在检索页面时，会同时检索页面中的关键词和描述，但是这两个值不会影响页面在搜索引擎中的排名
    		-->
            <meta name="description" content="发布h5、js等前端相关的信息"/>
            <!--
    			使用meta可以用来做请求的重定向
    			<meta http-equiv="refresh" content="秒数；url=目标路径"/>
    		-->
            <meta http-equiv="refresh" content="5;url=http://www.baidu.com"/>
        </head>
        <body>
            
        </body>
    </html>
    ```

12. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>xHtml的语法规范</title>
        </head>
        <body>
            <!--
    			1.HTML中不区分大小写，但是我们一般都使用小写
    			2.HTML中的注释不能嵌套
    			3.HTML标签必须结构完整，要么成对出现，要么自结束标签
    			4.HTML标签可以嵌套，但是不能交叉嵌套
    			5.HTML标签中的属性必须有值，且值必须加引号(双引号单引号都可以)
    		-->
            <h1>我是demo03</h1>
            <!--
    			使用内联框架可以引入一个外部的页面
    				使用iframe来创建一个内联框架
    				属性：
    					src:指向一个外部页面的路径，可以使用相对路径
    					width:
    					height:
    					name:可以为内联框架指定一个name值
    				在显示开发中不推荐使用内联框架，因为内联框架中的内容不会被搜索引擎所检索
    			iframe
    		-->
            <iframe src="demo02.html" name="tom"></iframe>
        </body>
    </html>
    ```

13. ````html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>超链接</title>
        </head>
        <body>
            <h1>我是demo04</h1>
            <!--
    			使用超链接可以让我们从一个页面跳转到另一个页面
    			使用a标签来创建一个超链接
    			属性：
    				href:指向链接跳转的目标地址，可以写一个相对路径和可以写一个完整的地址
    		-->
            
            <a href="http://www.baidu.com">我是一个超链接</a>
            
            <!-- 
    			a标签中target属性可以用来指定打开链接的位置
    				可选值：
    					_seft,表示在当前窗口中打开（默认值）
    					_blank,在新的窗口中打开链接
    					可以设置一个内联框架的name属性值，链接将会在指定的内联框架中打开
    		-->
            <a href="demo03.html" target="tom">我是一个超链接</a>
            <iframe src="demo02.html" name="tom"></iframe>
            
            <!--
    			center标签中的内容，会默认在页面中居中显示
    			我们可以将要居中的元素，全部放到center中
    		-->
            
            <center>
            	<p>我是一个p标签</p>
            </center>
        </body>
    </html>
    ````

14. ```html
    <!-- 
    	创建超链接时，如果地址不确定可以直接写一个#作为占位符
    	如果将链接地址设置为#，则点击超链接以后，会自动跳转到当前页面的顶部
    	html中有一个属性，每一个元素都可以设置，该属性可以作为标签的唯一标识
    	这个属性就是id
    	跳转到id为bottom的元素所在的位置
    	直接在href中写 #id属性值
    
    	发送电子邮件的超链接，点击链接以后可以自动打开计算机中默认的邮件客户端
    	href="mailto:邮件地址"
    	
    	当点击这个超链接时，会默认打开计算机的默认电子邮件客户端，并且将收件人设置mailto后的邮件地址
    -->
    <a href="mailto:shengshibo@tom.com">联系我们</a>
    ```

15. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>CSS</title>
            <!-- 
    			内部样式表
    			也可以将css样式编写到head中的style标签里
    				将样式表编写在style标签中，然后通过css选择器选中指定元素
    					然后可以同时为这些元素一起设置样式，这样可以使样式进一步的复用
    				将样式表编写到style标签中也可以使表现和结构进一步分离，也是我们推荐的使用方式
    		-->
            
            <!-- 
    			还可以将样式表编辑到外部的CSS文件中,然后通过link标签来将外部的css文件引入到当前页面中，这样外部文件中的css样式表将会应用到当前页面中。
    			将css样式统一编写到外部的样式表中，完全使结构和表现分离，可以使样式表在不同的页面中使用，最大限度的复用样式，将样式统一写在样式表中，然后通过link标签引入，可以利用浏览器的缓存加快用户访问的速度提高了用户的体验，所以在开发中最推荐的方式是使用外部的css文件，其次是内部样式表的使用方式，最后最后是内联样式表
    		-->
            <style type="text/css">
                p{
                    color:red;
                    font-size:40px;
                }
                
            </style>
        </head>
        <body>
            <!-- 
    			可以将css样式编写到元素的style属性当中
    				将样式直接编写到style属性中，这样样式我们称为内联样式
    				内联样式只对当前的元素中的内容起作用，内联样式不方便复用
    				内联样式属于结构与表现耦合，不方便后期的维护，不推荐使用
    				<p style="color:red;font-size:40px;">锄禾日当午</p>
    		-->
            
            <p>锄禾日当午</p>
        </body>
    </html>
    ```

16. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>CSS</title>
            <style>
            	/*
                	css的注释，作用和HTML注释类似，只不过它必须编写在style标签中，或者是css文件中
                	
                	css的语法：
                		选择器 声明块
                	选择器：
                		通过选择器可以选中页面中指定的元素，
                		并且将声明块中的样式应用到选择器对应的元素上
                	声明块：
                		声明块紧跟在选择器的后面，使用一对{}括起来，
                		声明块中实际上就是一组一组的名值对结构，
                		这一组一组的名值对我们称为声明，
                		在一个声明块中可以写多个声明，多个声明之间可以使用;隔开，
                		声明的样式名和样式值之间使用:来连接
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```

17. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>内联元素和块级元素</title>
        </head>
        <body>
            <!-- 
    			块元素和内联元素
    			
    			div就是一个块元素
    				所谓的块元素就是会独占一行的元素，无论它的内容有多少它都会独占一整行
    				p h1 h2 h3 h4
    				div这个标签没有任何语义，就是一个纯粹的块元素
    				并且不会为它里面的元素设置任何默认样式
    				div元素主要是用来给网页进行布局
    			span是一个内联元素（行内元素）
    				所谓的行内元素指的是只占自身大小的元素，不会占用一行
    				常见的内联元素 a img iframe span等
    				span没有任何的语义，span标签专门用来选中文字，然后为文字来设置样式
    			块元素主要用来做页面的布局，内联元素主要用来选中文本设置样式
    				一般情况下只使用块元素来包含内联元素，而不会使用内联元素去包含一个块元素
    				a元素可以包含任意元素，除了自身
    				p元素不可以包含任意块元素
    		-->
            
            <!-- 
    			元素选择器
    				作用：通过元素选择器可以选择页面中的所有指定元素
    				语法：
    					标签名{}
    			id选择器
    				通过元素的id的属性值选中唯一的一个元素
    				语法：
    					#id属性值{}
    			我们可以为元素设置class属性
    				class属性和id属性类似，但是class属性可以重复
    				拥有相同class属性值的元素，我们说他们是一组元素
    				一个元素可以同时设置多个class，多个值之间使用空格隔开
    			类选择器
    				通过元素的class属性值选中一组元素
    				语法：
    					.class属性值{}
    			选择器分组（并集选择器）
    				通过选择器分组可以同时选中多个选择器对应的元素
    				语法：
    					选择器1,选择器2,选择器n{}
    			通配选择器
    				他可以选中页面中的所有的元素
    				语法：
    					*{}
    			复合选择器（交集选择器）
    				作用：
    					可以选中同时满足多个选择器的元素
    				语法：
    					选择器1选择器2选择器n{}
    		-->
        </body>
    </html>
    ```

18. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>title</title>
            <style type="text/css">
            	/*
                	后代元素选择器
                		作用：
                			选中指定元素的指定后代元素
                		语法：
                			祖先元素 后代元素{}
                	子元素选择器
                		作用：
                			选中指定父元素的指定子元素
                		语法：
                			父元素 > 子元素{}
                */
                
                /*
                	伪类专门用来表示元素的特殊状态
                	比如：访问过的超链接，普通的超链接，获取焦点的文本框
                	当我们需要为这些处在特殊状态的元素设置样式时，就可以使用伪类
                	
                	:link
                		表示普通的链接（没访问过的）
                	:visited
                		表示访问过的链接
                		由于涉及到用户的隐私问题，所以使用visited伪类只能设置字体的颜色
                	
                	浏览器是通过历史记录来判断一个链接是否访问过
                
                	:hover伪类表示鼠标移入的状态
                	:active表示的是超链接被点击的状态
                
                	:hover和active也可以给其他元素设置
                	IE6中，不支持给超链接以外的元素设置:hover和:active
                */
                
                /*
                	文本框获取焦点
                	input:focus{
                		background-color: yellow;
                	}
                */
                /*
                	为p标签中选中的内容设置样式
                	可以使用::selection伪类
                	这个伪类在火狐浏览器中需要使用另外一种方式进行编写
                	::-moz-selection{}
                	如需兼容多种浏览器建议两个都写就好了
                */
            </style>
        </head>
        <body>
            <!-- 
    			元素之间的关系
    				父元素：直接包含子元素的元素
    				子元素：直接被父元素包含的元素
    				祖先元素：直接或间接包含后代元素的元素，父元素也是祖先元素
    				后代元素：直接或间接被祖先元素包含的元素，子元素也是后代元素
    				兄弟元素：拥有相同父元素的元素叫做兄弟元素
    		-->
            
            <!-- 使用input可以创建一个文本输入框 -->
            <input type="text" />
        </body>
    </html>
    ```

19. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>伪元素</title>
            <style>
            	/*
                	使用伪元素来表示元素中的一些特殊的位置
                	为p中第一个字符来设置一个特殊的样式
                */
                p:first-letter{
                    color: red;
                    font-size: 20px;
                }
                /*
                	为p中的第一行设置背景颜色为黄色
                */
                p:first-line{
                    background-color: yellow;
                }
                /*
                	:before表示元素最前面的部分
                	一般before都需要结合content这个样式一起使用
                	通过content可以向before或after的位置添加一些内容
                	
                	:after表示元素最后边的部分
                */
                p:before{
                    content: "这是最前面的";
                    color: red;
                }
            </style>
        </head>
        <body>
            <p>heihei</p>
        </body>
    </html>
    ```
    
20. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>属性选择器</title>
            <style>
            	/*
                	属性选择器
                		作用：可以根据元素中的属性或属性值来选取指定元素
                		语法：
                			[属性名] 选取含有指定属性的元素
                			[属性名="属性值"] 选取含有指定属性值的元素
                			[属性名^="属性值"] 选取属性值以指定内容开头的元素
                			[属性名$="属性值"] 选取属性值以指定内容结尾的元素
                			[属性名*="属性值"] 选取属性值以包含于指定内容的元素
                */
            </style>
        </head>
        <body>
            <!-- 
    			title属性，这个属性可以给任何标签指定
    				当鼠标移入到元素上时，元素中的title属性的值将会作为提示文字显示
    		-->
        </body>
    </html>
    ```

21. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
            <style>
            	/*
                	:first-child 可以选中第一个子元素
                	:last-child 可以选中最后一个子元素
                	:nth-child 可以选中任意位置的子元素
                		该选择器后边可以指定一个参数，指定要选中第几个子元素
                		even 表示偶数位置的子元素
                		odd 表示奇数位置的子元素
                
                	:first-of-type
                	:last-of-type
                	:nth-of-type
                		和:first-child这些非常相似
                		只不过child这些是在所有的子元素中排列
                		而type是在当前类型的子元素中排列
                */
                body > p:first-child{
                    background-color: yellow;
                }
                p:nth-child(3){
                    background-color: yellow;
                }
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```

22. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>兄弟元素选择器</title>
            <style>
            	/*
                	后一个兄弟元素选择器
                	作用：可以选中一个元素后紧挨着的指定的兄弟元素
                	语法：前一个 + 后一个
                */
                span + p{
                    background-color: red;
                }
            /*
                	选中后边的所有兄弟元素
                	语法：前一个 ~ 后边所有
                */
                span ~ p{
                    background-color: red;
                }
                /*
                	像儿子可以继承父亲的遗产一样，在CSS中，祖先元素上的样式，也会被它的后代元素所继承，
                	利用继承，可以将一些基本的样式设置给祖先元素，这样所有的后代元素将会自动继承这些样式
                	
                	但是并不是所有的样式都会被子元素所继承，比如：背景相关的样式都不会被继承
                */
                
                /*
                	当使用不同的选择器，选中同一个元素并且设置相同的样式时
                	这是样式之间产生了冲突，使用哪一个由选择器的优先级决定
                	优先级高的优先显示
                	
                	优先级的规则：
                		内联样式：1000
                		id选择器：100
                		类和伪类：10
                		元素选择器：1
                		通配*：0
                		继承的样式：没有优先级
                
                	当选择器中包含多种选择器时需要将多种选择器的优先级相加然后再比较
                	但是注意，选择器优先级的计算不会超过它的最大的数量级
                	如果选择器的优先级一样，则使用靠后的样式
                
                	并集选择器的优先级是单独计算的
                	div, p, #p1, .hello{}
                	
                	可以在样式的最后添加一个!important，则此时该样式将会获得一个最高的优先级
                	将会优先于所有的样式显示甚至超过内联样式，但是在开发中尽量避免使用!important
                
                	涉及到a的伪类一共有4个
                		:link
                		:visited
                		:hover
                		:active
                		而这4个选择器的优先级是一样的
                		一定要按顺序写才能保证正常使用
                		避免一些不必要的麻烦
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```
    
23. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>文本标签</title>
            <style>
            	
            </style>
        </head>
        <body>
        	<!--
    			<em> 和 <strong>
    			这两个标签都表示一个强调的内容
    			em标签用于表示一段内容中的着重点
    			strong标签用于表示一个内容的重要性
    			这两个标签可以单独使用，也可以一起使用
    			通常em显示为斜体，而strong显示为粗体
    
    			i标签中的内容会以斜体显示
    			b标签中的内容会以加粗显示
    			
    			h5规范中规定，对于不需要着重的内容而是单纯的加粗或者是斜体，就可以使用b和i标签
    
    			small标签中的内容会比他的父元素中的文字要小一些
    				在h5中使用small标签来表示一些细则一类的内容
    				比如合同中的小字，网站的版权声明都可以放到small
    
    			网页中所有加书名号的内容都可以使用cite标签，表示参考的内容
    				比如：书名 歌名 话剧名 电影名
    			
    			q标签表示一个短的引用（行内引用）
    				q标签引用的内容，浏览器会默认加上引号
    			
    			blockquote标签表示一个长引用（块级引用）
    			
    			使用sup标签来设置一个上标
    			使用sub标签来设置一个下标
    
    			使用del标签来表示一个删除的内容
    				del标签中的内容会自动添加删除线
    			ins表示一个插入的内容
    				ins中的内容会自动添加下划线
    
    			需要页面中直接编写一段代码
    			pre是一个预格式标签，会将代码中的格式保存，不会忽略多个空格
    			code专门用来表示代码
    			我们一般结合使用pre和code来表示一段代码
    		-->
            <pre>
            	<code>
            		window.onload = function () {
            			alert("Hello World");
            		};
            	</code>
            </pre>
            
        </body>
    </html>
    ```

24. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
            <style>
            
            </style>
        </head>
        <body>
            <!-- 
    			列表就相当于超市购物时的购物清单
    				在html也可以创建列表，在网页中一共有三种列表
    					无序列表
					有序列表
    					定义列表
    			
    			无序列表
    				使用ul标签来创建一个无序列表
    				使用li在ul中创建一个一个的列表项
    					一个li就是一个列表项
    				通过type属性可以修改无序列表的项目符号
    					可选值：
    						disc，默认值，实心的圆点
    						square，实心的方块
    						circle，空心的圆
    				注意：默认的项目符号我们一般都不使用
    				在css中加：
    					ul{
    						list-style: none;
    					}
    				如果需要设置项目符号，则可以采用为li设置背景图片的方式来设置
    				ul和li都是块级元素
    
    			有序列表和无序列表类似，只不过它使用ol来代替ul
    			有序列表使用有序的序号作为项目符号
    			type属性可以指定序号的类型
    				可选值：
    					1，默认值，使用阿拉伯数字
    					a/A，采用小写或大写字母作为序号
    					i/I，采用小写或者大写的罗马数字作为序号
    			ol也是块级元素
    
    			列表之间都是可以互相嵌套，可以在无序列表中放个有序列表
    				也可以在一个有序列表中放无序列表
    
    			定义列表用来对一些词汇或内容进行定义
    			使用dl来创建一个定义列表
    				dl中有两个子标签
    					dt：被定义的内容
    					dd：对定义内容的描述
    			同样dl和ul和ol之间都可以互相嵌套
    		-->
        </body>
    </html>
    ```
    
25. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>长度单位</title>
            <style>
            	/*
                	长度单位
                		像素px
                			像素是我们在网页中使用最多的一个单位
                			一个像素在屏幕中就是一个点
                			不同显示器一个像素的大小也不同
                			显示效果越好越清晰的像素就越小，反之越大
                		百分比
                			可以将单位设置成百分比
                			这样浏览器会根据设置元素的父元素来计算该值
                			使用百分比的好处在于，当父元素的属性值发生改变后，
                			子元素也会按照比例发生改变
                			在我们创建一个自适应的页面时，经常使用百分比作为单位
                		em
                			em和百分比类似，它是相对于当前元素的字体大小来计算的
                			1em = 1font-size
                			使用em时，当字体大小发生改变，em也随之改变
                			当设置字体相关的样式时，经常会使用em
                */
            </style>
        </head>
        <body>
            <div class="box">
                
            </div>
        </body>
    </html>
    ```

26. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>颜色单位</title>
            <style>
            	/*
                	颜色单位
                		在CSS可以直接使用颜色的单词来表示不同的颜色
                			红色：red
                			蓝色：blue
                			绿色：green
                		也可以使用RGB值来表示不同的颜色
                			所谓RGB值指的是通过Red Green Blue三元色
                				通过这三种颜色的不同浓度，来表示出不同的颜色
                			例子：rgb(红色的浓度,绿色的浓度,蓝色的浓度)
                				颜色的浓度需要一个0-255之间的值，255表示最大，0表示没有
                				浓度也可以采用一个百分数来设置，需要一个0%-100%之间的数字
                				使用百分数最终也会转换为0-255之间的数
                				0%表示0
                				100%表示255
                		也可以使用16进制的rgb值来表示颜色，原理和上面rgb原理一样
                			只不过是用16进制数来代替，使用三组两位的十六进制数组来表示一个颜色
                			每组表示一个颜色，第一组表示红色的浓度，范围00-ff
                							第二组表示绿色的浓度，范围00-ff
                							第三组表示蓝色的浓度，范围00-ff
                			语法：#红色绿色蓝色
                			十六进制：0 1 2 3 4 5 6 7 8 9 a b c d e f
                			00 - ff
                			00表示没有，相当于rgb中的0
                			ff表示最大，相当于rgb中的255
                			红色：#ff0000
                			像这种两位两位重复的颜色，可以简写
                				比如：#ff0000 可以简写成 #f00
                				#abc --> #aabbcc
                			
                			
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```

27. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>字体样式</title>
            <style>
            	/*
                	设置字体颜色，使用color来设置文字的颜色
                	color: red;
                	设置文字的大小，浏览器中一般默认的文字大小都是16px
                	font-size设置的并不是文字本身的大小
                		在页面中，每个文字都是处在一个看不见的框中
                		我们设置的font-size实际上是设置格的高度，并不是字体的大小
                		一般情况下，文字都是要比格小一些，当然也有时会比格大
                		根据字体的不同，显示效果也不同
                	font-size: 30px;
                	通过font-family可以指定文字的字体
                	当采用某种字体时，如果浏览器支持则使用该字体
                	如果浏览器不支持，则使用默认字体
                	该样式可以同时制定多个字体, 多个字体之间使用，隔开
                	当采用多个字体时，浏览器会优先使用前边的字体
                	如果前边没有再尝试下一个
                	font-family: arual, 微软雅黑;
                	
                	浏览器使用的字体默认就是计算机中的字体
                	如果计算机中有则使用，如果没有就不用
                	在开发中如果字体太奇怪，用的人太少了，尽量不要使用
                	有可能用户的电脑里没有，就不能达到想要的效果
                
                	在网页中将字体分为5大类
                		serif（衬线字体）
                		sans-serif（非衬线字体）
                		monospace（等宽字体）
                		cursive（草书字体）
                		fantasy（虚幻字体）
                	可以将字体设置为这些大的分类，当设置为大的分类以后，
                		浏览器会自动选择指定的字体并应用样式
                	一般会将字体的大分类，指定为font-family中的最后一个字体
                	<p style="font-size: 50px; font-family: serif;">字体</p>
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```

28. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>字体样式</title>
            <style>
            	/*
                	font-style可以用来设置文字的斜体
                		可选值
                			normal，默认值，文字正常显示
                			italic 文字会以斜体显示
                			oblique 文字会以倾斜的效果显示
                		大部分浏览器都不会对倾斜和斜体做区分
                			也就是说我们设置italic和oblique它们的效果往往是一样的
                		一般我们只会使用italic
            
                	font-weight可以用来设置文本的加粗效果
                		可选值：
                			normal，默认值，文字正常显示
                			bold，文字加粗显示
                		该样式也可以指定100-900之间的9个值，
                			但是由于用户的计算机往往没有那么多级别的字体，所以达到我们想要的效果
                			也就是200有可能比100粗，300有可能比200粗，但是也可能是一样的
                	font-variant可以用来设置小型大写字母
                		可选值：
                			normal，默认值，文字正常显示
                			small-caps 文本以小型大写字母显示
                	小型大写字母：
                		将所有的字母都以大写字母显示，但是小写字母的大写，要比大写字母的大小小一些
                
                	在CSS中还为我们提供了一个样式叫font
                		使用该样式可以同时设置字体相关的所有样式
                		可以将字体样式的值，统一写在font样式中，不同的值之间使用空格隔开
                	使用font设置字体样式时，斜体 加粗 小大字母 没有顺序要求 甚至可写可不写
                		如果不写则使用默认值，
                		但是要求文字的大小和字体必须写，而且字体必须是最后一个样式
                		大小必须是倒数第二个样式
                	实际上是用简写属性也会有一个比较好的性能
                	
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```
    
29. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>行高</title>
            <style>
            	/*
                	在CSS中并没有为我们提供一个直接设置行间距的方式
                	我们只能通过设置行高来间接的设置行间距，行高越大行间距越大
                	使用line-height来设置行高
                	行高类似于我们上学的单线本，单线本一行一行的，线与线之间的距离就是行高
                	网页中的文字实际上也是写在一个看不见的线中，而文字会默认在行高中垂直居中显示
                
                	行间距 = 行高 - 字体大小
                
            	通过设置line-height可以间接的设置行高
                		可以接收的值
                			直接写一个大小
                			制定一个百分数，则会相对于字体大小去计算行高
                			可以直接传一个数值，则行高会设置字体大小相应的倍数
                		line-height: 200%;
                		line-height: 2;
                
                	对于单行文本来说，可以将行高设置为和父元素的高度一致
                	这样可以让单行文本在父元素中垂直居中
                
                	在font中也可以指定行高
                	在字体大小后可以添加/行高，来指定行高。该值是可选的，不指定则会设置为默认值
                	font: 30px/50px "微软雅黑";
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```
    
30. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>字体样式</title>
            <style>
            	/*
                	text-transform可以用来设置文本的大小写
                	可选值：
                		none：默认值，该怎么显示就怎么显示，不做任何处理
                		capitalize：单词的首字母大写，通过空格来识别单词
                		uppercase：所有的字母都大写
                		lowercase：所有的字母都小写
                		
                	text-decoration可以用来设置文本的装饰
            		可选值：
                			none：默认值，不添加任何装饰，正常显示
                			underline：为文本添加下划线
                			overline：为文本添加上划线
                			line-through 为文本添加删除线
                	超链接会默认添加下划线，也就是超链接的text-decoration的默认值是underline
                		如果需要去除超链接的下划线则需要将该样式设置为none
                	text-decortaion: none;
                
                	letter-spacing可以指定字符间距
                	word-spacing可以设置单词之间的距离
                		实际上就是设置词与词之间空格的大小
                
                	text-align用于设置文本的对齐方式
                	可选值
                		left：默认值，文本靠左对齐
                		right：文本靠右对齐
                		center：文本居中对齐
                		justify：两端对齐
                			通过调整文本之间的空格的大小，来达到一个两端对齐的目的
                
                	text-indent用来设置首行缩进
                		当给它指定一个正值时，会自动向右侧缩进指定的像素
                		如果为它指定一个负值，则会向左移动指定的像素
                		通过这种方式可以将一些不想显示的文字隐藏起来，
                		这个值一般都会使用em作为单位
                			从而使搜索引擎搜索到并且不让用户看见
                		test-indent: 2em;
                		通过使用em单位可以动态的使用缩进，不会因为字体大小而产生影响，也便于理解
                		当然也可以使用px
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```
    
31. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>盒子模型，框模型</title>
            <style>
                .box{
                    /*
                    	使用width来设置盒子内容区的宽度
                    	使用height来设置盒子内容区的高度
                    	width和height只是设置的盒子内容区的大小，而不是盒子的整个大小
                    	盒子可见框的大小由内容区，内边距和边框共同决定
                    */
                    width: 100px;
                    height: 100px;
                /*设置背景颜色*/
                    background-color: #bfa;
                    /*
                    	为元素设置边框
                    		要为一个元素设置边框必须指定三个样式
                    			border-width:边框的宽度
                    			border-color:边框颜色
                    			border-style:边框的样式
                    
                    	设置边框宽度
                    	border-width: 10px;
                    		使用border-width可以分别指定4个边框的宽度
                    		如果在border-width指定了4个值
                    			则4个值会分别设置给 上 右 下 左 按照顺时针的方向设置
                    		如果指定3个值
                    			则3个值会分别设置给 上 左右 下
                    		如果设定2个值
                    			则2个值会分别设置给 上下 左右
                    		如果设定1个值
                    			则四边全都是该值
                    
                    		除了border-width，CSS中还提供了4个border-xxx-width
                    			xxx的值可能是 top right bottom left
                    		专门用来设置指定边的宽度
                    	设置边框颜色
                    	和宽度一样，color也提供4个方向的样式，可以分别指定颜色
                    	border-xxx-color
                    
                    	border-color: red;
                    	设置边框样式
                    		可选值
                    			none：默认值，没有边框
                    			solid：实线
                    			dotted：点状边框
                    			dashed：虚线
                    			double：双线
                    	style也可以分别指定四个边的边框样式，规则和width一致
                    	同时它也提供border-xxx-style四个样式，来分别设置4个边
                    	border-style: solid;
                    
                    	设置边框
                    		大部分的浏览器中，边框的宽度和颜色都是有默认值的，
                    			而边框的样式默认值都是none
                    		border
                    			边框的简写样式，通过它可以同时设置4个边框的 样式 宽度 颜色
                    			而且没有任何的顺序要求
                    			border一指定就是同时指定四个边不能分别指定
                    		border-top border-right border-bottom border-left
                    			可以单独设置四个边的样式，规则和border一样，只不过它只对一个边生效
                    
                    	有一种快捷的设置三个边的方法，先设置四个边后取消一个边的设置
                    		border: red solid 10px;
                    		border-right: none;
                    
                    	内边距（padding），指的是盒子的内容区和盒子的边框之间的距离
                    		一共有四个方向的内边距，可以通过
                    			padding-top
                    			padding-right
                    			padding-bottom
                    			padding-left
                    				来设置四个方向的内边距
                    		
                    	内边距会影响盒子的可见框的大小，元素的背景会延伸到内边距
                    		盒子的大小由 内容区 内边距 边框 共同决定
                    	盒子可见框的宽度 = 
                    		border-left-width 
                    		+ padding-left 
                    		+ width 
                    		+ padding-right 
                    		+ border-right-width
                    	盒子可见框的高度 = 
                    		border-top-width 
                    		+ padding-top 
                    		+ height 
                    		+ padding-bottom 
                    		+ border-bottom-width
                    	
                    	使用padding可以同时设置四个边框的样式，规则和border-width一致
                    
                    	外边距指的是当前盒子与其他盒子之间的距离
                    		他不会影响可见框的大小，而是会影响到盒子的位置
                    		盒子有四个方向的外边距：
                    			margin-top
                    			margin-right
                    			margin-bottom
                    			margin-left
                    		由于页面中的元素都是靠左靠上摆放的
                    		所以注意当我们设置上和左外边距时，会导致盒子自身的位置发生改变
                    		而如果是设置右和下外边距会改变其他盒子的位置
                    
                    	外边距也可以指定为一个负值
                    		如果外边距设置的是负值，则元素会像反方向移动
                    	
                    	margin还可以设置为auto，auto一般只设置给水平方向的margin
                    	如果只指定，左外边距或右外边距的margin为auto则会将外边距设置为最大值
                    	垂直方向外边距如果设置为auto，则外边距默认就是0
                    	
                    	如果将left和right同时设置为auto，则会将两侧的外边距设置为相同的值
                    	就可以使元素自动在父元素中居中，所以我们经常将左右外边距设置为auto
                    	以使子元素在父元素中水平居中
                    
                    	外边距同样可以使用简写属性margin，可以同时设置四个方向的外边距
                    		规则和padding一样
                    		可以使用 margin: 0 auto; 实现水平居中
                    
                    	------------------------------------------------------
                    	垂直外边距的重叠
                    		在网页中相邻的垂直方向的外边距会发生外边距的重叠
                    		所谓的外边距重叠指兄弟元素之间的相邻外边距会取最大值而不是取和
                    		如果父子元素的垂直外边距相邻了，则子元素的外边距会设置给父元素
                    			解决外边距重叠问题，有两种思路
                    				一种是使用一个样式将两个外边距隔开
                    				（例如 子元素加padding-top 或者 border-top 等
                    					或者父元素加 margin-top 等）
                    
                    	浏览器为了在页面中没有样式时，也可以有一个比较好的显示效果
                    	所以为很多的元素都设置了一些默认的 margin 和 padding
                    	而它的这些默认样式，正常情况下我们是不需要使用的
                    	所以我们往往在编写样式之前需要将浏览器中的默认的 margin 和 padding 去掉
                    	
                    	清除浏览器的默认样式
                        *{
    						margin: 0;
                    		padding: 0;
                        }
                    	星号的性能不是很好，之后会写另一种方式，这种也可以暂时用着
                    
                    	内联元素的盒模型
                    	
                    	在内联元素中也是分为 内容区 内边距 边框 外边距
                    	内联元素设置 width 和 height 没有显示，没有实际意义
                    	内联元素可以设置水平方向的内边距
                    		padding-left: 100px;
                    		padding-right: 100px;
                    	内联元素可以设置垂直方向的内边距，但是不会影响页面的布局
                    		padding-top: 50px;
                    		padding-bottom: 50px;
                    	内联元素可以设置边框，但是垂直的边框不会影响到页面的布局
                    		border: 1px blue solid;
                    	水平外边距，内联元素支持水平方向的外边距
                    		margin-left: 100px;
                    		margin-right: 100px;
                    	内联元素不支持垂直外边距
                    	
                    	水平方向相邻的外边距不会重叠，而是求和
                    	基本上内联元素的盒模型是水平方向好使，垂直方向都不太好用
                    */
                }
            </style>
        </head>
        <body>
            <div class="box1">
                
            </div>
        </body>
    </html>
    ```
    
32. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>样式</title>
            <style>
            	/*
                	将一个内联元素变成块元素
                	通过display样式可以修改元素的类型
                		可选值：
                			inline：可以将一个元素作为内联元素显示
                			block：可以将一个元素设置块元素显示
                			inline-block：将一个元素转换为行内块元素
                				可以使一个元素既有行内元素的特点又有块元素的特点
                				即可以设置宽高，又不会独占一行
            					比较典型的例子是 img标签 即可以设置宽高 有不会独占一行
                			none：不显示元素，并且元素不会在页面中继续占有位置
                
                		display: none;
                			使用该方法隐藏的元素，不会在页面中显示，并且不再占据页面的位置
                		visibility
                			可以用来设置元素的隐藏和显示的状态
                			可选值：
                				visible：默认值，元素默认会在页面显示
                				hidden：元素会隐藏不显示
                		使用 visibility:hidden;隐藏的元素虽然不会在页面中显示，
                			但是它的位置会依然保持
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```
    
33. ```html
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>样式</title>
            <style>
            	/*
                	子元素默认是存在于父元素的内容区中
                		理论上讲子元素的最大可以等于父元素内容区大小
                	如果子元素的大小超过的父元素的内容区，则超过的大小会在父元素以外的位置显示
                		超出父元素的内容我们称为溢出的内容
                	父元素默认是将溢出的内容，在父元素外面显示
                	通过 overflow 可以设置父元素如何处理溢出内容
                		可选值：
                			visible：默认值，不会对溢出内容做处理，元素会在父元素以外的位置显示
                			hidden：溢出的内容会被修剪，不会显示
                			scroll：会为父元素添加滚动条，通过拖动滚动条来查看完整内容
                				该属性无论内容是否溢出，都会添加水平和垂直双方向的滚动条
                			auto：会根据需求自动添加滚动条
                				需要水平就添加水平
                				需要垂直就添加垂直
                				都不需要就都不加
                */
            </style>
        </head>
        <body>
        </body>
    </html>
    ```

34. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>文档流</title>
        </head>
        <body>
            <!-- 
    			文档流
    				文档流处在网页的最底层，它表示的是一个页面中的位置
    				我们所创建的元素默认都处在文档流中
    			元素在文档流中的特点
    				块元素
    					块元素在文档流中会独占一行，块元素会自上向下排列
    					块元素在文档流中默认宽度是父元素的100%
    					块元素在文档流中的高度默认被内容撑开
    				内联元素
    					内联元素在文档流中只占自身的大小，会默认从左向右排列
    					如果一行中不足以容纳所有的内联元素，则换到下一行继续自左向右
    					在文档流中，内联元素的宽度和高度默认都被内容撑开
    			当元素的宽度的值为 auto 时，此时指定内边距不会影响可见框的大小
    				而是会自动修改宽度，以适应内边距
    		-->
        </body>
    </html>
    ```

35. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>浮动</title>
            <style>
            	/*
                	块元素在文档流中默认垂直排列，所以会从上至下依次排开
                	有一种办法就是那元素变成行内块（需要去除元素之间的空格）
                	如果希望块元素在页面中水平排列，可以使块元素脱离文档流
                	使用 float 来使元素浮动，从而脱离文档流
            	可选值：
                		none：默认值，元素默认在文档流中排列
                		left：元素会立即脱离文档流，向页面的左侧浮动
                		right：元素会立即脱离文档流，向页面的右侧浮动
                	当为一个元素设置浮动以后（float属性是一个非none的值）
                	元素会立即脱离文档流，脱离之后它下面的元素会立即向上移动
                	元素浮动以后，会尽量向页面的左上或右上漂浮，
                		直到遇到父元素的边框或者其他的浮动元素
                	如果浮动元素上面是一个没有浮动的块元素，则浮动元素不会超过块元素
                	浮动的元素不会超过它上面的兄弟元素，最多一样水平（一样齐）
                	
                	在最早的时候浮动就是为了使文字围绕图片的效果产生的，但现在多用于布局
                	浮动的元素不会盖住文字，文字会自动环绕在浮动元素的周围
                	所以我们可以通过浮动来设置文字环绕图片的效果
                
                	在文档流中子元素的宽度默认占父元素的全部
                	当元素设置浮动以后会完全脱离文档流
                	块元素脱离文档流以后宽度和高度都被内容撑开
                	使用float是内联元素脱离文档流之后会变为块元素，此时设置宽高就会有效果了
                
                	也就是说一旦脱离文档流就不用区分内联元素和块元素了
                		因为都变成块元素，并且宽高都是被内容撑开的
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```
    
36. ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>简单布局</title>
    		<style>
    			/* 清除默认样式 */
    			*{
    				margin: 0;
    				padding: 0;
    			}
			/* 设置头部div */
    			.header{
    				/* 设置一个宽度 */
    				width: 1000px;
    				/* 设置一个高度 */
    				height: 150px;
    				/* 设置一个背景颜色 */
    				background-color: yellowgreen;
    				/* 设置居中 */
    				margin: 0 auto;
    			}
    			/* 设置主题内容div */
    			.content{
    				/* 设置一个宽度 */
    				width: 1000px;
    				/* 设置一个高度 */
    				height: 400px;
    				/* 设置一个背景颜色 */
    				background-color: orange;
    				/* 设置居中 */
    				margin: 10px auto;
    			}
    			.left{
    				width: 200px;
    				height: 100%;
    				background-color: blue;
    				float: left;
    			}
    			.center{
    				width: 580px;
    				height: 100%;
    				background-color: wheat;
    				margin: 0 10px;
    				float: left;
    			}
    			.right{
    				width: 200px;
    				height: 100%;
    				background-color: chocolate;
    				float: left;
    			}
    			/* 设置底部div */
    			.footer{
    				/* 设置一个宽度 */
    				width: 1000px;
    				/* 设置一个高度 */
    				height: 150px;
    				/* 设置一个背景颜色 */
    				background-color: pink;
    				/* 设置居中 */
    				margin: 0 auto;
    			}
    		</style>
    	</head>
    	<body>
    		<!-- 头部div -->
    		<div class="header"></div>
    		
    		<!-- 主题内容div -->
    		<div class="content">
    			<div class="left"></div>
    			<div class="center"></div>
    			<div class="right"></div>
    		</div>
    		
    		<!-- 底部信息div -->
    		<div class="footer"></div>
    	</body>
    </html>
    ```
    
37. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>高度塌陷问题</title>
            <style>
            	/*
                	在文档流中，父元素的高度默认是被子元素撑开的
                	也就是子元素多高，父元素就多高
                	但是当为子元素设置浮动以后，子元素会完全脱离文档流
                	此时将会导致子元素无法撑起父元素的高度，导致父元素的高度塌陷
                	由于父元素的高度塌陷了，则父元素下的所有元素都会向上移动，这样将会导致页面布局混乱
                	
                	所以在开发中一定要避免出现高度塌陷的问题
                	我们可以将父元素的高度写死，以避免塌陷的问题出现
                	但是一旦高度写死，父元素的高度将不能自动适应子元素的高度，所以这种方案不推荐使用
                
                	第一种解决高度塌陷问题的方案
                		
                		根据 W3C 的标准，
                			在页面中元素都有一个隐含的属性叫做 Block Formatting Context
                		简称 BFC，该属性可以设置打开或者关闭，默认是关闭的
                		当开启元素的 BFC 以后，元素将会具有如下的特性：
                			1.父元素的垂直外边距不会与子元素的重叠
                			2.开启 BFC 的元素不会被浮动元素所覆盖
                			3.开启 BFC 的元素可以包含浮动的子元素
                		如何开启 BFC
                			1.设置元素浮动
                				使用这种方式开启，虽然可以撑开父元素，但是会导致父元素的宽度丢失
                				而且使用这种方式也会导致下面的元素上移，不能解决问题
                			2.设置元素绝对定位
                				同上
                			3.设置元素的 inline-block
                				可以解决问题，但是会导致宽度丢失，不推荐使用这种方式
                			4.将元素的 overflow 设置为一个非 visible 的值
                				推荐这种解决方案：
                					将 overflow 设置为 hidden 是副作用最小的开启 BFC 的方式
                					也可以设置为 auto 等
                			
                		但是在 IE6 及以下的浏览器中并不支持 BFC，所以使用这种方式不能兼容 IE6
                		在 IE6 中虽然没有 BFC，但是具有另一个隐含的属性叫hasLayout
                		该属性的作用与 BFC 类似，所在 IE6 浏览器可以通过开 hasLayout 来解决该问题
                		开启方式很多，我们直接使用一种副作用最小的：
                			直接将元素的 zoom 设置为 1 即可
                		
                		zoom表示放大，后面跟着的数值是几就将该元素放大几倍
                		zoom: 1; 表示不放大元素，但是通过该样式可以开启 hasLayout
                		zoom这个样式，只在 IE 中支持，其他浏览器都不支持
                		
                		之后解决高度塌陷问题在父元素上写入下面样式
                			zoom: 1;
                			overflow: hidden;
                		即可兼容不同浏览器，从而达到在不同浏览器中的样式都一致的效果
    
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```

38. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>导航条</title>
            <style>
            	/* 
                	第一件事 就是清除浏览器中的默认样式 
                */
                *{
                    margin: 0;
                    padding: 0;
                }
                /* 
                	设置ul 样式
                */
                .nav{
                    /* 去除项目符号 */
                    list-style: none;
                    /* 为 ul 设置一个背景颜色 */
                    background-color: #bfa;
                    /* 设置一个宽度 */
                    /* 在 IE6中如果为元素指定了一个宽度，则会默认开启 hasLayout */
                    width: 1000px;
                /* 设置元素居中 */
                    margin: 50px auto;
                    /* 解决高度塌陷 */
                    overflow: hidden;
                }
                /*
                	设置 li 样式
                */
                .nav li{
                    /* 设置 li 向左浮动 */
                    float: left;
                    width: 25%;
                }
                .nav a{
                    /* 需要将 a 转换为块元素才可以设置宽度 */
                    display: block;
                    /* 为 a 指定一个宽度 */
                    width: 100%;
                    /* 设置文字居中 */
                    text-align: center;
                    /* 设置上下内边距 */
                    padding: 5px 0;
                    /* 去除下划线 */
                    text-decoration: none;
                    /* 设置字体颜色 */
                    color: white;
                    /* 设置加粗 */
                    font-weight: bold;
                }
                .nav a:hover{
                    background-color: #c00;
                }
            </style>
        </head>
        <body>
            <!-- 创建导航条的结构 -->
            <ul class="nav">
                <li><a href="#">首页</a></li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">联系</a></li>
                <li><a href="#">关于</a></li>
            </ul>
        </body>
    </html>
    ```
    
39. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>高度塌陷解决方案</title>
            <style>
            	/*
                	我们有时希望清除其他元素浮动对当前元素产生的影响，这时可以使用clear来完成功能
                	clear可以用来清除其他浮动元素对当前元素的影响
                	可选值：
                		none：默认值，不清除浮动
            		left：清除左侧浮动元素对当前元素的影响
                		right：清除右侧浮动元素对当前元素的影响
                		both：清除两侧浮动元素对当前元素的影响
                			清除对它影响最大的那个元素的浮动
                
                		清除box1浮动对box2产生的影响
                			清除浮动以后，元素会回到其他元素浮动之前的位置
                				clear: left;
                
                	第二个高度塌陷的解决方案
                		可以直接在高度塌陷的父元素的最后，添加一个空白的 div
                		由于这个 div 并没有浮动，所以它是可以撑开父元素的高度的
                		然后再对其进行清除浮动，这样可以通过这个空白的 div 来撑开父元素的高度
                		基本没有副作用（兼容各种市场上可见的浏览器）
                		
                		使用这种方式虽然可以解决问题，但是会在页面中添加多余的结构
                
                	第三个高度塌陷的解决方案
                		通过 after 伪类，选中 box1 的后面
                		可以通过 after 伪类向元素的最后添加一个空白的块元素，然后对其清除浮动
                		这样做和添加一个 div 的原理一样，可以达到一个相同的效果
                		而且不会在页面中添加多余的 div，这是我们最推荐使用的方式，几乎没有副作用
                        .clearfix:after{
    						/* 添加一个内容 */
                			content: "";
                			/* 转换为一个块元素 */
                			display: block;
                			/* 清除两侧的浮动 */
                			clear: both;
                        }
                	在 IE6 中不支持 after 伪类，
                		所以在 IE6 中还需要使用 hasLayout 来处理
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```
    
40. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>PS基础</title>
        </head>
        <body>
            <!-- 
    			打开ps
    			界面选项（首选项） 单位与标尺 设置标尺和文字的单位：像素
    			开启标尺 ctrl + R
				在标尺上可以拖出辅助线
    			放大缩小 alt + 滚轮
    			图片比例回复致100% ctrl + 1
    			图片适应屏幕大小 ctrl + 0
    			矩形选择框选中后按下　Ｆ8　可以查看详细信息（宽/高）
    			使用拾色器来确定颜色
    		-->
        </body>
    </html>
    ```
    
41. ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>开班信息</title>
    		<style>
    			/* 清除默认 */
    			*{
    				margin: 0;
    				padding: 0;
    			}
    			
    			/* 浏览器默认的字体大小是 16 像素，但是在开发的时候我们一般会以 12 个像素大小的字体为基准 */
    			
    			/* 统一页面中的字体 */
    			body{
    				font: 12px/1 "宋体";
    			}
    			
    			/* 设置 outer 的大小 */
    			.outer{
    				width: 300px;
    				/* height: 473px; */
    				/* background-color: #bfa; */
    				/* 设置 outer 居中效果 */
    				margin: 50px auto;
    			}
    			
    			/* 设置 title 的边框 */
    			.title{
    				/* 设置上边框 */
    				border-top: 2px #019E8B solid;
    				/* 设置盒子的高度 */
    				height: 36px;
    				/* 设置背景样式 */
    				background-color: #F5F5F5;
    				/* 设置 title 的行高，当行高和父元素高度一致会有垂直居中效果 */
    				line-height: 36px;
    				/* 设置 title 的内边距，这里因为没有为 title 设置宽度，默认为 auto，所以不会影响可见框的大小 */
    				padding: 0px 22px 0px 16px;
    			}
    			
    			/* 设置 title 中的超链接 */
    			.title a{
    				float: right;
    				/* 设置字体颜色 */
    				color: red;
    			}
    			
    			/* 设置 h3 */
    			.title h3{
    				font: 16px/36px "微软雅黑";
    			}
    			
    			/* 设置内容 */
    			.content{
    				border: 1px solid #DEDDD9;
    				padding: 0px 28px 0px 20px;
    			}
    			
    			/* 设置内容中的超链接 */
    			.content a{
    				color: black;
    				/* 去除超链接中的下划线 */
    				text-decoration: none;
    				font-size: 12px;
    			}
    			
    			/* 为超链接添加一个 hover 伪类 */
    			.content a:hover{
    				color: red;
    				/* 为超链接添加下划线 */
    				text-decoration: underline;
    			}
    			
    			.content h3{
    				margin-top: 14px;
    				margin-bottom: 16px;
    			}
    			
    			/* 设置右侧的超链接样式 */
    			.content .right{
    				/* 设置向右浮动 */
    				float: right;
    			}
    			
    			/* 设置 ul 样式 */
    			.content ul{
    				/* 去除项目符号 */
    				list-style: none;
    				/* 为 ul 设置下边框 */
    				border-bottom: 1px dashed #DEDDD9;
    			}
    			
    			.content .no-border{
    				border: none;
    			}
    			
    			/* 设置内容中的红色字体 */
    			.content .red{
    				color: red;
    				font-weight: bold;
    			}
    			
    			/* 设置内容中的 li */
    			.content li{
    				margin-bottom: 15px;
    			}
    			
    		</style>
    	</head>
    	<body>
    		<!-- 创建一个外层 div，容纳整个内容 -->
    		<div class="outer">
    			
    			<!-- 开班信息头部 -->
    			<div class="title">
    				<a href="#">16年面授开班计划</a>
    				<h3>近期开班</h3>
    			</div>
    			
    			<!-- 开班信息的主要内容 -->
    			<div class="content">
    				<h3><a href="#">JavaEE+云计算-全程就业班</a></h3>
    				<ul>
    					<li>
    						<!-- 在IE6中会出现问题，所以有两种解决方案，下方的超链接调换位置或者第一个向左浮动 -->
    						<a class="right" href="#"><span class="red">预约报名</span></a>
    						<a href="#">开班时间：<span class="red">2016-04-27</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span class="red">无座，名额爆满</span></a>
    						<a href="#">开班时间：<span class="red">2016-04-07</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2016-03-15</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2016-02-25</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2015-12-26</span></a>
    					</li>
    				</ul>
    				<h3><a href="#">Android+人工智能-全程就业班</a></h3>
    				<ul>
    					<li>
    						<a class="right" href="#"><span class="red">预约报名</span></a>
    						<a href="#">开班时间：<span class="red">2016-04-10</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2016-03-17</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2016-02-20</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2015-12-23</span></a>
    					</li>
    				</ul>
    				<h3><a href="#">前端+HTML5-全程就业班</a></h3>
    				<ul class="no-border">
    					<li>
    						<!-- 在IE6中会出现问题，所以有两种解决方案，下方的超链接调换位置或者第一个向左浮动 -->
    						<a class="right" href="#"><span class="red">预约报名</span></a>
    						<a href="#">开班时间：<span class="red">2016-05-10</span></a>
    					</li>
    					<li>
    						<a class="right" href="#"><span>开班盛况</span></a>
    						<a href="#">开班时间：<span>2016-03-16</span></a>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</body>
    </html>
    ```

42. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>相对定位</title>
        </head>
        <body>
            <!-- 
    			HBuilder中的创建元素的快捷方式 div.box$*3 创建三个 div，class 分别是 box1 2 3
    			定位：
    				定位指的就是将指定的元素摆放到页面的任意位置
    				通过定位可以任意的摆放元素
    				通过 position 属性来设置元素的定位
    					可选值：
    						static：默认值，元素没有开启定位
    							(忽略top，bottom，left，right或者z-index声明)
    						relative：开启元素的相对定位
    						absolute：开启元素的绝对定位
    						fixed：开启元素的固定定位（也是绝对定位的一种）
    			当元素的 position 属性设置为 relative 时，则开启了元素的相对定位
    			当开启了元素的相对定位以后，而不设置偏移量时，元素不会发生任何变化
    			相对定位是相对于元素在文档流中原来的位置进行定位
    			相对定位的元素不会脱离文档流
    			相对定位会使元素提升一个层级
    			相对元素不会改变元素的性质，块还是块，内联还是内联
    
    			当开启了元素的定位（position 属性值是一个非 static 的值）时，
    			可以通过 left right top bottom 四个属性来设置元素的偏移量
    			left：元素相对于其定位位置的左侧偏移量
    			right：元素相对于其定位位置的右侧偏移量
    			top：元素相对于其定位位置上面的偏移量
    			bottom：元素相对于其定位位置下面的偏移量
    			
    			通常偏移量只需要使用两个就可以对一个元素进行定位
    				一般选择水平方向的偏移量和垂直方向的偏移量来为一个元素进行定位
    			
    			绝对定位
    				当 position 属性值设置为 absolute 时，则开启的元素的绝对定位
    			绝对定位
    				开启绝对定位，会使元素脱离文档流
    				开启绝对定位以后，如果不设置偏移量，则元素的位置不会发生变化
					绝对定位是相当于离它最近开启了定位的祖先元素进行定位的
    				（一般开启了子元素的绝对定位都会同时开启父元素的相对定位）
    				如果所有的祖先元素都没有开启定位，则会相对于浏览器窗口进行定位
    			绝对定位会使元素提升一个层级
    			绝对定位会改变元素的性质
    				内联元素变成块元素
    				块元素的宽度和高度默认都被内容撑开
    
    			当元素的 position 属性设置为 fixed 时，则开启的元素的固定定位
    			固定定位也是一种绝对定位，它的大部分特点都和绝对定位一样
    			不同的是：
    				固定定位永远都会相对于浏览器窗口进行定位
    				固定定位会固定在浏览器窗口某个位置，不会随滚动条滚动
    
    			IE6 不支持固定定位
    		-->
        </body>
    </html>
    ```
    
43. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>层级</title>
        </head>
        <body>
            <!-- 
    			如果定位元素的层级是一样的，则下面的元素会盖住上面的
    			通过 z-index 属性可以用来设置元素的层级
    			可以为 z-index 指定一个正整数作为值，该值将会作为当前元素的层级
    			层级越高越优先显示
    			
    			对于没有开启定位的元素不能使用 z-index
    			父元素的层级再高，也不会盖住子元素
    
    			-----------------------------------------------
    			opacity
    			设置元素的透明背景
    			opacity 可以用来设置元素背景的透明
    			他需要一个 0-1 之间的值
    				0 表示完全透明
    				1 表示完全不透明
    				0.5 表示半透明
    			
    			opacity: 0.5;
    
    			opacity 属性在 IE8 及以下的浏览器中不支持
    			IE8 及一下浏览器需要使用如下属性代替
    			alpha(opacity=透明度)
    			透明度，需要一个 0-100 之间的值
    				0 表示完全透明
    				100 表示完全不透明
    				50 半透明
    			
    			这种方式支持 IE6，但是这种效果在 IE Tester 中无法测试
    		-->
        </body>
    </html>
    ```

44. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>背景图片</title>
            <style>
            	/*
                	使用 background-image 来设置背景图片
                		语法：background-image: url(相对路径)
                	如果背景图片大于元素，默认会显示图片的左上角
                	如果背景图片和元素一样大，则会将背景图片全部显示
                	如果背景图片小于元素大小，则会默认将背景图片平铺以充满元素
                	
                	可以同时为一个元素指定背景颜色和背景图片
                	这样背景颜色将会作为背景图片的底色
                	一般情况下，设置背景图片时 都会同时指定一个背景颜色
                
                	background-repeat 用于设置背景图片的重复方式
                	可选值：
                		repeat，默认值，背景图片会双方向重复（平铺）
                		no-repeat，背景图片不会重复，有多大就显示多大
                		repeat-x，背景图片沿着水平方向重复
                		repeat-y，背景图片沿着垂直方向重复
                
                	裁剪图片
                		选取需要裁剪的部分 点击图像 --> 裁剪 --> 文件 --> 存储为 Web 所用格式
                		（这样只截宽一个像素的小图就可以水平重复制造出想要的效果）
                		（图片格式选择参考同效果选择小的，效果好的选择好的）
                
                	背景图片默认是贴着元素的左上角显示
                	通过 background-position 可以调整背景图片在元素中的位置
                	可选值：
                		该属性可以使用 top bottom left right center 中的两个值来指定背景图片位置
                		top left 左上
                		bottom right 右下
                		如果只给出一个值，则第二个值默认是 center
            
                	也可以直接指定两个偏移量
                		第一个值是水平偏移量
                			如果指定的是一个正值，则图片会向右移动指定的像素
                			如果指定的是一个负值，则图片会向左移动指定的像素
                		第二个值是垂直偏移量
                			如果指定的是一个正值，则图片会向下移动指定的像素
                			如果指定的是一个负值，则图片会向上移动指定的像素
                	
                	background-attachment 用来设置背景图片是否随页面一起滚动
                		可选值：
                			scroll，默认值，背景图片随着窗口滚动
                			fixed，背景图片会固定在某一位置，不随页面滚动
                	不随窗口滚动的图片，我们一般都设置给 body，而不设置给其他元素
                	当背景图片的 background-attachment 设置为 fixed 时，
                		背景图片的定位永远相对于浏览器的窗口
                			
                */
            </style>
        </head>
        <body>
            
        </body>
    </html>
    ```
    
45. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>按钮练习</title>
            <style>
                
                /*
                	做完功能以后，发现在第一次切换图片时，图片会有一个非常快的闪烁
                	这个闪烁会造成一次不佳的用户体验
                	产生问题的原因：
            		背景图片是以外部资源的形式加载进网页的，
                			浏览器每加载一个外部资源就需要单独的发送一次请求
                		但是我们外部资源并不是同时加载，浏览器会在资源被使用才去加载资源
                		我们这个练习，一上来浏览器只会加载 link.png 
                			由于 hover 和 active 的状态没有马上触发
                			所以 hover.png 和 active.png 并不是立即加载的
                		当 hover 被触发时，浏览器才去加载 hover.png
                		当 active 被触发时，浏览器才去加载 active.png
                	由于加载图片需要一定的时间，所以在加载和显示过程会有一段时间，
                		背景图片无法显示，导致出现闪烁的情况
                
                	为了解决该问题，可以将三张图片整合为一张图片，这样可以同时将三张图片一起加载
                		就不会出现闪烁的问题了
                	然后再通过 background-position 来切换要显示的图片的位置，
                		这种技术叫做图片整合技术（CSS-Sprite）（雪碧图）
                	优点：
                		1.将多个图片整合为一张图片里，浏览器只需要发送一次请求，可以同时加载多个图片
                			提高访问效率，提高用户体验
                		2.将多个图片整合为一张图片，减少图片的总大小，提高请求速度，增加用户体验
                
                	简写属性
                		background
                			通过该属性可以同时设置所有背景相关的样式
                			没有顺序的要求，也没有数量要求，不写的样式使用默认值
                
                	在 ps 中点击画像 --> 画布大小，可以调整画布的长宽
                	雪碧图格式 png24
                */
                
                .btn:link{
                    /* 将 a 转换为块元素 */
                    display: block;
                    /* 设置宽高 */
                    width: 93px;
                    height: 29px;
                    /* 设置背景图片 */
                    background-image: url(img/btn/link.png);
                    /* 设置背景图片不重复 */
                    background-repeat: no-repeat;
                }
                .btn:hover{
                    /* 设置背景图片 
                    background-image: url(img/btn/hover.png);*/
                    /* 当是 hover状态时，我们希望图片向左移动 */
                    background-position: -93px 0px;
                }
                .btn:active{
                    /* 设置背景图片 
                    background-image: url(img/btn/active.png);*/
                    /* 当是 active状态时，我们希望图片再左移动 */
                    background-position: -186px 0px;
                }
            </style>
        </head>
        <body>
            <!-- 创建一个超链接 -->
            <a class="btn" href="#"></a>
        </body>
    </html>
    ```
    
46. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>表格</title>
        </head>
        <body>
            <!-- 
    			表格在日常生活中使用的非常的多，比如 excel 就是专门用来创建表格的工具
    				表格就是用来表示一些格式化的数据的，比如：课程表、银行对账单
    			在网页中也可以来创建出不同的表格
    
    			在 html 中使用 table 标签来创建一个表格
    			在 table 标签中使用 tr 来表示表格中的一行，有几行就有几个 tr
    			在 tr 中需要使用 td 来创建一个单元格，有几个单元格就有几个 td
    		
    			colspan 横向的合并单元格
    			rowspan 纵向的合并单元格
    
    			设置表格的宽度
    			table{
    				width: 300px;
    				margin: 0 auto;
    				/*border: 1px solid black;*/
    
    				/* 
    					table 和 td 边框之间默认有一个距离 
    					通过 border-spacing 属性可以设置这个距离
    				*/
    				/*border-spacing: 0px;*/
    				/*
    					border-collapse 可以用来设置表格的边框合并
    					如果设置了边框合并，则 border-spacing 自动失效
    				*/
    				border-collapse: collapse;
    			}
    			/*设置边框*/
    			td, th{
    				border: 1px solid black;
    			}
    
    			可以使用 th 标签来表示表头中的内容
    				它的用法和 td 一样，不同的是它会有一些默认效果（居中 加粗）
    			/* 隔行变色 */
    			tr:nth-child{
    				background-color: #bfa;
    			}
    			/* 鼠标移入 tr 改变颜色 */
    			tr:hover{
    				background-color: #ff0;
    			}
    			/* IE6 不能为超链接以外的标签设置 hover */
    
    			长表格
    			有一些情况下表格非常的长
    				这时就需要将表格分为三个部分，表头，表格的主体，表格底部
			在 HTML 中我们提供了三个标签
    				thead 表头
    				tbody 表格主体
    				tfoot 表格底部
    			这三个标签的作用，就来区分表格的不同的部分，他们都是 table 的子标签
    				都需要直接写在 table 中， tr 需要写在这些标签当中
    
    			thead 中的内容永远会显示在表格的头部
    			tfoot 中的内容永远会显示在表格的底部
    			tbody 中的内容永远会显示在表格的中间
    			
    			如果表格中没有写 tbody，浏览器会自动在表格中添加 tbody
    			并且将所有的 tr 都放到 tbody 中，所以注意 tr 并不是 table 的子元素，而是 tbody 的
    			通过 table > tr 无法选中行，需要通过 tbody > tr
    
    			-------------------------------------------
    			表格的布局
    			
    			以前表格更多的情况实际上是用来对页面进行布局的，但是这种方式早已被 CSS 所淘汰了
    			
    			子元素和父元素相邻的垂直外边距会发生重叠，子元素的外边距会传递给父元素
    			使用空的 table 标签可以隔离父子元素的外边距，阻止外边距的重叠
    
    			display: table 可以将一个元素设置为表格显示
    
    			经过修改后的 clearfix 是一个多功能的
    			既可以解决高度塌陷，又可以保证父元素和子元素的垂直外边距不会重叠
    			.clearfix:before,
    			.clearfix:after{
    				content: "";
    				display: table;
    				clear: both;
    			}
    			.clearfix{
    				zoom: 1;
    			}
    			这是 clearfix 最终的版本
    		-->
        </body>
    </html>
    ```
    
47. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>表单</title>
        </head>
        <body>
            <!--
    			表单的作用就是用来将用户的信息提交给服务器的
    				比如：百度的搜索框 注册 登录 这些操作都需要填写表单
    		-->
        <!--
    			使用 form 标签创建一个表单
    				form 标签中必须指定一个 action 属性，该属性指向的是一个服务器的地址
    				当我们提交表单时将会提交到 action 属性对应的地址
    		-->
            <form action="target.html">
                <!--
    				使用 form 创建的仅仅是一个空白的表单，
    					我们还需要向 form 中添加不同的表单项
    			-->
                
                <!--
    				在表单中可以使用 fieldset 来为表单项进行分组
    				可以将表单项中的同一组放在一个 fieldset 中
    			-->
                <fieldset>
                    <!-- 在 fieldset 可以使用 legend 字标签，来指定组名 -->
                    <legend>用户信息</legend>
                </fieldset>
                <!--
    				使用 input 来创建一个文本框，它的 type 属性是 text
    					如果希望表单项中的数据会提交到服务器中，还必须给表单项指定一个 name 属性
    					name 表示提交内容的名字
    
    				用户填写的信息会附在 url 地址的后边以查询字符串的形式发送给服务器
    					url地址？查询字符串
    				格式：
    					属性名=属性值&属性名=属性值&属性名=属性值
    				在文本框中也可以指定 value 属性值，该值将会作为文本框的默认值显示
    			-->
                <!--
    				在 html 中还为我们提供了一个标签，专门用来选中表单中提示文字的
    				label 标签
    				改标签可以指定一个 for 属性，该属性的值需要指定一个表单项的 id 值
    			-->
                <label for="um" >用户名：</label>
                <input id="um" type="text" name="username" />
                <!--
    				密码框
    					使用 input 创建一个密码框， 它的 type 属性值是 password
    			-->
                密码：<input type="password" name="password" />
                <!--
    				单选按钮
    					使用 input 来创建一个单选按钮，它的 type 属性使用 radio
    					单选按钮通过 name 属性进行分组，name 属性相同的是一组按钮
    					像这种需要用户选择但是不需要用户直接填写内容的表单项
    						还必须指定一个 value 属性
    						这样被选中的表单项的 value 属性值将会最终提交给服务器
    
    				如果希望在单选按钮或者是多选框中指定默认选中的选项
    					则可以在希望选中的项中添加 checked="checked" 属性
    			-->
                性别：<input type="radio" name="gender" value="male" /> 男
                	 <input type="radio" name="gender" value="female" checked="checked" /> 女
                	 <br /><br />
                <!--
    				多选框
    					使用 input 创建一个多选框，它的 type 属性 使用 checkbox
    			-->
                爱好 <input type="checkbox" name="hobby" value="zq" />足球
                	<input type="checkbox" name="hobby" value="lq" />篮球
                	<input type="checkbox" name="hobby" value="ymq" checked="checked" />羽毛球
                	<input type="checkbox" name="hobby" value="ppq" checked="checked" />乒乓球
                <br /><br />
                <!--
    				下拉列表
    					使用 select 来创建一个下拉列表
    					下拉列表的 name 属性需要指定给 select，而 value 属性需要指定给 option
    
    				可以通过 option 中添加 selected="selected" 来将选项设置为默认选中
    				当为 select 添加一个 multiple="multiple"，则下拉列表变为一个多选的下拉列表
    			-->
                你喜欢的明星
                	<select name="star" multiple="multiple">
                        <!--
    						在 select 中可以使用 optgroup 对选项进行分组
    							同一个 optgroup 中的选项是一组
    						可以通过 label 属性来指定分组的名字
    					-->
                        <optgroup label="女明星">
                        	<!-- 在下拉列表中使用 option 标签来创建一个一个列表项 -->
                            <option value="fbb">范冰冰</option>
                            <option value="lxr">林心如</option>
                        </optgroup>
                    	<optgroup label="男明星">
                        	<option value="zbs" selected="selected">赵本山</option>
                        </optgroup>
                	</select>
                	<br /><br />
                <!--
    				使用 textarea 创建一个文本域
    			-->
                <textarea name="info"></textarea>
                <br /><br />
                <!--
    				提交按钮可以将表单中的信息提交给服务器
    				使用 input 创建一个提交按钮，它的 type 属性值是 submit
    				在提交按钮中可以通过 value 属性来指定按钮上的文字
    			-->
                <input type="submit" value="注册" />
                
                <!--
    				<input type="reset" /> 可以创建一个重置按钮
    					点击重置按钮以后表单中的内容将会恢复为默认值
    			-->
                <input type="reset" />
                <!--
    				使用 input type="button" 可以用来创建一个单纯的按钮
    					这个按钮没有任何功能，只能被点击
    			-->
                <input type="button" value="按钮" />
                <br /><br />
                <!--
    				除了使用 input 也可以使用 button 标签来创建按钮
    				这种方式和使用 input 类似，只不过由于它是成对出现的标签
    					使用起来更加的灵活
    			-->
                <button type="submit">提交</button>
                <button type="reset">重置</button>
                <button type="button">按钮</button>
            </form>
        </body>
    </html>
    ```
    
48. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>框架集</title>
        </head>
        <body>
            <!--
    			框架集和内联框架的作用类似，都是用来在一个页面中引入其他外部页面的
    			框架集可以同时引入多个页面，而内联框架只能引入一个
    			在 H5 标准中推荐使用框架集，而不使用内联框架
    			
    			使用 iframeset 来创建一个框架集，注意 frameset 不能和 body 出现在同一个页面中
    				所以要使用框架集，页面中就不可以使用 body 标签
    
    			属性：
    				rows，指定框架集中的所有的框架，一行一行的排列
    				cols，指定框架集中所有的页面，一列一列的排列
    			
    				这俩个属性 frameset 必须选择一个，并且需要在属性中指定每一个部分所占的大小
    
    				frameset 中也可以再嵌套 frameset
    			frameset 和 iframe 一样，他里面的内容都不会被搜索引擎检索
    				所以如果搜索引擎检索到的是一个框架页的话，它是不能去判断里面的内容的
    			使用框架集就意味着页面中不能有自己的内容，只能引用其他的页面，而我们每单独加载一个页面
    				浏览器都需要重新发送一次请求，引入几个页面就需要发送几次请求，用户的体验比较差
    			如果非要用建议使用 frameset 而不使用 iframe
    		-->
            <frameset rows="50% , 50%">
                <!--
    				在 frameset 中使用 frame 子标签来指定要引入的页面
    					引入几个页面就写几个 frame
    			-->
                <frame src="index.html" />
            </frameset>
        </body>
    </html>
    ```

49. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>IE6png的修复</title>
        </head>
        <body>
            <!--
    			在 IE6 中对图片格式 png24 支持率不高
    				如果使用的图片格式是 png24，则会导致透明效果无法正常显示
    			解决方法：
    				1.可以使用 png8 来代替 png24，即可解决问题
    					但是使用 png8 代替 png24 以后，图片的清晰度会有所下降
    				2.使用 JavaScript 来解决该问题，需要向页面中来引入一个外部的 JavaScript 文件
    					然后再写一下简单的 JS 代码，来处理该问题
    		-->
            <!-- 在 body 标签的最后引入外部的 js 文件 
    			这里尽量是在 body 最后引入外部文件，在前面容易出现奇奇怪怪的问题-->
            <script type="text/javascript" src="DD_belatedPNG-min.js"></script>
            <!-- 再创建一个新的 script 标签，并且编写一些 js代码 -->
            <script type="text/javascript">
            	DD_belatePNG.fix("div"); 
                // 表示修复 div 中的 png 也可以用 * 但是效率可能会低一些
            </script>
        </body>
    </html>
    ```

50. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>条件hack</title>
        </head>
        <body>
            <!--
    			有一些情况，有一些特殊的代码我们只需要在某些特殊的浏览器上执行，
    				而在其他的浏览器中不需要执行，这时就可以使用 CSS Hack 来解决该问题
    			CSS Hack 实际上指的是一个特殊的代码，这段代码只在某些浏览器中可以识别
    				而其他浏览器不能识别，通过这种方式，来为一些浏览器设置特殊的代码
    		-->
            <!--
    			条件 Hack，条件 hack 只对 IE 浏览器有效，其他浏览器都会将它识别为注释
    				IE10 及以上的浏览器已经不支持这种方式
    		-->
            <!-- 以下内容只会出现在 IE6 -->
            <!-- [if IE 6]>
    			<p>为了您和家人的健康，请远离 IE6！！！</p>
    		<![endif]-->
            
            <!-- [if IE 8]>
    			<p>为了您和家人的健康，请远离 IE6！！！</p>
    		<![endif]-->
            
            <!-- lt 小于，gt 大于，lte 小于等于，gte 大于等于，! 非 -->
            <!-- [if lt IE 6]>
    			<p>为了您和家人的健康，请远离 IE6！！！</p>
    		<![endif]-->
            
            <!-- 一般用于给 IE 引入专属的样式表会用到 条件 hack -->
            
            <!--
    			属性 hack
    			在样式前添加一个下划线，则该样式只有 IE6 及以下的浏览器才会识别
    			添加了 * 的样式，只有 IE7 及以下的浏览器会识别
    
    			在样式最后添加 \0 则只有 IE8 及以上的浏览器才识别
    
    			CSS Hack 不到万不得已的情况尽量不要使用
    			Hack 有风险，使用需谨慎
    
    			选择器 hack
    			在选择器前添加 * html 则该选择器只有 IE6 可以识别
    		-->
        </body>
    </html>
    ```

51. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
        </head>
        <body>
            
        </body>
    </html>
    ```

52. ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
        </head>
        <body>
            
        </body>
    </html>
    ```

53. ````html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
        </head>
        <body>
            
        </body>
    </html>
    ````

54. 

