import { gql } from 'react-apollo';

export const allBooksQuery = gql`query {
  allBooks (orderBy: publishedAt_DESC) {
    id
    title
    author {
      id
      name
    }
    publishedAt
    genre {
      id
      name
    }
    imageUrl
    summary
  }
}`;

export const allAuthorsQuery = gql`query {
  allAuthors (orderBy: name_ASC) {
    id,
    name,
  }
}`;

export const allGenresQuery = gql`query {
  allGenres (orderBy: name_ASC) {
    id,
    name,
  }
}`;
