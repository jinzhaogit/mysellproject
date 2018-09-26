export default{
	changeCity(ctx,city){
		// 去触发mutations对数据进行内部修改
		ctx.commit('changeCity',city)
	},
  // 对购物车进行操作数量
  changeNumberAdd(ctx){
	  ctx.commit('changeNumberAdd')
  },
  changeNumber(ctx,number){
    ctx.commit('changeNumber',number)
  }
}
