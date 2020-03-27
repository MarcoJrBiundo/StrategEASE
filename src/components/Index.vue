<template>
  <div class="indexclass">
    <h2>Select or Create a Case</h2>
    <div>
      <h4>Existing Cases</h4>
      <p v-if="cases.length==0">No Cases Exist</p>
      <ul>
      </ul>
    </div>
    <router-link :to="{ name: 'DTIdescription' }">
      Start New Case
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      cases: [ ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.indexclass a:hover {
  color: #070068;
}

.indexclass a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  color: #006310;
  opacity: 1;
}

.indexclass {
  position: absolute;
  top: 18%;
  left: 17%;
  width: 82%;
  height: 80%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
  padding-left: 40px;
}

.indexclass h2 {
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}
</style>
