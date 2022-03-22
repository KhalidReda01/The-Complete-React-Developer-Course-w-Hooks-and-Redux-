// SET_TEXT-FILTER
export const setTextFilter = ( text='' ) => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy:'Date'
})
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy:'Amount'
})
// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})