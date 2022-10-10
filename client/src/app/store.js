import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/quizSlice';

export default configureStore({
    reducer:{
        quiz: quizReducer
    }
});