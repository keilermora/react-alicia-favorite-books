import React from 'react';
import { FilterActionType, FilterState } from '../../stores/filter';

export const FilterStateCtx = React.createContext<{
  filterState: FilterState;
  dispatchFilterState: React.Dispatch<FilterActionType>;
} | null>(null);
