<template>
  <div class="indexclass">
    <h2>My Dashboard</h2>
    <p>
      Create a new project to get started, or continue working on a saved
      project
    </p>
    <div>
      <h4>Existing Cases</h4>
      <p v-if="caseNav.length == 0">No Cases Exist</p>
      <div v-for="item in caseNav" :key="item.id">
        <a class="openCase" v-on:click="openCase(item.case, item.id)">{{
          item.case.name
        }}</a>
      </div>
      <ul></ul>
    </div>
    <router-link :to="{ name: 'DTIdescription' }">
      Start New Case
    </router-link>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Index",
  props: {
    caseObject: Object
  },
  data() {
    return {
      caseNav: []
    };
  },
  created() {
    db.collection("cases")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let caseInd = doc.data();
          caseInd.id = doc.id;

          this.caseNav.push({
            case: caseInd.case,
            id: caseInd.id
          });
        });
      });
  },
  methods: {
    openCase: function(pastCase, id) {
      this.caseObject.id = id;
      this.caseObject.case = pastCase;
      console.log(this.caseObject);
      this.$router.push({ path: "dti-description" });
    }
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

.indexclass .openCase {
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  color: #206aa2;
  opacity: 1;
}
.openCase {
  cursor: pointer;
}

.indexclass {
  position: absolute;
  top: 12%;
  left: 17%;
  width: 82%;
  height: 86%;
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
