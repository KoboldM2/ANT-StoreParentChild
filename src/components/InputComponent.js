import React, {Component} from 'react'

export class InputComponent extends Component {        
    render() {
        return( 
            <div>
                <input
                    name = {this.props.name}
                    type = {this.props.inputType}
                    placeholder={this.props.placeholder}
                    value = {this.props.value}
                    onChange = {this.props.onChange}
                    accept = {this.props.accept}
                    size = {this.props.inputSize}
                    min = {this.props.inputMin}
                    max = {this.props.inputMax}
                />
            </div>
        )
    }
}

export default InputComponent