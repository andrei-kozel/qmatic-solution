import { IBook, Genre } from "./IBook.interface";

export const bookData = (): IBook[] => [
  {
    id: '978-0-14-118393-0',
    title: 'Good Morning, Midnight',
    author: 'Jean Rhys',
    numberOfPages: 213,
    genre: Genre.Modernism
  },
  {
    id: '978-9-17-429093-6',
    title: 'Doktor Glas',
    author: 'Hjalmar Söderberg',
    numberOfPages: 163,
    genre: Genre.Modernism
  },
  {
    id: '978-0-39-397612-0',
    title: 'Notes from Underground',
    author: 'Fyodor Dostoevsky',
    numberOfPages: 223,
    genre: Genre.Realism
  },
  {
    id: '978-9-17-429340-1',
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    numberOfPages: 526,
    genre: Genre.Realism
  },
  {
    id: '978-1-49-821739-2',
    title: 'Laments for the Living',
    author: 'Dorothy Parker',
    numberOfPages: 362,
    genre: Genre.Modernism
  }
];