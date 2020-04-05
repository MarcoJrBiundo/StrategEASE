<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div
        v-for="(actor, actorIndex) in actors"
        :key="actorIndex"
        class="actor"
      >
        <input
          :placeholder="placeholderMain"
          v-model="actor.name"
          class="actor"
        />
        <div
          v-for="(behav, behavIndex) in actor.behaviour"
          :key="behavIndex"
          class="behaviour"
        >
          <input
            :placeholder="placeholderSecondary"
            v-model="behav.description"
            class="behaviour"
          />
        </div>

        <input
          v-on:click="addBehaviour(actorIndex)"
          type="button"
          value="Add Behaviour"
        />
      </div>
      <input v-on:click="addActor()" type="button" value="Add Actor" />
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
  name: "DTIwhowillchange",
  components: {
    CommonMainPage,
    BottomBar,
  },
  props: {
    caseObject: {
      type: Object,
    },
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
        { link: "www.google.com", display: "Google 3" },
      ],
      placeholderMain: "Actor or Group Name",
      placeholderSecondary: "Behavior to be Changed",
      actors: this.caseObject.case.actors,
    };
  },
  mounted: function () {
    if (this.actors.length < 1) {
      this.addActor();
      // addBehaviour();
    }
  },
  methods: {
    next: function () {
      /**
       * this method calls the save function and then moves to the next page
       */
      this.validate();
      console.log(this.actors[0].name);
      console.log(this.actors[0].behaviour[0].description);

      if (
        this.actors.length > 0 &&
        this.actors[0].name.length > 0 &&
        this.actors[0].behaviour.length > 0 &&
        this.actors[0].behaviour[0].description.length > 0
      ) {
        this.$router.push({ path: "sis-behaviours" });
      } else {
        alert("Invalid");
      }
    },
    validate: function () {
      // a local object to hold the filtered values
      var localActors = [];

      /**
       * filters the actors dependent on the actor name having a length and
       * if any of the child behaviours have lengths
       */
      this.actors.forEach((actor) => {
        if (actor.name.length > 0) {
          var toAdd = false;
          for (var i = 0; i < actor.behaviour.length; i++) {
            if (actor.behaviour[i].description.length > 0) {
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
          (value) => value.description.length > 0
        );
      }
      this.caseObject.case.actors = localActors;
    },
    addActor() {
      /**
       * adds a new actor to the list of actors
       */
      this.actors.push({
        id: this.actors.length,
        name: "",
        behaviour: [{ id: 0, description: "" }],
      });
    },
    addBehaviour(index) {
      /**
       * adds a new behaviour to the current list of behaviours
       */
      this.actors[index].behaviour.push({
        id: this.actors[index].behaviour.length,
        description: "",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.actor {
  clear: both;
}
.actor > input {
  width: 48%;
}

.behaviour {
  float: right;
  clear: right;
  width: 48%;
}

.actor > input[type="button"] {
  margin-right: 36.5%;
}

.actor input[type="button"] {
  /* margin-right: 48.5%; */
  width: auto;
  display: block;
  float: right;
  clear: right;
}
</style>
