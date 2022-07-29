import React from 'react';
import { FirebaseDataActionType, FirebaseDataState } from '../../stores/firebaseData';

export const FirebaseDataStateCtx = React.createContext<{
  firebaseDataState: FirebaseDataState;
  dispatchFirebaseData: React.Dispatch<FirebaseDataActionType>;
} | null>(null);
