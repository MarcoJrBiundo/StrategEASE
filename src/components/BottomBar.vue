<template>
  <div class="bottomBar">
    <button v-on:click="back()" class="botBut leftBut">BACK</button>
    <button v-on:click="saveAndQuit()" class="botBut centerBut">
      SAVE AND QUIT
    </button>
    <button v-on:click="next()" class="botBut rightBut">NEXT</button>
  </div>
</template>

<script>
// import router from "../vue-router";

export default {
  name: "BottomBar",
  props: {
    case: Object,
    nextRoute: String, // for passing in the next route to go to
  },
  data() {
    return {};
  },
  methods: {
    saveAndQuit: function (e) {
      /**
       * calls validation for parent and then saves to database and
       * then routes to home page
       */
      this.$parent.validate();
      this.$router.push({ path: "/" });
    },
    back: function (e) {
      /** takes user back one page */
      this.$router.go(-1);
    },
    next: function (e) {
      /** calls parent next function to validate
       *  and move to the next page
       */
      this.$parent.next();
    },
  },
};
</script>

<style>
.bottomBar {
  position: absolute;
  bottom: 2.5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 5%;
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
  border: solid 0px;
  text-align: center;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}

.leftBut {
}

.rightBut {
}

.centerBut {
}
</style>
