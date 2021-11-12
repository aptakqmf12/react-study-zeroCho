const React = require('react');
const {Component} = React;

class WordReplay extends Component{
    state = {
        value : 1,
    };
    render(){
        return(
            <React.Fragment>
                <span>{this.state.value}</span>
            </React.Fragment>
        )
        
    }
}

module.exports = WordReplay; 