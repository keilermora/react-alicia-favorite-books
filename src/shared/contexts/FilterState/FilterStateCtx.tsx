import React from 'react';
import { FilterActionType, FilterState } from 'shared/stores/filter';

interface FilterStateCtxInterface {
  filterState: FilterState;
  dispatchFilterState: React.Dispatch<FilterActionType>;
}

export const FilterStateCtx = React.createContext<FilterStateCtxInterface | null>(null);
