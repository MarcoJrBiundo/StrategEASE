<template>
  <div class="indexclass">
    <CommonMainPage :title="title" :text="text" :links="links"></CommonMainPage>
    <div class="inputs">
      <!--buttons to go in here-->
      <div>  
        <h4>Who will change</h4>
        <input type="text" placeholder="Person to change">
        <input
        id="addWho"
        type="button"
        value="+"
        />
      </div>
      <div class="half">  
        <h4>What will they change</h4>
        <input type="text" placeholder="Behaviour to change">
        <input
          id="addWhat"
          type="button"
          value="+"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMainPage from "./CommonMainPage";

export default {
  name: "DTIdevidence",
  components: {
    CommonMainPage
  },
  data() {
    return {
      title: "Evidence",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
        mollit anim id est laborum.",
      links: [
        { link: "www.google.com", display: "Google 1" },
        { link: "www.google.com", display: "Google 2" },
        { link: "www.google.com", display: "Google 3" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.border-right {
  border-right: 1px solid black;
  margin-right: 2px;
}
.inputs {
  width: 40%;
  position: absolute;
  margin-top: 15%;
  height: 10%;
  top: 215;
}
.half {
  width: 40%;
}
.indexclass {
  position: absolute;
  top: 18%;
  left: 17%;
  width: 82%;
  height: 80%;
  background: #ffffff 0% 0%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
}

.indexclass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}

.links {
  width: 40%;
  margin-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  float: right;
  background: #47cacc2b 0% 0% no-repeat padding-box;
  box-shadow: 7px 7px 34px #28282836;
  border: 2px solid #67cbcd;
  border-radius: 21px;
  opacity: 1;
  margin-top: -100px;
}

.caseNameField {
  width: 95%;
  margin-left: 3%;
  position: absolute;
  margin-top: 15%;
  height: 10%;
  top: 215;
}
</style>
