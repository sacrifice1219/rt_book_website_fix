import React, { useState } from 'react';

// Real-life book data (up to 100 books with title, author, location, and price)
const booksData = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', location: 'New York', price: 18.99 },
  { id: 2, title: '1984', author: 'George Orwell', location: 'San Francisco', price: 15.99 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', location: 'Los Angeles', price: 20.99 },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', location: 'Chicago', price: 12.50 },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', location: 'New York', price: 16.50 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', location: 'San Francisco', price: 25.00 },
  { id: 7, title: 'Moby Dick', author: 'Herman Melville', location: 'Los Angeles', price: 18.75 },
  { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', location: 'Chicago', price: 22.99 },
  { id: 9, title: 'The Odyssey', author: 'Homer', location: 'New York', price: 17.99 },
  { id: 10, title: 'The Night Circus', author: 'Erin Morgenstern', location: 'New York', price: 16.99 },
  { id: 11, title: 'The Goldfinch', author: 'Donna Tartt', location: 'San Francisco', price: 18.50 },
  { id: 12, title: 'The Wind-Up Bird Chronicle', author: 'Haruki Murakami', location: 'Los Angeles', price: 22.00 },
  { id: 13, title: 'Circe', author: 'Madeline Miller', location: 'Chicago', price: 15.99 },
  { id: 14, title: 'The Underground Railroad', author: 'Colson Whitehead', location: 'New York', price: 17.50 },
  { id: 15, title: 'The Silent Patient', author: 'Alex Michaelides', location: 'San Francisco', price: 14.99 },
  { id: 16, title: 'Normal People', author: 'Sally Rooney', location: 'Los Angeles', price: 19.75 },
  { id: 17, title: 'Where the Crawdads Sing', author: 'Delia Owens', location: 'Chicago', price: 16.99 },
  { id: 18, title: 'The Testaments', author: 'Margaret Atwood', location: 'New York', price: 21.99 },
  { id: 19, title: 'An American Marriage', author: 'Tayari Jones', location: 'Los Angeles', price: 18.99 },

  { id: 20, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', location: 'San Francisco', price: 23.50 },
  { id: 21, title: 'Anna Karenina', author: 'Leo Tolstoy', location: 'Chicago', price: 24.99 },
  { id: 22, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', location: 'New York', price: 19.99 },
  { id: 23, title: 'Brave New World', author: 'Aldous Huxley', location: 'Los Angeles', price: 17.50 },
  { id: 24, title: 'Wuthering Heights', author: 'Emily Brontë', location: 'San Francisco', price: 14.99 },
  { id: 25, title: 'The Divine Comedy', author: 'Dante Alighieri', location: 'Chicago', price: 26.99 },
  { id: 26, title: 'The Stranger', author: 'Albert Camus', location: 'New York', price: 15.75 },
  { id: 27, title: 'Lolita', author: 'Vladimir Nabokov', location: 'Los Angeles', price: 22.50 },
  { id: 28, title: 'Catch-22', author: 'Joseph Heller', location: 'San Francisco', price: 18.99 },
  { id: 29, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', location: 'Chicago', price: 13.99 },

  { id: 30, title: 'Les Misérables', author: 'Victor Hugo', location: 'New York', price: 25.99 },
  { id: 31, title: 'Madame Bovary', author: 'Gustave Flaubert', location: 'Los Angeles', price: 19.50 },
  { id: 32, title: 'Jane Eyre', author: 'Charlotte Brontë', location: 'San Francisco', price: 17.99 },
  { id: 33, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', location: 'Chicago', price: 21.75 },
  { id: 34, title: 'The Iliad', author: 'Homer', location: 'New York', price: 16.99 },
  { id: 35, title: 'Great Expectations', author: 'Charles Dickens', location: 'Los Angeles', price: 15.99 },
  { id: 36, title: 'Frankenstein', author: 'Mary Shelley', location: 'San Francisco', price: 14.99 },
  { id: 37, title: 'Dracula', author: 'Bram Stoker', location: 'Chicago', price: 18.25 },
  { id: 38, title: 'Don Quixote', author: 'Miguel de Cervantes', location: 'New York', price: 24.50 },
  { id: 39, title: 'The Old Man and the Sea', author: 'Ernest Hemingway', location: 'Los Angeles', price: 13.50 },

  { id: 40, title: 'Fahrenheit 451', author: 'Ray Bradbury', location: 'San Francisco', price: 17.50 },
  { id: 41, title: 'The Sun Also Rises', author: 'Ernest Hemingway', location: 'Chicago', price: 19.99 },
  { id: 42, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', location: 'New York', price: 14.99 },
  { id: 43, title: 'Beloved', author: 'Toni Morrison', location: 'Los Angeles', price: 16.75 },
  { id: 44, title: 'The Sound and the Fury', author: 'William Faulkner', location: 'San Francisco', price: 21.99 },
  { id: 45, title: 'The Trial', author: 'Franz Kafka', location: 'Chicago', price: 13.99 },
  { id: 46, title: 'The Bell Jar', author: 'Sylvia Plath', location: 'New York', price: 18.50 },
  { id: 47, title: 'Ulysses', author: 'James Joyce', location: 'Los Angeles', price: 24.50 },
  { id: 48, title: 'On the Road', author: 'Jack Kerouac', location: 'San Francisco', price: 17.99 },
  { id: 49, title: 'Invisible Man', author: 'Ralph Ellison', location: 'Chicago', price: 22.75 },

  { id: 50, title: 'Heart of Darkness', author: 'Joseph Conrad', location: 'New York', price: 15.99 },
  { id: 51, title: 'A Tale of Two Cities', author: 'Charles Dickens', location: 'Los Angeles', price: 14.50 },
  { id: 52, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', location: 'San Francisco', price: 16.99 },
  { id: 53, title: 'Gone with the Wind', author: 'Margaret Mitchell', location: 'Chicago', price: 19.99 },
  { id: 54, title: 'A Clockwork Orange', author: 'Anthony Burgess', location: 'New York', price: 13.99 },
  { id: 55, title: 'Middlemarch', author: 'George Eliot', location: 'Los Angeles', price: 22.50 },
  { id: 56, title: 'The Grapes of Wrath', author: 'John Steinbeck', location: 'San Francisco', price: 20.99 },
  { id: 57, title: 'The Alchemist', author: 'Paulo Coelho', location: 'Chicago', price: 18.25 },
  { id: 58, title: 'Dune', author: 'Frank Herbert', location: 'New York', price: 25.50 },
  { id: 59, title: 'The Road', author: 'Cormac McCarthy', location: 'Los Angeles', price: 14.75 }
];


// Available locations for filtering
const availableLocations = ['All', 'New York', 'San Francisco', 'Los Angeles', 'Chicago'];

const BookStore = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Filtered books based on the selected location
  const filteredBooks = selectedLocation === 'All'
    ? booksData
    : booksData.filter(book => book.location === selectedLocation);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📚 Online Book Store</h1>

      {/* Location filter */}
      <div style={styles.filterContainer}>
        <label htmlFor="location-filter" style={styles.filterLabel}>Filter by Location:</label>
        <select
          id="location-filter"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          style={styles.select}
        >
          {availableLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Books display */}
      <div style={styles.booksGrid}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} style={styles.bookCard}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <p style={styles.bookAuthor}>by {book.author}</p>
              <p style={styles.bookLocation}>Location: {book.location}</p>
              <p style={styles.bookPrice}>Price: ${book.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p style={styles.noBooks}>No books available for the selected location.</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for better structure and design
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#EFEEE8',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  filterLabel: {
    marginRight: '10px',
    fontSize: '1.1rem',
  },
  select: {
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  booksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  bookCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    textAlign: 'center',
  },
  bookTitle: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '10px',
  },
  bookAuthor: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '8px',
  },
  bookLocation: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '10px',
  },
  bookPrice: {
    fontSize: '1.1rem',
    color: '#27ae60',
    fontWeight: 'bold',
  },
  noBooks: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#e74c3c',
  },
};

export default BookStore;
