import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from './components/Templates/Header/Header';
import Footer from './components/Templates/Footer/Footer';

function App() {

  
  

   return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
      
    </div>

  );
}

export default App;
