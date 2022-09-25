<template>
  <div id="app" class="app-container">
    <h1>The Library</h1>
    <BookFilters :filters="filters" :handleFilterChange="handleFilterChange" />
    <SelectableBooks
      :books="filteredBooks"
      :handleSelectBook="handleSelectBook"
    />
    <h2>Selected Books Summary</h2>
    <Summary :books="filteredBooks" />
  </div>
</template>

<script lang="ts">
import SelectableBooks from "./SelectableBooks.vue";
import BookFilters from "./BookFilters.vue";
import Summary from "./Summary.vue";
import { bookData } from "./bookData";
import { IBook, IBookCustom } from "./IBook.interface";
import { PropType } from "vue/types/umd";

export default {
  components: {
    BookFilters,
    SelectableBooks,
    Summary,
  },
  data() {
    return {
      books: bookData() as IBook[],
      filter: String,
      filteredBooks: Array as PropType<Array<IBookCustom>>,
    };
  },

  // initial data loading, add property isSelected with default value false to every book object
  created: function (this: any): void {
    this.filter = "All";
    this.filteredBooks = this.books.map((book) => (book.isSelected = false));
  },

  watch: {
    // watch the filter and change filteredBooks if the filter changes
    filter: function (this: any) {
      if (this.filter === "All") {
        this.filteredBooks = this.books;
      } else {
        this.filteredBooks = this.books.filter(
          (book) => book.genre === this.filter
        );
      }
    },
  },

  methods: {
    // handle filter change and reset selected books on filter change
    handleFilterChange(this: any, filter: string): void {
      this.filter = filter;
      this.resetSelected();
    },
    // select a book
    handleSelectBook(this: any, book: IBookCustom): void {
      this.filteredBooks = this.filteredBooks.map((b) => {
        if (b.id === book.id) {
          b.isSelected = !b.isSelected;
        }
        return b;
      });
    },
    // deselect all
    resetSelected(this: any): void {
      this.filteredBooks = this.filteredBooks.map((book) => {
        book.isSelected = false;
        return book;
      });
    },
  },

  // generate filter array with unique values based on books data
  computed: {
    filters(this: any): string[] {
      return [
        "All",
        ...(new Set(this.books.map((book) => book.genre)) as Set<string>),
      ];
    },
  },
};
</script>

<style>
.app-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  width: 100%;
  position: relative;
}
</style>
