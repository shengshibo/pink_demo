# Spring学习笔记

在 xml 文件中通过 bean 节点来配置 bean

```xml
<!-- 通过全类名的方式来配置 bean -->
<bean id="helloWorld" class="com.ssb.spring.entity.HelloWorld"></bean>
```

id：Bean 的名称

- 在 IOC 容器中必须是唯一的
- 若 id 没有指定，Spring 自动将权限定性类名作为 Bean 的名字
- id 可以指定多个名字，名字之间可用逗号、分号、或空格分隔

## Spring容器

- 在 Spring IOC 容器读取 Bean 配置创建 Bean 实例之前，必须对它进行实例化。只有在容器实例化后，才可以从IOC容器里获取 Bean 实例并使用。
- Spring 提供了两种的 IOC 容器实现
  - BeanFactory：IOC 容器的基本实现
  - ApplicationContext：提供了更多的高级特性。是 BeanFactory 的子接口
  - BeanFactory 是 Spring 框架的基础设施，面向 Spring 本身
  - ApplicationContext 面向使用 Spring 框架的开发者，几乎所有的应用场合都直接使用 ApplicationContext 而非底层的 BeanFactory
  - 无论使用哪种方式，配置文件是相同的

## ApplicationContext

- ApplicationContext 的主要实现类：
  - ClassPathXmlApplicationContext：从类路径下加载配置文件
  - FileSystemXmlApplicationContext：从文件系统中加载配置文件
- ConfigurableApplicationContext 扩展于 ApplicationContext，新增加两个主要方法：refresh() 和 close()，让 ApplicationContext 具有启动、刷新和关闭上下文的能力
- ApplicationContext 在初始化上下文时就实例化所有单例的 Bean
- WebApplicationContext 是专门为 WEB 应用而准备的，它允许从相对于 WEB 根目录的路径中完成初始化工作

## 属性的注入方式

- Spring 支持三种依赖注入的方式
  - 属性注入
  - 构造器注入
  - 工厂方法注入（很少使用，不推荐）

## 字面值

* 字面值：可用字符串表示的值，可以通过 <value> 元素标签或 value 属性进行注入
* 基本数据类型及其封装类、String 等类型都可以采取字面值注入的方式
* 若字面值中包含特殊字符，可以使用 <![CDATA[]]> 把字面值包裹起来

## 引用其他 Bean

* 组成应用程序的 Bean 经常需要相互协作以完成应用程序的功能，要使 Bean 能够相互访问，就必须在 Bean 配置文件中指定对 Bean 的引用
* 在 Bean 的配置文件中，可以通过 <ref> 元素或 ref 属性为 Bean 的属性或构造器参数指定对 Bean 的引用
* 也可以在属性或构造器里包含 Bean 的声明，这样的 Bean 称为内部 Bean

## 注入参数详解：null 值和级联属性

* 可以使用专用的 <null/> 元素标签为 Bean 的字符串或其它对象类型的属性注入 null 值
* 和 struts、Hibernate 等框架一样，Spring 支持级联属性的配置

## 集合属性

* 在 Spring 中可以通过一组内置的 xml 标签（例如：<list>，<set>，或 <map>）来配置集合属性
* 配置 java.util.List 类型的属性，需要指定 <list> 标签，在标签里包含一些元素。这些标签可以通过 <value> 指定简单的常量值，通过 <ref> 指定对其他 Bean 的引用。通过 <Bean> 指定内置 Bean 定义。通过 <null/> 指定空元素。甚至可以内嵌其他集合
* 数组的定义和 List 一样，都使用 <list>
* 配置 java.util.Set 需要使用 <Set> 标签，定义元素的方法与 List 一样
* java.util.Map 通过 <map> 标签定义，<map> 标签里可以使用多个 <entry> 作为子标签。每个条目包含一个键和一个值
* 必须在 <key> 标签里定义键
* 因为键和值的类型没有限制，所以可以自由地为他们指定 <value>，<ref>，<bean>或者 <null>元素
* 可以将 Map 的键和值作为 <entry> 的属性定义：简单常量使用 key 和 value 来定义；Bean 引用通过 key-ref 和 value-ref 属性定义
* 使用 <props> 定义 java.util.Properties，该标签使用多个 <prop> 作为子标签，每个 <prop> 标签必须定义 key 属性

