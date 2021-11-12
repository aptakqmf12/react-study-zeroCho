const React = require('react');
const {Component} = React;

class WordReplay extends Component{
    state = {
        word : '김태완',
        value : '',
        result : '',   
    };
    onChageInput = (e) => {
        this.setState({value : e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.value[0] === this.state.word[this.state.word.length-1]){
            this.setState({
                result : '딩동댕',
                value : '',
                word : this.state.value,
            })
        }
        else{
            this.setState({
                result : '떙',
                value : '',
            })
        }
        this.input.focus();
        
    }
    inputRef = (c) => {
        this.input = c;
    }
    render(){
        return(
            <>
                <div>{this.state.word}</div>

                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.inputRef} value={this.state.value} onChange={this.onChageInput}></input>
                    <button>입력!</button>
                </form>

                <div>{this.state.result}</div>
            </>
        )
        
    }
}

module.exports = WordReplay; 