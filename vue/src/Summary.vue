<template>
  <div v-if="pages > 0">
    <table>
      <tbody>
        <tr>
          <th class="table-head">Selected titles</th>
          <th class="table-head">Selected IDs</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
          <td v-if="book.isSelected">{{ book.title }}</td>
          <td v-if="book.isSelected">{{ book.id }}</td>
        </tr>
      </tbody>
    </table>
    <p>Total number of pages in selected books: {{ pages }}</p>
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
  computed: {
    // count pages in selected books
    pages(this: any): number {
      let pagesSum = 0;
      this.books.forEach((book) => {
        if (book.isSelected) {
          pagesSum += book.numberOfPages;
        }
      });
      return pagesSum;
    },
  },
};
</script>

<style>
.table-head {
  width: 220px;
  text-align: left;
  background-color: aliceblue;
  padding: 3px;
}
</style>
