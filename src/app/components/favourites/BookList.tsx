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

  const fetchBooks = async () => {
    try {
      const response = await fetch("/books.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch books.json: ${response.statusText}`);
      }

      const bookTitles = await response.json();
      console.log("Book titles loaded from /books.json:", bookTitles);

      const fetchPromises = bookTitles.map(async (book: { title: string }) => {
        const apiUrl = `/api/proxy?query=${encodeURIComponent(book.title)}`;
        console.log(`Fetching data for "${book.title}" with URL: ${apiUrl}`);
        try {
          const response = await fetch(apiUrl);

          if (!response.ok) {
            if (response.status === 404) {
              console.warn(`결과없음 "${book.title}"`);
              return null;
            }
            throw new Error(`Failed to fetch API: ${response.statusText}`);
          }

          const data = await response.json();
          console.log(`책이름 "${book.title}":`, data);

          if (data.item && data.item.length > 0) {
            const bookData = data.item[0];
            return {
              title: bookData.title,
              author: bookData.author,
              cover: bookData.cover,
              price: bookData.priceSales,
            } as Book;
          } else {
            console.warn(`결과없음2  "${book.title}"`);
          }
        } catch (error) {
          console.error(`에러남 "${book.title}":`, error);
        }
        return null;
      });

      const results = await Promise.all(fetchPromises);
      console.log("All book data fetched:", results);

      const filteredBooks = results.filter(
        (book): book is Book => book !== null
      );

      if (filteredBooks.length === 0) {
        console.warn("No valid books found after filtering.");
        setErrorMessage("No books found.");
      }

      setBooks(filteredBooks);
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
