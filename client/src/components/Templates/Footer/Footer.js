import { Container, Grid, Stack } from "@mui/material";
import { Link } from 'react-router-dom';


const Footer = () => {
    const liStyles = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '0.8rem'
    }
    return (
        <Container maxWidth="xl" sx={{backgroundColor: '#262626', bottom: 0, color: 'white', padding: '2rem 0'}}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={2} md={4} textAlign="left">
                        <h3>Links</h3>
                        <Stack>
                            <Link exact to="https://github.com/maxJaunet" style={liStyles}>Github</Link>
                            {/* <Link exact to="/categories" >Developer's page</Link> */}
                        </Stack>
                    </Grid>
                    <Grid item xs={4} md={4} textAlign="left">
                        <h3>Navigation</h3>
                        <Stack>
                            <Link exact to="/"  style={liStyles}>Home</Link>
                            <Link exact to="/categories" style={liStyles} >Categories</Link>
                            <Link exact to="/posts" style={liStyles} >Posts</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} md={4} textAlign="left">
                        <h3>Website</h3>
                        <Stack>
                            <Link exact to="/about" style={liStyles}>About</Link>
                        </Stack>
                    </Grid>
                </Grid> 
            </Container>
        </Container>    )
  }
  
  export default Footer;