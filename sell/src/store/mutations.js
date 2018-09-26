export default{
	changeCity(state,city){
		state.city=city
		// 尝试着去本地存储city，如果用户没有关闭浏览器存储就存值
		try{
			localStorage.city=city
		}catch(e){}
	},
  //加入购物车
  changeNumber(state,number){
	  state.number=number
  },
  getTotal(state,total){
	  state.total=total
  },
  //获取tab购物车信息
  getCosts(state,costs){
	  state.costs=costs
  },
  getcartLine(state,cartLine){
	  state.cartLine=cartLine
  },
  //判断登录状态
  updataLoginState(state,loginState){
	  state.loginState=loginState
  }
}
