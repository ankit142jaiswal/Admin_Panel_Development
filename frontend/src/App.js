import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EditProfile from './screen/EditProfile';
import BrowseProfile from './screen/BrowseProfile';
import Login from './screen/Login';
import Signup from './screen/Signup';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css' ;
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './screen/Home.js';
import ViewProfile from './screen/ViewProfile.js';
import DmUser from './screen/DmUser.js';
import AddNewUser from './screen/AddNewUser.js'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/browseprofile' element={<BrowseProfile/>} />
          <Route exact path='/editprofile' element={<EditProfile/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/viewprofile' element={<ViewProfile />} />
          <Route exact path='/dmuser' element={<DmUser />} />
          <Route exact path='/addnewuser' element={<AddNewUser />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
