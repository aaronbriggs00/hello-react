import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';


function App() {
  return (
    <div>
      <HelloWorld name="World" end="!"/>
      <CounterExample />
    </div>
  );
}

export default App;
