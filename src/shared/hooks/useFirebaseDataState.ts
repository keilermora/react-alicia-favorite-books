import { useContext } from 'react';
import FirebaseDataStateContext from 'shared/contexts/FirebaseDataState/FirebaseDataContext';

const useFirebaseDataState = () => {
  const context = useContext(FirebaseDataStateContext);

  if (!context) {
    throw new Error('useFirebaseDataState must be used within the FirebaseDataStateCtx');
  }

  return context;
};

export default useFirebaseDataState;
