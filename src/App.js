import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Recipes  from './pages/Recipes';
import Contact from './pages/Contact';
import About from './pages/About';
import Planner from './pages/Planner';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import { RecipesProvider } from "./Context/RecipesContext";


function App(){
 
   return(
    
<RecipesProvider>
  <Router>
    <div style={{ display: "flex", flexDirection: "column", minHeight:
"100vh" }}>
  
<Navbar />

     
   

    <Routes>
      <Route index element={<Home />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/planner' element={<Planner/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
 
  <Footer/>
  </div>
  
  </Router>
   </RecipesProvider>
);

  
}


export default App;
