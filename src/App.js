import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import {Route} from 'react-router-dom';
import Home from './container/Pages/Home';
import About from './container/Pages/About';
import Blog from './container/Pages/Blog';
import Contact from './container/Pages/Contact';
import Shop from './container/Pages/Shop';
import Products from './container/Pages/Products';

function App() {
  return (
   <>
   <Header/>
   <switch>
     <Route exact path={"/"} component={Home}/>
     <Route exact path={"/about"} component={About}/>
     <Route exact path={"/blog"} component={Blog}/>
     <Route exact path={"/contact"} component={Contact}/>
     <Route exact path={"/shop"} component={Shop}/>
     <Route exact path={"/product"} component={Products}/>
   </switch>
   <Footer/>
   </>
  );
}

export default App;
