import {Navigate, Route,Routes} from 'react-router-dom';
import './App.css';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import CoursePage from './Components/CoursePage/CoursePage'
import NotFound from './Components/NotFound/NotFound'
import { AuthProvider } from './Utils/Auth';
function App() {
  return (
    <AuthProvider>
    <div className="App container-fluid">
      <div className="cont">
        <div className='navb'>
              <NavBar/>
        </div>
        <div className='content'>
          
              <Routes>
                  <Route path='/' index element={<Dashboard/>} />
                  <Route path='/myCourses' element={<Courses/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/myCourses' element={<Courses/>} />
                  <Route path='/myCourses/mswd' element={<CoursePage/>} />
                  <Route path='/myCourses/dbms' element={<CoursePage/>} />
                  <Route path='/myCourses/mp' element={<CoursePage/>} />
                  <Route path='/404' element={<NotFound/>} />
                  <Route path='*' element={<Navigate to="/404"/>} />
              </Routes>
        </div>
        <div className='footb'>
              <Footer/>
        </div>
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
