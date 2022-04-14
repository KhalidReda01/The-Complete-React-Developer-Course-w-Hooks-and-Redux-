import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
