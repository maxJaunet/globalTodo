import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllCategories from './components/Categories/AllCategories';
import AllPosts from './components/Posts/AllPosts';
import Home from './components/Home/Home';

function App() {

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
    .then((allCategories) => {
      setCategories(allCategories.data);
      console.log(allCategories)
    })
  }, []);

  const [categories, setCategories] = useState([]);
  

   return (
    <div className="App">
      <Router>
      
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route path="/categories">
            <AllCategories categoryObject={categories} />
          </Route>
          <Route path="/posts">
            <AllPosts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      



      

    </div>

  );
}

export default App;
