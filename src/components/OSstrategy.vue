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
        <label>What Barriers are being targeted?</label>
        <div v-for="(behav,behaviourIndex) in actors[strategies[selectedStrategy].actor].behaviour" :key="'behi:'+behaviourIndex">
          <div v-for="(barrier, barrierIndex) in behav.barriers" :key="'bari:'+barrierIndex">
            <input type="checkbox" v-model="strategies[selectedStrategy].barriers" :value="barrier.description" :id="'cb'+strategies[selectedStrategy].actor+':'+behaviourIndex+':'+barrierIndex" :key="'cb'+strategies[selectedStrategy].actor+':'+behaviourIndex+':'+barrierIndex"/>
            <label class="cbLabel noSelect" :for="'cb'+strategies[selectedStrategy].actor+':'+behaviourIndex+':'+barrierIndex">{{barrier.description}}</label>
          </div>
        </div>
        
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
    //console.log(this.strategies[this.selectedStrategy].delivery);
  },
  methods: {
    next: function () {  
      if (this.validate(true))
        this.$router.push({ path: "/summary" });
    },
    ///isAlerting: type boolean, to alert the user or not
    validate: function (isAlerting) {
      /*
      var newStrategy = {
        id: fixedStrategyId,
        name: fixedValue,
        actor: eachActor,
        delivery: singleDelivery,
        del_strat: [],
        barriers: "",
        adaptations: ""
      };
      */
      var result = true;
      //alerts twice due to next calling this
      for (var i in this.strategies){
        var strategy = this.strategies[i];

        if(strategy.barriers.length < 1){
          if (isAlerting)
            alert("Strategy: "+strategy.name+"\nPlease select at least one barrier");    
          return false;
        }

        if (!strategy.delivery && !strategy.delivery.length) {
          if (isAlerting)
            alert("Strategy: "+strategy.name+"\nPlease enter a delivery leader");    
          return false;
        }

        if (!strategy.del_strat && !strategy.del_strat.length) {
          if (isAlerting)
            alert("Strategy: "+strategy.name+"\nPlease enter a delivery method");    
          return false;
        }

        if (!strategy.adaptations && !strategy.adaptations.length) {
          if (isAlerting)
            alert("Strategy: "+strategy.name+"\nPlease enter a possible adaptation");    
          return false;
        }
          
      }

      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type=checkbox]{
  position: relative !important;
  display: inline !important;
  opacity: unset !important;
  pointer-events: all !important;
}
.cbLabel {
  font-size: 20px;
  color: black; 
}
.noSelect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
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
