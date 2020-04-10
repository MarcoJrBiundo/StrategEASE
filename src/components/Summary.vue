<template>
  <div class="indexclass">
    <div class="content">
      <div class="inputs">
        <div ref="content" v-if="this.caseObject.case.strategies.length">
          <h1>{{ this.caseObject.case.name }}</h1>
          <p>Project Description: {{ this.caseObject.case.description }}</p>
          <p>Project Evidence: {{ this.caseObject.case.evidence }}</p>
          <p>Who will change: {{ this.caseObject.case.actors[0].name }}</p>
          <p>
            What will change:
            {{ this.caseObject.case.actors[0].behaviour[0].description }}
          </p>
        </div>
        <div class="content" v-else>
          <h2>There is no Data to print yet.</h2>
          <p>
            Please go through the process of creating your strategies starting
            from
            <router-link :to="{ name: 'DTIdescription' }">
              The Description Page </router-link
            >.
          </p>
        </div>
        <button class="btn" @click="downloadPDF">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import jsPDF from "jspdf";

export default {
  name: "Summary",
  components: {},
  props: {
    caseObject: {
      type: Object
    }
  },
  data() {
    return {
      title: "Summary",
      text: "This is the Summary Page ",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" }
      ]
    };
  },
  created() {
    console.log(this.caseObject);
  },
  methods: {
    downloadPDF() {
      const doc = new jsPDF();

      const html = this.$refs.content.innerHTML;

      doc.fromHTML(html, 15, 15, {
        width: 150
      });

      doc.save("output.pdf");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
