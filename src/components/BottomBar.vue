<template>
  <div class="bottomBar">
    <button v-on:click="back()" class="botBut left">BACK</button>
    <button v-on:click="saveData()" class="botBut center">
      SAVE AND QUIT
    </button>
    <button v-on:click="next()" class="botBut right">NEXT</button>
  </div>
</template>

<script>
// import router from "../vue-router";

export default {
  name: "BottomBar",
  props: {
    case: Object,
    nextRoute: String // for passing in the next route to go to
  },
  data() {
    return {};
  },
  methods: {
    saveData: function(e) {
      alert("saved");
    },
    back: function(e) {
      this.$router.go(-1);
    },
    next: function(e) {
      this.$parent.next();
    }
  }
};
</script>

<style>
.bottomBar {
  position: absolute;
  bottom: 2.5%;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: ; */
}

.botBut {
  width: 177px;
  height: 47px;
  background: transparent
    radial-gradient(closest-side at 6% 0%, #47cacc 0%, #329d9c 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 5px 5px 20px #329d9c55;
  border-radius: 21px;
  opacity: 1;
  text-align: center;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}

.left {
  /* text-align: left; */
  display: inline-block;
  margin-left: 5%;
}

.right {
  /* text-align: right; */
  display: inline-block;
  margin-right: 5%;
}

.center {
  /* text-align: center; */
  /* left: 50%; */
  /* margin-left: 50%; */
}
</style>
