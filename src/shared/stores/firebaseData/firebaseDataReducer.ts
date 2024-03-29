import { FirebaseDataActionType, FirebaseDataActions, firebaseDataInitialState } from '.';

export const firebaseDataReducer = (
  state: typeof firebaseDataInitialState,
  action: FirebaseDataActionType
) => {
  switch (action.type) {
    case FirebaseDataActions.SET_FIREBASE_DATA:
      const { books, authors, genres, sagas } = action.payload;

      return {
        ...state,
        books,
        authors,
        genres,
        sagas,
      };
    default:
      return state;
  }
};
