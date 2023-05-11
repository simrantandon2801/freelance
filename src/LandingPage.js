import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Paper } from "@mui/material";
// import { Link } from 'react-router-dom';
import {useMediaQuery} from "@mui/material";
import {Grid} from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Grow} from "@mui/material";
import {Image} from "mui-image";
import Link from '@mui/material/Link';
import {Card, CardActionArea, CardMedia,CardContent} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Divider} from "@mui/material";
import Footer2 from "./Footer";
import TeamGrid from "./TeamGrid";
import BookConsult from "./BookConsult";
import { Navbar } from "./Navbar";
import CollectChatBot from "./Collect";




export default function LandingPage() {
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)  and (orientation: landscape)');
	const ipad1 = useMediaQuery('(min-width: 600px) and (max-width: 900px)  and (orientation: portrait)');
   return (
	

    

    <Box>
     <Navbar />
	  <Box sx={{width:mobile?'100%': '100%', height:mobile?'517px': '592px', bgcolor: '#F9FAFB'}}>
      <Grid container lg={10.3} md={12} xs={12} sm={10} sx={{margin:'auto'}}  >
						<Grid container md={5} lg={7.5} xs={8.5} sm={10} sx={{margin:'auto'}}>
							<Grid item md={12} lg={12} sm={12} xs={12} sx={{marginTop:mobile?'46px':'128px',display:'flex',justifyContent:'left'}}>
							<Typography variant='h1' sx={{ fontWeight: '700', fontSize: mobile?'32px':'56px', color:'#333335', textAlign:'initial', lineHeight: mobile?'38px': '65.63px', fontStyle:"normal"}}>
When You Need<br/>More than Just a website
</Typography>
					</Grid>
							<Grid item md={12}  lg={12} xs={12} sm={12} sx={{marginTop:mobile?"12px":"0px"}}>
						
								 
										<Grid item  lg={12}md={12} xs={10} sx={{display:'flex',justifyContent:'left'}}>
							<Typography variant='h6' sx={{ fontWeight: '400', fontSize: mobile?'14px':'18px', color: '#333335',textAlign:'initial',lineHeight:"24px"}}>We are a team of software engineers specializing in web	</Typography>
							</Grid>
								<Grid item md={8}  lg={8} xs={12} sx={{ backgroundRepeat: 'no-repeat', backgroundPosition: '65px 21px' }}>
									<Typography variant='h6' sx={{ fontWeight: '400', fontSize: mobile ? '14px' : '18px', color: '#333335', textAlign: 'initial', marginBottom: '50px' }}>development and Digital Marketing</Typography>
								</Grid>
								
		
					</Grid>	
					<Grid container xs={12} direction="row">
  <Grid item md={12} lg={4} xs={12} sm={12} sx={{display:'flex',justifyContent:mobile?"center":'left'}}>
    <Link href='/HireUs' style={{ textDecoration: "none" }}>
      <Button variant='contained' sx={{ backgroundColor:'#E64B18',borderRadius: '8px', textTransform: 'none', fontSize: mobile ? "12px" : "16px", fontWeight: "500", lineHeight: "24px", width: mobile?'43vh':'151px', height: "58px" }} >Start a Project</Button>
    </Link>
  </Grid>	
  <Grid item md={12} lg={8} xs={12} sx={{display:'flex',justifyContent:mobile?"center":'left',marginLeft:mobile?'0px':'170px',marginTop:mobile?'18px':'-57px'}}>
  <Link href='#ourservices' style={{ textDecoration: "none", color: '#6B7280' }}>
      <Button variant='contained' sx={{ backgroundColor:'#FFFFFF', borderRadius: '8px', textTransform: 'none', fontSize: mobile ? "12px" : "16px", fontWeight: "500", lineHeight: "24px", width: mobile ? '43vh' : '151px', height: "58px", color: 'grey' }}>Our Services</Button>
    </Link>
  </Grid>
</Grid>


				</Grid>
				<Grid Container md={6} xs={12} sm={10}  lg={4.5} sx={{margin:'auto'}} >
							<Grid item md={12} sm={12} xs={12} lg={12} style={{display:"flex",justifyContent:mobile?'center':'left'}}>	
								
								{mobile?'':	
									<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1pUjs3GwoJBl1_PmrYtprffUPFl5QiTzw" style={{
    width:mobile?'272px':'100%',height:mobile?'170.4px':'540px',transitionDuration:'0',animation:'0' ,marginTop:mobile?'36px':"30px",
									}}></Image>
}	
									
									
									
						</Grid>
				</Grid>
			</Grid>
    </Box>
	
