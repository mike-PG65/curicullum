import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Dashboard from "./pages/Dashboard"
import AddEducation from "./pages/AddEducation"
import EducationList from "./pages/EducationList"
import Education from "../../server/models/Education"
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/education/add" element={<AddEducation/>}/>
       <Route path="/education/edit/:id" element={<AddEducation/>}/>
       <Route path="/education/:id" element={<Education/>}/>
      <Route path="/education/list" element={<EducationList/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
