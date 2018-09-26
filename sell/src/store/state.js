let defaultCity='上海'
try{
	// 尝试查看本地存储，避免用户关闭本地存储功能报错
	if(localStorage.city){
		// 如果有值的话，优先调用本地存储得值
		defaultCity=localStorage.city
	}
}catch(e){}

export default{
	city:defaultCity,
  total:0,
  costs:[],
  cartLine:[],
  loginState:false
}
