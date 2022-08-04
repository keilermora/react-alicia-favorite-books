import { useReducer } from 'react';
import { firebaseDataInitialState, firebaseDataReducer } from 'shared/stores/firebaseData';
import FirebaseDataStateContext from './FirebaseDataContext';

interface FirebaseDataStateProviderProps {
  children: React.ReactNode;
}

const FirebaseDataStateProvider = ({ children }: FirebaseDataStateProviderProps) => {
  const [state, dispatch] = useReducer(firebaseDataReducer, firebaseDataInitialState);

  return (
    <FirebaseDataStateContext.Provider
      value={{ firebaseDataState: state, dispatchFirebaseData: dispatch }}
    >
      {children}
    </FirebaseDataStateContext.Provider>
  );
};

export default FirebaseDataStateProvider;
