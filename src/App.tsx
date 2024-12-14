import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/main';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
