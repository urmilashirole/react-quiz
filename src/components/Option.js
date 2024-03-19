import React, { Component } from 'react';

class Option extends Component {
    render(){
        const {option, selectedOption, onOptionChange} = this.props;
        return(
            <div className="options">
                {option.map((option, index) => (
                    <div key={index} className="form-check">
                      <input
                        type="radio"
                        name="option"   
                        value={option}
                        checked={selectedOption===option}
                        onChange={onOptionChange}
                        className="form-check-input"
                        />
                        <label className="form-check-label">{option}</label>
                    </div>
                ))}
            </div>
        );
    }
} 
export default Option;