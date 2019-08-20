### 容器
	1. 流体容器
	2. 固定容器
		阈值               width
		大于等于1200(lg 大屏pc)    1170（1140 + 槽宽）
		
		大于等于992(md 中屏pc)     970（940 + 槽宽）
		小于1200
		
		大于等于768(sm 平板)     750（720 + 槽宽）
		小于992
		
		小于768(xs 移动手机)       auto
	3. 栅格系统
### 栅格源码分析
	1. 流体容器和固定容器的公共样式
		margin-right: auto;
		margin-left: auto;
		padding-left: 15px;
		padding-right: 15px;
	2. 固定容器 特定样式
		顺序不可变
		@media (min-width: @screen-sm-min) {
		  width: @container-sm;
		}
		@media (min-width: @screen-md-min) {
		  width: @container-md;
		}
		@media (min-width: @screen-lg-min) {
		  width: @container-lg;
		}
	3. 行
		margin-left: -15px;
		margin-right: -15px;
	4. 列
		.make-grid-column() --->
			.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,
			.col-xs-2, .col-sm-2, .col-md-2, .col-lg-2,
			.col-xs-3, .col-sm-3, .col-md-3, .col-lg-3,
			.col-xs-4, .col-sm-4, .col-md-4, .col-lg-4,
			.col-xs-5, .col-sm-5, .col-md-5, .col-lg-5,
			.col-xs-6, .col-sm-6, .col-md-6, .col-lg-6,
			.col-xs-7, .col-sm-7, .col-md-7, .col-lg-7,
			.col-xs-8, .col-sm-8, .col-md-8, .col-lg-8,
			.col-xs-9, .col-sm-9, .col-md-9, .col-lg-9,
			.col-xs-10, .col-sm-10, .col-md-10, .col-lg-10,
			.col-xs-11, .col-sm-11, .col-md-11, .col-lg-11,
			.col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{
				position: relative;
				min-height: 1px;
				padding-left: 15px;
				padding-right: 15px;
			}
		.make-grid(xs) --->
			float-grid-columns(@class)
				所有左浮动
			.llp-grid-columns(@grid-colmuns, @class, width)
				宽度
### 响应式工具

### 栅格盒模型设计的精妙之处
	容器两边具有 15px 的 padding
	行 两边具有 -15px 的 margin
	列 两边具有 15px 的 padding
	
	为了维护槽宽的规则，
		列两边要有 15px 的 padding
	为了能使列嵌套行
		行两边必须要有 -15px 的 margin
	为了让容器能够包裹住行
		容器两边必须要有 15px 的 padding