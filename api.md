## 1. 首页轮播图接口 ##

**请求URL：** `/scroll/get`

**请求方式：** GET

**参数：**

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 轮播图数据数组
			{
				scrollId: 10001,	// 数据唯一标识ID
				coverImage: "",		// 封面图
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				itemContentId: 10001,// 商品唯一标识ID，用于轮播图链接跳转 （可不填）
				title: "",			// 轮播图标题 （可不填）
				priority: 89078		// 数据优先级排序
			}
		]
	}
}
```

## 2.首页一级分类专区接口 ##

**请求URL：** 

*请求URL与接口 **“7.一级分类列表接口”** 的请求URL相同*

**请求方式：** GET

**参数：**

**返回示例：**

*返回结果与接口 **“7.一级分类列表接口”** 的返回结果相同*

## 3.商品列表接口 ##

**请求URL：** `/product/all`

**请求方式：** GET

**参数：**

```
pageIndex: 1	// 分页第1页，安装页码传参（前端可修改数据传至后台）
pageSize: 10	// 分页数据一次性拉取10条数据,一般默认为10（前端可修改数据传至后台）
classifyId: 10001,	// 一级分类唯一标识ID，用于判断商品属于哪个一级分类（可不传）
modeType: 'all/onsell/soldOut/new/hot'
	all： 全部商品数据
	onsell： 在售商品数据
	soldout： 下架商品数据
	new： 新品推荐数据
	hot： 热卖商品数据
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 商品列表数据数组
			{
				contentId: 10001,	// 产品唯一标识ID
				classifyId: 10001,	// 所属一级分类唯一标识ID
				categoryId: 10001,	// 所属二级分类唯一标识ID
				storeId: 10001,		// 所属店铺唯一ID
				title: "",			// 产品标题
				coverImage: "",		// 产品封面图
				images: [],			// 产品轮播图列表
				introImages: [],	// 产品详情图列表
				sales: 124,			// 产品销量
				price: 125.00,		// 产品价格（特价）
				originalPrice: 255.00,	// 产品原价
				parameter: [],		// 产品参数选择列表
				status: 1,			// 商品状态.1- 在售 2- 下架
				isNew: 1,			// 是否新品.1- 否 2- 是
				isHot: 1,			// 是否热销.1- 否 2- 是
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				priority: 89078		// 数据优先级排序
			}
		]
	}
}
```

## 4.搜索商品列表接口 ##

**请求URL：** `/product/search`

**请求方式：** GET

**参数：**

```
pageIndex: 1	// 分页第1页，安装页码传参（前端可修改数据传至后台）
pageSize: 10	// 分页数据一次性拉取10条数据,一般默认为10（前端可修改数据传至后台）
keywords: ''	// 用户搜索的关键词
modeType: 'product/store'	//判断是搜索“商品”还是搜索“店铺”
```

**返回示例：**

1. modeType为"product"

*返回结果与接口 **“3.商品列表接口”** 的返回结果相同*

2. modeType为"store"

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 搜索店铺数据数组
			{
				storeId: 10001,		// 所属店铺唯一ID
				storeTitle: '',		// 店铺名字
				storeLogo: '',		// 店铺图片或logo
				items: [			// 店铺商品（3个左右）
					{
						contentId: 10001,	// 产品唯一标识ID
						coverImage: "",		// 产品封面图
					}
				],
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		]
	}
}
```

## 5.分类拉取商品列表接口 ##

**请求URL：** `/product/category`

**请求方式：** GET

**参数：**

```
pageIndex: 1	// 分页第1页，安装页码传参（前端可修改数据传至后台）
pageSize: 10	// 分页数据一次性拉取10条数据,一般默认为10（前端可修改数据传至后台）
categoryId: 10002	// 所属二级分类唯一ID
modeType: 'sales/price'	// 判断商品按照“销量”排序，还是按照“价格”排序
```

**返回示例：**

*返回结果与接口 **“3.商品列表接口”** 的返回结果相同*

## 6.分类列表接口 ##

**请求URL：** `/category/all`

**请求方式：** GET

