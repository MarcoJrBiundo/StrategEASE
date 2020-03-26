<template>
  <div class="barrier">
    <input
      placeholder="Reason for behaviour"
      type="text"
      name="barrier"
      group="barriers"
    />
    <span class="barriers">
      <select id="tdfDomain1" name="domain" group="domains">
        <option value="1">Option1</option>
      </select>
      <input
        id="addBarrier"
        v-on:click="addBarrier"
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
    addBarrier: function(e) {
      var barrierList = e.target.parentElement.children;
      //get the count from the id
      //-2 items to account for the button in this
      var barrierCount = parseInt(barrierList[barrierList.length - 2].id.replace("tdfDomain","")) + 1;

      var newBarrier = document.createElement("SELECT");
      //{ type: "text", name: "barrier", group: "barriers", placeholder: "barrier to change" }
      newBarrier.setAttribute("id", 'tdfDomain' + barrierCount);
      newBarrier.setAttribute("name", "barrier");
      newBarrier.setAttribute("group", "barriers");
      newBarrier.innerHTML = "<option>ASD</option>";
      
      e.target.parentElement.insertBefore(newBarrier, barrierList[barrierList.length - 1]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.barriers, .barrier input[type=text], .barrier select {
  width: 48%;
}
.barrier select {
    display: inline;
}
.barriers input[type=button]{
  margin-left: 48.5%;
  display: block;
}
.barrier {
    clear: both;
}
</style>
