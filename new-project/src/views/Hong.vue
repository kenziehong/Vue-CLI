<template>
  <div class="hong">
    <h1>This is an Hong page</h1>
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";

export default {
  name: "Hong",
  components: {
    Todos
  }
};

</script>