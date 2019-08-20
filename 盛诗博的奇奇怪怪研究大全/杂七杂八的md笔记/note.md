谷粒学院：http://www.gulixueyuan.com/

# 4、Spring Boot HelloWorld

一个功能：

浏览器发送hello请求，服务器接收请求进行处理，相应helloworld字符串；

### 1、创建一个maven工程（jar）

### 2、导入springboot相关的依赖

```xml
<parent>
	<groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.9.RELEASE</version>
</parent>
<dependencies>
	<dependency>
    	<groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

### 3、编写一个主程序；启动SpringBoot应用

```java
// 使用注解 @SpringBootApplication 来标注一个主程序类
@SpringBootApplication
public class HelloWorld {
    public static void main(String[] args) {
        
        SpringApplication.run(HelloWorldMainApplication.class, args);
    } 
}
```

### 5、运行主程序测试







