import {createRouter,createWebHashHistory} from "vue-router"
const router = createRouter({
  //内部提供了history模式的实现。为了简单起见，我们在这里使用hash模式。
  history: createWebHashHistory(),
  routes:[
	  {name:"animate",path:"/animate",component:()=>import("../views/animate.vue")},
	  {name:"homepage",path:"/",component:()=>import("../views/homepage.vue")},
	  {name:"index",path:"/index",component:()=>import("../views/index.vue")},
	  {name:"part1",path:"/part1",component:()=>import("../components/part1/part1.vue")},
	  {name:"part2",path:"/part2",component:()=>import("../components/part2/part2.vue")},
	  {name:"part3",path:"/part3",component:()=>import("../components/part3/part3.vue")},
	  {name:"part4",path:"/part4",component:()=>import("../components/part4/part4.vue")},
	  {name:"part5",path:"/part5",component:()=>import("../components/part5/part5.vue")},
	 {name:"map1",path:"/map1",component:()=>import("../components/part4/map1.vue")},

	
  ]
})
export default router

