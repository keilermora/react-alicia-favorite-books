import { FC, memo, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../interfaces/Book';

import styles from './BookListItem.module.css';

interface BookListItemProps {
  book: Book;
}

const BookListItem: FC<BookListItemProps> = memo(({ book }): ReactElement => {
  return (
    <div className={styles.bookListItem}>
      <Link to={`/book/${book.id}`}>
        <img
          src={book.imageUrl}
          alt={book.title}
          width={226}
          height={350}
          loading="lazy"
        />
      </Link>
    </div>
  );
});

export default BookListItem;
