# YAML语法和SpringBoot配置

## 1、YAML基本语法

- k:（空格）v：表示一对键值对（空格必须有）

- 一空格的缩进来控制层级关系；只要是左对齐的一列数据，都是同一个层级的

  ````yaml
  server: 
      port: 8081
      path: /hello
  ````

- 属性和值也是大小写敏感

## 2、值的写法

#### 字面量：普通的值（数字、字符串、布尔）

​	k: v：字面量直接来写

​		字符串默认不用加上单引号或者双引号

​		""：双引号，不会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思

​			name: "zhangsan \n lisi"：输出：zhangsan 换行 lisi

​		''：单引号，会转义特殊字符特殊字符最终只是一个普通的字符串数据

​			name:'zhangsan \n lisi'：输出：zhangsan \n lisi

#### 对象Map（属性和值）（键值对）

​	k: v：在下一行来写对象的属性和值的关系；注意缩进

​		对象还是k: v的方式

```yaml
friend:
    lastName: zhangsan
    age: 20
```

##### 行内写法：

```yaml
friend: {lastName: zhangsan,age: 20}
```

#### 数组（List、Set）

用- 值表示数组中的一个元素

```yaml
pets:
    - cat
    - dog
    - pig
```

##### 行内写法：

```yaml
pets: [cat,dog,pig]
```

## 3、配置文件值注入

配置文件

```yaml
user:
    name: zhangsan
    age: 12
    birth: 2019/01/01
    maps:
        map1: mmmmmm
        map2: aaaaaa
        map3: pppppp
    lists:
        - alist
        - blist
        - clist
        - dlist
    dog:
        name: dogname
        age: 2
```

javaBean

```java
/**
 * 将配置文件中配置的每一个属性值映射到这个组件中
 * prefix = "user":配置文件中哪个下面的属性值进行一一映射
 * 只有这个组件是容器中的组件，才能使用容器提供的configurationProperties功能
 * @author Administrator
 *
 */
@Component
@ConfigurationProperties(prefix = "user")
public class User {
	
	private String name;
	private String age;
	private Date birth;
	private Map<String, String> maps;
	private List<String> lists;
	private Dog dog;
    
    // 这里省略了toString和getset方法
}
```

我们可以导入配置文件处理器，以后编写配置文件就有提示了

```xml
<!-- 导入配置文件处理器，配置文件进行绑定就会有提示 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

|                           | @ConfigurationProperties | @Value     |
| ------------------------- | ------------------------ | ---------- |
| 功能                      | 批量注入配置文件中的属性 | 一个个指定 |
| 松散绑定（松散语法）      | 支持                     | 不支持     |
| SpEL（spring 表达式语言） | 不支持                   | 支持       |
| JSR303数据校验            | 支持                     | 不支持     |
| 复杂类型封装              | 支持                     | 不支持     |

配置文件yml还是properties它们都能获取到值

如果说，我们只是在摸个业务逻辑中需要获取一下配置文件中的某项值，使用@Value

如果说，我们专门编写了一个javaBean来和配置文件进行映射，我们就直接使用@ConfigurationProperties

#### 3、配置文件注入之数据校验

### 4、@PropertySource&@ImportResource

@PropertySource 加载指定的配置文件

```java
/**
 * 将配置文件中配置的每一个属性值映射到这个组件中
 * prefix = "user":配置文件中哪个下面的属性值进行一一映射
 * 只有这个组件是容器中的组件，才能使用容器提供的configurationProperties功能
 * @ConfigurationProperties(prefix = "user") 默认从全局配置文件中获取值
 * @author Administrator
 *
 */
@PropertySource(value = {"classpath:user.properties"})
@Component
@ConfigurationProperties(prefix = "user")
// @Validated
public class User {
	
	/**
	 * <bean class="User">
	 *     <property name="name" value="字面量/${key}从环境变量、配置文件中获取值/#{SpEL}spring表达式语言"></property>
	 * </bean>
	 */
	// @Value("${user.name}")
	// name必须是邮箱格式的
	// @Email
	private String name;
	// @Value("#{11*2}")
	private String age;
	// @Value{"2019/01/01"}
	private Date birth;
	private Map<String, String> maps;
	private List<String> lists;
	private Dog dog;
```

需要注意的是@**PropertySource(value = {"classpath:user.properties"})**这个注解classpath与配置文件名之间千万不要加空格

@**ImportResource**：导入spring的配置文件，让配置文件里面的内容生效

SpringBoot里面没有Spring的配置文件，我们自己编写的配置文件也不能自动识别

想让Spring的配置文件生效，加载进来，需要把@ImportResource标注在一个配置类上

```java
@ImportResource(locations = {"classpath:beans.xml"})
导入spring的配置文件让其生效
```

不来编写spring的配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
                        http://www.springframework.org/schema/beans/spring-beans.xsd">
	<bean id="helloService" class="com.example.demo.service.HelloService"></bean>
</beans>
```

SpringBoot推荐给容器中添加组件的方式；推荐使用全注解的方式

#### 1、配置类======spring配置文件

#### 2、使用@Bean给容器中添加组件

```java
@Configuration
public class MyAppConfig {

	@Bean
	public HelloService helloService() {
		System.out.println("配置类@Bean给容器中添加组件了");
		return new HelloService();
	}
}
// 通过这种方式就不用再主方法中添加@ImportResource(locations = {"classpath:beans.xml"})注解了
```





