<template>
  <div class="domainsClass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <select id="tdfDomains" v-model="selectedDomain">
        <option v-for="(domain, index) in domains" :value="index" :key="index">{{ domain[0] }}</option>
      </select>
     
      <div v-for="(strategy,index) in getStrategies()" v-on:click="updateStrategy" :key="index">
        <input type="checkbox" :id="'strategy' + selectedDomain + ':' + index" :key="selectedDomain + ':' + index" />
        <label :for="'strategy' + selectedDomain + ':' + index">{{ strategy }}</label>
      </div>
    
      <!--buttons to go in here-->
    </div>
    <BottomBar :caseObject="caseObject"></BottomBar>
  </div>
</template>

<script>
import db from "@/firebase/init";
import CommonMainPage from "./CommonMainPage";
import BottomBar from "./BottomBar";

export default {
  name: "SISdomains",
  components: {
    CommonMainPage,
    BottomBar,
  },
  props: {
    map: Object,
    caseObject: Object,
  },
  data() {
    return {
      domains: this.map.TDFDomains,
      intervention: this.map.InterventionFunctions,
      strategies: this.map.Strategies,
      storedStrategies: this.caseObject.case.strategies,
      selectedDomain: 0,
      title: "Selecting Strategies",
      text:
        "For each domain in the drop down please select one or more strategies",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" },
      ],
    };
  },
  mounted: function () {
    //load the strategies here based off the id's
    
  },
  methods: {
    updateStrategy: function (e) {
      //this event triggers when the label is clicked we only 
      //  want to perform an action when it is the checkbox being
      //  activated
      if (e.target.getAttribute("type") == "checkbox")
      {
        //if the checkbox is checked and the item isn't in the strategies list
        if (!e.target.getAttribute("checked") && 
            !this.storedStrategies.filter(function(strategy){
              return strategy.id === e.target.getAttribute("id");
            }).length)
        {
          this.storedStrategies.push( {
            id: e.target.getAttribute("id"),
            name: e.target.parentNode.children[1].innerText,
            target: "",
            delivery: "",
            del_strat: "",
            edu_barrier: "",
            adaptations: ""
          });
        }
        //otherwise remove the item from the array
        else 
        {
          var index = this.storedStrategies.pop(this.storedStrategies.filter(function(strategy){
            return strategy.id === e.target.getAttribute("id");
          }));
        }
      }
    },
    getStrategies: function () {
      var foundStrategies = [];

      this.domains[this.selectedDomain][1].split(",").forEach((funcIndex) => {
        this.intervention[funcIndex][1].split(",").forEach((strategyIndex) => {
          if (foundStrategies.indexOf(this.strategies[parseInt(strategyIndex)]) < 0)
            foundStrategies.push(this.strategies[parseInt(strategyIndex)]);
        });
      });

      return foundStrategies;
    },
    next: function () {},
    validate: function () {},
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#tdfDomains {
  display: block;
}

.domainsClass input[type="checkbox"] {
  display: inline;
  position: relative;
  opacity: 100;
}

.domainsClass {
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

.domainsClass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
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
