import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters:{
  name: "",
}
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.filters.name;