import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import Footer2 from './Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navbar } from './Navbar'


function Blog2 () {
    const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	return (
		<>
			<Navbar/>
	  <Box>
		  <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}} >
			  <Grid item sm={12} md={12} xs={10}  sx={{textAlign: 'center',margin:mobile?'auto':'0px'}}>
				  <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',fontWeight:'600',lineHeight:"48px",marginTop:mobile?'36px':'64px',textAlign: 'center',marginBottom:mobile?'26px':'64px'}}>
				  How to authenticate using jwt token
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10}  sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1QrsxGqWPYs0np9ACCmdq1fUdu2s92vV4"
              style={{ transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':'6px'}}
            />
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	  
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'26px':"56px"}}>
				  JWT (JSON Web Token) is an open standard that is used for securely transmitting information between parties. It is a popular authentication method in web development because of its ease of use, security, and versatility. In this blog, we will discuss how to authenticate using JWT token. </Typography>
			  </Grid>
			  {/* <Grid item sm={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
				  While there are no shortcuts to writing bestselling fiction, the following tips will help you sail in a smooth writing process with no major hiccups:</Typography>
			  </Grid> */}
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>Generate a JWT Token</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>The first step in authenticating with JWT is to generate a token. This token will be used to authenticate the user's identity. To generate a token, you need to create a JSON object containing the user's information, such as their name, email, and ID. You then sign this object with a secret key, which ensures that the token is tamper-proof.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?"16px":"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Store the JWT Token</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",}}>Once you have generated the token, you need to store it on the client-side (usually in a cookie or local storage). This will allow the client to send the token with every subsequent request, which will enable the server to verify the user's identity.</Typography>
			  </Grid> 
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'12px':"8px"}}>It is important to remember that the reader is not just a faceless entity. They are eventually going to be the ones who are going to enjoy your book. So, why not think from their perspective!</Typography>
				  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Authenticate Requests</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>When a user sends a request to the server, the server checks for the presence of the JWT token. If the token is present, the server verifies its authenticity by checking the signature using the secret key. If the signature is valid, the server extracts the user's information from the token and uses it to authenticate the request.</Typography>
			  </Grid> 
			 
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}} >
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Refresh Tokens</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"12px",}}>JWT tokens have an expiration time, after which they become invalid. To prevent users from constantly logging in, you can implement a refresh token mechanism. A refresh token is a long-lived token that can be used to generate new JWT tokens after the old ones expire. This allows users to stay authenticated without having to log in again.</Typography>
			  </Grid> 
			  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'12px':"8px"}}>In summary, JWT is a secure and easy-to-use authentication method that can be used in web development. By generating and storing a token, authenticating requests, and refreshing tokens, you can ensure that your users' identities are secure and their experiences on your website or app are seamless</Typography>
				  </Grid>
			  </Grid>
			  <Footer2 />
			</Box>
			</>
  )
}

export default Blog2;