## 使用 utility scheme 定义集合

* 使用基本的集合标签定义集合时，不能将集合作为独立的 Bean 定义，导致其他 Bean 无法引用该集合，所以无法在不同 Bean 之间共享集合
* 可以使用 util schema 里的集合标签定义独立的集合 Bean。需要注意的是，必须在 <beans> 根元素里添加 util schema 定义

## 使用 p 命名空间

* 为了简化 XML 文件的配置，越来越多的 XML 文件采用属性而非子元素配置信息
* Spring 从 2.5 版本开始引入了一种新的 p 命名空间，可以通过 <bean> 元素属性的方式配置 Bean 的属性
* 使用 p 命名空间后，基于 XML 的配置方式将进一步简化

## XML 配置里的 Bean 自动装配

* Spring IOC 容器可以自动装配 Bean。需要做的仅仅是在 <bean> 的 autowire 属性里指定自动装配的模式
* byType（根据类型自动装配）：若 IOC 容器中有多个目标 Bean 类型一致的 Bean。在这种情况下 Spring 将无法判定哪个 Bean 最合适该属性，所以不能执行自动装配
* byName（根据名称自动装配）：必须将目标 Bean 的名称和属性名设置的完全相同
* constructor（通过构造器自动装配）：当 Bean 中存在多个构造器时，此种自动咋U那个配方式将会很复杂。不推荐使用

## XML 配置里的 Bean 自动装配的缺点

* 在 Bean 配置文件里设置 autowire 属性进行自动装配将会装配 Bean 的所有属性。然而，若只希望装配个别属性时，autowire 属性就不够灵活了
* autowire 属性的根据类型自动装配和根据名称自动装配不能同时存在
* 一般情况下，在实际的项目中很少使用自动装配功能，因为和自动装配功能所带来的好处比起来，明确清晰的配置文档更加有说服力

## 继承 Bean 配置

* Spring 允许继承 Bean 的配置，被继承的 Bean 称为父 Bean。继承这个父 Bean 的 Bean 称为子 Bean
* 子 Bean 从父 Bean 中继承配置，包括 Bean 的属性配置
* 子 Bean 也可以覆盖从父 Bean 继承过来的配置
* 父 Bean 可以作为配置模板，也可以作为 Bean 实例。若只想把父 Bean 作为模板，可以设置 <bean> 的 abstract 属性为 true，这样 Spring 将不会实例化这个 Bean
* 并不是 <bean> 元素里的所有属性都会被继承。比如：autowire，abstract 等
* 也可以忽略父 Bean 的 class 属性，让子 Bean 指定自己的类，而共享相同的属性配置。但此时 abstract 必须设为 true

## 依赖 Bean 配置

* Spring 允许用户通过 depends-on 属性设置 Bean 前置依赖的 Bean，前置依赖的 Bean 会在本 Bean 实例化之前创建好
* 如果前置依赖于多个 Bean，则可以通过逗号，空格的方式配置 Bean 的名称

## 使用外部属性文件

* 在配置文件里配置 Bean 时，有时需要在 Bean 的配置里混入系统部署的细节信息（例如：文件路径，数据源配置信息等）。而这些部署细节实际上需要和 Bean 配置相分离
* Spring 提供了一个 PropertyPlaceholderConfigurer 的 BeanFactory 后置处理器，这个处理器允许用户将 Bean 配置的部分内容外移到属性文件中。可以在 Bean 配置文件里使用形式为 ${var} 的变量，PropertyPlaceholderConfigurer从属性文件里加载属性，并使用这些属性来替换变量
* Spring 还允许在属性文件中使用 ${propName}，以实现属性之间的相互引用

