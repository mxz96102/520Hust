<template>
  <div class="info">
    <div class="info-nav">
        <div @click="()=>history.back()" class="nav-back"><img src="../assets/back.png" alt=""></div>
        <div class="info-nav-title">{{type[$route.params.loc] + info[$route.params.loc - 1][$route.params.num]}}</div>
    </div>
      <div class="search">
          <img src="../assets/search.png" alt="">
          <input type="text" v-on:change="search" v-on:submit="search" placeholder="看看这栋的那谁被表白没">
      </div>
      <div v-on:click="sort" class="info-sort">
          <img src="../assets/sort.png" alt="">
          <span id="sortType">按热度</span>
      </div>
      <ul class="info-list ">
          <li :class="{'special': item.create_time == '5-20 13:14'}" v-for="item in msg">
            <div class="info-all">
                <div class="info-left">
                    <span>{{item.name}}</span><br/>
                    <span class="time">{{item.create_time}}</span>
                </div>
                <div class="info-right">
                    <img v-if="!item.is_liked" src="../assets/hearta.png" @click="()=>{item.is_liked=!item.is_liked;like(item.id,1)}" alt="">
                    <img v-if="item.is_liked" src="../assets/heartb.png" @click="()=>{item.is_liked=!item.is_liked;like(item.id,0)}" alt="">
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
  name: 'info',
  data () {
    let __this = this;

    axios.get("message?region="+this.$route.params.loc+"&number="+this.$route.params.num)
      .then((result)=>{
       console.log(result)
        __this.msg = result.data
      })

    return {
      a:false,
      console:console,
      title:"韵苑N栋",
      location : location,
      history : history,
      type:["","韵苑","紫菘","沁苑","紫菘"],
      info:[
        ["","1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋","14栋","15栋","16栋","17栋","18栋","19栋","20栋","21栋","22栋","23栋","24栋","25栋","26栋","27栋"],
        ["","1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋"],
        ["","东一舍","东二舍","东三舍","东四舍","东五舍","东六舍","东七舍","东八舍","东九舍","东十舍","东十一舍","东十二舍","东十三舍","南一舍","南二舍","南三舍"],
        ["","西一舍","西二舍","西三舍","西四舍","西五舍","西六舍","西七舍","西八舍","西九舍","西十舍","西十一舍","西十二舍","西十三舍","西十四舍","西十五舍","西十六舍","西十七舍"]
      ],
      msg:[]
    }
  },
  methods:{
    search(){
      let value = document.getElementsByTagName('input')[0].value,__this = this;
      if(value !== ""){
        console.log(value)
        axios.get("message/search?region="+this.$route.params.loc+"&number="+this.$route.params.num+"&key="+value)
          .then((result)=>{
            console.log(result)
            __this.msg = result.data;
          })
      }
    },
    sort(){
      let type = document.getElementById("sortType"),__this = this;

      if(type.innerText === "按热度"){
        axios.get("message?region="+this.$route.params.loc+"&number="+this.$route.params.num+"&sortby=likes")
          .then((result)=>{
            console.log(result)
            __this.msg = result.data
          })
        type.innerHTML = "按时间"
      }else{
        axios.get("message?region="+this.$route.params.loc+"&number="+this.$route.params.num)
          .then((result)=>{
            console.log(result)
            __this.msg = result.data
          })
        type.innerHTML = "按热度"
      }
    },
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
    .info-nav{
        height: 10rem;
        width: 100%;
        background: rgba(255,204,204,0.5);
        display: inline-flex;
        position: relative;
    }

    .info-list .special{
        background: url(../assets/special.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position-y: 10%;
    }

    .nav-back img{
        width: 1.5rem;
        margin: 0.25rem 0.5rem;
    }

    .info-nav-title{
        font-size: 1.2rem;
        color:#666;
        line-height: 2rem;
        margin-left: 0.5rem;
    }

    .search{
        background: white;
        height: 2rem;
        line-height: 2rem;
        margin-top: -1rem;
        position: relative;
        z-index: 2;
        width: 18rem;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 2px 2px 50px 0 rgba(0,0,0,0.10);
        border-radius: 2rem;
        padding:0 0.5rem ;
        box-sizing: border-box;
    }

    .search img{
        width: 1rem;
    }

    .search input{
        color: #bebebe;
        border: hidden;
        width: 14rem;
        height: 1.9rem;
        line-height: 2rem;
        background: transparent;
    }

    input::placeholder{
        color: #bebebe;
    }

    .info-list{
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .info-list li{
        width: 20rem;
        box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.16);
        padding: 1rem;
        margin:0 auto 2rem auto;
        padding-bottom: 0.1rem;
    }

    .info-all{
        display: inline-flex;
        width: 100%;
        height: 2.5rem;
    }

    .info-left{
        width: 80%;
    }

    .info-left .time{
        font-size: 0.8rem;
        color: #999;
    }

    .info-right{
        color: #ff8181;
        line-height: 2rem;
    }

    .info-right img{
        width: 0.9rem;
    }

    .info-content {
        font-size: 0.9rem;
    }

    .info-sort{
        margin-left: 80%;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: #82c7f6;
        font-size: 0.9rem;
    }

    .info-sort img{
        height: 0.9rem;;
    }
</style>