<Grid container lg={12} xs={10} sx={{margin:mobile?'auto':''}}>
  <Grid item lg={12}  xs={12} sx={{marginTop:'80px'}}>
    <Typography sx={{textAlign:'center',color:'#E64B18'}}>ABOUT US</Typography>
  </Grid>
  <Grid container lg={12} >
  <Grid item lg={3.5} xs={12} sx={{margin:'auto'}} >
    <Typography sx={{textAlign:'center',color:'#171717',marginTop:'20px',fontWeight:'600',fontSize:'28px'}}>At the Intersection of Engineering and Marketing</Typography>
  </Grid>
  </Grid>
  <Grid container lg={12} xs={12}>
  <Grid item lg={4} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',marginTop:'20px',color:'#6B7280',fontsize:'18px'}}>At Codalent, we operate at the intersection of Engineering and Marketing.We collaborated with marketing teams and extract them minimum value out of their online presence.</Typography>
  </Grid>
</Grid>
</Grid>
<Grid container lg={12} >
  <Grid item lg={8} xs={10} sx={{margin:mobile?'auto':'auto'}}>
<Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
</Grid>
</Grid>
<Grid container lg={12} id='ourservices'>
  <Grid item lg={12} xs={12} sx={{marginTop:mobile?'70px':''}}>
  <Typography sx={{textAlign:'center',fontSize:'28px',color:'#1F2937'}}>Our Services</Typography>
</Grid>
</Grid>
<Grid container lg={12}  >
<Grid item lg={12} xs={12} >
  <Typography sx={{textAlign:'center',fontSize:'18px',marginTop:'20px',color:'#737373',marginBottom:"64px"}}>We handle everything technical for you so you can focus on growing your business</Typography>
</Grid>
</Grid>
<Grid container  lg={10} xs={12}  spacing={3} sx={{margin:'auto'}}>
  <Grid item xs={10}  lg={3.5}  sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",height:mobile?'230px':'266px'}} >
				   
				   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=1tZupTeGOu3s_FWcoeXGVU7WWBMeC87pf' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
           Web development
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary">
				   Building modern websites which are optimized for speed, performance and SEO as well as back-end to support it
					   </Typography>
					   </Grid>
  </Grid>


<Grid item xs={10}  lg={3.5}  sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",height:'270px',marginTop:mobile?"26px":"0px"}} >
				   <Grid item xs={10} lg={12} sx={{ margin: mobile ? 'auto' : 'auto' }}>
				   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=1C_7Z8nz6YDbeaZ6L_KgOKtmT2wO6SHvQ' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
           DevOps
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary" sx={{marginTop:"7px",
fontWeight: '500',
fontSize: '16px',
lineHeight: '24px',color: '#737373'}}>
				  We have the expertise to handle infrastructure and deployment for your web application as well as support and maintenance services.	   </Typography>
					   </Grid>
  
  </Grid>
  
</Grid>
<Grid item lg={3.5} xs={10} sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",height:'270px',marginTop:mobile?"26px":"0px",}}>
				   <Grid item xs={10} lg={12} sx={{ margin: mobile ? 'auto' : 'auto' }}>
				  
				   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=12AMHc_ixOdppPUP0i9QYYXcmDnxBu-Vq' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
            SEO optimization
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary" sx={{marginTop:"7px",
fontWeight: '500',
fontSize: '16px',
lineHeight: '24px',color: '#737373'}}>
				 SEO optimization involves various techniques and strategies, including keyword research and analysis. 
       
					   </Typography>
					   </Grid>
  
  </Grid>
    
 
  
</Grid>
<Grid container lg={12}  spacing={3} sx={{margin:'auto',marginTop:"23px"}}>
  <Grid item xs={10} lg={3.5}   sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",marginTop:"23px",}}>
					   <Grid item lg={12} xs={10} sx={{ margin: 'auto' }}>
					   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=12AMHc_ixOdppPUP0i9QYYXcmDnxBu-Vq' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
            Wordpress Development With Animations
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary" sx={{marginTop:"7px",
fontWeight: '500',
fontSize: '16px',
lineHeight: '24px',color: '#737373'}}>
				
				Get your website animations done right. We have the expertise  to build interactive web experiences for your users.
					   </Typography>
					   </Grid>
	{/* <Card sx={{ width: mobile?"95%":'388px',height:'266px' }}>
		<CardActionArea>
			<CardMedia
			component="img"
			height="140"
			image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
			alt=""
			/>
			<CardContent>
			<Typography gutterBottom variant="h5" component="div">
			Wordpress Developer
			</Typography>
			<Typography variant="body2" color="text.secondary">
			Developing the Content and Designing the page using WordPress Styling of Page using CSS Using CMS making Page for the website
			</Typography>
			</CardContent>
		</CardActionArea>
		</Card> */}
    
  </Grid>
  
</Grid>

