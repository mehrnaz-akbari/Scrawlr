// Common Components
import VoteRow from "./components/VoteRow";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <VoteRow upVote={() => {}} />
        <VoteRow upVote={() => {}} />
        <VoteRow upVote={() => {}} />
      </div>
    </>
  );
}

export default App;
