import { createContext, Dispatch } from 'react';
import { FirebaseDataActionType, firebaseDataInitialState } from 'shared/stores/firebaseData';

interface FirebaseDataStateContextInterface {
  firebaseDataState: typeof firebaseDataInitialState;
  dispatchFirebaseData: Dispatch<FirebaseDataActionType>;
}

const FirebaseDataStateContext = createContext<FirebaseDataStateContextInterface | null>(null);

export default FirebaseDataStateContext;
