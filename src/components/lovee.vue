<template>
    <div class="lovee">
        <div class="lovee-nav">
            <div class="lovee-left">
                <img @click="()=>location.hash='#/'" src="../assets/close.png" alt=""><br/>
                <span>我要被表白</span>
            </div>
            <div class="lovee-right">
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
            <div class="form-el">我的名字：<input name="lover" type="text" required></div>
            <div class="form-el">我的楼栋：
                <select v-model="dorm" name="A" id="">
                    <option v-bind:value="{ num: 1 }" default>韵苑</option>
                    <option v-bind:value="{ num: 2 }">紫菘</option>
                    <option v-bind:value="{ num: 3 }">沁苑</option>
                <option v-bind:value="{ num: 4 }">西区</option>

            </select>

                <select name="B" id="">
                    <option v-for="(item ,index) in info[dorm.num-1]" :value="index">{{item}}</option>
                </select>
                栋
            </div>
            <div class="form-el lovee-bu">
                <button @click="()=>location.hash='#/lovers/'+getV('lover')+'/'+dorm.num+'/'+getV('B')">生成表白页面</button>
            </div>
        </div>
    </div>
</template>

<script>
  let getV = (name)=>document.getElementsByName(name)[0].value;


  export default {
    name: 'lovee',
    data () {

      return {
        getV : getV,
        location: location,
        isOn: false,
        dorm : {
          num : 1
        },
        info:[
          ["1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋","14栋","15栋","16栋","17栋","18栋","19栋","20栋","21栋","22栋","23栋","24栋","25栋","26栋","27栋"],
          ["1栋","2栋","3栋","4栋","5栋","6栋","7栋","8栋","9栋","10栋","11栋","12栋","13栋"],
          ["东一舍","东二舍","东三舍","东四舍","东五舍","东六舍","东七舍","东八舍","东九舍","东十舍","东十一舍","东十二舍","东十三舍"],
          ["西一舍","西二舍","西三舍","西四舍","西五舍","西六舍","西七舍","西八舍","西九舍","西十舍","西十一舍","西十二舍","西十三舍","西十四舍","西十五舍","西十六舍","西十七舍"]
        ]
      }
    }
  }
</script>

<style>
    .lovee-nav {
        height: 6rem;
        line-height: 6rem;
        width: 100%;
        background: #82c7f6;
        display: inline-flex;
        position: relative;
    }

    .lovee-left {
        width: 50%;
        padding: 1rem;
        line-height: 2rem;
        box-sizing: border-box;
    }

    .lovee-left img {
        width: 1.5rem;
    }

    .lovee-left {
        font-size: 1.5rem;
        color: #666;
    }

    .lovee-right {
        width: 50%;
        opacity: 0.3;
        line-height: 5rem;
    }

    .lovee-right .logo {
        width: 100%;
    }

    .lovee-bu.form-el button{
        background: #ff8f8f;
    }

</style>
