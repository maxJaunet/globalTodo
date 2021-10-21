import { useState } from 'react';
import { Grid, Container, Paper } from '@mui/material';
import axios from 'axios';

const AllCategories = (props) => {
    const categories = props.categoryObject;
    const [cat, setCat] = useState({
        title: '',
        desc: ''
      });
    
      const clickHandler = () => {
        axios.post('http://localhost:5000/categories', cat).then( () => {
            window.location.reload(false)
          } );  
      }

      const deleteCategory = (e, catId) => {
        axios.delete(`http://localhost:5000/categories/${catId}`).then( () => {
            window.location.reload(false)
          } );  
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
            <Container>
              <Grid container>
                  {categories.map((cat, index) => {
                      return (
                          <Grid item key={index}>
                        <Paper>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                            <a href={`/${cat.title}`}>See</a>
                            <button onClick={(e, catId) => deleteCategory(e, cat._id)}>Delete</button>
                        </Paper>
                    </Grid>
                      )
                    
                })}
              </Grid>
              
      <h2>Post new category</h2>
      <form action="/categories" method="POST">
        <input type="text" value={cat.title} onChange={e => handleChange(e)} name="title"/>
        <input type="text" value={cat.desc}  onChange={e => handleChange(e)} name="desc"/>
        <button type="submit" onClick={e => clickHandler(e)}>add category</button>
      </form>
            </Container>
        )
}

export default AllCategories