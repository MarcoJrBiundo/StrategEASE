<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="barrier">
        <select :v-model="behaviourSelected" @change="updateActor">
          <optgroup
            v-for="(behaviours, behaviourListIndex) in getBehaviours()"
            :key="behaviourListIndex"
            :label="behaviours.actorName"
          >
            <option
              v-for="(behaviour, behaviourIndex) in behaviours.behaviourList"
              :key="behaviourIndex"
              :actor="behaviours.actorId"
              :value="behaviourIndex"
              >{{ behaviour }}</option
            >
          </optgroup>
        </select>

        <div
          v-for="(barrier, barrierIndex) in caseObject.case.actors[actorSelected].behaviour[behaviourSelected].barriers"
          :key="barrierIndex"
        >
          <input
            placeholder="Barrier"
            :v-model="barrier.description"
            type="text"
          />
          <span class="barriers">
            <select
              v-for="(domainItem, domainItemIndex) in barrier.domains"
              :key="domainItemIndex"
              :v-model="barrier.domainItem"
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
          v-on:click="addBarrier()"
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
      actorSelected: 0,
      behaviourSelected: 0,
      selectedDomain: [0],
      barriers: [{id: 0, description: "", domains: [""]}],
      title: "Barriers to Change",
      text:
        "For each change you identified in the previous section, identify the barriers to making that change. You can identify as many barriers as you want.  Next, use the dropdown list to categorize each barrier to one of 14 different barrier types. You can identify up to two different categories that the barrier aligns with. Definitions of the barrier types and examples of how to do this step are available in the Helpful Links.This step assumes that you have already performed a barriers assessment. If not, consult the Helpful Links to guide you through the process of doing a barriers assessment",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" },
      ],
    };
  },
  mounted: function () {
    this.caseObject.case.actors.forEach(actor => {
      console.log(actor);
      actor.behaviour.forEach((behaviour) => {
        console.log(behaviour);
        if (!behaviour.barriers) {
          behaviour.barriers = [{ id: 0, description: "", domains: [0] }];
        }
        // if (behaviour.barriers.length < 1) {
        //   behaviour.barriers.push([{ id: 0, description: "", domains: [0] }]);
        // }
      });
    });
  },
  methods: {
    updateActor: function (e) {
      this.actorSelected = e.target.selectedOptions[0].getAttribute("actor");
      this.behaviourSelected = e.target.selectedOptions[0].value;
    },
    // getBarriers: function (e) {
    //   var barriers = this.actors[this.actorSelected].behaviour[
    //     this.behaviourSelected
    //   ].barriers;

    //   if (barriers == null) return [{ id: 0, description: "", domains: [0] }];
    //   return barriers;
    // },
    getBehaviours: function (e) {
      var behaviours = [];
      for (var actorIndex in this.actors) {
        var behavioursToAdd = [];

        for (var behaviourIndex in this.actors[actorIndex].behaviour)
          behavioursToAdd.push(
            this.actors[actorIndex].behaviour[behaviourIndex].description
          );

        behaviours.push({
          actorId: this.actors[actorIndex].id,
          actorName: this.actors[actorIndex].name,
          behaviourList: behavioursToAdd,
        });
      }
      return behaviours;
    },
    addBarrier: function (e) {
      this.caseObject.case.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers.push({
        id: this.caseObject.case.actors[this.actorSelected].behaviour[
          this.behaviourSelected
        ].barriers.length,
        description: "",
        domains: [0],
      });
    },
    addDomain: function (barrierIndex) {
      this.caseObject.case.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers[barrierIndex].domains.push(0);
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
