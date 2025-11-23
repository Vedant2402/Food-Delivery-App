function Hero() {

  return (
    <section className="pt-6 pb-8">
      <div className="container-app">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-orange-400 shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="text-center md:text-left mb-8 md:mb-0 max-w-lg">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-sm">
                Free Delivery
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Get <span className="text-yellow-200">50% OFF</span> on your first order
              </h1>
              <p className="text-white/90 mb-8 text-lg">
                Order from your favorite restaurants and get it delivered to your doorstep.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors transform hover:scale-105">
                Order Now
              </button>
            </div>
            
            <div className="relative w-full max-w-xs md:max-w-sm">
              {/* Placeholder for a food image */}
              <div className="aspect-square rounded-full bg-white/20 backdrop-blur-sm p-4 animate-float">
                 <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Delicious Food" 
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/30"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Delivery</div>
                  <div className="text-sm font-bold text-gray-800">30 Mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar (Floating below banner) */}
        <div className="relative -mt-6 mx-4 md:mx-auto max-w-2xl z-20">
          <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center border border-gray-100">
            <div className="pl-4 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search for food, restaurants..." 
              className="w-full p-3 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
            <button className="bg-primary text-white p-3 rounded-xl hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;