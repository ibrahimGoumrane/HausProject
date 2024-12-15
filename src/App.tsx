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
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
