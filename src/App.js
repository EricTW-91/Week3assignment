import './App.css';
import ChangeText from "./challengeOne/changeText";
import Students from "./challengeTwo/studentList";
import VotingCounters from "./votingSystem/votingCounters";

function App() {
  return (
    <div>
      <div className="challengeOne">
        <ChangeText />
      </div>

      <div className="challengeTwo">
        <Students studentArr={['Amanda', 'Babara', 'Clark', 'Donny', 'Eric', 'Frank']}/>
      </div>

      <div className="votingSystem">
        <VotingCounters />
      </div>
    </div>
  );
}

export default App;
