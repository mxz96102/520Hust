<template>
  <div class="index">
    <div class="nav">
        <div @click="()=>switchOn = !switchOn" class="nav-left">
            <span>校区</span>
            <ul class="switch-menu" :class="{'on' : switchOn}">
                <li class="tabcon" @click="()=>location.hash='#/'" :class="{ 'on' : $route.params.loc !== 'qy' && $route.params.loc !== 'zs' }">韵苑</li>
                <li class="tabcon" @click="()=>location.hash='#/map/qy'" :class="{ 'on' : $route.params.loc == 'qy' }">沁苑</li>
                <li class="tabcon" @click="()=>location.hash='#/map/zs'" :class="{ 'on' : $route.params.loc == 'zs' }">紫菘</li>
            </ul>
        </div>
        <div class="nav-logo">
            <svg version="1.1" class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 500 205" style="enable-background:new 0 0 500 500;" xml:space="preserve">
<path id="XMLID_3_" class="st0" d="M130.6,18c0,0,22.3,10.6,10.6,41.5c-11.7,30.8-24.4,43.5-24.4,43.5s44.9-9.3,50.5,17.5
	s-27.5,44.6-46.6,37.5c-25.6-9.5-19.1-33.2-19.1-33.2s-26.6-7.7-36,16.7c-14.8,38.7,41.6,80.1,89.6,51.6c55.6-33,39.3-84,24.2-93.8
	c-8.4-5.5-18.8-10.5-31.8-7.4c0,0,9.3-7.1,14.3-20.2c0,0,32.7,4.2,55.3-21.9c13.1-15.1,3.1-32.8-15-26.4c0,0-10.3,27.1-34,29.6
	c0,0,13.8-39.1-11.2-47.5C136.2-1.7,130.6,18,130.6,18z"/>
<path id="XMLID_10_" class="st0" d="M415.2,42.8c-12.5-2.4-39.1-1.8-76.8,54.5c-46.5,69.4-100,68.5-100,68.5s70-46.4,89-94.8
	c18.8-48-45.7-56.6-69.3-38c-20.4,16.2-20.2,32.8-13.9,41.5c9.9,13.7,27.7,4.7,27.7,4.7s-8-25.7,17.1-25.9
	c24.6-0.2,21.9,28.5-11.6,57.9c-32.6,30.8-76.8,33-76.3,52.9c0.7,27.5,20,40.4,46.2,26.6c61.8-32.5,89.6-81,89.6-81
	s-22.3,85.7,41,52.4C441.6,128.9,449.4,49.4,415.2,42.8z M403.8,106.4c-9.1,23.7-44.4,45.2-47.7,25.6c-4.3-25.1,9.6-41.9,18.5-49.4
	C398.2,62.7,412.9,82.7,403.8,106.4z"/>
<path id="XMLID_2_" class="st1" d="M142.6,16c0,0,22.3,10.6,10.6,41.5c-11.7,30.8-24.4,43.5-24.4,43.5s44.9-9.3,50.5,17.5
	s-27.5,44.6-46.6,37.5c-25.6-9.5-19.1-33.2-19.1-33.2s-26.6-7.7-36,16.7c-14.8,38.7,41.6,80.1,89.6,51.6c55.6-33,39.3-84,24.2-93.8
	c-8.4-5.5-18.8-10.5-31.8-7.4c0,0,9.3-7.1,14.3-20.2c0,0,32.7,4.2,55.3-21.9c13.1-15.1,3.1-32.8-15-26.4c0,0-10.3,27.1-34,29.6
	c0,0,13.8-39.1-11.2-47.5C148.2-3.7,142.6,16,142.6,16z"/>
<path id="XMLID_4_" class="st1" d="M427.2,43.8c-12.5-2.4-39.1-1.8-76.8,54.5c-46.5,69.4-100,68.5-100,68.5s70-46.4,89-94.8
	c18.8-48-45.7-56.6-69.3-38c-20.4,16.2-20.2,32.8-13.9,41.5c9.9,13.7,27.7,4.7,27.7,4.7s-8-25.7,17.1-25.9
	c24.6-0.2,21.9,28.5-11.6,57.9c-32.6,30.8-76.8,33-76.3,52.9c0.7,27.5,20,40.4,46.2,26.6c61.8-32.5,89.6-81,89.6-81
	s-22.3,85.7,41,52.4C453.6,129.9,461.4,50.4,427.2,43.8z M415.8,107.4c-9.1,23.7-44.4,45.2-47.7,25.6c-4.3-25.1,9.6-41.9,18.5-49.4
	C410.2,63.7,424.9,83.7,415.8,107.4z"/>
