import React from 'react';
import { FirebaseDataStateCtx } from '../contexts/FirebaseDataState';

export const useFirebaseDataState = () => {
  const ctx = React.useContext(FirebaseDataStateCtx);

  if (!ctx) {
    throw new Error('useFirebaseDataState must be used within the FirebaseDataStateCtx');
  }

  return ctx;
};
