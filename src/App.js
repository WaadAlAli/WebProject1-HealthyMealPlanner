import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Recipes  from './pages/Recipes';
import Contact from './pages/Contact';
import About from './pages/About';
import Planner from './pages/Planner';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import PublicLayout from './components/PublicLayout';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import AdminUsers from './pages/AdminUsers';
import AdminTestinomials from './pages/AdminTestinomials';
import AdminAbout from './pages/AdminAbout';
import AdminCategories from './pages/AdminCategories';
import AdminContact from './pages/AdminContact';
import AdminRecipes from './pages/AdminRecipes';
import AdminMessages from './pages/AdminMessages';
import AdminWhyChooseUs from './pages/AdminWhychooseus';
import { RecipesProvider } from "./Context/RecipesContext";


function App(){
 
   return(
    
<RecipesProvider>
  <Router>
    <div className="min-h-screen flex flex-col">
    <Routes >
      <Route  element={<PublicLayout />} >
      <Route index element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/planner' element={<Planner/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
       <Route path='/logout' element={<Home/>}/>
       </Route>
     {/* Admin pages */}
        <Route element={<Admin/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/about" element={<AdminAbout />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/whychooseus" element={<AdminWhyChooseUs />} />
          <Route path="/admin/testimonials" element={<AdminTestinomials />} />
          <Route path="/admin/recipes" element={<AdminRecipes/>} />
          <Route path="/admin/messages" element={<AdminMessages/>} />
          <Route path="/admin/categories" element={<AdminCategories />} />
        </Route>
      
    </Routes>

  </div>
  
  </Router>
   </RecipesProvider>
);

  
}


export default App;
