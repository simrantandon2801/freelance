import { Grid, Typography, Avatar,Icon } from '@mui/material';
import Image from 'mui-image';
import {useMediaQuery} from "@mui/material";
const teams = [
  {
    name: 'Rajiv',
    role: 'Full Stack Web Developer with Devops',
    avatar: 'https://example.com/avatar1.jpg',
    description: 'Passionate about front-end architecture and design, I am a results-driven developer with a proven track record of creating large-scale applications that deliver exceptional user experiences. With a strong foundation in computer science fundamentals and expertise in algorithm design and performance, I am adept at writing code that is reliable, maintainable, secure, and performant. My proficiency in ReactJS, TypeScript, and JavaScript allows me to build sophisticated SPAs that meet the unique needs of modern businesses. In addition, my knowledge of Azure services and/or AWS provides me with the skills to develop scalable, cloud-based solutions.'
  },
  {
    name: 'Simran',
    role: 'Full Stack Developer with Designing',
    avatar: 'https://example.com/avatar2.jpg',
    description: 'As a Full Stack Developer at HubHawks, I am passionate about building innovative and scalable software solutions that meet the complex business needs of our clients. With expertise in both front-end and back-end development, I am dedicated to creating user-friendly applications that drive growth and improve productivity.Throughout my career, I have honed my skills in programming languages such as Java, Python, and JavaScript, and have worked with a range of frameworks including Angular, React, and Node.js. '
  },
];

const TeamGrid = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	return (
	  <Grid container lg={12}  sx={{background:'#F9FAFB'}}>
    <Grid container lg={10.3} xs={11} sx={{margin:' 96px auto'}}>
   
 
      <Grid item xs={10} lg={3.5} sx={{margin:mobile?'auto':''}}>
      <Grid item lg={4} sx={{margin:'initial'}}>
      <Image src= 'https://drive.google.com/uc?export=view&id=1Bl5UIKNYZ-x-5HiJ1z1Y4XaYhcLXy9VA' style={{width:'30px',height:'30px'}}/>
    </Grid>
<Grid item lg={10} xs={3} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'left',color:'#E64B18',fontSize:'18px'}}>Teams</Typography>
  </Grid>
        <Typography variant="h5">Teams and Introduction</Typography>
      </Grid>
      <Grid item xs={10} md={6} lg={4} sx={{margin:'auto'}}>
        
       
       
			  <Typography variant="body1">{teams[0].description}</Typography>
					<Avatar alt={teams[0].name} src={teams[0].avatar} sx={{ width: 30, height: 30, mb: 1 }} />
					<Typography variant="h6">{teams[0].name}</Typography>
			  <Typography variant="subtitle1">{teams[0].role}</Typography>
      </Grid>
      <Grid item xs={10} md={6} lg={4}sx={{margin:mobile?'auto':"",marginTop:mobile?"23px":""}} >
     
        
       
			  <Typography variant="body1">{teams[1].description}</Typography>
					<Avatar alt={teams[1].name} src={teams[1].avatar} sx={{ width: 30, height: 30, mb: 1 }} />
					<Typography variant="h6">{teams[1].name}</Typography>
					
			  <Typography variant="subtitle1">{teams[0].role}</Typography>
      </Grid>
			</Grid>
			</Grid>
  );
};

export default TeamGrid;
