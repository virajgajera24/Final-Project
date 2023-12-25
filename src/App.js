import './App.css'; 
import { Routes, Route} from 'react-router-dom'
import Navbar from './admin/Navbar';
import Home from './admin/Home';
import Footer from './admin/Footer';
import About from './admin/About';
import Doctor from './admin/Doctor';
import Deparment from './admin/Deparment';
import Services from './admin/Services';
import ContactUs from './admin/ContactUs';
import Blog from './admin/Blog';
import Blogdetail from './admin/Blog-detail';
import Pricelist from './admin/Pricelist';
import Faq from './admin/Faq';
import Galary from './admin/Galary';
import SignUp from './admin/SignUp';
import SignIn from './admin/SignIn';
import Dashboard from './panal/Dashboard';
import AddDepartment from './panal/AddDepartment';
import AllDepartment from './panal/AllDepartment';

function App() {
  return (
    <div className="">
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/navbar" element={<Navbar/>}/>
         <Route path="/footer" element={<Footer/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/doctor" element={<Doctor/>}/>
         <Route path="/deparment" element={<Deparment/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/ContactUs" element={<ContactUs/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/blog-detail" element={<Blogdetail/>}/>
         <Route path="/faq" element={<Faq/>}/>
         <Route path="/galary" element={<Galary/>}/>
         <Route path="/pricelist" element={<Pricelist/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Routes>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/add-department" element={<AddDepartment/>}/>
         <Route path="/all-department" element={<AllDepartment/>}/>
      </Routes>
    </div>
  );
}

export default App;
