import { FirebaseDataState } from './firebaseDataState';

export enum FirebaseDataActions {
  SET_FIREBASE_DATA = 'SET_FIREBASE_DATA',
}

export type FirebaseDataActionType = {
  type: typeof FirebaseDataActions.SET_FIREBASE_DATA;
  payload: FirebaseDataState;
};
