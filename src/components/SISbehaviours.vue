<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="barrier">
        <select>
          <optgroup v-for="(behaviours, behaviourListIndex) in getBehaviours()"
              :key="behaviourListIndex"
              :label="behaviours.actorName"
              >
            <option v-for="(behaviour, behaviourIndex) in behaviours.behaviourList"
              :key="behaviourIndex"
              :value="behaviourIndex"
              >{{ behaviour }}</option
            >
          </optgroup>
        </select>

        <div
          v-for="(barrier, barrierIndex) in barriers"
          :key="barrierIndex"
          id="barrierList"
        >
          <input
            placeholder="Reason for behaviour"
            type="text"
            name="barrier"
            group="barriers"
          />

          <span class="barriers">
            <select
              v-for="(domainItem, domainItemIndex) in barriers[barrierIndex]
                .domains"
              :key="domainItemIndex"
            >
              <option
                v-for="(domain, domainIndex) in domains"
                :value="domainIndex"
                :key="domainIndex"
                >{{ domain[0] }}</option
              >
            </select>

            <input
              v-on:click="addDomain(barrierIndex)"
              type="button"
              value="Add Domain"
            />
          </span>
        </div>
        <input
          id="addBarrier"
          v-on:click="addBarrier"
          type="button"
          value="+"
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
  name: "SISbehaviours",
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
      actors: this.caseObject.case.actors,
      selectedDomain: [0],
      title: "Behaviours to change",
      text:
        "Map each behaviour to domain(s) and list the involved barriers for each behaviour.",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" },
      ],
    };
  },
  methods: {
    getBehaviours: function (e){
      var behaviours = [];
      for (var actorIndex in this.actors)
      {
        var behavioursToAdd = [];

        for (var behaviourIndex in this.actors[actorIndex].behaviour)
        {
          behavioursToAdd.push(this.actors[actorIndex].behaviour[behaviourIndex].description);
        }

        behaviours.push({
          actorId: this.actors[actorIndex].id,          
          actorName: this.actors[actorIndex].name,
          behaviourList: behavioursToAdd
        });
      }
      return behaviours;
    },
    addBarrier: function (e) {
      this.barriers.push({
        id: this.barriers.length,
        description: "",
        domains: [""],
      });
    },
    addDomain: function (barrierIndex) {
      this.barriers[barrierIndex].domains.push("");
    },
    next: function () {},
    validate: function () {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.barriers,
.barrier input[type="text"] {
  width: 48%;
}
.barrier select {
  display: inline;
}
.barriers input[type="button"] {
  margin-left: 48.5%;
  display: block;
  margin-bottom: 2%;
}

.barriers {
  float: right;
  clear: right;
}

.barrier {
  clear: both;
}

#behaviourSelector {
  display: block;
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
  /* overflow-y: scroll; */
  max-height: 450px;
}
</style>