**参数：**

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		data: [		// 分类数据数组
			{
				classifyId: 10001,	// 一级分类唯一标识ID
				coverImage: "",		// 封面图
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				title: "",			// 专区标题 （可不填）
				priority: 89078		// 数据优先级排序
				list: [				// 二级分类数据数组
					{
						categoryId: 10001,	// 二级分类唯一标识ID
						coverImage: "",		// 封面图
						createTime: "",		// 创建时间
						updateTime: "",		// 修改时间
						title: "",			// 专区标题 （可不填）
						priority: 89078		// 数据优先级排序
					}
				]
			}
		]
	}
}
```

## 7.一级分类列表接口 ##

**请求URL：** `/category/firstGet`

**请求方式：** GET

**参数：**

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 一级分类列表数据数组
			{
				classifyId: 10001,	// 一级分类唯一标识ID
				coverImage: "",		// 封面图
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				title: "",			// 专区标题 （可不填）
				priority: 89078		// 数据优先级排序
			}
		]
	}
}
```

## 8.二级分类列表接口 ##

**请求URL：** `/category/secondGet`

**请求方式：** GET

**参数：**

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 二级分类列表数据数组
			{
				categoryId: 10001,	// 二级分类唯一标识ID
				coverImage: "",		// 封面图
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				title: "",			// 专区标题 （可不填）
				priority: 89078		// 数据优先级排序
			}
		]
	}
}
```

## 9.商品详情接口 ##

**请求URL：** `/product/get`

**请求方式：** GET

**参数：**

```
contentId: 10001	// 商品唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		contentId: 10001,	// 产品唯一标识ID
		classifyId: 10001,	// 所属一级分类唯一标识ID
		categoryId: 10001,	// 所属二级分类唯一标识ID
		storeId: 10001,		// 所属店铺唯一ID,用于进入店铺链接
		storeTitle: '',		// 店铺名字
		storeLogo: '',		// 店铺图片或logo
		storeServer: '',	// 店铺客服二维码图片
		title: "",			// 产品标题
		coverImage: "",		// 产品封面图
		images: [],			// 产品轮播图列表
		introImages: [],	// 产品详情图列表
		sales: 124,			// 产品销量
		price: 125.00,		// 产品价格（特价）
		originalPrice: 255.00,	// 产品原价
		commission: 0.00,	// 产品佣金
		percentage: 0.00,	// 产品提成
		parameter: [],		// 产品参数选择列表
		status: 1,			// 商品状态.1- 在售 2- 下架
		isNew: 1,			// 是否新品.1- 否 2- 是
		isHot: 1,			// 是否热销.1- 否 2- 是
		createTime: "",		// 创建时间
		updateTime: "",		// 修改时间
		priority: 89078		// 数据优先级排序
	}
}
```

## 10.店铺分类接口 ##

**请求URL：** `/store/categoryGet`

**请求方式：** GET

**参数：**

```
storeId: 10001	// 所属店铺唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 店铺分类列表数据数组
			{
				categoryId: 10001,	// 二级分类唯一标识ID
				coverImage: "",		// 封面图
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
				title: "",			// 专区标题 （可不填）
				priority: 89078		// 数据优先级排序
			}
		]
	}
}
```

## 11.店铺分类商品列表接口 ##

**请求URL：** `/store/get`

**请求方式：** GET

**参数：**

```
storeId: 10001	// 所属店铺唯一ID
categoryId: 10002	// 所属二级分类唯一ID
```

**返回示例：**

*返回结果与接口 **“3.商品列表接口”** 的返回结果相同*

## 12.购物车列表接口 ##

**请求URL：** `/cart/get`

**请求方式：** GET

**参数：**

```
clientId: 10001		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 购物车列表数据数组
			{
				storeId: 10001,		// 所属店铺唯一ID,用于进入店铺链接
				storeTitle: '',		// 店铺名字
				storeLogo: '',		// 店铺图片或logo
				totalPrice: 1235.00,	//总价格
				list: [				// 分店铺商品列表
					{
						cartId: 10001,		// 购物车数据唯一标识ID
						contentId: 10001,	// 产品数据唯一标识ID
						title: "",			// 产品标题
						coverImage: "",		// 产品封面图
						price: 125.00,		// 产品价格（特价）
						originalPrice: 255.00,	// 产品原价
						param: "",			// 产品参数
						quantity: 2,		// 购买数量
						createTime: "",		// 创建时间
						updateTime: "",		// 修改时间
					}
				]
			}
		]
	}
}
```

## 13.提交订单接口 ##

**请求URL：** `/cart/orderGet`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

*返回结果与接口 **“12.购物车列表接口”** 的返回结果相同*

## 14.默认收货地址接口 ##

**请求URL：** `/address/defaultGet`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		addressId: 10001,	// 收货地址唯一标识ID
		address: "",		// 收货地址
		addressee: "",		// 收货人
		phoneNumber: "",	// 电话号码
		clientId: "",		// 用户唯一ID
		isDefault: 1,		// 是否默认地址.1- 否 2- 是
		createTime: "",		// 创建时间
		updateTime: "",		// 修改时间
	}
}
```

