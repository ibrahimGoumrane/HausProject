import React, { useState } from 'react';
import { Settings, Calendar, Clock, Award, Trophy, TrendingUp, AlertCircle } from 'lucide-react';
import Navbar from "../Components/Navbar";

interface Booking {
  date: string;
  id: string;
  time: string;
  status: 'completed' | 'pending';
}

interface ProfileProps {
  userName?: string;
  userEmail?: string;
  createdAt?: string;
  membershipType?: 'Free' | 'Premium';
  streakCount?: number;
  totalBookings?: number;
  totalHours?: number;
}

const Profile: React.FC<ProfileProps> = ({
  userName = "Oussama Darrazi",
  userEmail = "ismail@gmail.com",
  createdAt = "13 JUL 2024",
  membershipType = "Free",
  streakCount = 3,
  totalBookings = 15,
  totalHours = 30
}) => {
  const [showStatsTooltip, setShowStatsTooltip] = useState<string | null>(null);
  const [showAllBookings, setShowAllBookings] = useState(false);

  const bookings: Booking[] = [
      {
        date: '01 Jan, 2024',
        id: '#XB456',
        time: '12:00 - 14:00',
        status: 'completed'
      },
    {
        date: '15 Feb, 2024',
        id: '#XC789',
        time: '09:00 - 11:00',
        status: 'completed'
      },
    {
      date: '22 Aug, 2024',
      id: '#HV189',
      time: '10:00 - 14:00',
      status: 'completed'
    },
    {
      date: '11 Nov, 2024',
      id: '#XC128',
      time: '18:00 - 20:00',
      status: 'completed'
    },
    {
      date: '24 Dec, 2024',
      id: '#XD023',
      time: '18:00 - 20:00',
      status: 'pending'
    },
  ];

  const stats = [
    { icon: Calendar, label: 'Total Bookings', value: totalBookings },
    { icon: Clock, label: 'Hours Spent', value: `${totalHours}h` },
    { icon: Award, label: 'Current Streak', value: streakCount },
  ];

  const BookingItem = ({ booking, isLast }: { booking: Booking; isLast: boolean }) => (
    <div className="relative group">
      <div className="flex items-center gap-4">
        <div className="text-gray-700 text-xl font-medium">{booking.date}</div>
        <div className="flex-1 h-px bg-black-primary"></div>
      </div>
      <div className="flex items-start mt-4">
        <div className="w-5 h-5 bg-black-primary rounded-full mt-2 group-hover:scale-110 transition-transform"></div>
        <div className="ml-4">
          <div className="text-3xl font-semibold text-black-primary group-hover:text-gray-800 transition-colors">{booking.id}</div>
          <div className="text-xl text-gray-700 capitalize flex items-center gap-2">
            {booking.time} • 
            <span className={`px-2 py-0.5 rounded-full text-sm ${
              booking.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {booking.status}
            </span>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-2.5 top-16 w-0.5 h-24 bg-black-primary"></div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:w-full min-h-screen bg-white-primary font-HubotSans">
        {/* Left Section - Bookings */}
        <div className="md:flex-1 p-10 relative order-2 md:order-1">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-semibold">My Bookings</h1>
            <div className="flex gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-2 px-4 py-2 bg-black-primary rounded-lg cursor-help"
                  onMouseEnter={() => setShowStatsTooltip(stat.label)}
                  onMouseLeave={() => setShowStatsTooltip(null)}
                >
                  <stat.icon className="w-5 h-5 text-white-primary" />
                  <span className="font-semibold text-white-primary">{stat.value}</span>
                  {showStatsTooltip === stat.label && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black-primary text-white-secondary text-sm rounded whitespace-nowrap">
                      {stat.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            {bookings.slice(0, showAllBookings ? bookings.length : 3).map((booking, index) => (
              <BookingItem 
                key={booking.id} 
                booking={booking} 
                isLast={index === bookings.length - 1} 
              />
            ))}
          </div>

          {bookings.length > 3 && (
            <button
              onClick={() => setShowAllBookings((prev) => !prev)}
              className="mt-12 px-4 py-2 bg-black-primary text-white-primary hover:bg-black-primary rounded-md transition"
            >
              {showAllBookings ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>

        {/* Right Section */}
        <div className="w-[550px] p-12 space-y-10">
          {/* Account Section */}
          <section className="border-2 border-black-primary p-8 space-y-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">My Account</h2>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {[{ label: "Name", value: userName }, { label: "Email", value: userEmail }, { label: "Created at", value: createdAt }].map(({ label, value }) => (
                <div key={label} className="group">
                  <h3 className="text-xl font-semibold group-hover:text-gray-700 transition-colors">{label}</h3>
                  <p className="text-xl">{value}</p>
                </div>
              ))}
              <div>
                <h3 className="text-xl font-semibold">Membership</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{membershipType}</span>
                    {membershipType === 'Free' && (
                      <div className="relative group">
                        <AlertCircle className="w-5 h-5 text-yellow-500 cursor-help" />
                        <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black-primary text-white-secondary text-sm rounded whitespace-nowrap">
                          Upgrade to unlock premium features
                        </div>
                      </div>
                    )}
                  </div>
                  <button className="bg-black-primary text-white-secondary px-6 py-2 text-2xl hover:bg-gray-800 transition-colors rounded-sm flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Streak Section */}
          <section className="border-2 border-black-primary p-8 space-y-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">My Streak</h2>
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((day, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 transition-all duration-300 relative ${
                    i < streakCount 
                      ? 'bg-black-primary' 
                      : 'border-2 border-black-primary hover:border-gray-600'
                  }`}
                >
                  {i < streakCount && (
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg">
              <p className="text-3xl max-w-[240px] leading-tight">
                Visit <span className="font-semibold">Haus.</span> for 5 consecutive days and get our notebook
              </p>
              <img 
                src="/assets/haus_book.png" 
                alt="Haus Notebook" 
                className="w-40 h-40 object-contain hover:scale-105 transition-transform"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
