function Categories() {
  const categories = [
    { id: 1, name: 'Vegetables', icon: '🥦', color: 'bg-green-100 text-green-600' },
    { id: 2, name: 'Fruits', icon: '🍎', color: 'bg-red-100 text-red-600' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-blue-100 text-blue-600' },
    { id: 4, name: 'Meat', icon: '🥩', color: 'bg-orange-100 text-orange-600' },
    { id: 5, name: 'Bakery', icon: '🥐', color: 'bg-yellow-100 text-yellow-600' },
    { id: 6, name: 'Drinks', icon: '🥤', color: 'bg-purple-100 text-purple-600' },
    { id: 7, name: 'Snacks', icon: '🍿', color: 'bg-pink-100 text-pink-600' },
    { id: 8, name: 'Frozen', icon: '🧊', color: 'bg-cyan-100 text-cyan-600' },
  ];

  return (
    <section className="py-6">
      <div className="container-app">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-main">Categories</h2>
          <a href="#" className="text-primary text-sm font-medium hover:underline">See All</a>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group">
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <span className="text-xs font-medium text-text-main group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;