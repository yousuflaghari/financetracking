import { createSlice } from "@reduxjs/toolkit";

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    transaction: [],
  },
  reducers: {
    addtransaction: (state, action) => {
      const { name, value, type, date } = action.payload;
      console.log(name, value, type, date);
      state.transaction.push({ name, value, date, type });
    },
  },
});

export const { addtransaction } = financeSlice.actions;

export default financeSlice.reducer;
