import './App.css';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App container-fluid">
      <div>
        <div className='navb'>
              <NavBar/>
        </div>
        <div className='content'>
              {/* <Dashboard/> */}
              {/* <Login/> */}
              <Courses/>
        </div>
        <div className='footb'>
              <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
