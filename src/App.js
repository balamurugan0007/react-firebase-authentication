
import './App.css';

import { Signup } from './screen/signup';
import { Login } from './screen/login';
import { Changepassword } from './screen/change_pass';


import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/changepassword" element={<Changepassword/>}/>
         
        </Routes>
      </div>

    </Router>
  );
}

export default App;
