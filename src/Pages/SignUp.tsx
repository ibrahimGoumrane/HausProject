import { useState } from 'react';
import { Eye, Forward } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Sign-Up Form Submitted');
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
          <div className="mb-8 lg:mb-12">
            <h2 className="mb-2 mt-8 text-4xl sm:text-5xl lg:text-7xl italic text-gray-900 font-PinyonScript text-center">
              Get Started Now
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-black opacity-50 text-center">
              Welcome to Haus. - Let's create your account
            </p>
          </div>

          {/* Sign-Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
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
            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 lg:py-3 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            {/* Gender Selection */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                type="button"
                className={`w-full rounded-md border px-4 py-2.5 lg:py-3 text-lg lg:text-xl font-medium transition-all ${
                  gender === 'male'
                    ? 'bg-black text-white border-gray-900'
                    : 'bg-transparent text-gray-900 border-gray-300'
                }`}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                type="button"
                className={`w-full rounded-md border px-4 py-2.5 lg:py-3 text-lg lg:text-xl font-medium transition-all ${
                  gender === 'female'
                    ? 'bg-black text-white border-gray-900'
                    : 'bg-transparent text-gray-900 border-gray-300'
                }`}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>
            {/* Submit Button */}
            <a
              href='/'
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-black-primary py-2.5 lg:py-3 px-6 text-lg lg:text-xl font-medium text-white-primary"
            >
              Join Us
              <Forward className="h-5 w-5" />
            </a>
          </form>

          {/* Login link */}
          <p className="mt-6 lg:mt-8 text-center text-lg lg:text-xl text-gray-600">
            Already a member?{' '}
            <a href="/login" className="font-medium text-black-secondary underline">
              Sign in.
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

export default SignUp;