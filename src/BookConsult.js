import { Grid, Typography, Button, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useMediaQuery} from "@mui/material";
import Link from '@mui/material/Link';
const ContactUsButton = () => {
	const mobile = useMediaQuery('(max-width:600px)');
  return (
    <Link href='/Hireus'>
    <Button variant="contained" sx={{ bgcolor: '#E64B18', mt: mobile?"50px":20, height:mobile?"70px": 132,width:mobile?'285px':618,fontSize:mobile?"16px":"30px",textTransform:'none' }}>
      Contact Us <ArrowRightAltIcon sx={{ ml: 1 }} />
    </Button>
    </Link>
  );
};

const BookConsult = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	return (
	  <Grid container lg={12} sx={{background:'#333333'}}>
    <Grid container lg={10.3} xs={10} sx={{margin:'auto'}}>
      <Grid item xs={12} md={6} lg={6}>
	  <Typography variant="h4" sx={{marginTop:'95px',color:'#FFFFFF'}}>Book a consultant for project line</Typography>
        <Typography variant="body1" sx={{marginBottom:mobile?"0px":'95px',color:'#D1D5DB'}}>Our consultants are experts in helping businesses solve their digital problems. Book a consultant today to discuss your project needs.</Typography>
        </Grid>
      <Grid item xs={11} md={6} lg={6} sx={{margin:mobile?'auto':''}}>
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ContactUsButton />
        </Box>
      </Grid>
			</Grid>
			</Grid>
  );
};

export default BookConsult;
