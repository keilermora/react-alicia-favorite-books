export interface FilterState {
  filterText: string;
  selectedAuthor: string;
  selectedGenre: string;
  selectedSaga: string;
}

export const filterInitialState: FilterState = {
  filterText: '',
  selectedAuthor: '',
  selectedGenre: '',
  selectedSaga: '',
};
