import React from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useMediaQuery} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom'
import Image from 'mui-image';
function Footer2() {
	const mobile = useMediaQuery('(max-width:600px)');
  return (
    <Box bgcolor="#F9FAFB" py={4}>
		  <Grid container lg={10.3} xs={10} justifyContent="center" alignItems="center" sx={{margin:'auto'}}>
        <Grid item xs={12} md={7}>
				  <Grid container spacing={2}>
					  <Grid item lg={12} xs={12} sx={{margin:'initial'}}>
						<Image src="https://drive.google.com/uc?export=view&id=175mDYDsRV9XKYulKbW1UgsrSOU63u2oD" style={{ width: '76px', height: '36px' }} />
					  </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} sx={{margin:"auto"}}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                SOLUTIONS
						  </Typography>
						  <Link to='/app' style={{textTransform:'none',textDecoration:'none'}}>
              <Typography variant="body2" color="textSecondary">
                App Development
							  </Typography></Link>
							  <Link to='/webDev' style={{textTransform:'none',textDecoration:'none'}}>	  
              <Typography variant="body2" color="textSecondary">
                Web Development
							  </Typography></Link>
							  <Link to='/seo' style={{textTransform:'none',textDecoration:'none'}}>
              <Typography variant="body2" color="textSecondary">
                Search Engine Optimization
							  </Typography></Link>
							  <Link to='/wordpress' style={{textTransform:'none',textDecoration:'none'}}>
              <Typography variant="body2" color="textSecondary">
                Wordpress Development
							  </Typography></Link>
							  <Link to='/ui' style={{textTransform:'none',textDecoration:'none'}}>
              <Typography variant="body2" color="textSecondary">
                Web Animations
							  </Typography></Link>
							  <Link to='/devops' style={{textTransform:'none',textDecoration:'none'}}>
              <Typography variant="body2" color="textSecondary">
                Devops
							  </Typography>
							  </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
				COMPANY
              </Typography>
              <Typography variant="body2" color="textSecondary">
			  <a href="mailto:sales@rajivkhanduja.com" style={{textTransform:'none',textDecoration:'none'}} >   Email: sales@rajivkhanduja.com </a>
              </Typography>
               <Typography variant="body2" color="textSecondary">
			  <a href="+91-8607914832" style={{textTransform:'none',textDecoration:'none'}}>    Phone: +91 8295276192 </a>
              </Typography> 
              
              <Typography variant="body2" color="textSecondary">
                Address: Remote
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
			  Get in Touch
              </Typography>
              <Link to="/HireUs" style={{textDecoration:'none',textTransform:'none'}}>
  <Typography variant="body2" color="textSecondary">
    Contact us
  </Typography>
</Link>
              <Typography variant="body2" color="textSecondary">
                Email
						  </Typography>
						  <Grid item lg={12}>
				  <IconButton href="https://github.com/" target="_blank" rel="noopener">
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener">
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener">
            <InstagramIcon color="primary" />
          </IconButton>  
				  </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
				  {mobile ? "" : <Box display="flex" justifyContent="center" alignItems="center">
					  <Image src="https://drive.google.com/uc?export=view&id=1pUjs3GwoJBl1_PmrYtprffUPFl5QiTzw" style={{ width: "560px", height: '303px', position: "absolute", }} alt="placeholder" />
				  </Box>}
        </Grid>
      </Grid>
		  <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
			  <Grid container lg={10} xs={10} sx={{ margin: 'auto',justifyContent:'center' }}>
				  <Grid item lg={6} sx={{textAlign:'center'}}>
				  <Typography variant="body2" color="textSecondary">
          &copy; Rajiv Technologies 2023
        </Typography> 
				  </Grid>
				  
       
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          
				  </Box>
				  </Grid>
		  </Box>
		  
    </Box>
  );
}

export default Footer2;
