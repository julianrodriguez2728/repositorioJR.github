import './App.css';
import Home from './components/home/Home';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import NavBar from './components/nav/NavBar';
function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
    </div>
  );
}

export default App;
