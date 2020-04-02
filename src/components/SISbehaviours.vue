<template>
  <div class="behavioursClass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <select id="behaviourSelector">
      <option value="1">Behaviour 1</option>
    </select>
    <div id="barrierList">
      <barrier id="barrier1"></barrier>
    </div>
    <input id="addBarrier" v-on:click="addBarrier" type="button" value="+" />
  </div>
</template>

<script>
import db from "@/firebase/init";
import Vue from "vue";
import barrier from "./barrier";
import CommonMainPage from "./CommonMainPage";

export default {
  name: "SISbehaviours",
  components: {
    barrier,
    CommonMainPage
  },
  props: {
    caseObject: Object
  },
  data() {
    return {
      title: "Behaviours to change",
      text:
        "Map each behaviour to domain(s) and list the involved barriers for each behaviour.",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" }
      ]
    };
  },
  methods: {
    addBarrier: function(e) {
      var barrierList = document.getElementById("barrierList").children;
      //get the count from the id
      var barrierCount =
        parseInt(
          barrierList[barrierList.length - 1].id.replace("barrier", "")
        ) + 1;

      var newBarrier = document.createElement("DIV");
      newBarrier.setAttribute("id", ("barrier" + barrierCount).toString());

      document.getElementById("barrierList").append(newBarrier);

      new Vue({
        el: "#barrier" + barrierCount,
        template: '<barrier id="barrier' + barrierCount + '"/>',
        components: { barrier }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#behaviourSelector {
  display: block;
}

.behavioursClass {
  position: absolute;
  top: 18%;
  left: 17%;
  width: 82%;
  height: 80%;
  background: #ffffff 0% 0%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
}

.behavioursClass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}
.para {
  width: 50%;
  float: left;
  padding-left: 40px;
  padding-top: 0px;
}

.links {
  width: 40%;
  margin-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  float: right;
  background: #47cacc2b 0% 0% no-repeat padding-box;
  box-shadow: 7px 7px 34px #28282836;
  border: 2px solid #67cbcd;
  border-radius: 21px;
  opacity: 1;
  margin-top: -100px;
}

.caseNameField {
  width: 95%;
  margin-left: 3%;
  position: absolute;
  margin-top: 15%;
  height: 10%;
  top: 215;
}

#barrierList {
  clear: both;
  display: block;
  overflow-y: scroll;
  max-height: 450px;
}
</style>
