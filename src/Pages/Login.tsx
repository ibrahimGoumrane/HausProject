import { useState } from 'react';
import { Eye, Forward } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/Home');
  };
  return (
    <div className="flex h-screen w-full font-HubotSans bg-white">
      {/* Left side with form */}
      <div className="flex w-1/2 flex-col items-center justify-center  p-8">
        <div className="w-full max-w-2xl">

          {/* Welcome text */}
          <div className="mb-12">
            <h2 className="mb-2 font-serif text-7xl italic text-gray-900 font-PinyonScript text-center">Welcome Back</h2>
            <p className="text-3xl  text-black opacity-50 fon">
              the faster you fill up, the faster you book your seat
            </p>
          </div>

          {/* Google Sign In Button */}
          <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3 px-4 text-xl font-medium text-gray-700 shadow-sm">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-transparent px-5 text-gray-500">or</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500"
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
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-black-primary py-3 px-6 text-xl font-medium text-white-primary"
            >
              Sign in
              <Forward className="h-5 w-5" />
            </button>
          </form>

          {/* Create account link */}
          <p className="mt-8 text-center text-xl text-gray-600">
            Not a member?{' '}
            <a href="#" className="font-medium text-black underline">
              Create an account
            </a>
          </p>
        </div>
      </div>

      {/* Right side with background image */}
      <div className="hidden lg:flex w-1/2 h-full">
  <img 
    className="w-full h-full object-cover" 
    src="public/assets/hero.png" 
    alt="Background"
/>
</div>
    </div>
  );
};

export default Login;
