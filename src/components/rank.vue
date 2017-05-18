<template>
  <div class="rank">
      <div class="rank-nav">
          <div @click="()=>location.hash='#/'" class="nav-back"><img src="../assets/back.png" alt=""></div>
          <div class="rank-nav-title">排行榜</div>
      </div>
      <ul class="info-list">
          <li v-for="(item,index) in msg">
              <div v-if="index == 0" class="info-dec first">
                  <img src="../assets/No.1.png" alt="">
              </div>
              <div v-if="index == 1" class="info-dec">
                  <img src="../assets/No.2.png" alt="">
              </div>
              <div v-if="index == 2" class="info-dec">
                  <img src="../assets/No.3.png" alt="">
              </div>
              <div class="info-all">
                  <div class="info-left">
                      <span>{{item.name}}</span><br/>
                      <span class="time">{{item.create_time}}</span>
                  </div>
                  <div class="info-right">
                      <img v-if="item.is_liked" src="../assets/hearta.png" @click="()=>{item.is_liked=!item.is_liked;like.apply(this,item.id,1)}" alt="">
                      <img v-if="!item.is_liked" src="../assets/heartb.png" @click="()=>{item.is_liked=!item.is_liked;like.apply(this,item.id,0)}" alt="">
                      {{item.likes}}
                </div>
              </div>
              <p class="info-content">
                  {{item.text}}
            </p>
          </li>
      </ul>
  </div>
</template>

<script>
  import axios from '@/axios'

export default {
  name: 'rank',
  data () {
    let __this = this;

    axios.get("message?sortby=likes")
      .then((result)=>{
        console.log(result)
        __this.msg = result.data
      })
      .catch((e)=>{console.log(e)})

    return {
      location : location,
      all : [1,2,3,4],
      msg : []
    }
  },
  methods:{
    like(id,type){
      if(type === 1){
        axios.post("/message/"+id+"/like");
      } else {
        axios.delete("/message/"+id+"/like");
      }
    }
  }
}
</script>

<style>
    .rank-nav{
        height: 4rem;
        line-height: 4rem;
        width: 100%;
        background: #ffcccc;
        display: inline-flex;
        position: relative;
        margin-bottom: 1.5rem;
    }
    .rank-nav-title{
        font-size: 1.2rem;
        line-height: 4rem;
        color: #666666;
        margin-left: 1rem;
    }

    .rank-nav img{
        line-height: 4rem;
        margin-top: 1.4rem;
    }

    .info-dec{
        margin: -2rem 0 0 -2rem;
    }

    .info-dec img{
        width: 3rem;
    }
    .info-dec.first img{
        width: 3.3rem;
    }
</style>
