import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizes: [],
    currentQuizIndex: 0,
    userAnswer: Array(quizData.length).fill(null),
    quizComplete: false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload;
            state.userAnswer[questionIndex] = answer
        },
        nextQues: (state) => {
            if (state.currentQuizIndex < state.quizes.length - 1) {
                state.currentQuizIndex += 1
            }
        },
        prevQues:(state)=>{
            if(state.currentQuizIndex > 0){
                state.currentQuizIndex -= 1
            }
        },
        completeQuiz: (state) =>{
            state.quizComplete = true
        },
        setQuiz: (state,action)=>{
            state.quizes = action.payload
        }
    }
})

export const { setAnswer, nextQues, prevQues, completeQuiz, setQuiz } = quizSlice.actions

export default quizSlice.reducer