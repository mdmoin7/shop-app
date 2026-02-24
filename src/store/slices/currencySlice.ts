import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR",
  reducers: {
    // action : logic
    // actions are functions related to data changes to be done inside the store
    // action_name:(state, action)=>{}
    // state : current data related to the slice inside the store
    // action : contains action related information to be given to the store by the component
    // every action must return the updated data back to the store
    changeCurrency: (_state, action) => {
      return action.payload; // payload is an optional data that can be sent to the store
      // by the component
    },
  },
});

// actions are used by components to update the store
export const { changeCurrency } = currencySlice.actions;

// reducer are used by the store to update the data inside it
export default currencySlice.reducer;
