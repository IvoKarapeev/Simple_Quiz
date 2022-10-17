import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        'score':0,
        'level':1
    },
    reducers:{
        compliteQuestion: (state,action) => {

            state.score += 1;
        },
        wrongQuestion: (state,action) => {
            state.score = 0;
        },
        levelUp: (state,action) => {
            state.level += 1;
        }
    }
    
});

export const { compliteQuestion,wrongQuestion,levelUp } = quizSlice.actions;

export default quizSlice.reducer;