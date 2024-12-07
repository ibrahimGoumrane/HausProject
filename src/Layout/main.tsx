import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white-primary hubot-sans">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
