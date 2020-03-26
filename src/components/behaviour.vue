<template>
  <div>
    <input
      placeholder="Who will change"
      type="text"
      name="who"
      group="behaviourWho"
    />
    <input
      placeholder="What will they change"
      type="text"
      name="what"
      group="behaviourWhat"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
