import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import HomeMain from './pages/HomeMain';
import HomeAbout from './pages/HomeAbout';
import AdminMain from './pages/AdminMain';
import AdminAbout from './pages/AdminAbout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path='home' element={<HomeMain/>}></Route>
        <Route path='about' element={<HomeAbout/>}></Route>
      </Route>
      <Route path="/admin" element={<AdminHome />}>
        <Route path='/admin/home' exact element={<AdminMain/>}></Route>
        <Route path='/admin/about' exact element={<AdminAbout/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
