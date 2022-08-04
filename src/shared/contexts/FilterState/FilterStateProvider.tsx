import { useReducer } from 'react';
import { filterInitialState, filterReducer } from 'shared/stores/filter';
import FilterStateContext from './FilterStateContext';

interface FilterStateProviderProps {
  children: React.ReactNode;
}

const FilterStateProvider = ({ children }: FilterStateProviderProps) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  return (
    <FilterStateContext.Provider value={{ filterState: state, dispatchFilterState: dispatch }}>
      {children}
    </FilterStateContext.Provider>
  );
};

export default FilterStateProvider;
