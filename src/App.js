import Greeting from './components/Greetings/Greeting';
import Async from './components/Async/Async';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Async />
      <Greeting />
    </div>
  );
}

export default App;