import Image from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  cover?: string;
  price?: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, cover, price }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      {cover ? (
        <Image
          src={cover}
          alt={title}
          width={200}
          height={300}
          style={{ borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Image
        </div>
      )}
      <h3 style={{ fontSize: "16px", marginTop: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{author}</p>
      {price && (
        <p style={{ fontSize: "14px", color: "#555" }}>
          {price.toLocaleString()} 원
        </p>
      )}
    </div>
  );
};

export default BookCard;
