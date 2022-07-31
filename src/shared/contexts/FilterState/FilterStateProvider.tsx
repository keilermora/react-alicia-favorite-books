import { useReducer } from 'react';
import { filterInitialState, filterReducer } from 'shared/stores/filter';
import { FilterStateCtx } from '.';

interface FilterStateProviderProps {
  children: React.ReactNode;
}

export const FilterStateProvider = ({ children }: FilterStateProviderProps) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  return (
    <FilterStateCtx.Provider value={{ filterState: state, dispatchFilterState: dispatch }}>
      {children}
    </FilterStateCtx.Provider>
  );
};