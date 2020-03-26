<template>
  <div class="links">
    <h4>Helpful Links</h4>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.link">{{ link.display }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Links",
  props: ["links"],
  data() {
    return {};
  }
};
</script>

<style>
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
</style>
