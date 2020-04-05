<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="content">
      <div class="inputs">
        <label for="case">Case:</label>
        <input type="text" name="case" v-model="caseObject.name" />
        <label for="case">Describe the intervention you are implmenting:</label>
        <input type="text" name="case" v-model="caseObject.description" />
        <label for="case"
          >Describe the evidence supporting the intervention:</label
        >
        <input type="text" name="case" v-model="caseObject.evidence" />
      </div>
    </div>
    <BottomBar :caseObject="caseObject"></BottomBar>
  </div>
</template>

<script>
import db from "@/firebase/init";
import CommonMainPage from "./CommonMainPage";
import BottomBar from "./BottomBar";

export default {
  name: "DTIdescription",
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
      title: "Defining the Intervention",
      text:
        "The “intervention” includes: \n1) what you are implementing -  the practice, procedure, policy or program, and: \n2) how you are implementing -  the strategies you are using to implement that practice, procedure, policy or program. ",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" },
      ],
    };
  },
  methods: {
    next: function () {
      // console.log(this.caseObject);
      if (
        this.caseObject.name &&
        this.caseObject.description &&
        this.caseObject.evidence &&
        this.caseObject.name.length > 0 &&
        this.caseObject.description.length > 0 &&
        this.caseObject.evidence.length > 0
      ) {
        alert("valid");
        this.$router.push({ path: "dti-whowillchange" });
      } else {
        alert("invalid");
      }
    },
    validate: function () {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
