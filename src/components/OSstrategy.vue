<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
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
    <BottomBar :caseObject="caseObject"></BottomBar>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Vue from "vue";
import CommonMainPage from "./CommonMainPage";
import BottomBar from "./BottomBar";

export default {
  name: "OSStrategy",
  components: {
    CommonMainPage,
    BottomBar,
  },
  props: {
    caseObject: Object,
  },
  data() {
    return {
      case: this.caseObject,
      strategies: this.caseObject.case.strategies,
      title: "Operationalizing Strategies",
      text: "Answer the questions below for each of your selected strategies to determine how to operationalize them.",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" },
      ],
    };
  },
  methods: {
    next: function () {},
    validate: function () {},
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
</style>
