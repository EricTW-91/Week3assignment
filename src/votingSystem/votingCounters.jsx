import React, { Component } from 'react';
import VotingCounter from './votingCounter'

class VotingCounters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0, name: 'Php'},
            {id: 2, value: 0, name: 'Python'},
            {id: 3, value: 0, name: 'Go'},
            {id: 4, value: 0, name: 'Java'},
        ]
     }
    render() { 
        return ( 
            <div className="votingSection">
                {this.state.counters.map(counter => { return <VotingCounter key={counter.id} name={counter.name} value={counter.value} />})}
            </div>
         );
    }
}
 
export default VotingCounters;