## 15.单个收货地址接口（修改地址时使用） ##

**请求URL：** `/address/get`

**请求方式：** GET

**参数：**

```
addressId: 10001,		// 收货地址唯一标识ID
```

**返回示例：**

*返回结果与接口 **“14.默认收货地址接口”** 的返回结果相同*

## 16.收货地址列表接口 ##

**请求URL：** `/address/getAll`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 收货地址列表数据数组
			{
				addressId: 10001,	// 收货地址唯一标识ID
				address: "",		// 收货地址
				addressee: "",		// 收货人
				phoneNumber: "",	// 电话号码
				clientId: "",		// 用户唯一ID
				isDefault: 1,		// 是否默认地址.1- 否 2- 是
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		]
	}
}
```

## 17.我的订单列表接口 ##

**请求URL：** `/order/get`

**请求方式：** GET

**参数：**

```
pageIndex: 1	// 分页第1页，安装页码传参（前端可修改数据传至后台）
pageSize: 10	// 分页数据一次性拉取10条数据,一般默认为10（前端可修改数据传至后台）
clientId: 10001,		// 用户唯一ID
modeType: 'all/package/receiving/finish/returns'
	all： 全部订单数据
	package： 待发货订单数据
	receiving： 待收货订单数据
	finish： 已完成订单数据
	returns： 退换货订单数据
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 我的订单列表数据数组
			{
				storeId: 10001,		// 所属店铺唯一ID,用于进入店铺链接
				storeTitle: '',		// 店铺名字
				storeLogo: '',		// 店铺图片或logo
				status: 1,			// 订单状态.1- 待付款 2- 待发货 3- 待收货 4- 已完成 5- 关闭交易
				totalPrice: 1235.00,	//总价格
				orderNum: 1812201254252548,		// 订单号
				list: [				// 分店铺商品列表
					{
						orderId: 10001,		// 订单数据唯一标识ID
						contentId: 10001,	// 产品数据唯一标识ID
						title: "",			// 产品标题
						coverImage: "",		// 产品封面图
						price: 125.00,		// 产品价格（特价）
						originalPrice: 255.00,	// 产品原价
						param: "",			// 产品参数
						quantity: 2,		// 购买数量
						returnsStatus: 1,	// 退货状态.1- 没有退货 2- 退货审核中 3- 待买家发货 4- 退货中 5- 退款中 6- 已退款
						createTime: "",		// 创建时间
						updateTime: "",		// 修改时间
					}
				]
			}
		]
	}
}
```

## 18.订单详情数据接口 ##

**请求URL：** `/order/detailGet`

**请求方式：** GET

**参数：**

```
orderNum: 1812201254252548,		// 订单号
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		address: "",		// 收货地址
		addressee: "",		// 收货人
		phoneNumber: "",	// 电话号码
		logistics: "",		// 物流公司
		logisticsId: "",	// 物流单号
		storeId: 10001,		// 所属店铺唯一ID,用于进入店铺链接
		storeTitle: '',		// 店铺名字
		storeLogo: '',		// 店铺图片或logo
		status: 1,			// 订单状态.1- 待付款 2- 待发货 3- 待收货 4- 已完成 5- 关闭交易
		totalPrice: 1235.00,	//总价格
		orderNum: 1812201254252548,		// 订单号
		payTime: "",		// 付款时间
		finishTime: "",		// 订单完成时间
		record: [			// 回访记录列表
			{	
				text: "",			// 回访文字
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		],
		list: [				// 分店铺商品列表
			{
				orderId: 10001,		// 订单数据唯一标识ID
				contentId: 10001,	// 产品数据唯一标识ID
				title: "",			// 产品标题
				coverImage: "",		// 产品封面图
				price: 125.00,		// 产品价格（特价）
				originalPrice: 255.00,	// 产品原价
				param: "",			// 产品参数
				quantity: 2,		// 购买数量
				returnStatus: 1,	// 退货状态.1- 没有退货 2- 退货审核中 3- 待买家发货 4- 退货中 5- 退款中 6- 已退款
				returnReason: "",	// 退货原因
				returnTime: "",		// 退货申请时间
				returnPrice: "",	// 退货金额
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		]
	}
}
```

## 19.未读公告数量接口 ##

**请求URL：** `/notice/num`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		remindNum: 215,		// 未读公告数量
	}
}
```

