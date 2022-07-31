import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Book } from 'shared/models/Book';

import styles from './BookListItem.module.css';

interface BookListItemProps {
  book: Book;
}

const BookListItem = memo(({ book }: BookListItemProps) => {
  return (
    <div className={styles.bookListItem}>
      <Link to={`/book/${book.id}`}>
        <img src={book.imageUrl} alt={book.title} width={226} height={350} loading="lazy" />
      </Link>
    </div>
  );
});

export default BookListItem;
