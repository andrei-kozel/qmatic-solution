<template>
  <div>
    <div
      v-for="book in books"
      @click="handleSelectBook(book)"
      :key="book.id"
      :style="{
        'background-color': book.isSelected ? '#86efac' : '',
        cursor: 'pointer',
        padding: '3px',
        'max-width': 'max-content',
      }"
    >
      {{ book.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue/types/umd";
import { IBookCustom } from "./IBook.interface";

export default {
  props: {
    books: {
      type: Array as PropType<Array<IBookCustom>>,
    },
    handleSelectBook: {
      type: Function as PropType<(IBookCustom) => void>,
    },
  },
};
</script>

<style></style>
