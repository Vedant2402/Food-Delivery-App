import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { id: 1, name: 'Vegetables', icon: '🥦', color: 'bg-green-100 text-green-600', path: '/category/vegetables' },
    { id: 2, name: 'Fruits', icon: '🍎', color: 'bg-red-100 text-red-600', path: '/category/fruits' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-blue-100 text-blue-600', path: '/category/dairy' },
    { id: 4, name: 'Meat', icon: '🥩', color: 'bg-orange-100 text-orange-600', path: '/category/meat' },
    { id: 5, name: 'Bakery', icon: '🥐', color: 'bg-yellow-100 text-yellow-600', path: '/category/bakery' },
    { id: 6, name: 'Drinks', icon: '🥤', color: 'bg-purple-100 text-purple-600', path: '/category/drinks' },
    { id: 7, name: 'Snacks', icon: '🍿', color: 'bg-pink-100 text-pink-600', path: '/category/snacks' },
    { id: 8, name: 'Frozen', icon: '🧊', color: 'bg-cyan-100 text-cyan-600', path: '/category/frozen' },
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
            <Link to={category.path} key={category.id} className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group">
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <span className="text-xs font-medium text-text-main group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;