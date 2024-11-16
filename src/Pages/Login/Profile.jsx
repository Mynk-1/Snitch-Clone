import React, { useState, useRef, useEffect } from "react";
import {
  User,
  MapPin,
  ShoppingBag,
  Wallet,
  Gift,
  Heart,
  Clock,
  Users,
  Lock,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Edit,
} from "lucide-react";
import { PowerIcon } from "lucide-react";

const Profile = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

 
  const SCROLL_THRESHOLD = 50;

  const menuGroups = [
    { icon: User, label: "My Profile", count: null },
    { icon: MapPin, label: "Delivery Address", count: 0 },
    { icon: ShoppingBag, label: "My Orders", count: 0 },
    { icon: Wallet, label: "My Credits", count: "INR 25" },
    { icon: Gift, label: "How To Earn", count: null },
    { icon: Gift, label: "How To Spend", count: null },
    { icon: Heart, label: "My Wishlist", count: 0 },
    { icon: Clock, label: "Recently Viewed", count: null },
    { icon: Users, label: "Refer Friend", count: null },
    { icon: Lock, label: "Change Password", count: null },
    { icon: LogOut, label: "Log Out", count: null },
  ];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      const targetScroll =
        container.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const hasScrolledPastThreshold = container.scrollLeft > SCROLL_THRESHOLD;
      const isAtEnd =
        Math.abs(
          container.scrollWidth - container.clientWidth - container.scrollLeft
        ) < 1;

      setShowLeftArrow(hasScrolledPastThreshold);
      setShowRightArrow(
        !isAtEnd && container.scrollWidth > container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowRightArrow(container.scrollWidth > container.clientWidth);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row font-titillium">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden w-full">
        <div className="bg-white shadow-md mb-4 p-4">
          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollPosition}
              className="flex gap-8 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {menuGroups.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-20 snap-start"
                >
                  <div className="w-6 h-6 mb-1 text-gray-600">
                    <item.icon />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-center whitespace-nowrap">
                      {item.label}
                    </span>
                    {item.count !== null && (
                      <span className="bg-gray-200 text-xs px-2 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white shadow-lg w-72 h-screen">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">MK</span>
            </div>
            <div>
              <h2 className="font-medium">Mayank Kataria</h2>
              <p className="text-xs text-gray-500">02:59:04 PM</p>
            </div>
          </div>
        </div>

        <nav className="py-2">
          {menuGroups.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-500" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.count !== null && (
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-2xl mx-auto p-4 lg:p-8">
          {/* Profile Form */}
          <div className="bg-white rounded-lg shadow p-6 relative mt-16">
            {/* Overlapping Profile Header */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl mb-2">
                MK
              </div>
              <h2 className="text-lg font-semibold">Good Evening!</h2>
              <p className="text-sm  font-semibold">Mayank</p>
            </div>

            {/* Main and Edit icons */}
            <PowerIcon className="absolute top-4 left-4 w-6 h-6 text-gray-400" />
            <Edit className="absolute top-4 right-4 w-6 h-6 text-gray-400" />

            {/* Form fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value="Mayank"
                  className="w-full p-2 bg-gray-50 rounded border border-gray-200"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value="Kataria"
                  className="w-full p-2 bg-gray-50 rounded border border-gray-200"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value="mayankkataria1628@gmail.com"
                  className="w-full p-2 bg-gray-50 rounded border border-gray-200"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value="+917060067719"
                  className="w-full p-2 bg-gray-50 rounded border border-gray-200"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Birthdate
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="DD"
                    className="w-20 p-2 bg-gray-50 rounded border border-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="MM"
                    className="w-20 p-2 bg-gray-50 rounded border border-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    className="w-20 p-2 bg-gray-50 rounded border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Gender
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="male" />
                    <span className="text-sm">Male</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="female" />
                    <span className="text-sm">Female</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="other" />
                    <span className="text-sm">Other</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
