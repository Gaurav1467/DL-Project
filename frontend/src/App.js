import './App.css';
import Dashboard from './components/DashBoard';
import ProfileDetails from './components/ProfileDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='/profiledetails' element={<ProfileDetails/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
