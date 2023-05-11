import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import Footer2 from './Footer';
import useMediaQuery from '@mui/material/useMediaQuery';


import { Navbar } from './Navbar'
function Blog1 () {
    const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	return (
		<>
			<Navbar/>
	  <Box>
		  <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}} >
			  <Grid item sm={12} md={12} xs={10}  sx={{textAlign: 'center',margin:mobile?'auto':'0px'}}>
				  <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',fontWeight:'600',lineHeight:"48px",marginTop:mobile?'36px':'64px',textAlign: 'center',marginBottom:mobile?'26px':'64px'}}>
				  How to deploy Your Backend on Render.com?
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10}  sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1qunekG2klh_-3zSzfu99rJzFz0fwlfDy"
              style={{ transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':'6px'}}
            />
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	  
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'26px':"56px"}}>
							Are you looking for a simple and fast way to deploy your backend application to the cloud? If so, you might want to check out render.com, a cloud hosting platform for developers that makes it easy to deploy web services, static sites, databases, and more.
							In this blog post, I will show you how to deploy a Node.js Express app on render.com in just a few steps. You can use this as a guide for deploying any backend app that runs on Node.js.
</Typography>
			  </Grid>
			  {/* <Grid item sm={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
				  While there are no shortcuts to writing bestselling fiction, the following tips will help you sail in a smooth writing process with no major hiccups:</Typography>
			  </Grid> */}
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>## What is render.com?</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>Render is a cloud hosting platform that lets you deploy your applications and services with zero configuration and no servers to manage. You can connect your GitHub or GitLab account to render.com and choose from a variety of services, such as web services, static sites, databases, cron jobs, background workers, and more.Render handles everything from building, deploying, scaling, monitoring, and securing your services. You can also use custom domains, SSL certificates, environment variables, secrets, and logs for your services.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?"16px":"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>## How to deploy a Node.js Express app on render.com?</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",}}>To deploy a Node.js Express app on render.com, you will need the following:
<br/>
- A GitHub or GitLab account<br/>
- A Node.js Express app that you want to deploy<br/>
- A render.com account <br/>
</Typography>
			  </Grid> 
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
						<Typography sx={{ fontSize: mobile ? '14px' : "18px", textAlign: 'initial', marginTop: mobile ? '12px' : "8px" }}>If you don't have a Node.js Express app ready, you can use this sample app that I created for this tutorial: https://github.com/yourusername/express-hello-world</Typography>
				  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>This app is a simple "Hello World" app that responds with "Hello World!" when you visit the root path (/).</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>To deploy this app on render.com, follow these steps:

1. Fork the express-hello-world repository on GitHub or GitLab.<br/>
2. Create a new Web Service on render.com, and give render permission to access your new repo.<br/>
3. Use the following values during creation:<br/>

   - Environment: Node <br/>
   - Build Command: npm install<br/>
   - Start Command: node index.js<br/>
   - Port: 3000<br/>

4. Click Create Web Service and wait for render to build and deploy your app.<br/>
5. Once your app is live, you will see a URL like https://express-hello-world.onrender.com where you can access your app.<br/>
</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Footer2 />
			</Box>
			</>
  )
}

export default Blog1;