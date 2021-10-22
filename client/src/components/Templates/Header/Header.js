import { Container, Grid } from "@mui/material";
import { Link } from 'react-router-dom';


const Header = () => {
    const liStyles = {
        textDecoration: 'none',
        color: 'inherit'
    }
  return (
      <Container maxWidth="xl" sx={{backgroundColor: '#262626', top: 0, padding: '0.5rem 0', color: 'white'}}>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={2} md={4} textAlign="left">
                    AppName
                </Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Link style={liStyles} to="/">Home</Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Link style={liStyles} to="/categories">Categories</Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Link style={liStyles} to="/posts">Posts</Link>
                        </Grid>
                    </Grid>
                        <Grid item xs={4}>
                    </Grid>   
                </Grid>
            </Grid> 
        </Container>
      </Container>
  )
}

export default Header;