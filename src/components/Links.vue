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
  },
};
</script>

<style></style>
