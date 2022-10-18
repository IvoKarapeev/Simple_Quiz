import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        'score':0,
        'question':1,
        'level':1
    },
    reducers:{
        compliteQuestion: (state,action) => {
            state.question += 1
            state.score += 1;
        },
        wrongQuestion: (state,action) => {
            state.question += 1
        },
        levelUp: (state,action) => {
            state.level += 1;
        },
        completeLastQuestion(state,action) {
            state.score += 1;
        },
        startAgain(state,action) {
            state.score = 0
            state.question = 1
            state.level = 1
        }
    }
    
});

export const { compliteQuestion,wrongQuestion,levelUp,completeLastQuestion,startAgain } = quizSlice.actions;

export default quizSlice.reducer;