import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/main';
import Home from './Pages/Home';
import Error from './Pages/Error';
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

function App() {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
