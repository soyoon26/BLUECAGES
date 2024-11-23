import { useState, useEffect } from "react";
import BookCard from "./BookCard";

interface Book {
  title: string;
  author: string;
  cover?: string;
  price?: number;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  interface BookResponse {
    title: string;
  }

  interface ApiResponse {
    item: {
      title: string;
      author: string;
      cover?: string;
      priceSales?: number;
    }[];
  }

  const fetchBooks = async () => {
    try {
      const response = await fetch("/books.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch books.json: ${response.statusText}`);
      }

      const bookTitles: BookResponse[] = await response.json();

      const uniqueTitles = [...new Set(bookTitles.map((book) => book.title))];

      const fetchedBooks: Book[] = [];
      for (const title of uniqueTitles) {
        const apiUrl = `/api/proxy?query=${encodeURIComponent(title)}`;
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            if (response.status === 404) {
              console.warn(`No result found for "${title}"`);
              continue;
            }
            throw new Error(`Failed to fetch API: ${response.statusText}`);
          }

          const data: ApiResponse = await response.json();

          if (data.item && data.item.length > 0) {
            const bookData = data.item[0];
            fetchedBooks.push({
              title: bookData.title,
              author: bookData.author,
              cover: bookData.cover,
              price: bookData.priceSales,
            });
          }
        } catch (error) {
          console.error(`Error fetching "${title}":`, error);
        }
      }

      if (fetchedBooks.length === 0) {
        setErrorMessage("No books found.");
      } else {
        setBooks(fetchedBooks);
      }
    } catch (error) {
      console.error("Error loading books:", error);
      setErrorMessage("An error occurred while loading books.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "16px",
      }}
    >
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          cover={book.cover}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookList;
