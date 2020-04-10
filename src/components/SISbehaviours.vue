<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="selects">
        <div class="leftSelect">
          <label class="largeLabel">Select an Actor:</label>

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
          <label class="largeLabel"
            >Select a Behaviour For The Current Actor:</label
          >
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
          <label class="smallLabel">Barrier #{{ index + 1 }} </label>
          <input v-model="barrier.description" :key="barrier.id" />
        </div>

        <input
          v-if="index !== 0"
          v-on:click="removeBarrier(index)"
          type="button"
          value="Remove Barrier"
          class="barrierButton remove"
        />
        <div
          v-for="(domain, domainIndex) in actors[actorSelected].behaviour[
            behaviourSelected
          ].barriers[index].domains"
          :key="domainIndex"
          class="rightInput"
        >
          <label class="smallLabel">Domain #{{ domainIndex + 1 }}</label>
          <select v-model="domain.domainNumber">
            <option
              v-for="(domainOpt, optIndex) in map.TDFDomains"
              :key="optIndex"
              :value="optIndex"
              >{{ domainOpt[0] }}</option
            >
          </select>
          <input
            v-if="domainIndex !== 0"
            v-on:click="removeDomain(index, domainIndex)"
            type="button"
            value="Remove a Domian"
            class="remove removeDomain"
          />
        </div>
        <input
          v-on:click="addDomain(index)"
          type="button"
          value="Add a Domain"
        />
      </div>
      <input
        v-on:click="addBarrier()"
        type="button"
        value="Add a Barrier"
        class="barrierButton"
      />
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
                  domainNumber: -9
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
      ].barriers.push({
        id: this.actors[this.actorSelected].behaviour[this.behaviourSelected]
          .barriers.length,
        description: "",
        domains: [
          {
            domainNumber: -9
          }
        ]
      });
      this.$forceUpdate();
    },
    addDomain: function(index) {
      this.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers[index].domains.push({
        domainNumber: -9
      });
      barrier.domains.push;
      this.$forceUpdate();
    },
    removeBarrier: function(barrier) {
      this.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers.pop(barrier);
      this.$forceUpdate();
    },
    removeDomain: function(barrier, domain) {
      this.actors[this.actorSelected].behaviour[
        this.behaviourSelected
      ].barriers[barrier].domains.pop(domain);
      this.$forceUpdate();
    },
    next: function() {
      if (this.validate()) {
        this.$router.push({ path: "/sis-domains" });
      } else {
        alert("Please ensure that all fields are filled before moving on.");
      }
    },
    validate: function() {
      for (let actor = 0; actor < this.actors.length; actor++) {
        for (
          let behav = 0;
          behav < this.actors[actor].behaviour.length;
          behav++
        ) {
          for (
            let barrier = 0;
            barrier < this.actors[actor].behaviour[behav].barriers.length;
            barrier++
          ) {
            for (
              let domain = 0;
              domain <
              this.actors[actor].behaviour[behav].barriers[barrier].domains
                .length;
              domain++
            ) {
              if (
                this.actors[actor].behaviour[behav].barriers[barrier].domains[
                  domain
                ].domainNumber < 0
              ) {
                console.log(
                  "error in: \nActor: " +
                    actor +
                    "\nbehaviour: " +
                    behav +
                    "\nBarrier: " +
                    barrier +
                    "\nDomain: " +
                    domain
                );
                return false;
              }
            }
            if (
              this.actors[actor].behaviour[behav].barriers[barrier].description
                .length < 2
            ) {
              console.log(
                "error in: \nActor: " +
                  actor +
                  "\nbehaviour: " +
                  behav +
                  "\nBarrier: " +
                  barrier
              );
              return false;
            }
          }
        }
      }
      return true;
    }
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
  margin-bottom: 1em;
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
  /* display: flexbox; */
  margin-top: 1em;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  border: 1px #00000029 solid;
  opacity: 1;
  padding: 10px;
}

.leftInput {
  /* width: 47%; */
  /* clear: both;
  float: left; */
}

.rightInput {
  /* width: 47%;
  float: right;
  clear: right; */
}

.barrier input[type="button"] {
  margin-top: 1em;
}

.barrierButton {
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  display: block;
}

.removeDomain {
  float: right;
}
</style>
