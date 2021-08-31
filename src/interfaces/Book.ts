interface Book {
  id: string;
  author: string;
  genre: string;
  imageUrl: string;
  publishedAt: PublishedAt;
  saga: string;
  summary: string;
  title: string;
}

interface PublishedAt {
  seconds: number;
}

export default Book;
