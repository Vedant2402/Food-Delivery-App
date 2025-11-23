import Navbar from './Navbar';
import BottomNav from './BottomNav';
import { useNavigate } from 'react-router-dom';

function CategoryTemplate({ title, items }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">
      <Navbar />
      
      <div className="container-app py-8">
        <div className="flex items-center gap-2 mb-6 text-sm text-text-muted">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <span className="text-text-main font-medium">{title}</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-text-main">{title}</h1>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-text-main text-sm font-medium hover:bg-gray-200 transition-colors"
            aria-label="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 border border-gray-100 card-hover group relative">
              <div className="absolute top-3 right-3 z-10">
                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="aspect-square mb-4 bg-gray-50 rounded-2xl overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover block drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-text-main text-base mb-1">{item.name}</h3>
                <p className="text-text-muted text-xs mb-3">{item.weight}</p>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-lg text-text-main">${item.price}</span>
                  <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-orange-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default CategoryTemplate;
