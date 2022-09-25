<template>
  <div>
    <button v-for="filter in filters" @click="handleFilterChange(filter)">
      {{ filter }}
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  props: {
    filters: {
      type: Array as PropType<Array<string>>,
    },
    handleFilterChange: {
      type: Function as PropType<(string) => string>,
    },
  },
};
</script>

<style></style>