## 20.公告列表接口 ##

**请求URL：** `/notice/get`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 公告列表数据数组
			{
				noticeId: 10001,	// 公告唯一标识ID
				noticeTitle: "",	// 公告标题
				noticeSummary: "",	// 公告简介
				noticeImage: "",	// 公告封面
				isRead: 1,			// 该用户是否已读.1- 否 2- 是
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		]
	}
}
```

## 21.个人中心接口 ##

**请求URL：** `/client/get`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		clientId: 10001,	// 用户唯一ID
		openid: "",			// 微信用户识别ID
		nickName: "",		// 用户姓名nickName
		avatarUrl: "",		// 用户头像avatarUrl
		levelId: "",		// 会员等级唯一ID
		level: "",			// 会员等级
		isUpgrade: 1		// 会员等级是否升级.1- 否 2- 是
		isFactoryMember: 1,	// 是否属于厂家分销员.1- 否 2- 是
		storeId: 10001,		// 若分销员属于商店，则有数据，若属于厂家或不是分销员则数据为0
		isDistribution: 1,	// 是否为分销员.1- 否 2- 审核中 3- 是
		isManager: 1,		// 是否为店长.1- 否 2- 是
		createTime: "",		// 创建时间
		updateTime: "",		// 修改时间
	}
}
```

## 22.分销中心数据接口 ##

**请求URL：** `/distribution/num`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		balance: 0.00,		// 余额
		commission: 0.00,	// 佣金
		percentage: 0.00,	// 提成
		salesAmount: 0.00,	// 销售金额
		memberNum: 123		// 团队人数
	}
}
```

## 23.我的团队列表接口 ##

**请求URL：** `/member/get`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		count: 1,	// 返回的数据总数
		data: [		// 我的团队列表数据数组
			{
				memberId: 10001,	// 团队成员唯一标识ID
				memberImage: "",	// 团队成员头像
				memberName: "",		// 团队成员名字
				contribution: "",	// 团队成员贡献金额
				isCommission: 1,	// 贡献金额是否为佣金.1- 否 2- 是
				isPercentage: 2,	// 贡献金额是否为提成.1- 否 2- 是
				createTime: "",		// 创建时间
				updateTime: "",		// 修改时间
			}
		]
	}
}
```

## 24.我的财富佣金和提成列表接口 ##

**请求URL：** `/treasure/get`

**请求方式：** GET

**参数：**

```
clientId: 10001,		// 用户唯一ID
modeType: 'commission/percentage'	// 佣金/提成
```

**返回示例：**

*返回结果与接口 **“23.我的团队列表接口”** 的返回结果相同*

## 25.商家申请保证金接口 ##

**请求URL：** `/deposit/get`

**请求方式：** POST

**参数：**

```
clientId: 10001,	// 用户唯一ID
trueName: '',		// 真实姓名
phoneNumber: '',	// 联系电话
account: '',		// 登陆账号
password: '',		// 登陆密码
rePassword: '',		// 确认密码
industry: ''		// 店铺行业
```

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		deposit: "",		// 申请商家保证金
	}
}
```

## 26.厂家数据（客服）接口 ##

**请求URL：** `/factory/get`

**请求方式：** GET

**参数：**

**返回示例：**

```
{
	code: 0,	// 错误码，返回0则数据正确
	msg: "",	// 错误信息
	data: {		// 返回正确数据
		server: "",		// 厂家客服二维码图片
		levelRule: ""	// 会员等级规则图片
	}
}
```