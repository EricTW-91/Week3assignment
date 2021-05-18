import React from 'react';

class VotingCounter extends React.Component{
    state = {
        name: this.props.name,
        value: this.props.value
    }

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    render(){
        return (
            <div className="votingDiv" id="phpDiv">
                <span>{this.state.value}</span>
                <h3>{this.state.name}</h3>
                <button 
                    onClick={() => this.handleIncrement()}
                    className="votingBtn"
                >
                        Vote here
                </button>
            </div>

        );
    }
}

export default VotingCounter;