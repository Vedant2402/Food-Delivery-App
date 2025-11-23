function FeaturedRestaurants() {
  const items = [
    {
      id: 1,
      name: "Bell Pepper Red",
      weight: "1kg",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-red-50"
    },
    {
      id: 2,
      name: "Arabic Ginger",
      weight: "1kg",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-orange-50"
    },
    {
      id: 3,
      name: "Fresh Lettuce",
      weight: "1kg",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-green-50"
    },
    {
      id: 4,
      name: "Butternut Squash",
      weight: "1kg",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-yellow-50"
    },
    {
      id: 5,
      name: "Organic Carrots",
      weight: "1kg",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-orange-50"
    },
    {
      id: 6,
      name: "Fresh Broccoli",
      weight: "1kg",
      price: 6.49,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "bg-green-50"
    }
  ];

  return (
    <section className="py-8">
      <div className="container-app">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-main">Popular Items</h2>
          <a href="#" className="text-primary text-sm font-medium hover:underline">See All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={item.id} className={`rounded-3xl p-4 ${item.color} border border-gray-100 card-hover group relative`}>
              <div className="absolute top-3 right-3 z-10">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="aspect-square mb-4 flex items-center justify-center rounded-2xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-text-main text-sm mb-1">{item.name}</h3>
                <p className="text-text-muted text-xs mb-3">{item.weight}</p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-text-main">${item.price}</span>
                  <button className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-orange-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;