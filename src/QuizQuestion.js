import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{

    constructor(props){
        super(props);

        this.state = {
            incorrectAnswer : false
        }

    }

    // Checks if the button pressed is the correct answer by using the button's text
    // and calls the showNextQuestionHandler in the Quiz Component
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler()
        }else{
            this.setState({incorrectAnswer: true})
        }
    }

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
                         {this.props.quiz_question.answer_options.map((answer_option, index)=>{
                            return <QuizQuestionButton key={index} button_text={answer_option} 
                                    clickHandler = {this.handleClick.bind(this)}/>
                         })}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p>Incorrect Answer</p> : null}
            </main>
        );
    }

}
export default QuizQuestion;
