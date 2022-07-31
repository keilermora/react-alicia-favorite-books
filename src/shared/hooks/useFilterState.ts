import React from 'react';
import { FilterStateCtx } from 'shared/contexts/FilterState';

export const useFilterState = () => {
  const ctx = React.useContext(FilterStateCtx);

  if (!ctx) {
    throw new Error('useFilterState must be used within the FilterStateCtx');
  }

  return ctx;
};