## 注册 PropertyPlaceholderConfigurer

### Spring 2.0

```xml
<bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
	<property name="localhost" value="classpath:jdbc.propertiess"></property>
</bean>
```

### Spring 2.5 之后：可通过 <context:property-placeholder> 元素简化：

* <beans> 中添加 context Schema 定义
* 在配置文件中加入如下配置：

```xml
<context:property-placeholder localhost="classpath:db.properties"/>
```

## Spring 表达式语言：SpEL

* Spring 表达式语言（简称 SpEL）：是一个支持运行时查询和操作对象图的强大的表达式语言
* 语法类似于 EL：SpEL 使用 #{...} 作为定界符，所有在大括号中的字符都被认为是 SpEL
* SpEL 为 Bean 的属性进行动态赋值提供了便利
* 通过 SpEL 可以实现：
  * 通过 Bean 的 id 对 Bean 进行引用
  * 调用方法以及引用对象中的属性
  * 计算表达式的值
  * 正则表达式的匹配

##  SpEL：字面量

字面量的表示：

* 整数：<property name="count" value="#{5}"/>
* 小数：<property name="frequency" value="#{89.7}"/>
* 科学计数法：<property name="capacity" value="#{1e4}"/>
* String 可以使用单引号或者双引号作为字符串的定界符号：<property name="name" value="#{'Chuck'}"/> 或引号互换也可以
* Boolean：<property name="enabled" value="#{false}"/>

## SpEL：引用 Bean、属性和方法（1）

* 引用其他对象：

```xml
<!-- 通过 value 属性和 SpEL 配置 Bean 之间的应用关系 -->
<property name="prefix" value="#{prefixGenerator}"></property>
```

* 引用其他对象的属性：

```xml
<!-- 通过 value 属性和 SpEL 配置 suffix 属性值为另一个 Bean 的 suffix 属性值 -->
<property name="suffix" value="#{sequenceGenerator2.suffix}"/>
```

* 调用其它方法，还可以链式操作

```xml
<!-- 通过 value 属性和 SpEL 配置 suffix 属性值为另一个 Bean 的方法的返回值 -->
<property name="suffix" value="#{sequenceGenerator2.toString()}"/>
<!-- 方法的连缀 -->
<property name="suffix" value="#{sequenceGenerator2.toString().toUpperCase()}"/>
```

## SpEL：引用 Bean、属性和方法（2）

* 调用静态方法或静态属性：通过 T( ) 调用一个类的静态方法，它将返回一个 ClassObject，然后再调用相应的方法或属性：

```xml
<property name="initValue" value="#{T(java.lang.Math).PI}"></property>
```

## IOC 容器中 Bean 的生命周期方法

* Spring IOC 容器可以管理 Bean 的生命周期，Spring 允许在 Bean 生命周期的特定点执行定制的任务
* Spring IOC 容器对 Bean 的生命周期进行管理的过程：
  * 通过构造器或工厂方法创建 Bean 实例
  * 为 Bean 的属性设置值和对其他 Bean 的引用
  * 调用 Bean 的初始化方法
  * Bean 可以使用了
  * 当容器关闭时，调用 Bean 的销毁方法

* 在 Bean 的声明里设置 init-method 和 destroy-method 属性，为 Bean 指定初始化和销毁方法

## 创建 Bean 后置处理器

* Bean 后置处理器允许在调用初始化方法前后对 Bean 进行额外的处理
* Bean 后置处理器对 IOC 容器中的所有 Bean 实例逐一处理，而非单一实例。其典型应用是：检查 Bean 实例的正确性或根据特定的标准更改 Bean 的属性
* 对 Bean 后置处理器而言，需要实现 Interface BeanPostProcessor 接口。在初始化方法被调用前后，Spring 将把每个 Bean 实例分别传递给上述接口的下面两个方法:

