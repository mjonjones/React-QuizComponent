import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{

    render(){
        // The prop passed from Quiz is used to displays the question in instruction_text
        // A new prop is passed into QuizQuestionButton called button_text/
        // This prop displays the answers of the question using the prop quiz_question (Passed from Quiz) and accessing the JSON data
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                     <ul>
                        <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
                    </ul>
                </section>
            </main>
        );
    }

}
export default QuizQuestion;
