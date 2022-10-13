import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        'score':0
    },
    reducers:{
        compliteQuestion: (state,action) => {

            let res = state.score + 1;
            let newScore = {'score':res};
            return newScore;
        },
        wrongQuestion: (state,action) => {
            state.score = 0;
        }
    }
    
});

export const { compliteQuestion,wrongQuestion } = quizSlice.actions;

export default quizSlice.reducer;