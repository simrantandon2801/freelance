import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import WebDevelopment from './Home';
import UI from './UI';
import SEO from './SEO';

import Devapp from './Appdev.js';
import Wordpress from './Wordpress';
import Devops from './Devops';
import Hireus from './HireUs';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
function App() {
  return (
	  <Routes>
		  <Route path='/' element={<LandingPage />} />
		  <Route path='webDev' element={<WebDevelopment />} />
		  <Route path='ui' element={<UI />} />
		  <Route path='seo' element={<SEO />} />
		  <Route path='app' element={<Devapp />} />
		  <Route path='wordpress' element={<Wordpress />} />
		  <Route path='devops' element={<Devops />} />
		  <Route path='hireus' element={<Hireus />} />
		  <Route path='blog1' element={<Blog1 />} />
		  
		  <Route path='blog2' element={<Blog2 />} />
		  <Route path='blog3' element={<Blog3 />} />
	</Routes>
  );
}

export default App;
