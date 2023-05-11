import React, { useState } from 'react';
import { Grid, TextField,  Typography,Paper } from '@mui/material';
import axios from 'axios'
import { Navbar } from './Navbar';
import {useMediaQuery} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Link } from 'react-router-dom';
// import {Button} from '@mui/material';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import Footer2 from './Footer';
function SEO ()  {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const mobile = useMediaQuery('(max-width:600px)');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
		  const { data: res } = await axios.post('https://rajivkhanduja.onrender.com/send-email', { name,
		  email,selectedOptions,
		  message,message}).then(response => {
      // Handle response from the backend
      console.log(response);
    });
		const data = await res;
		console.log(data);
	  }
    
	  catch(error) { 
		console.error(error);
		  
	  }
    // Backend code to send email
  }
  return (
    <Box>
		  <Navbar />
		  <Grid container lg={12} xs={12} sx={{backgroundColor:'#F9FAFB'}}>
      <Grid container lg={10} xs={12} sx={{margin:mobile?'auto':' 80px auto',marginBottom:mobile?'750px':"280px"}}>
        <Grid container lg={6} xs={11} sx={{margin:mobile?'auto':''}}>
<Grid item lg={10} xs={11} sx={{margin:'auto',marginTop:mobile?'50px':''}}>
    <Grid item lg={6}>
    <Typography sx={{textAlign:'left',color:'#E64B18'}}>SERVICES</Typography>
    </Grid>
  </Grid>
<Grid container lg={12} xs={12} >
  <Grid item lg={10}  xs={11} sx={{margin:'auto'}}>
  <Typography sx={{textAlign:'Left',fontSize:'28px',color:'#1F2937'}}>Search Engine Optimization</Typography>
</Grid>
</Grid>
<Grid container lg={10} xs={11} sx={{marginBottom:"30px",margin:'auto'}} >
<Grid item lg={10} xs={10} sx={{margin:'auto',marginLeft:'0px'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>Hire our developers to optimize the technical aspect of SEO, and extract maximum value out of your content.</Typography>
</Grid>
</Grid>


<Grid container spacing={2} lg={10.8}  sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11}>
					  <Typography >Technical SEO</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11}>
					  <Typography >Schema markup</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11} xs={10}>
					  <Typography >SEO audit</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11} xs={10}>
					  <Typography >Core web vitals</Typography>
					 
					  </Grid>
					  </Grid>

            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11} xs={10}>
					  <Typography >Migrate to JamStack</Typography>
					 
					  </Grid>
					  </Grid>
          

            {mobile?'':<Grid container lg={10} xs={10} sx={{margin:'auto',marginTop:'30px'}} >
<Grid item lg={10} sx={{margin:'auto',marginLeft:'0px'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>FASTEST GROWING ORGANIZATION TRUST US</Typography>
</Grid>
</Grid>}
            </Grid>
            
              <Paper sx={{width:mobile?'100% ':'448px',height:mobile?'700px':'654px',position:'absolute',left:mobile?'0px':"800px",top:mobile?'600px':"150px",borderRadius:'8px',border:"1px solid #E5E7EB"}}>
              <form onSubmit={handleSubmit}>
      <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
        <Typography sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',marginTop:'25px'}}> Name</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="Name"
        type="name"
        defaultValue="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Email</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto',marginTop:'20px'}}>
      <FormLabel component="legend" sx={{color:'#000000'}}>How can we support you?</FormLabel>
						  <FormGroup>
						  <Grid container lg={12} direction="row" justifyContent="initial" alignItems="initial">
        <FormControlLabel sx={{border: '1px solid #E5E7EB',width: '180.81px',
height: '42px',
borderRadius: '8px'}}
          control={<Checkbox checked={selectedOptions.includes('web-dev')} onChange={handleChange} value="web-dev" />}
          label="Web Development"
        />
									  <FormControlLabel sx={{borderRadius:"8px",border:"1px solid #E5E7EB"}}
										  
          control={<Checkbox checked={selectedOptions.includes('wordpress')} onChange={handleChange} value="wordpress" />}
          label="wordpress"
        />
		
       
       
        <FormControlLabel sx={{borderRadius:"8px",border:"1px solid #E5E7EB"}}
          control={<Checkbox checked={selectedOptions.includes('cro')} onChange={handleChange} value="cro" />}
          label="Conversion rate optimization"
        />
        <FormControlLabel sx={{borderRadius:"8px",border:"1px solid #E5E7EB"}}
          control={<Checkbox checked={selectedOptions.includes('ui-ux')} onChange={handleChange} value="ui-ux" />}
          label="UI/UX Design"
							  />
                 <FormControlLabel sx={{borderRadius:"8px",border:"1px solid #E5E7EB"}}
          control={<Checkbox checked={selectedOptions.includes('Others')} onChange={handleChange} value="Others" />}
          label="Others"
        />
							  </Grid>
        </FormGroup>
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto',marginTop:'20px'}}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Message</Typography>
     <TextField
  required
  fullWidth
  variant="outlined"
  label="Message"
  multiline
  rows={4}
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  sx={{ mb: 2 }}
/>
</Grid>
<Grid item lg={10} xs={10} sx={{margin:'auto',textAlign:'center'}}>
<Button
              type="submit"
             
              variant="contained"
			sx={{
				mt: 0, mb: 5, background: '#E64B18',
				borderRadius: '8px',textTransform:'none',width:'250px',height:'50px',fontSize:'18px'}}
			>
		Submit
			</Button>	
      </Grid>
    </form>
              </Paper>
            </Grid>
		  </Grid>
		  <Footer2 />
     </Box>
  )
}

export default SEO