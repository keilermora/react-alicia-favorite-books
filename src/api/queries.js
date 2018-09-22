export const allBooks = `
  {
    allBooks (orderBy:publishedAt_DESC)
    {
      id
      title
      publishedAt
      imageUrl
      summary
      author {
        id
        name
      }
      genre {
        id
        name
      }
      saga {
        id
        name
      }
    }
  }
`;

export const allFilterParams = `
  {
    allAuthors (orderBy: name_ASC) {
      id
      name
    }
    allGenres (orderBy: name_ASC) {
      id
      name
    }
    allSagas (orderBy: name_ASC) {
      id
      name
    }
  }
`;
