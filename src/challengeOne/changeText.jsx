import React from 'react';

class ChangeText extends React.Component{
    state = {
        textContent: "Left",
    }

    btnClicked(val){
        this.setState({
            textContent: val
        })

    }

    render(){
        return (
            <>
                <h1>This is the {this.state.textContent} text.</h1>
                <button className="textBtn" id="Left" onClick={ () => this.btnClicked("Left")}>Show Left</button>
                <button className="textBtn" id="Right" onClick={ () => this.btnClicked("Right")}>Show Right</button>
            </>
        );
    }
}

export default ChangeText;