### less 复习
	1. less 的继承
		#test{
			&:extend(.father)
		}
		#test:extend(.father){
			
		}
		继承实质上将 .father 选择器和 #test 组合成一个选择器，
			声明块使用 .father 的
		all：继承所有和 .father 相关的声明块
		切记父类不能定义成混合（继承不灵活但是性能高，混合灵活但是性能低）
	2. less 的避免编译
		~"不会被编译的内容"
		变量在 less 中属于块级作用域，延迟加载