</svg>
        </div>
        <div @click="()=>location.hash='#/rank'" class="nav-right">
            <span>排行榜</span>
        </div>
    </div>
      <div class="hidden" @click="()=>menuOn = !menuOn" :class="{ 'index-layer' : menuOn }">

      </div>
      <qy v-if="$route.params.loc == 'qy'"/>
      <zs v-if="$route.params.loc == 'zs'"/>
      <yy v-if="$route.params.loc !== 'qy' && $route.params.loc !== 'zs'"/>
      <div class="index-menu" :class="{ on : menuOn }">
          <div class="index-menu-list">
              <div class="menu-love" @click="()=>location.hash='#/lover'"><img src="../assets/lovee.png" alt=""></div>
              <div class="menu-love" @click="()=>location.hash='#/lovee'"><img src="../assets/lover.png" alt=""></div>
          </div>
          <div class="index-menu-plus" @click="()=>menuOn = !menuOn">
              +
          </div>
      </div>
  </div>
</template>

<script>
import HMap from './map'
import qy from './qy'
import yy from './yy'
import zs from './zs'

export default {
  components: {HMap,qy,yy,zs}, name: 'index',
  data () {
    return {
      switchOn:false,
        menuOn : false,
      location : location,
      map : {now:qy}
    }
  },
  methods:{
  },
  mounted(){
    //scrollTo(document.body.scrollWidth/2,document.body.scrollHeight/4)
  }
}
</script>

<style>
    .index{
        width: 100vw;
        max-width: 100vw;
    }

    .nav{
        width: 100%;
        height: 3rem;
        display: inline-flex;
        box-shadow: 0 4px 5px 0 rgba(0,0,0,0.16);
        position: fixed;
        top:0;
        right: 0;
        background: white;
    }

    .switch-menu{
        padding: 0;
        margin: 0 auto;
        width: 4.5rem;
        font-size: 1.1rem;
        background: #76858f;
        color: white;
        height: 6rem;
        border-radius: 5px;
        margin-top: -0.5rem;
        display: none;
    }

    .switch-menu.on{
        display: block;
    }

    .switch-menu::after{
        content: "";
        display: block;
        position: relative;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0.3rem 0.3rem 0.3rem;
        border-color: transparent transparent #76858f transparent;
        margin-top: -6.3rem;
        margin-left: 1.5rem;
    }

    .tabcon{
        height: 2rem;
        line-height: 2rem;
        border-radius: 8px;
    }

    .tabcon.on{
        display: block;
        background: #939da4;
        color: #ff8f8f;
    }

    .nav-left,.nav-right{
        width: 20%;
        height: 3rem;
        text-align: center;
        font-weight: normal;
        line-height: 3rem;

    }

    .nav-logo{
        height: 3rem;
        width: 60%;
        align-content: center;
        justify-content: center;
    }

    .nav-logo .logo{
        height: 2.8rem;
        margin: 0 auto;
        display: block;
    }

    .index-menu{
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #d70101;
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
        box-shadow: -2px 4px 5px 0 rgba(0,0,0,0.16);
    }

    .index-menu-plus{
        height: 100%;
        line-height: 4rem;
        width: 4rem;
        text-align: center;
        color: white;
        font-size: 2.5rem;
        transition: transform 0.5s;
        z-index: 8;
        bottom: 2rem;
        right: 2rem;
        background: #d70101;
        border-radius: 2rem;
        box-shadow: -2px 4px 5px 0 rgba(0,0,0,0.16);
    }

    .index-menu-list{
        height: 0;
        overflow-x: visible;
        overflow-y: hidden;
        margin-top: 0;
        z-index: 1;
        opacity: 0.1;
    }

    .index-menu.on .index-menu-list{
        margin-top: -9rem;
        height: 9rem;
        transition: all 0.5s;
        overflow: visible;
        opacity: 1;
    }

    .menu-love{
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        line-height: 3rem;
        margin: 1rem auto;
        background: #5cb0ff;
        box-shadow: 2px 4px 5px 0 rgba(0,0,0,0.16);
    }

    .menu-love img{
        margin-left: 2rem;
        width: 1rem;
        line-height: 3rem;
        margin-top: 0.8rem;
    }

    .menu-love:first-of-type img{
        margin-left: 2.9rem;
    }

    .menu-love::before{
        content: "我要被表白";
        margin-left: -200%;
        line-height: 3rem;
        font-size: 0.9rem;
        box-shadow: 2px 4px 5px 0 rgba(0,0,0,0.16);
        padding: 0.3rem;
        border-radius: 3px;
        margin-top: -0.5rem;
        z-index: 0;
        background: white;
    }

    .menu-love:first-of-type::before{
        content: "我要表白";
    }

    .index-menu.on .index-menu-plus{
        transform: rotateZ(45deg);
        margin-top: -1rem;
    }

    .hidden{
        opacity: 0;
        transition: opacity 0.5s;
    }

    .index-layer{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgb(255,255,255);
        opacity: 0.5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }


</style>
