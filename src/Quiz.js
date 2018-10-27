import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }

    render(){
        return(
            // Quiz Question Component takes a prop called quiz_question.
            // The prop refrences the JSON data via the variable quizData and refrences the quiz_question JSON array.
            // The quiz_position state is used to access the question (-1 since array start at 0)
            <QuizQuestion quiz_question= {quizData.quiz_questions[this.state.quiz_position -1]}/>
        );
    }

}
export default Quiz;