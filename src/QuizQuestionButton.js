import React, {Component} from 'react';

class QuizQuestionButton extends Component{

    // Calls the handle click method in QuizQuestion when a button is pressed
    // and pass that the button text value to that method
    handleClick(){
        this.props.clickHandler(this.props.button_text)
    }

    render(){
        return(
            <li>
                <button onClick= {this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        );
    }

}
export default QuizQuestionButton;