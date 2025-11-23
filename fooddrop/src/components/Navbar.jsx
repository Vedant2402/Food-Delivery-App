import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Simple postal code lookup (India PIN or fallback) using public API.
async function lookupPin(pin) {
  if (!pin || pin.length < 4) return null;
  try {
    // Try India postal API if looks like Indian PIN (6 digits)
    if (/^\d{6}$/.test(pin)) {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await res.json();
      if (Array.isArray(data) && data[0].Status === 'Success') {
        const po = data[0].PostOffice?.[0];
        if (po) {
          return { city: po.District, state: po.State, country: 'India' };
        }
      }
    }
    // Fallback: US ZIP via Zippopotam (if 5 digits)
    if (/^\d{5}$/.test(pin)) {
      const res = await fetch(`https://api.zippopotam.us/us/${pin}`);
      if (res.ok) {
        const data = await res.json();
        const place = data.places?.[0];
        if (place) {
          return { city: place['place name'], state: place['state abbreviation'], country: data.country };
        }
      }
    }
    return null;
  } catch { return null; }
}

function Navbar() {
  const [showPanel, setShowPanel] = useState(false);
  const [pin, setPin] = useState(() => localStorage.getItem('delivery_pin') || '');
  const [location, setLocation] = useState(() => {
    const raw = localStorage.getItem('delivery_location');
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLookup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const info = await lookupPin(pin.trim());
    setLoading(false);
    if (!info) {
      setError('Could not resolve location');
      return;
    }
    setLocation(info);
    localStorage.setItem('delivery_pin', pin.trim());
    localStorage.setItem('delivery_location', JSON.stringify(info));
    setShowPanel(false);
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (pin && !location) {
        const info = await lookupPin(pin.trim());
        if (info && !cancelled) {
          setLocation(info);
          localStorage.setItem('delivery_location', JSON.stringify(info));
        }
      }
    })();
    return () => { cancelled = true; };
  }, [pin, location]);

  const displayText = location ? `${location.city}, ${location.state}` : 'Set Location';

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-app">
        <div className="flex justify-between items-center h-16">
          {/* Location Selector */}
          <div className="flex flex-col">
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">
              Delivering to
            </span>
            <button
              type="button"
              onClick={() => setShowPanel(s => !s)}
              className="flex items-center gap-1 text-primary font-bold cursor-pointer group"
            >
              <span>{displayText}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showPanel && (
              <div className="absolute mt-14 w-64 p-4 rounded-xl bg-white shadow-lg border border-gray-100 z-50">
                <form onSubmit={handleLookup} className="flex flex-col gap-3">
                  <label className="text-xs font-medium text-text-muted">Enter Pincode / ZIP</label>
                  <input
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="e.g. 560001"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  {error && <div className="text-xs text-red-600">{error}</div>}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowPanel(false)}
                      className="text-xs px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-text-main"
                    >Cancel</button>
                    <button
                      type="submit"
                      disabled={loading || !pin}
                      className="text-xs px-3 py-2 rounded-lg bg-primary text-white font-semibold disabled:opacity-50"
                    >{loading ? 'Lookup…' : 'Save'}</button>
                  </div>
                  {location && (
                    <div className="text-[11px] bg-gray-50 p-2 rounded-lg text-text-muted">
                      Detected: <span className="font-medium text-text-main">{location.city}, {location.state} {location.country}</span>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/category/vegetables"
              className="text-text-main hover:text-primary font-medium transition-colors"
            >
              Categories
            </Link>
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