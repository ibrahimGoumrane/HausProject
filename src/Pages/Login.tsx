import { useState } from 'react';
import { Eye, Forward } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/Home');
  };

  return (
    <div className="flex min-h-screen w-full font-HubotSans bg-white-primary flex-col lg:flex-row">
      {/* Left side with form */}
      <div className="flex w-full lg:w-1/2 flex-grow flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      {/* Logo */}
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-3"
      >
        <span className="font-HubotSans font-bold text-black-main text-2xl sm:text-3xl lg:text-4xl">
          Haus.
        </span>
      </Link>
        <div className="w-full max-w-2xl">
          {/* Welcome text */}
          <div className="mb-8 mt-8 lg:mb-12">
            <h2 className="mb-2 text-4xl sm:text-5xl lg:text-7xl italic text-gray-900 font-PinyonScript text-center">Welcome Back</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-black opacity-50 text-center">
              the faster you fill up, the faster you book your seat
            </p>
          </div>

          {/* Google Sign In Button */}
          <button className="mb-6 lg:mb-8 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2.5 lg:py-3 px-4 text-lg lg:text-xl font-medium text-gray-700 shadow-sm">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6 lg:mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-5 text-gray-500">or</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>

            {/* Remember me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Sign in button */}
            <a
              href='/'
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-black-primary py-2.5 lg:py-3 px-6 text-lg lg:text-xl font-medium text-white-primary"
            >
              Sign in
              <Forward className="h-5 w-5" />
            </a>
          </form>

          {/* Create account link */}
          <p className="mt-6 lg:mt-8 text-center text-lg lg:text-xl text-gray-600">
            Not a member?{' '}
            <a href="/signup" className="font-medium text-black-secondary underline">
              Create an account
            </a>
          </p>
        </div>
      </div>

      {/* Right side with background image */}
      <div className="hidden lg:block lg:w-1/2">
        <img 
          className="h-full w-full object-cover" 
          src="public/assets/loginimg.png" 
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Login;