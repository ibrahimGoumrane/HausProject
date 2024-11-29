import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
