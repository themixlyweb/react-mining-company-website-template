import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Header from './Components/Header';
import About from './Pages/About';
import Products from './Pages/ProductsPg';
import Enquiry from './Pages/Enquiry';
import Applications from './Pages/ApplicationsPg';
import Contact from './Pages/Contact';
import ApplicationDetail from './Pages/ApplicationDetail';
import Gallery from './Pages/Gallery';

function App() {
  return (
   <BrowserRouter>
   <Header />
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-enquiry" element={<Enquiry />} />
        <Route path="/applications" element={<Applications/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact-us" element={<Contact/>} />
         <Route path="/application-detail" element={<ApplicationDetail/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
