<template>
  <div class="sidenavi">
    <ul>
      <li>
        <a class="listControl">Intervention</a>
        <ul class="sublists" hidden>
          <li class="leftSpacing">
            <router-link :to="{ name: 'DTIdescription' }">
              Description
            </router-link
            >
          </li>
          <!--
          <li>
            <router-link :to="{ name: 'DTIevidence' }"
              ><a href="">Evidence</a></router-link>
          </li>
          -->
          <li class="leftSpacing">
            <router-link :to="{ name: 'DTIwhowillchange' }">
              Who Will Change
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="listControl">Implementation</a>
        <ul class="sublists" hidden>
          <li class="leftSpacing">
            <router-link :to="{ name: 'SISbehaviours' }">
              Behaviours
            </router-link>
          </li>
          <li class="leftSpacing">
            <router-link :to="{ name: 'SISdomains' }" >
              Domains
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="listControl">Operationalize</a>
        <ul class="sublists" hidden>
          <li class="leftSpacing">
            <router-link :to="{ name: 'OSStrategy' }" >
              Strategies
            </router-link>
          </li>
        </ul>
      </li>
      <li> 
        <router-link :to="{ name: 'Summary' }" >
              Strategies
            </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<style>
.leftSpacing {
  margin-left: 15px;
}

.listControl:hover {
  cursor: pointer;
}

.sidenavi {
  position: absolute;
  height: 80%;
  width: 15%;
  top: 18%;
  left: 1%;
  /* margin-top: 30px; */
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
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
  color: #a4a4a4;
  opacity: 1;
}

.sidenavi a:hover {
  color: #5f5f5f;
}
.sublists a:hover {
  color: #5f5f5f;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenavi {
    padding-top: 15px;
  }
  .sidenavi a {
    font-size: 18px;
  }
}

.sublists a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 12px;
  color: #818183;
  display: block;
  text-align: left;
  letter-spacing: 0;
  color: #a4a4a4;
  opacity: 1;
}
</style>
