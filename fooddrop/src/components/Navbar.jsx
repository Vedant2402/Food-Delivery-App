function Navbar() {

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-app">
        <div className="flex justify-between items-center h-16">
          {/* Location Selector */}
          <div className="flex flex-col">
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">
              Delivering to
            </span>
            <div className="flex items-center gap-1 text-primary font-bold cursor-pointer group">
              <span>Los Angeles, CA</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Orders
            </a>
            <a
              href="#"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Profile
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-main hover:bg-gray-100 rounded-full transition-colors relative">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;