import React from 'react';
import { FirebaseDataActionType, firebaseDataInitialState } from '../../stores/firebaseData';

interface FirebaseDataStateCtxInterface {
  firebaseDataState: typeof firebaseDataInitialState;
  dispatchFirebaseData: React.Dispatch<FirebaseDataActionType>;
}

export const FirebaseDataStateCtx = React.createContext<FirebaseDataStateCtxInterface | null>(null);
