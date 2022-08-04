import React from 'react';
import { FilterActionType, FilterState } from 'shared/stores/filter';

interface FilterStateContextInterface {
  filterState: FilterState;
  dispatchFilterState: React.Dispatch<FilterActionType>;
}

const FilterStateContext = React.createContext<FilterStateContextInterface | null>(null);

export default FilterStateContext;
