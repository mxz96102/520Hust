<template>
    <div class="lovers">
        <div class="lovers-nav">
            <div class="lovers-left">
                <img src="../assets/close.png" @click="()=>location.hash='#/'" alt=""><br/>
                <span>我要表白</span>
            </div>
            <div class="lovers-right">
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
        </div>
        <div class="form">
            <div class="form-el slogan">
                520到了，没什么送我的话，麻烦给我表个白蟹蟹！
            </div>
            <div class="form-el">他 / 她的名字：<input name="lover" type="text" disabled :value="$route.params.name"></div>
            <div class="form-el">他 / 她的楼栋：
                <select v-model="dorm" name="dorm">
                    <option v-bind:value="{ num: 1 }">韵苑</option>
                    <option v-bind:value="{ num: 2 }">紫菘</option>
                    <option v-bind:value="{ num: 3 }">沁苑</option>
                <option v-bind:value="{ num: 4 }">西区</option>

            </select>

                <select name="num">
                    <option v-for="(item, index) in info[dorm.num-1]" :value="index+1">{{item}}</option>
                </select>
            </div>
            <div class="form-el">我想对他 / 她说：


            </div>
            <div class="form-el">
                <textarea name="hanashi" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="form-el">
                <div class="checkboxFour">
                    <input type="checkbox" id="checkboxFourInput" name="wall" checked/>
                    <label for="checkboxFourInput"></label>
                </div>
                <span class="wall">我要上墙</span>
            </div>
            <div class="form-el form-tog" :class="{on : isOn}">
                <div class="form-toggle">
                    <div class="form-toggle-left" ><img @click="()=>isOn = !isOn" :class="{on : isOn}"
                            src="../assets/toggle.png" alt=""></div>
                    <div class="form-toggle-right">
                        <span>想知道他是不是也想着你</span>
                        <br>
                        <span>当她／他也填写了你的手机号，你们将收到彼此的话喔～</span></div>
                </div>
                <div class="form-el">他 / 她的手机号：<input name="phoneA" type="text"></div>
                <div class="form-el">你的手机号：<input name="phoneB" type="text"></div>
            </div>
            <div class="form-el">
                <button @click="subit">发表表白</button>
            </div>
        </div>
        <ul class="info-list ">
            <li :class="{'special': item.create_time == '5-20 13:14'}" v-for="item in msg">
                <div class="info-all">
                    <div class="info-left">
                        <span>{{item.name}}</span><br/>
                        <span class="time">{{item.create_time}}</span>
                    </div>
                    <div class="info-right">
                        <img v-if="!item.is_liked" src="../assets/hearta.png" @click="()=>{item.is_liked=!item.is_liked;like(item.id,1);item.likes=parseInt(item.likes)+1}" alt="">
                        <img v-if="item.is_liked" src="../assets/heartb.png" @click="()=>{item.is_liked=!item.is_liked;like(item.id,0);item.likes=parseInt(item.likes)-1}" alt="">
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

  let getV = (name)=>document.getElementsByName(name)[0].value;

  export default {
    name: 'lovers',
  mounted(){
    this.dorm.num = parseInt(this.$route.params.loc);
    console.log(document.getElementsByTagName("option")[parseInt(this.dorm.num)-1]);
    document.getElementsByTagName("option")[parseInt(this.dorm.num)-1].selected = true;
    document.getElementsByTagName("select")[1].value = parseInt(this.$route.params.num)+1;

  },
    data () {

      document.title = "520到了，没什么送我的话，麻烦给我表个白蟹蟹！";

      axios.get("message/search?region="+this.$route.params.loc+"&number="+this.$route.params.num+"&key="+value)
        .then((result)=>{
          console.log(result)
          __this.msg = result.data;
        })

      return {
        location: location,
        isOn: false,
        dorm : {
          num : 1
        },
        info:[
          ["1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋","14栋","15栋","16栋","17栋","18栋","19栋","20栋","21栋","22栋","23栋","24栋","25栋","26栋","27栋"],
          ["1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋"],
          ["东一舍","东二舍","东三舍","东四舍","东五舍","东六舍","东七舍","东八舍","东九舍","东十舍","东十一舍","东十二舍","东十三舍","南一舍","南二舍","南三舍"],
          ["西一舍","西二舍","西三舍","西四舍","西五舍","西六舍","西七舍","西八舍","西九舍","西十舍","西十一舍","西十二舍","西十三舍","西十四舍","西十五舍","西十六舍","西十七舍"]
        ],
        msg:[]
      }
    },
    methods:{
      subit(){
        console.log(getV("lover"),this.dorm.num,getV("num"),getV("wall"),getV("phoneA"),getV("phoneB"));

        if(getV("lover") == ""){
          alert("你忘记写名字了哦");
          return;
        }

        if(getV("hanashi") == ""){
          alert("想说什么还没写呢");
          return;
        }

        if(getV("phoneA")!= ""&&getV("phoneB")!=""&&getV("phoneA")!=getV("phoneB")){
          if(!(/^1[34578]\d{9}$/.test(getV("phoneA")))){
            alert('请输入正确的手机号码');
            return;
          } else if(!(/^1[34578]\d{9}$/.test(getV("phoneB")))){
            alert('请输入正确的手机号码');
            return;
          }
          axios.post("message",{
            name : getV("lover"),
            region : this.dorm.num,
            number : getV("num"),
            text: getV("hanashi"),
            "type": "0",
            "upthewall": document.getElementById("checkboxFourInput").checked ? 1 : 0,
            crush_phonenumber : getV("phoneB"),
            phonenumber : getV("phoneA")
          })
            .then((e)=>{
                location.reload()
            })
          return ;
        }else {
          axios.post("message",{
            name : getV("lover"),
            region : this.dorm.num,
            number : getV("num"),
            text: getV("hanashi"),
            "type": "0",
            "upthewall": document.getElementById("checkboxFourInput").checked ? 1 : 0
          })
            .then((e)=>{
              location.reload()
            })
        }

        /**request:
         name: string len(0~100)
         region: int value(1~3) #1.韵苑 2.紫菘 3.沁苑
         number: int #楼栋号
         text: textarea
         phonenumber: string len(11) optional
         crush_phonenumber: string len(11) optional
         **/
      }
    }
  }