```java
postProcessAfterInitalization(Object bean, Stirng beanName){}
postProcessBeforeInitalization(Object bean, Stirng beanName){}
```

## 通过调用静态工厂方法创建 Bean

* 调用静态工厂方法创建 Bean 是将对象创建的过程封装到静态方法中。当客户端需要对象时，只需要简单地调用静态方法，而不用关心创建对象的细节
* 要声明通过静态方法创建的 Bean，需要在 Bean 的 class 属性里指定拥有该工厂方法的类，同时在 factory-method 属性里指定工厂方法的名称。最后使用 <constrctor-arg> 元素为该方法传递方法参数

## 在 classpath 中扫描组件

* 组件扫描：Spring 能够从 classpath 下自动扫描，侦测和实例化具有特定注解的组件
* 特定组件包括：
  * @Component：基本注解，标识了一个受 Spring 管理的组件
  * @Respository：标识持久层组件
  * @Service：标识服务层（业务层）组件
  * @Controller：标识表现层组件
* 对于扫描到的组件，Spring 有默认的命名策略：使用非限定类名，第一个字母小写。也可以在注解中通过 value 属性值标识组件的名称

* 当在组件类上使用了特定的注解之后，还需要在 Spring 的配置文件中声明<context:component-scan>：

  * base-package 属性指定一个需要扫描的基类包，Spring 容器将会扫描这个基类包里及其子包中的所有类

  * 当需要扫描多个包时，可以使用逗号分隔

  * 如果仅希望扫描特定的类而非基包下的所有类，可使用 resource-pattern 属性过滤特定的类，实例：

  * ```xml
    <context:component-scan base-package="com.atguigu.spring.beans" 
                            resource-pattern="autowire/*.class"/>
    ```

  * <context:include-filter> 子节点表示要包含的目标类

  * <context:exclude-filter> 子节点表示要排除在外的目标类

  * <context:compenent-scan> 下可以拥有若干个 <context:include-filter> 和 <context:exclude-filter> 子节点

## 组件装配

* <<context:component-scan>>元素还会自动注册 AutowireAnnotationBeanPostProcessor 实例，该实例可以自动装配具有 @Autowired 和 @Resource、@Inject 注解的属性

## 使用 @Autowired 自动装配 Bean

* @Autowired 注解自动装配具有兼容类型的单个 Bean 属性
  * 构造器，普通字段（即使是非 public），一切具有参数的方法都可以应用 @Autowired 注解
  * 默认情况下，所有使用 @Autowired 注解的属性都需要被设置。当 Spring 找不到配置的 Bean 装配属性时，会抛出异常，若某一属性允许不被设置，可以设置 @Autowired 注解的 required 属性为 false
  * 默认情况下，当 IOC 容器里存在多个类型兼容的 Bean 时，通过类型的自动装配将无法工作。此时可以在 @Qualifier 注解里提供 Bean 的名称。Spring 允许对方法的入参标注 @Qualifier 已指定注入 Bean 的名称
  * @Autowired 注解也可以应用在数组类型的属性上，此时 Spring 将会把所有匹配的 Bean 进行自动装配
  * @Autowired 注解也可以应用在集合属性上，此时 Spring 读取该集合的类型信息，然后自动装配所有与之兼容的 Bean
  * @Autowired 注解用在 java.util.Map 上时，若该 Map 的键值为 Spring，那么 Spring 将自动装配与之 Map 值类型兼容的 Bean，此时 Bean 的名称作为键值

## 使用 @Resource 或 @Inject 自动装配 Bean

* Spring 还支持 @Resource 和 @Inject 注解，这两个注解和 @Autowired 注解的功能类似
* @Resource 注解要求提供一个 Bean 名称的属性，若该属性为空，则自动采用标注处的变量或方法名作为 Bean 的名称
* @Inject 和 @Autowired 注解一样也是按类型匹配注入的 Bean，但没有 Reqired 属性
* 建议使用 @Autowired 注解