<Grid item lg={3.5} xs={10}   sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",height:'290px',marginTop:"23px",}} >
					   <Grid item xs={10} lg={12} sx={{ margin: mobile ? 'auto' : 'auto' }}>
					   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=1FvNzjPdNSsR1_hhUfcRGamS0scAESenx' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto',}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
            App Development
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary" sx={{marginTop:"7px",
fontWeight: '500',
fontSize: '16px',
lineHeight: '24px',color: '#737373'}}>
				 It involves designing and developing applications for various platforms such as iOS and Android 
       		   </Typography>
					   </Grid>
  {/* <Card sx={{ width: mobile?"95%":'388px',height:'266px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It involves designing and developing applications for various platforms such as iOS and Android 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
    
  </Grid>
  
</Grid>
<Grid item lg={3.5} xs={10}  sx={{margin:mobile?'auto':'auto',border:"1px solid red",borderRadius:"8px",height:'290px',marginTop:"23px"}}>
  <Grid item xs={10} lg={12}   sx={{margin:mobile?'auto':'auto'}} >
  {/* <Card sx={{ width: mobile?"95%":'388px',height:'266px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Hosting Websites
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fast, secure, scalable hosting plans with expert support and SSL certificates for your portfolio website.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
						   <Grid item lg={3.5} xs={12} sx={{ margin: 'initial' }}>
					   <Image src='https://drive.google.com/uc?export=view&id=16Dy6EPNOoAIcQwBPoezorXrhyHsG3-2w' style={{margin:"auto",width:"50px",height:'50px'}} />
  
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"23px",
fontWeight: '500',
fontSize: '24px',
lineHeight: '30px'}}>
            Hosting Websites
          </Typography>
         
				   </Grid>
				   <Grid item lg={10} xs={12} sx={{margin:'auto'}}>
				   <Typography variant="body2" color="text.secondary" sx={{marginTop:"7px",
fontWeight: '500',
fontSize: '16px',
lineHeight: '24px',color: '#737373'}}>
				 Fast, secure, scalable hosting plans with expert support and SSL certificates for your portfolio website.
       
					   </Typography>
					   </Grid>
    
  </Grid>
  
</Grid>
</Grid>
</Grid>
<Box sx={{bgcolor:'#F9FAFB',width:'100%'}}>
<Grid container lg={12}>
  <Grid item lg={12} xs={12} sx={{marginTop:'80px'}}>
    <Typography sx={{textAlign:'center',color:'#E64B18'}}>OUR STACK</Typography>
  </Grid>
  <Grid container lg={8} sx={{margin:'auto'}}>
  <Grid item lg={8} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',color:'#171717',marginTop:'20px',fontWeight:'600',fontSize:'28px'}}>Upgrade to a Modern Technology Stack </Typography>
  </Grid>
  </Grid>
  <Grid container lg={12}>
  <Grid item lg={5} xs={10} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',marginTop:'20px',color:'#6B7280',fontsize:'18px'}}>We use cutting edge technologies for our clients to build the best in class infrastructure which is robust,performance and solve the problem.</Typography>
  </Grid>
</Grid>
</Grid>




<Grid container lg={6} xs={10} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'40px'}}>
				   <Grid item lg={12} xs={12}>
				   <Typography sx={{ textAlign: 'center',marginTop:'40px',color:'#9CA3AF' }}>Web frameworks</Typography>
			</Grid>
				   
				   
				   <Grid item lg={4} xs={12}>
					  
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=18DwA4QWgt649ENbyCCzFMFS61T-7gGfd"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={4} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=16R2z6_uPbXe0Zks2vkXP786-ZuupNxTT"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={4} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1x6DDUgrhtUYa-SUh15QNgJmI8zJKpjCq"
        style={{
          justifyContent: 'space-around',
          width: '110%',
          height: '150px',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>


<Grid container lg={7} xs={10} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px'}}>
 
<Grid item lg={12} xs={12}>
				   <Typography sx={{ textAlign: 'center',marginTop:'40px' ,color:'#9CA3AF'}}>Content management system CMS</Typography>
			</Grid>
    
 
  
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>

    
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=17-5N69Z0zVKXAAFBDQFx5uidxZTUvh2_"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
    
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1Di7RpDaVm-oSIpfPhq97C_yl-nX2ZTmF"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
    
  
  
    
  
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1FVFDlFTBiAIkJb_pcIWpbZWel8I1Iz0m"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
<Grid container lg={7} xs={10} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px'}}>
 
<Grid item lg={12} xs={12}>
				   <Typography sx={{ textAlign: 'center',marginTop:'40px',color:'#9CA3AF' }}>Deployment</Typography>
			</Grid>
    <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=12meM2xMLkF7ZPmBoqyhbo215iUxxxlG6"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
 
  <Grid item lg={3} xs={12}>

  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1ab9H_uAuCEWQTA0IMO-yTenQF8hvIGpa"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=16duZ6zxr_3e2287tc3ALeuzBrH3uZ46T"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1aICyhggbhzIV3SUlfp9o4723X6HZe0Mk"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
			   <Grid container lg={7} xs={10} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px'}}>
<Grid item lg={12} xs={12}>
				   <Typography sx={{ textAlign: 'center',marginTop:'40px',color:'#9CA3AF' }}>MarTech</Typography>
			</Grid>
    
    <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=16BRO2Az2pXPU14mslA5hUU6DZObWgnoX"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
 
  <Grid item lg={3} xs={12}>

  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1OUtVNnxU9XPENL-KUecgO3DNgNx22yh5"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3} xs={12}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1JzoK68Ue1XSBOz-QLXSpe0cb4Wxu8uLO"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3} xs={12}> 
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1I6GoY1mdrV36y6dLR_Sqg7n2fP-k7Uh8"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
</Box>

<Grid container lg={10.3} xs={10}  sx={{marginTop:'80px'}}>
  <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
  <Typography sx={{textAlign:'Left',fontSize:'28px',color:'#1F2937'}}>Our Work</Typography>
</Grid>
</Grid>
		   <Grid container lg={10.3} sx={{ marginBottom: "30px", margin:'auto'}} >
			   <Grid item lg={4} xs={10} sx={{margin:mobile?"auto":'initial'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>We have worked with the some of the world's most successful companies.Checkout our work.</Typography>
</Grid>
</Grid>
<Grid container  lg={10.5} xs={11.5} spacing={2} sx={{margin:'auto',marginBottom:"50px"}}>
  <Grid item xs={12}  lg={4}   sx={{margin:mobile?'auto':'auto'}}>
    <Grid item lg={12} xs={12} sx={{margin:'auto'}}>
    <Link to="/Blog1" style={{textDecoration:'none',textTransform:'none'}}>
  <Card sx={{ maxWidth: 330,height:'400px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1qunekG2klh_-3zSzfu99rJzFz0fwlfDy"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          How to deploy Your Backend on Render.com?
          </Typography>
          <Typography variant="body2" color="text.secondary">
		  In this blog post, I will show you how to deploy a Node.js Express app on render.com in just a few steps.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={6} xs={10.5} sx={{marginTop:'20px',}}>
  <Button variant="contained" color="primary" sx={{ backgroundColor: '#E64B18' }}>
    Read More
  </Button>
  </Grid>
  <Grid item lg={6} sx={{marginTop:'20px',justifyContent:'end',display:'flex',color:'#E64B18'}}>
  <ArrowForwardIcon/>
  </Grid>
      </Box>
    </Card>
    </Link>
  </Grid>
  </Grid>


  <Grid item lg={4} xs={12} >
  <Grid item xs={12} lg={12}   sx={{margin:mobile?'auto':'auto'}}>
  <Link to="/Blog2" style={{textDecoration:'none',textTransform:'none'}}>
    <Card sx={{ maxWidth: 330, height:'400px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1QrsxGqWPYs0np9ACCmdq1fUdu2s92vV4"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
		  How to authenticate using jwt token
          </Typography>
          <Typography variant="body2" color="text.secondary">
          JWT (JSON Web Token) is an open standard that is used for securely transmitting information between parties 
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={6} xs={10.5} sx={{marginTop:'20px',}}>
  <Button variant="contained" color="primary" sx={{ backgroundColor: '#E64B18' }}>
    Read More
  </Button>
  </Grid>
  <Grid item lg={6} sx={{marginTop:'20px',justifyContent:'end',display:'flex',color:'#E64B18'}}>
  <ArrowForwardIcon/>
  </Grid>
      </Box>
    </Card>
    </Link>
  </Grid>
</Grid>

<Grid item lg={4} xs={12} >
  <Grid item xs={12} lg={12}   sx={{margin:mobile?'auto':'auto'}}>
  <Link to="/Blog3" style={{textDecoration:'none',textTransform:'none'}}>
    <Card sx={{ maxWidth: 330, height:'400px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1FHDo6uSI9Hp2Vs0NUP_oW6js8-j7BYhi"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           How to use the UseState in Reactjs
          </Typography>
          <Typography variant="body2" color="text.secondary">
		  UseEffect is a hook in React that allows developers to perform side effects in functional components
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={6} xs={10.5} sx={{marginTop:'20px',}}>
  <Button variant="contained" color="primary" sx={{ backgroundColor: '#E64B18', }}>
    Read More
  </Button>
  </Grid>
  <Grid item lg={6} sx={{marginTop:'20px',justifyContent:'end',display:'flex',color:'#E64B18'}}>
  <ArrowForwardIcon/>
  </Grid>
      </Box>
    </Card>
    </Link>
  </Grid>
</Grid>

		   </Grid>
		  
		   <TeamGrid />
		   <BookConsult />
		   <CollectChatBot />
		   <Footer2 />
	</Box>
	
    
      
    
   );
}