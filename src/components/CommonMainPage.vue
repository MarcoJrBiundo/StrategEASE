<template>
  <div>
    <Links :links="links"></Links>
    <h2 class="title">{{ title }}</h2>
    <div class="para">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Links from "./Links";

export default {
  name: "CommonMainPage",
  components: {
    Links,
  },
  props: ["title", "text", "links"],
  data() {
    return {};
  },
};
</script>

<style>
.para {
  max-width: 52%;
  /* max-width: 620px; */
  float: left;
  padding-left: 40px;
  padding-top: 0px;
}

.title {
  /* max-width: 52%; */
  width: 52%;
  margin-left: 3%;
  /* padding-left: 40px; */
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}
</style>
