import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/main';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useLocation } from 'react-router-dom';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useEffect } from 'react';
import Booking from './Pages/Booking';
import Profile from './Pages/Profile';
//reinitializes the components every time when app is mounted or page was changed
//https://preline.co/docs/frameworks-react.html
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function PrelineInitializer() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
    console.log('10');
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PrelineInitializer />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Booking />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
