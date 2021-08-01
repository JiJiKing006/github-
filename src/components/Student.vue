<template>
  <div class="demo">
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "赖嘉威",
      age: 21,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: saddlebrown;
}
</style>