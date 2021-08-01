<template>
  <div class="demo">
    <h1>学校：{{ name }}</h1>
    <h1>地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "九江职业技术学院",
      address: "九江濂溪",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>