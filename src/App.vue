<template>
  <div id="app">
      <router-view></router-view>
      <img style="width: 0;height: 0;" src="./assets/pic.jpg">
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted(){
    window.wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx06a956b1317b0bf4', // 必填，公众号的唯一标识
      timestamp: (Date.parse(new Date())) , // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '',// 必填，签名，见附录1
      jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

  }
}
</script>

<style>
    *{
        font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif;
    }
    body,html{
        font-size: 16px;
        margin: 0;
        width: 100vw;
    }
    .logo .st0{fill:#87CEFF;}
    .logo .st1{fill:#FFA4A4;}
</style>
