<template lang="html">
  <div class="landing">
    <section>
      <v-img fluid :src="landingpagesrc"
        alt="Photo by Marcelo Jaboo from Pexels"
        title="Photo by Marcelo Jaboo from Pexels"
      ></v-img>
      <div class="leading--text">
        <h2>Buy it & own it.</h2>
        <div
          class="actionbutton"
          @click="$router.push({name:'Home'})"
        >
          <span v-ripple>See our products ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed:{
    landingpagesrc(){
      return require('@/assets/armchair.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.landing{
  padding: 0 !important;
  position: relative;
}
.v-img{
  position: absolute;
  z-index: 0;
}

.leading--text{
  position: absolute;
  top: 40%;
  left: 5%;
  z-index: 10;
  display: flex;
  flex-direction: column;

  h2{
    color: #fff;
    font-size: 70px;
    font-weight: 300;
    letter-spacing: 5px;
    margin-bottom: 3vh;

    @media(max-width: 900px){
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 2px;
    }
  }

  .actionbutton{
    color: #fff;
    text-align: right;

    span{
      display: inline-block;
      padding: 10px 20px;
      margin-right: 10px;
      border-radius: 10px;
      border: 1px solid grey;
      text-transform: uppercase;

      &:hover{
        cursor: pointer;
        background-color: rgba(220,220,220,0.3);
      }
    }

    @media(max-width: 900px){
      font-size: 12px;

      span{
        padding: 5px 8px;
      }
    }
  }


}
</style>
