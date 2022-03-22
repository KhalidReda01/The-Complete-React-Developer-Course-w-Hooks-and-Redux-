// Filters Reducer 
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined
}
export default (state=filterReducerDefaultState,action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.text
      }
    case 'SORT_BY_AMOUNT':
      console.log(action.sortBy)
      return {
        ...state,
        sortBy:action.sortBy
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate:action.startDate,
        
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate:action.endDate
      }
    default:
      return state;
  }
}