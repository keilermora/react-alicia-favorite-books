import { useContext } from 'react';
import FilterStateContext from 'shared/contexts/FilterState/FilterStateContext';

const useFilterState = () => {
  const context = useContext(FilterStateContext);

  if (!context) {
    throw new Error('useFilterState must be used within the FilterStateCtx');
  }

  return context;
};

export default useFilterState;
