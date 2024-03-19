import React, {Component} from 'react';
import '../App.css';

class Score extends Component {
    render(){
        const {score, onNextQuestion} = this.props;
        return(
            <div>
                <h2>Result</h2>
                <h4> Your Score : {score} </h4>
            </div>
        );
    }
}
export default Score;