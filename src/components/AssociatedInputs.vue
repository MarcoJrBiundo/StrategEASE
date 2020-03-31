<template>
  <div>
    <!-- <h1>hello</h1> -->
    <input v-model="model.name" :placeholder="placeholderMain" />
    <div v-for="(secondary, index) in model.behaviors" :key="index">
      <associatedInputs
        :placeholderMain="placeholderSecondary"
        :model="secondary"
      ></associatedInputs>
    </div>
  </div>
</template>

<script>
import AssociatedInputs from "./AssociatedInputs";
export default {
  name: "AssociatedInputs",
  components: {
    AssociatedInputs
  },
  props: ["placeholderMain", "placeholderSecondary", "model"],
  data() {
    return {};
  }
};
</script>

<style></style>
