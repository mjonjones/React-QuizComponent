import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }


    render(){
        
        const isQuizEnd = ((this.state.quiz_position -1) == quizData.quiz_questions.length);

        return(
            // Quiz Question Component takes a prop called quiz_question.
            // The prop refrences the JSON data via the variable quizData and refrences the quiz_question JSON array.
            // The quiz_position state is used to access the question (-1 since array start at 0)

            // JSX Conditional used to display the component if isQuizEnd = true
            <div>
                {isQuizEnd ? <QuizEnd /> :
                <QuizQuestion quiz_question= {quizData.quiz_questions[this.state.quiz_position -1]}/>}
            </div>
        );
    }

}
export default Quiz;