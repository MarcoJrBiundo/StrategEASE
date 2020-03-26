<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="para">
      <p>{{ text }}</p>
    </div>
    <Links :links="links"></Links>
  </div>
</template>

<script>
import Links from "./Links";

export default {
  name: "CommonMainPage",
  components: {
    Links
  },
  props: ["title", "text", "links"],
  data() {
    return {};
  }
};
</script>

<style>
.para {
  width: 50%;
  float: left;
  padding-left: 40px;
  padding-top: 0px;
}

.indexclass h2 {
  padding-left: 40px;
  text-align: left;
  letter-spacing: 0;
  color: #206aa2;
  opacity: 1;
}
</style>
