import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from "./components/Services"
import Products from "./components/Products"
import Blog from "./components/Blog"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {


  return (
    <BrowserRouter>
   <Header/>
  <Routes>
  <Route path="/" element={<Services/>}/>
  <Route path="/products"  element={<Products/>}/>
  <Route path="/blog"  element={<Blog/>}/>
  </Routes>

    </BrowserRouter>
  )
}

export default App
