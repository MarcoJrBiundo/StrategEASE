<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="userInput">
      <label for="strategySelector">Choose a Strategy</label>
      <select v-model="strategies.name" id="strategySelector">
        <option value="1">Strategy 1</option>
      </select>
      <br />
      <label for="actorSelector">Who is the Strategy targeting?</label>
      <select v-model="strategies.target" id="actorSelector">
        <option value="1">Actor 1</option>
      </select>
      <br />
      <label for="deliveryActorText">Who will deliver the Strategy?</label>
      <input
        v-model="strategies.delivery"
        type="text"
        id="deliveryActorText"
        placeholder="Upper Management"
      />
      <br />
      <label for="deliveryMethodText">How will you deliver the Strategy?</label>
      <input
        v-model="strategies.del_strat"
        type="text"
        id="deliveryMethodText"
        placeholder="e.g number of times, length of time..."
      />
      <br />
      <label for="barrierSelector">What Barriers are being targeted?</label>
      <select v-model="strategies.edu_barrier" id="barrierSelector">
        <option value="1">Barrier 1</option>
      </select>
      <br />
      <label for="adaptationsText">What adaptations might you consider?</label>
      <input
        v-model="strategies.adaptations"
        type="text"
        id="adaptationsText"
      />
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Vue from "vue";
import CommonMainPage from "./CommonMainPage";

export default {
  name: "OSStrategy",
  components: {
    CommonMainPage,
    // AssociatedInputs,
  },
  props: {
    caseObject: Object,
  },
  data() {
    return {
      case: this.caseObject,
      strategies: this.caseObject.case.strategies,
      title: "Operationalizing Implementation Strategies",
      text: "Map the chosen strategies to the actors.",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.userInput {
  clear: both;
}
.userInput label {
  font-size: 1.2em;
}
select {
  display: block;
}
.inputs {
  clear: both;
}
.indexclass {
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

.indexclass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
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

/* .actor {
  width: 48% !important;
  float: left;
  clear: left;
}

.behaviour {
  width: 48% !important;
  float: right;
} */
</style>
