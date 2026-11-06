import logo from './logo.svg';
import './App.css';
import Info from './Info';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Info
        title="Welcome to Fullstack Development - I"
        subtitle="React JS Programming Week09 Lab exercise"
        studentId="101540372"
        name="Daviti Sidana"
        college="George Brown College, Toronto"
      />
    </div>
  );
}

export default App;
