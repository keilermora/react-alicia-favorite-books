import { useReducer } from 'react';
import { filterInitialState, filterReducer } from '../../stores/filter';
import { FilterStateCtx } from './FilterStateCtx';

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
