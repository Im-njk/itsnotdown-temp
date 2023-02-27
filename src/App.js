import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import FooterW from './Component/FooterW';
import Login from './Pages/Login';
import Nav from './Component/Nav';
import Signup from './Component/Signup';
import LoginComponent from './Component/LoginComponent';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      {/* <p>dgeqwrfqwfrqewf</p> */}
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/auth" element={<Login />} >
            <Route index element={<LoginComponent/>} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
        <FooterW />
      </Router>
    </>
  );
}

export default App;
