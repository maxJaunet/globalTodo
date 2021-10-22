import{ useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import AllCategories from '../Categories/AllCategories';
import AllPosts from '../Posts/AllPosts';
import Home from '../Home/Home';

const Routing = () => {
   
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
        .then((allCategories) => {
          setCategories(allCategories.data);
          console.log(allCategories)
        })
      }, []);
    
      const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
        .then((allPosts) => {
          setPosts(allPosts.data);
          console.log(allPosts)
        })
      }, []);
    
      const [posts, setPosts] = useState([]);

  return (
        <div style={{backgroundColor: 'black'}}>
        <Switch>
          <Route path="/categories">
            <AllCategories
              categories={categories} 
            />
          </Route>
          <Route path="/posts">
            <AllPosts
              posts={posts}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
  )
}

export default Routing;