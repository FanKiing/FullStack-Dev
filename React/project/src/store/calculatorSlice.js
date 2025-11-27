import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    height: '',
    gender: 'homme',
    idealWeight: null,
    error: null,
  },
  reducers: {
    setHeight: (state, action) => {
      state.height = action.payload;
      state.error = null;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    calculateIdealWeight: (state) => {
      const heightNum = parseFloat(state.height);

      if (isNaN(heightNum) || heightNum <= 0) {
        state.error = 'La taille doit être un entier!';
        state.idealWeight = null;
        return;
      }

      if (state.gender === 'homme') {
        state.idealWeight = ((heightNum - 100) - ((heightNum - 150) / 4)).toFixed(2);
      } else {
        state.idealWeight = ((heightNum - 100) - ((heightNum - 150) / 2.5)).toFixed(2);
      }
      state.error = null;
    },
    reset: (state) => {
      state.height = '';
      state.idealWeight = null;
      state.error = null;
    },
  },
});

export const { setHeight, setGender, calculateIdealWeight, reset } = calculatorSlice.actions;
export default calculatorSlice.reducer;
