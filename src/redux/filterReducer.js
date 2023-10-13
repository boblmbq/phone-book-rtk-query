const { createReducer, createAction } = require('@reduxjs/toolkit');

export const filterChange = createAction('filter/change');

export const filterReducer = createReducer('', builder => {
  builder.addCase(filterChange, (state, action) => (state = action.payload));
});

export const selectFilter = state => state.filter;

