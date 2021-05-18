import React from 'react';

class Students extends React.Component{
    state = {
        index: 0,
        loadingStatus: false,
        studentList: this.props.studentArr
    }

    componentDidMount(){
        this.setState({
            loadingStatus: false
        })
        setInterval(()=>{
            this.setState({
                loadingStatus: true
            })
        }, 2000)
    }

    render(){
        return(
            <ul>
                <li>{this.state.studentList[0]}</li>
                <li>{this.state.studentList[1]}</li>
                <li>{this.state.studentList[2]}</li>
                <li>{this.state.studentList[3]}</li>
                <li>{this.state.studentList[4]}</li>
                <li>{this.state.studentList[5]}</li>
                <li>{this.state.loadingStatus.toString()}</li>
            </ul>
        )
    }
}

export default Students;