<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="selects">
        <div class="leftSelect">
          <label>Select an Actor:</label>

          <select v-model="actorSelected">
            <option
              v-for="(actor, index) in actors"
              :key="index"
              :value="index"
              >{{ actor.name }}</option
            >
          </select>
        </div>
        <div class="rightSelect">
          <label>Select a Behaviour for the selected Actor:</label>
          <select v-model="behaviourSelected">
            <option
              v-for="(behaviour, index) in actors[actorSelected].behaviour"
              :key="index"
              :value="index"
              >{{ behaviour.description }}</option
            >
          </select>
        </div>
      </div>
      <div
        class="barrier"
        v-for="(barrier, index) in actors[actorSelected].behaviour[
          behaviourSelected
        ].barriers"
        :key="index"
      >
        <div class="leftInput">
          <label>Input for barrier {{ index }} </label>
          <input v-model="barrier.description" :key="barrier.id" />
        </div>
        <div
          v-for="(domain, domainIndex) in actors[actorSelected].behaviour[
            behaviourSelected
          ].barriers[index].domains"
          :key="domainIndex"
          class="rightInput"
        >
          <select v-model="domain.domainNumber">
            <option
              v-for="(domainOpt, optIndex) in map.TDFDomains"
              :key="optIndex"
              :value="optIndex"
              >{{ domainOpt[0] }}</option
            >
          </select>
        </div>
        <input
          v-on:click="addDomain(barrier)"
          type="button"
          value="Add a Domain"
        />
      </div>
      <input v-on:click="addBarrier()" type="button" value="Add a Barrier" />
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
    BottomBar
  },
  props: {
    map: Object,
    caseObject: { type: Object }
  },
  data() {
    return {
      domains: this.map.TDFDomains,
      title: "Barriers to Change",
      text:
        "For each change you identified in the previous section, identify the barriers to making that change. You can identify as many barriers as you want.  Next, use the dropdown list to categorize each barrier to one of 14 different barrier types. You can identify up to two different categories that the barrier aligns with. Definitions of the barrier types and examples of how to do this step are available in the Helpful Links.This step assumes that you have already performed a barriers assessment. If not, consult the Helpful Links to guide you through the process of doing a barriers assessment",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" }
      ],
      actors: this.caseObject.case.actors,
      actorSelected: 0,
      behaviourSelected: 0
    };
  },
  mounted: function() {
    this.caseObject.case.actors.forEach(actor => {
      console.log(actor);
      actor.behaviour.forEach(behaviour => {
        console.log(behaviour);
        if (!behaviour.barriers) {
          behaviour.barriers = [
            {
              id: 0,
              description: "",
              domains: [
                {
                  domainNumber: 0
                }
              ]
            }
          ];
        }
      });
    });
  },
  methods: {
    addBarrier: function() {
      this.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers.push([
        {
          id: this.actors[this.actorSelected].behaviour[this.behaviourSelected]
            .barriers.length,
          description: "",
          domains: [
            {
              domainNumber: 0
            }
          ]
        }
      ]);
      this.$forceUpdate();
    },
    addDomain: function(barrier) {
      barrier.domains.push({
        domainNumber: 0
      });
      this.$forceUpdate();
    },
    next: function() {},
    validate: function() {}
  }
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

select {
  display: block;
}

.leftSelect {
  width: 48%;
  float: left;
}

.rightSelect {
  float: right;
  width: 48%;
}
.barrier {
  display: flexbox;
}

.leftInput {
  width: 47%;
  /* clear: both;
  float: left; */
}

.rightInput {
  width: 47%;
  float: right;
  clear: right;
}
</style>
