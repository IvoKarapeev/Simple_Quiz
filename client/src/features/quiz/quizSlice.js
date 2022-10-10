import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        'one':false,
        'two':false,
        'three':false,
        'four':false,
        'five':false,
        'six':false,
        'seven':false,
        'eight':false,
        'nine':false,
        'ten':false
    },
    reducers:{
        compliteQuestion: (state,action) => {

        }
    }
    
});

export const { compliteQuestion } = quizSlice.actions;

export default quizSlice.reducer;