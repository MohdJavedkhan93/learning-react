import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Header2 from "./components/Header2";
import List from "./components/List"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header myName="Mohd Javed Khan" />
        <Header2 />
        <List />
        
      </header>
    </div>
  );
}

export default App;
