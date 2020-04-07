<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="userInput">
        <label for="strategySelector">Choose a Strategy</label>
        <select v-model="selectedStrategy" id="strategySelector">
          <option v-for="(strategy, index) in strategies" :key="index" :value="index">{{strategy.name}}</option>
        </select>
        
        <br />
        <label for="actorSelector">Who is the Strategy targeting?</label>
        <select v-model="strategies[selectedStrategy].actor" id="actorSelector">
          <option v-for="(actor,index) in actors" :key="index" :value="index">{{actor.name}}</option>
        </select>

        <br />
        <label for="deliveryActorText">Who will deliver the Strategy?</label>
        <input
          v-model="strategies[selectedStrategy].delivery"
          type="text"
          id="deliveryActorText"
          placeholder="Upper Management"
        />
        
        <br />
        <label for="deliveryMethodText">How will you deliver the Strategy?</label>
        <input
          v-model="strategies[selectedStrategy].del_strat"
          type="text"
          id="deliveryMethodText"
          placeholder="e.g number of times, length of time..."
        />
        
        <br />
        <label for="barrierSelector">What Barriers are being targeted?</label>
        <select v-model="strategies[selectedStrategy].edu_barrier" id="barrierSelector">
          <option v-for="(barrier, index) in barriers" :key="index" :value="index">{{barrier.description}}</option>
        </select>
        
        <br />
        <label for="adaptationsText">What adaptations might you consider?</label>
        <input
          v-model="strategies[selectedStrategy].adaptations"
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
      actors: this.caseObject.case.actors,
      barriers: this.caseObject.case.actors.forEach(actor => {
        actor.behaviour.forEach(behaviour => {
          return behaviour.barriers;
        });
      }),
      selectedStrategy: 0,
      title: "Operationalizing Strategies",
      text: "Answer the questions below for each of your selected strategies to determine how to operationalize them.",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" },
      ],
    };
  },
  mounted: function(e){
    console.log(this.strategies[this.selectedStrategy].delivery);
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
