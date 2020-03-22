<template>
<div class="sidenavi">
  <ul>
    <li><a class="listControl" href="#intervention">Intervention</a>
      <ul class="sublists" hidden>
        <li><router-link :to="{ name: 'DTIdescription' }"><a href="">Description</a></router-link></li>
        <li><router-link :to="{ name: 'DTIevidence' }"><a href="">Evidence</a></router-link></li>
        <li><router-link :to="{ name: 'DTIwhowillchange' }"><a href="">Who Will Chance</a></router-link></li>
      </ul>
    </li>
    <li><a class="listControl" href="#implementation">Implementation</a>
      <ul class="sublists" hidden>
        <li><router-link :to="{ name: 'SISbehaviours' }"><a href="">Behaviours</a></router-link></li>
        <li><router-link :to="{ name: 'SISdomains' }"><a href="">Domains</a></router-link></li>
      </ul> 
    </li>
    <li><a class="listControl" href="#operationalize">Operationalize</a>
      <ul class="sublists" hidden>
        <li><a href="#">Strategies</a></li>
      </ul>   
    </li>
    
    <li><a href="#summary">Summary</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
 
    }
  }
}
</script>

<style>
.sidenavi {
  height: 650px;
  width: 15%;
  margin-top: 30px;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
}

.sidenavi a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  text-align: left;
  letter-spacing: 0;
  color: #A4A4A4;
opacity: 1;
}

.sidenavi a:hover {
  color: #5F5F5F;
}
.sublists a:hover {
  color: #5F5F5F;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenavi {padding-top: 15px;}
  .sidenavi a {font-size: 18px;}
}

.sublists a{
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 12px;
  color: #818183;
  display: block;
  text-align: left;
  letter-spacing: 0;
  color: #A4A4A4;
  opacity: 1;
}
</style>
