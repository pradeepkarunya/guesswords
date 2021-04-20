import './App.css';
import Congrats from './congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div className="container">
      <div data-test="component-app"></div>
      {/* <div>Hi</div> */}
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

export default App;
