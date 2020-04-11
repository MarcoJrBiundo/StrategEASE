<template>
  <div class="indexclass">
    <div class="content">
      <div class="inputs">
        <div ref='content'>
          <h1>{{this.caseObject.case.name}}</h1>
          <p>Project Description: {{this.caseObject.case.description}}</p>
          <p>Project Evidence: {{this.caseObject.case.evidence}}</p>



          <div v-for="(actor, index) in this.caseObject.case.actors" :key="index" :value="index">
            <p>Who will Change: {{ actor.name }}</p>
              <div v-for="(behaviour, index) in actor.behaviour" :key="index" :value="index">
                <p>What will Change: {{ behaviour.description }}</p>
                  <div v-for="(barrier, index) in behaviour.barriers" :key="index" :value="index">
                  <p>What  is the barrier: {{ barrier.description}}</p>
                  </div>

            </div>
          </div>
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




</style>
