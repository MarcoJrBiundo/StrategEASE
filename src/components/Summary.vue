<template>
  <div class="indexclass">
    <div class="content">
      <div class="inputs">
        <div ref='content'>
          <h1>{{this.caseObject.case.name}}</h1>
          <p>Project Description: {{this.caseObject.case.description}}</p>
          <p>Project Evidence: {{this.caseObject.case.evidence}}</p>
           <p>Who will change: {{this.caseObject.case.actors[0].name}}</p>
           <p>What will change: {{this.caseObject.case.actors[0].behaviour[0].description}}</p>
        </div>
           <button class="btn" @click="downloadPDF">Download PDF</button>
      </div>
    </div>
 
  </div>
</template>

<script>
import db from "@/firebase/init";
import jsPDF from 'jspdf';

export default {
  name: "Summary",
  components: {
  },
  props: {
    caseObject: {
      type: Object,
    },
  },
  data() {
    return {
      title: "Summary",
      text:
        "This is the Summary Page ",
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" },
      ],
    };
  },  created(){

    console.log(this.caseObject)
 
  },
  methods: {

    downloadPDF(){
      const doc = new jsPDF()

      const html = this.$refs.content.innerHTML
      
      doc.fromHTML(html,15,15,{
        width: 150
      })
      

      doc.save("output.pdf")

    }
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar {
    padding: 0 20px;
     top: 0px;
    left: 0px;
    width: 100%;
    height: 119px;
    background: #14B49E 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 0px 0px 41px;
    opacity: 1;  
}



</style>
