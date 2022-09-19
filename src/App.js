import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Video />
        <Audio />
        <p>
          Holi React!
        </p>
      </header>
    </div>
  );
}

export default App;