</script>

<style>
    .lovers-nav {
        height: 6rem;
        line-height: 6rem;
        width: 100%;
        background: rgba(255, 204, 204, 1);
        display: inline-flex;
        position: relative;
    }

    .lovers-left {
        width: 50%;
        padding: 1rem;
        line-height: 2rem;
        box-sizing: border-box;
    }

    .lovers-left img {
        width: 1.5rem;
    }

    .lovers-left {
        font-size: 1.5rem;
        color: #666;
    }

    .lovers-right {
        width: 50%;
        opacity: 0.3;
        line-height: 5rem;
    }

    .lovers-right .logo {
        width: 100%;
    }

    .form {
        width: 70%;
        margin: 3rem auto;
        font-size: 1.1rem;
        color: #999;
        line-height: 1.5rem;
    }

    .form-el {
        margin-bottom: 1rem;
        width: 100%;
        text-align: left;
    }

    .form-el input {
        border: none;
        border-bottom: solid #999 2px;
        font-size: 1.1rem;
        width: 8rem;
    }

    .form-el input[type = 'checkbox']{
        background: white;
        width: 2rem;
        visibility: hidden;
    }

    .form-el .wall{
        position: relative;
        float: left;
        margin-left: 3rem;
        margin-top: -1.3rem;
    }

    .checkboxFour {
        width: 1rem;
        height: 1rem;
        margin: 0 1rem;
        margin-right: 1rem;
        border-radius: 100%;
        position: relative ;
        border: 2px solid #bfbfbf;
        background: transparent;
    }



    .checkboxFour label {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 100px;

        transition: all .5s ease;
        cursor: pointer;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        z-index: 1;
        background: transparent;
    }

    .checkboxFour input[type=checkbox]:checked + label {
        background: #ff8f8f;
    }


    .form-el select{
        border: none;
        border-bottom: solid #999 2px;
        font-size: 1rem;
        width: 4rem;
        line-height: inherit;
        background: transparent;
    }
    .form-el select:first-of-type{
        width: 3.5rem;
    }

    .form-el textarea {
        width: 100%;
        border: dashed 1px #999;
        border-radius: 5px;
        height: 5rem;
    }

    .form-toggle {
        display: inline-flex;
        width: 100%;
        height: 3rem;
        overflow: hidden;
        padding-top: 1rem;
    }

    .form-tog {
        height: 3rem;
        overflow: hidden;
        transition: all 0.2s;
    }

    .form-toggle-left {
        width: 10%;
        color: #ff8f8f;
        transition: all 0.2s;
        text-align: center;
        height: 3rem;
    }

    .form-toggle-left img{
        transform: rotateZ(-90deg);
    }

    .form-toggle-left img.on{
        transform: rotateZ(-0deg);
    }

    .form-tog.on {
        height: 8rem;
    }

    .form-toggle-left.on {
    }

    .form-toggle-left img {
        width: 1rem;
    }

    .form-toggle-right {
        width: 90%;
        font-size: 0.9rem;
        line-height: 0.8rem;
    }

    .form-toggle-right span:nth-of-type(2) {
        color: #ff8f8f;
        font-size: 0.6rem;
        line-height: 0.8rem;
    }

    .form-el .form-el {
        font-size: 0.9rem;
        line-height: 0.8rem;
    }

    .form-el .form-el input {
        border-bottom: solid #999 1px;
        width: 10rem;
    }

    .form-el:last-of-type {
        text-align: center;
    }

    .form-el button {
        width: 80%;
        height: 2.5rem;
        margin: 0 auto;
        background: #82c7f6;
        border: hidden;
        border-radius: 3px;
        font-size: 1.2rem;
        color: white;
    }

</style>
