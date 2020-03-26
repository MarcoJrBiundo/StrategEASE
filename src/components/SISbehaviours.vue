<template>
  <div class="behavioursClass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div>
      <div id="behaviourList">
        <behaviour id="behaviour1"></behaviour>
      </div>
      <input
        id="addBehaviour"
        v-on:click="addBehaviour()"
        type="button"
        value="+"
      />
      <!--buttons to go in here-->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import behaviour from "@/components/behaviour";
import CommonMainPage from "./CommonMainPage";

export default {
  name: "SISbehaviours",
  components: {
    behaviour,
    CommonMainPage
  },
  data() {
    return {
      title: "Behaviours to change",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
        mollit anim id est laborum.",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" }
      ]
    };
  },
  methods: {
    addBehaviour: function(e) {
      var behaviourList = document.getElementById("behaviourList").children;
      //get the count from the id
      var behaviourCount = behaviourList[behaviourList.length - 1].id.replace(
        "behaviour",
        ""
      );
      behaviourCount = parseInt(behaviourCount) + 1;
      console.log(behaviourCount);
      var newBehaviour = document.createElement("DIV");
      newBehaviour.setAttribute(
        "id",
        ("behaviour" + behaviourCount).toString()
      );

      document.getElementById("behaviourList").appendChild(newBehaviour);

      new Vue({
        el: "#behaviour" + behaviourCount,
        template: '<behaviour id="behaviour' + behaviourCount + '"/>',
        components: { behaviour }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>
