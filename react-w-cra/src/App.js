import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Hey There!'
  const buttonStyle= {fontSize:'4em', backgroundColor:'red'}
  return (
    <div className='App'>
      <p>{message}</p>
      <p>{2+2}</p>
      <button id= 'superButton' style={buttonStyle}>Lookee Here</button>
    </div>
  );
}

export default App;
