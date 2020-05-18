import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import HomePage from '@/pages/HomePage'
import GoodList from '@/pages/GoodList'
import Search from '@/pages/search'
import Detail from '@/pages/detail'
import Classify from '@/pages/classify'
import ClassifyIndex from '@/pages/classifyIndex'
import ShopCart from '@/pages/shopCart'
import MyCenter from '@/pages/MyCenter'
import Login from '@/pages/login'
import MyArticle from '@/pages/myArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        { path: '/', name: 'Index', component: Index },
        { path: '/list', name: 'GoodList', component: GoodList },
        { path: '/search',name: 'Search',component: Search}
      ]
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/classify',
      name:'Classify',
      component:Classify,
      children:[
        {path:'/',redirect:'/classifyList'},
        {path:'/classifyList',name:'ClassifyIndex',component:ClassifyIndex}
      ]
    },
    {
      path:'/cart',
      name:'ShopCart',
      component:ShopCart
    },
    {
      path:'/myCenter',
      name:'MyCenter',
      component:MyCenter,
      children:[
        {path:'/login',name:'Login',component:Login}
      ]
    },
    {
      path:'/myArticle',
      name:'MyArticle',
      component:MyArticle
    }

  ]
})
