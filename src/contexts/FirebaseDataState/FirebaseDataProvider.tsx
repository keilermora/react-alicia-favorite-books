import { useReducer } from 'react';
import { firebaseDataInitialState, firebaseDataReducer } from 'stores/firebaseData';
import { FirebaseDataStateCtx } from '.';

interface FirebaseDataStateProviderProps {
  children: React.ReactNode;
}

export const FirebaseDataStateProvider = ({ children }: FirebaseDataStateProviderProps) => {
  const [state, dispatch] = useReducer(firebaseDataReducer, firebaseDataInitialState);

  return (
    <FirebaseDataStateCtx.Provider
      value={{ firebaseDataState: state, dispatchFirebaseData: dispatch }}
    >
      {children}
    </FirebaseDataStateCtx.Provider>
  );
};
