import React from 'react';
import { FilterActionType, filterInitialState } from 'shared/stores/filter';

interface FilterStateCtxInterface {
  filterState: typeof filterInitialState;
  dispatchFilterState: React.Dispatch<FilterActionType>;
}

export const FilterStateCtx = React.createContext<FilterStateCtxInterface | null>(null);
