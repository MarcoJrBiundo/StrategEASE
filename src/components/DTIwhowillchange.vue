<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div v-for="(actor, actorIndex) in actors" :key="actorIndex">
      <input
        :placeholder="placeholderMain"
        v-model="actor.name"
        class="actor"
      />
      <div v-for="(behav, behavIndex) in actor.behaviour" :key="behavIndex">
        <input
          :placeholder="placeholderSecondary"
          v-model="behav.description"
          class="behaviour"
        />
      </div>
      <button v-on:click="addActor()">Add Actor</button>
      <button v-on:click="addBehaviour(actorIndex)">Add Behaviour</button>
    </div>
    <BottomBar :caseObject="caseObject"></BottomBar>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Vue from "vue";
// import behaviour from "@/components/behaviour";
import CommonMainPage from "./CommonMainPage";
import AssociatedInputs from "./AssociatedInputs";
import BottomBar from "./BottomBar";

export default {
  name: "DTIwhowillchange",
  components: {
    CommonMainPage,
    AssociatedInputs,
    BottomBar
  },
  props: {
    caseObject: {
      type: Object
    }
  },
  data() {
    return {
      title: "Who Will Change",
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
        { link: "www.google.com", display: "Google 3" }
      ],
      placeholderMain: "Actor or Group Name",
      placeholderSecondary: "Behavior to be Changed",
      actors: this.caseObject.case.actors
    };
  },
  methods: {
    next: function() {
      /**
       * this method calls the save function and then moves to the next page
       */
      this.validate();
      this.$router.push({ path: "sis-behaviours" });
    },
    validate: function() {
      // a local object to hold the filtered values
      var localActors = [];

      /**
       * filters the actors dependent on the actor name havng a length and
       * if any of the child behaviours have lengths
       */
      this.actors.forEach(actor => {
        if (actor.name.length > 0) {
          var toAdd = false;
          for (var i = 0; i < actor.behaviour.length; i++) {
            if (actor.behaviour.length > 0) {
              toAdd = true;
              break;
            }
          }
          if (toAdd) {
            localActors.push(actor);
          }
        }
      });

      /**
       * filters the behaviours for each actor so that only valid actors
       * with a length are added
       */
      for (var i = 0; i < localActors.length; i++) {
        localActors[i].behaviour = localActors[i].behaviour.filter(
          value => value.description.length > 0
        );
      }

      // assigns it to the main object again
      this.actors = localActors;
    },
    addActor() {
      /**
       * adds a new actor to the list of actors
       */
      this.actors.push({
        id: this.actors.length,
        name: "",
        behaviour: [{ id: 0, description: "" }]
      });
    },
    addBehaviour(index) {
      /**
       * adds a new behaviour to the current list of behaviours
       */
      this.actors[index].behaviour.push({
        id: this.actors[index].behaviour.length,
        description: ""
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.inputs {
  clear: both;
}
.indexclass {
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

.indexclass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}

.links {
  width: 40%;
  margin-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  float: right;
  background: #47cacc2b 0% 0% no-repeat padding-box;
  box-shadow: 7px 7px 34px #28282836;
  border: 2px solid #67cbcd;
  border-radius: 21px;
  opacity: 1;
  margin-top: -100px;
}

.caseNameField {
  width: 95%;
  margin-left: 3%;
  position: absolute;
  margin-top: 15%;
  height: 10%;
  top: 215;
}

/* .actor {
  width: 48% !important;
  float: left;
  clear: left;
}

.behaviour {
  width: 48% !important;
  float: right;
} */
</style>
