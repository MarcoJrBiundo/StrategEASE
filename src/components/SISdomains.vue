<template>
  <div class="domainsClass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <select id="tdfDomains" v-model="selectedDomain">
        <option
          v-for="(domain, index) in domains"
          :value="index"
          :key="index"
          >{{ domain[0] }}</option
        >
      </select>
      <ul>
        <li v-for="strategy in getStrategies()" :key="strategy">
          <div v-on:click="updateStrategy">
            <input type="checkbox" :id="strategy" />
            <label :for="strategy">{{ strategy }}</label>
          </div>
        </li>
      </ul>
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
    case: Object,
  },
  methods: {
    updateStrategy: function (e) {
      if (e.target.children.length) {
        e.target.children[0].checked = e.target.children[0].checked
          ? false
          : true;
      } else {
        e.target.parentElement.children[0].checked = e.target.parentElement
          .children[0].checked
          ? false
          : true;
      }
    },
    getStrategies: function () {
      var foundStrategies = [];

      this.domains[this.selectedDomain][1].split(",").forEach((funcIndex) => {
        this.intervention[funcIndex][1].split(",").forEach((strategyIndex) => {
          if (
            foundStrategies.indexOf(this.strategies[parseInt(strategyIndex)]) <
            0
          )
            foundStrategies.push(this.strategies[parseInt(strategyIndex)]);
        });
      });

      return foundStrategies;
    },
    next: function () {},
    validate: function () {},
  },
  data() {
    return {
      domains: this.map.TDFDomains,
      intervention: this.map.InterventionFunctions,
      strategies: this.map.Strategies,
      selectedDomain: 0,
      title: "Domains for Behaviours",
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
        { link: "www.google.com", display: "Google 3" },
      ],
    };
  },
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
