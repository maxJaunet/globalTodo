import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('http://localhost:5000/category')
    .then((allCategories) => {
      setCategories(allCategories.data);
      console.log(allCategories)
    })
  }, []);

  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState({
    title: '',
    desc: ''
  });

  const clickHandler = () => {
    axios.post('http://localhost:5000/category', cat)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
		setCat((prevValue) => {
			return {
				...prevValue, [name]: value
			}
  })
}

   return (
    <div className="App">
      {categories.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        )
      })}
      <form action="/" method="POST">
        <input type="text" value={cat.title} onChange={e => handleChange(e)} name="title"/>
        <input type="text" value={cat.desc}  onChange={e => handleChange(e)} name="desc"/>
        <button type="submit" onClick={e => clickHandler(e)}>add category</button>
      </form>
    </div>
  );
}

export default App;
