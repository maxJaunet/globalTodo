import { useState } from 'react';
import { Grid, Container, Paper, Button, Popper, Box, IconButton } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CreateIcon from '@mui/icons-material/Create';

const AllCategories = (props) => {
    const categories = props.categories;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [cat, setCat] = useState({
        title: '',
        desc: ''
      });
    
      const clickHandler = () => {
        axios.post('http://localhost:5000/categories/post', cat).then( () => {
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

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    return (
            <Container maxWidth="lg" style={{padding: '2.5rem 0'}}>
              <Grid container spacing={2}>
                  {categories.map((cat, index) => {
                      return (
                          <Grid item key={index} xs={3}>
                            <Paper sx={{padding: '1rem 1.5rem', borderRadius: '20px'}}>
                              <Box style={{borderLeft: '2px solid grey', padding: '0 1rem', textAlign: 'left', height: "4rem"}}>
                                <h3>{cat.title}</h3>
                                <p style={{fontSize: '0.8rem'}}>{cat.desc}</p>
                              </Box>
                              <div style={{width: '50%', position: 'relative', bottom: '-2.4rem', left: '8.2rem'}}>
                                <Link underline="none" to={`/categories/${cat.title}`}>
                                <IconButton sx={{backgroundColor: '#262626'}}>
                                  <CreateIcon color="success" />
                                </IconButton>
                                <IconButton sx={{backgroundColor: '#262626'}}>
                                  <VisibilityOutlinedIcon color="primary" />
                                </IconButton>
                                </Link> 
                                <Popper placement="bottom" open={open} anchorEl={anchorEl}>
                                    <Paper sx={{padding: '1rem', border: '2px solid black'}}>
                                      <p style={{fontWeight: 'bold'}}>Are you sure you want to delete this item ?</p>
                                      <p style={{fontSize: '0.8rem', marginBottom: '1rem'}}>Category : <strong>{cat.title}</strong></p>
                                      <Grid container justifyContent="flex-end" spacing={2} width={400}>
                                        <Grid item>
                                          <Button
                                            color="primary"
                                            size="small"
                                            variant="text"
                                            onClick={(e, catId) => setOpen(!open)}
                                            >
                                            Cancel
                                          </Button>
                                        </Grid>
                                        <Grid item>
                                          <Button
                                            color="error"
                                            size="small"
                                            variant="contained"
                                            onClick={(e, catId) => deleteCategory(e, cat._id)}
                                            >
                                            Delete permanently
                                          </Button>
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                </Popper>
                                <IconButton
                                  sx={{backgroundColor: '#262626'}}
                                  color="error"
                                  onClick={e => handleClick(e)}
                                  >
                                  <DeleteIcon/>
                                </IconButton>
                              </div>
                                
                            </Paper>
                        </Grid>
                      )
                })}
              </Grid>

              <Container style={{color: 'white', marginTop: '3rem'}}>
                  <h2>Add a new category</h2>
                  <Grid container spacing={3} variant="form" action="/categories" method="POST" sx={{padding: {xs: '0', md: '0 10rem'}}} justifyContent="center">
                    <Grid item xs={5}>
                      <input
                        maxLength={15}
                        placeholder="   Category name"
                        style={{width: '100%', height: '1.8rem', borderRadius: '20px'}}
                        type="text"
                        value={cat.title}
                        onChange={e => handleChange(e)}
                        name="title"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <input
                        maxLength={100}
                        placeholder="   Description"
                        style={{width: '100%', height: '1.8rem', borderRadius: '20px'}}
                        type="text"
                        value={cat.desc}
                        onChange={e => handleChange(e)}
                        name="desc"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button sx={{borderRadius: '20px'}} type="submit" color="success" variant="contained" onClick={e => clickHandler(e)}>Add</Button>
                    </Grid>
                  </Grid>
              </Container>
              

            </Container>
        )
}

export default AllCategories