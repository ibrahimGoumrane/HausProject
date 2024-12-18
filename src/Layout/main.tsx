import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white-primary hubot-sans">
      <Outlet />
    </div>
  );
};

export default RootLayout;
