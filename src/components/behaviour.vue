<template>
  <div class="behaviour">
    <input
      placeholder="Actor to change"
      type="text"
      name="actor"
      group="behaviourActors"
    />
    <span class="behaviours">
      <input
        id="behaviourInput1"
        placeholder="Behaviour to change"
        type="text"
        name="behaviour"
        group="behaviours"
      />
      <input
        id="addBehaviour"
        v-on:click="addBehaviour"
        type="button"
        value="+"
      />
    </span>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    addBehaviour: function(e) {
      var behaviourList = e.target.parentElement.children;
      //get the count from the id
      //-2 items to account for the button in this
      var behaviourCount = parseInt(behaviourList[behaviourList.length - 2].id.replace("behaviourInput","")) + 1;

      var newBehaviour = document.createElement("INPUT");
      //{ type: "text", name: "behaviour", group: "behaviours", placeholder: "Behaviour to change" }
      newBehaviour.setAttribute("id", 'behaviourInput' + behaviourCount);
      newBehaviour.setAttribute("type", "text");
      newBehaviour.setAttribute("name", "behaviour");
      newBehaviour.setAttribute("group", "behaviours");
      newBehaviour.setAttribute("placeholder", "Behaviour to change");
      
      e.target.parentElement.insertBefore(newBehaviour, behaviourList[behaviourList.length - 1]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.behaviour input[type=text] {
  width: 48%;
}
.behaviours {
  width: 48%;
}
.behaviours input[type=button]{
  margin-left: 48.5%;
  display: block;
}
</style>
