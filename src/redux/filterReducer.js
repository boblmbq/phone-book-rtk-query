import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const selectFilter = state => state.filter;

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
