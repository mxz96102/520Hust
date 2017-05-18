import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from '@/components/info'
import Rank from '@/components/rank'
import Lover from '@/components/Lover'
import Lovers from '@/components/Lovers'
import Lovee from '@/components/Lovee'
import Wall from '@/components/Wall'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/map/:loc',
      name: 'Index',
      component: Index
    },
    {
      path: '/info/:loc/:num',
      name: 'Info',
      component: Info
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/lover',
      name: 'Lover',
      component: Lover
    },
    {
      path: '/lovers/:name/:loc/:num',
      name: 'Lovers',
      component: Lovers
    },
    {
      path: '/lovee',
      name: 'Lovee',
      component: Lovee
    },
    {
      path: '/i/want/to/on/wall',
      name: 'Wall',
      component: Wall
    }
  ]
})
