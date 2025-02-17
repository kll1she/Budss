import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';
import Home from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
