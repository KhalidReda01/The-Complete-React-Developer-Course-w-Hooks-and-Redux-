import moment from 'moment';
import { setStartDate, setEndDate, sortByDate } from "../../actions/filters";

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  })
});
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  })
})
// Challenge Time
test('should  generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  })
})
