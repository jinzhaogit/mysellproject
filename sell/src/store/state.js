let defaultCity='上海'
try{
	// 尝试查看本地存储，避免用户关闭本地存储功能报错
	if(localStorage.city){
		// 如果有值的话，优先调用本地存储得值
		defaultCity=localStorage.city
	}
}catch(e){}

export default{
	city:defaultCity, //当前城市
  total:0, //订单总价
  costs:[], //商品信息列表
  cartLine:[], //商品特色列表
  loginState:false, //登录状态
  count:1 //商家商品数量
}
