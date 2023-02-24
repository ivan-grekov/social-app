import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Messenger from './pages/messenger/Messenger';
import MyAccount from './pages/myAccount/MyAccount';
import Courses from './pages/courses/Courses';

function App(): JSX.Element {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace /> : <Register />}
      />
      <Route
        path="/messenger"
        element={!user ? <Navigate to="/" replace /> : <Messenger />}
      />
      <Route
        path="/profile/:username"
        element={user ? <Profile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/account/:username"
        element={user ? <MyAccount /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/courses"
        element={!user ? <Navigate to="/" replace /> : <Courses />}
      />
    </Routes>
  );
}

export default App;
