<template>
  <div class="bottomBar">
    <button v-on:click="back()" class="botBut leftBut">BACK</button>
    <button v-on:click="saveAndQuit()" class="botBut centerBut">
      SAVE AND QUIT
    </button>
    <button v-on:click="next()" class="botBut rightBut">NEXT</button>
  </div>
</template>

<script>
import db from "@/firebase/init";
// import router from "../vue-router";
export default {
  name: "BottomBar",
  props: {
    caseObject: Object,
    nextRoute: String // for passing in the next route to go to
  },
  data() {
    return {
      prevCases: []
    };
  },
  created() {
    db.collection("cases")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let caseInd = doc.data();
          this.prevCases.push(caseInd.id);
        });
      });
  },
  methods: {
    back: function(e) {
      /** takes user back one page */
      this.$router.go(-1);
    },
    saveAndQuit: function(e) {
      let caseId = this.caseObject.id;

      if (this.prevCases.includes(caseId)) {
        this.updateCase();
      } else {
        this.createCase();
        this.$parent.validate();
        this.$router.push({ path: "/" });
      }
    },
    next: function(e) {
      /** calls parent next function to validate
       *  and move to the next page
       */
      console.log(this.$parent.validate());
      let caseId = this.caseObject.id;
      if (this.prevCases.includes(caseId)) {
        this.updateCase();
      } else {
        this.createCase();
        this.$parent.validate();
        this.$router.push({ path: "/" });
      }
      this.$parent.next();
    },
    updateCase: function() {
      console.log("is updating ");
      console.log(this.caseObject.id);
      db.collection("cases")
        .doc(this.caseObject.id)
        .update(this.caseObject)
        .then(function() {
          console.log("Document successfully written!");
        });
    },
    createCase: function() {
      console.log("is adding ");
      var newCaseRef = db.collection("cases").doc();
      this.caseObject.id = newCaseRef.id;
      newCaseRef.set(this.caseObject);
    },
    save: function(e) {}
  }
};
</script>

<style>
.bottomBar {
  position: absolute;
  bottom: 2.5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 5%;
  opacity: 1;
  background: white;
}

.botBut {
  width: 177px;
  height: 47px;
  background: transparent
    radial-gradient(closest-side at 6% 0%, #47cacc 0%, #329d9c 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 5px 5px 20px #329d9c55;
  border-radius: 21px;
  opacity: 1;
  border: solid 0px;
  text-align: center;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}

.leftBut {
}

.rightBut {
}

.centerBut {
}
</style>
