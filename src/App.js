import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import CoursePage from './Components/CoursePage/CoursePage';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Unauthorized from './Components/Unauthorized/Unauthorized';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App container-fluid">
      <div className="cont">
        <div className='navb'>
              <NavBar/>
        </div>
        <div className='content'>
          
        </div>
        <div className='footb'>
              <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
