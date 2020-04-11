<template>
  <div class="indexclass">

      <div class="inputs">
        <div ref='content'>
          <h1>{{this.caseObject.case.name}}</h1>
              <button class="btn" @click="downloadPDF">Download PDF</button>
          <h5><strong>Project Description:</strong> {{this.caseObject.case.description}}</h5>
          <h5><strong>Project Evidence:</strong> {{ this.caseObject.case.evidence}}</h5>
         <p> ___________________________________________________________</p>

          <div v-for="(strat, index) in this.caseObject.case.strategies" :key="index" :value="index">
            <h5>{{ strat.name }}</h5>
           <p><strong><u>Who will Change:</u> </strong> {{actors[strat.actor].name}}</p>
              <div v-for="(behave, index1) in actors[strat.actor].behaviour" :key="index1" :value="index1">
              <p><strong><u>What will Change:</u> </strong>  {{behave.description}}</p>


              <div v-for="(barrier, index2) in actors[strat.actor].behaviour[index1].barriers" :key="index2" :value="index2">
                  <p><strong><u>Relavent Barrier:</u> </strong> {{barrier.description}}</p> 
                </div>
            
            </div> 
       
          <p><strong><u>Who will deliver this strategy:</u> </strong> {{strat.delivery}}</p>
            <p><strong><u>How will it be delivered: </u>  </strong>{{strat.del_strat}}</p>
            <p><strong><u>Potential Adaptations:</u> </strong> {{strat.adaptations}}</p>
            <p>_____________________________________</p>
          </div>
        </div>
        <!-- <div class="content" v-else>
          <h2>There is no Data to print yet.</h2>
          <p>
            Please go through the process of creating your strategies starting
            from
            <router-link :to="{ name: 'DTIdescription' }">
              The Description Page </router-link
            >.
          </p>
        </div> -->
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
      actors: this.caseObject.case.actors,
      links: [
        { link: "www.google.com", display: "www.habits.com" },
        { link: "www.google.com", display: "www.breakinghabits.org" },
        { link: "www.google.com", display: "www.implement.com" }
      ]
    };
  },
  created() {
    console.log(this.caseObject);
    console.log(this.actors)
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
<style>


.content {
  height: 200%;
  

}

</style>
