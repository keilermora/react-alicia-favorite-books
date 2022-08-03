import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParams } from 'shared/models/QueryParams';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParams = useMemo(
    () => (queryParams: QueryParams) => {
      const newQueryParams: QueryParams = {};
      const { text, author, genre, saga } = queryParams;

      if (text) {
        newQueryParams.text = text;
      }

      if (author) {
        newQueryParams.author = author;
      }

      if (genre) {
        newQueryParams.genre = genre;
      }

      if (saga) {
        newQueryParams.saga = saga;
      }

      setSearchParams(newQueryParams as URLSearchParams);
    },
    [setSearchParams]
  );

  return { queryParams: searchParams, setQueryParams: updateQueryParams };
};
