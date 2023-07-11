import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from "./components/Services"
function App() {


  return (
    <BrowserRouter>
   <Header/>
  <Routes>
  <Route path="/services" element={<Services/>}/>
  </Routes>

    </BrowserRouter>
  )
}

export default App
