import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'mui-image'
import Footer2 from './Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navbar } from './Navbar'


function Blog3 () {
    const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
	return (
		<>
			<Navbar/>
	  <Box>
		  <Grid container sm={10} md={10} xs={12} lg={10} sx={{margin:'auto'}} >
			  <Grid item sm={12} md={12} xs={10}  sx={{textAlign: 'center',margin:mobile?'auto':'0px'}}>
				  <Typography variant='h2' sx={{fontSize:mobile?'24px':'36px',fontWeight:'600',lineHeight:"48px",marginTop:mobile?'36px':'64px',textAlign: 'center',marginBottom:mobile?'26px':'64px'}}>
				  How to use the UseState in Reactjs
				  </Typography>
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10}  sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
			  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1FHDo6uSI9Hp2Vs0NUP_oW6js8-j7BYhi"
              style={{ transitionDuration:'0',animation:'0',borderRadius:"12px",marginTop:mobile?'6px':'6px'}}
            />
			  </Grid>
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>	  
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'26px':"56px"}}>
				  UseEffect is a hook in React that allows developers to perform side effects in functional components. Side effects refer to any change that occurs outside the component, such as API calls, setting and clearing intervals or timeouts, and updating the document title. In this blog, we will discuss the UseEffect hook and its applications in React.  </Typography>
			  </Grid>
			  {/* <Grid item sm={12}>	  
				  <Typography sx={{width:"754px",height:"56px",fontSize:"18px",margin:'auto',textAlign:'initial',marginTop:"12px"}}>
				  While there are no shortcuts to writing bestselling fiction, the following tips will help you sail in a smooth writing process with no major hiccups:</Typography>
			  </Grid> */}
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3'sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",fontWeight:'600',marginTop:mobile?'36px':'32px'}}>The Basics </Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>The UseEffect hook takes two arguments: a function and an optional array of dependencies. The function passed to UseEffect is executed every time the component renders. This function can contain any code that performs a side effect, such as API calls, event listeners, or updating the document title.</Typography>
				  </Grid> 
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		 
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px",}}>The array of dependencies is an optional argument that specifies the variables that the function depends on. When any of the dependencies change, the function is re-executed. If the array is left empty, the function will only execute once when the component mounts</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}}>
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Applications:</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}} >
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"8px"}}>Fetching Data: UseEffect is often used to fetch data from APIs. By calling the API inside the UseEffect function, you can ensure that the data is fetched every time the component renders.

<br/>Updating the DOM: UseEffect can be used to manipulate the DOM by changing element styles or adding event listeners. By returning a cleanup function, you can ensure that any changes made to the DOM are reverted when the component unmounts.

<br/>Managing State: UseEffect can also be used to manage state by updating state variables whenever a dependency changes. This is useful when you want to keep state variables in sync with component props or other state variables.

<br/>Optimizing Performance: UseEffect can also be used to optimize performance by only executing side effects when necessary. By specifying dependencies, you can ensure that the function is only executed when the specified variables change.</Typography>
			  </Grid> 
			  
		  </Grid>
		  <Grid container sm={12} xs={12} lg={10} sx={{margin:ipad?'auto':'auto'}} >
		  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography variant='h3' sx={{textAlign:"initial",fontSize:mobile?'16px':"24px",marginTop:mobile?'36px':"26px",fontWeight:"600"}}>Conclusion</Typography>
			  </Grid>  
			  <Grid item sm={10} xs={11} lg={8} sx={{margin:ipad?'auto':'auto'}}>
				  <Typography sx={{fontSize:mobile?'14px':"18px",textAlign:'initial',marginTop:mobile?'8px':"12px",}}>In summary, the UseEffect hook is a powerful tool for performing side effects in functional components. By executing code every time the component renders, UseEffect allows developers to manipulate the DOM, fetch data, manage state, and optimize performance. With its versatility and ease of use, UseEffect is an essential tool in any React developer's toolkit.</Typography>
			  </Grid> 
			 
			 
			  </Grid>
			  <Footer2 />
			</Box>
			</>
  )
}

export default Blog3;