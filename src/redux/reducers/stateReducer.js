//slice reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstState: null,
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    // Azione definita nello slice
    setFirstState: (state, action) => {
      state.firstState = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setFirstState } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
/*
import { SET_FIRST_STATE } from "../actions";

const InitialState = {
	firstState: "",
};

export const postReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_FIRST_STATE:
			return {
				...state,
				firstState: action.payload,
			};
		default:
			return state;
	}
};
*/
