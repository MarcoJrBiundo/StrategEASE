<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <select id="tdfDomains" v-model="selectedDomain" v-on:change=loadUi>
        <option v-for="(domain,index) in domains" :value="domain" :key="index">{{ domainsMap[domain][0] }}</option>
      </select>
      <span id="checkBoxes">
        <div v-for="(strategy,index) in getStrategies()" v-on:click="updateStrategy" :key="index">
          <input type="checkbox" :id="'cb'+strategy.index" :key="selectedDomain + ':' + index" />
          <label :for="'cb'+strategy.index">{{ strategy.text }}</label>
        </div>
      </span>
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
      domainsMap: this.map.TDFDomains,
      intervention: this.map.InterventionFunctions,
      strategies: this.map.Strategies,
      storedStrategies: this.caseObject.case.strategies,
      selectedDomain: 0,
      domains: [],
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
  mounted: function() {
    this.$nextTick(function () {
      this.getDomains();
      this.getStrategies();
      for (var i = 0; i < this.storedStrategies.length; i++)
      {
        var strategy = this.storedStrategies[i];

        //for each checkbox group
        Array(document.getElementById("checkBoxes").children).forEach(checkboxItem => {
          //for each checkbox
          for (var j = 0; j < checkboxItem.length; j++){
            //set the proper checkboxes id based off the stored strategy id
            if (checkboxItem[j].children[0].getAttribute("id") == strategy.id){
              checkboxItem[j].children[0].setAttribute("checked", "checked");
            } 
          }
        });
        //console.log(checkboxGroup);
        //return checkbox.innerText == strategy.name;
        // 
      }
    });
  },
  methods: {
    loadUi: function(e){
      this.$nextTick(function () {
        //load the strategies here based off the id's stored
        if (this.storedStrategies.length)
        {
          for (var i = 0; i < this.storedStrategies.length; i++)
          {
            var strategy = this.storedStrategies[i];

            //for each checkbox group
            Array(document.getElementById("checkBoxes").children).forEach(checkboxItem => {
              //for each checkbox
              for (var j = 0; j < checkboxItem.length; j++){
                //set the proper checkboxes id based off the stored strategy id
                if (checkboxItem[j].children[0].getAttribute("id") == strategy.id){
                  checkboxItem[j].children[0].setAttribute("checked", "checked");
                } 
              }
            });
            //console.log(checkboxGroup);
            //return checkbox.innerText == strategy.name;
            // 
          }
        }
      });
    },
    updateStrategy: function (e) {
      //this event triggers when the label is clicked we only 
      //  want to perform an action when it is the checkbox being
      //  activated
      if (e.target.getAttribute("type") == "checkbox")
      {
        //if the checkbox is unchecked and the item isn't in the strategies list
        if (!e.target.getAttribute("checked") && 
            !this.storedStrategies.filter(function(strategy){
              return strategy.id === e.target.getAttribute("id");
            }).length)
        {
          var newStrategy = {
            id: e.target.getAttribute("id"),
            name: e.target.parentNode.children[1].innerText,
            actor: 0,
            delivery: "",
            del_strat: "",
            barriers: [],
            adaptations: ""
          };
          this.storedStrategies.push(newStrategy);
        }
        //otherwise remove the item from the array
        else 
        {
          //get the first instance of the item filtered
          var strategyToRemove = this.storedStrategies.filter(function(strategy){
            return strategy.id === e.target.getAttribute("id");
          })[0];
          
          this.storedStrategies.pop(strategyToRemove);
        }
        //console.log(this.storedStrategies); //display the strategy list every time it is updated
      }
    },
    getDomains: function(){
      //only use the strategies mapped in the barriers
      this.caseObject.case.actors.forEach(actor =>{
        actor.behaviour.forEach(behav => {
          behav.barriers.forEach(barrier =>{
            barrier.domains.forEach(domain => {
              if(domain.domainNumber >= 0 && this.domains.indexOf(domain.domainNumber) == -1)
                this.domains.push(domain.domainNumber);
            });
          });
        });
      });
    },
    getStrategies: function () {
      //filter based off the domains in the barriers created
      var foundStrategies = [];
      try{
        this.domainsMap[this.domains[this.selectedDomain]][1].split(",").forEach((funcIndex) => {
          this.intervention[funcIndex][1].split(",").forEach((strategyIndex) => {
            if (foundStrategies.indexOf(this.strategies[parseInt(strategyIndex)]) < 0)
              foundStrategies.push({
                text: this.strategies[parseInt(strategyIndex)],
                index: parseInt(strategyIndex)
              });
          });
        });
      }
      catch(err){
        this.domainsMap[this.selectedDomain][1].split(",").forEach((funcIndex) => {
          this.intervention[funcIndex][1].split(",").forEach((strategyIndex) => {
            if (foundStrategies.indexOf(this.strategies[parseInt(strategyIndex)]) < 0)
              foundStrategies.push({
                text: this.strategies[parseInt(strategyIndex)],
                index: parseInt(strategyIndex)
              });
          });
        });
      }
      return foundStrategies;
    
    },
    next: function () {
      if (this.validate())
        this.$router.push({ path: "/os-strategy" });
      else 
        alert("Please select at least one strategy");
    },
    validate: function () {
      if (this.storedStrategies.length)
        return true;  
      return false;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#tdfDomains {
  display: block;
}

.indexclass input[type="checkbox"] {
  display: inline;
  position: relative;
  opacity: 100;
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
