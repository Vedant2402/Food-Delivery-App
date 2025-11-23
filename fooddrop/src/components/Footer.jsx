function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-24 md:pb-12">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">FoodDrop</h3>
            <p className="text-text-muted text-sm mb-4">
              Fresh groceries and food delivered to your doorstep in minutes.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text-main mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-text-main mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#" className="hover:text-primary">Support</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-text-main mb-4">Download App</h4>
            <div className="flex flex-col gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.06 2.77.79 3.55 1.96-3.17 1.81-2.6 6.46.82 7.82-.65 1.9-1.63 3.74-2.96 5.25zm-4.12-15.7c1.25-1.51 2.08-3.56 1.85-5.58-1.79.08-3.96 1.2-5.09 2.53-1.07 1.29-2.02 3.37-1.77 5.37 1.99.15 4.02-1.02 5.01-2.32z"/></svg>
                <div>
                  <div className="text-[10px]">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.185.185-.435.29-.71.29-.19 0-.38-.05-.55-.15-.34-.19-.55-.55-.55-.94V2.614c0-.39.21-.75.55-.94.17-.1.36-.15.55-.15.275 0 .525.105.71.29zm11.594 11.594l6.266 6.266c.25.25.65.25.9 0 .25-.25.25-.65 0-.9l-6.266-6.266-1.8 1.8.9 1.8zm-1.8-3.6l1.8 1.8 6.266-6.266c.25-.25.25-.65 0-.9-.25-.25-.65-.25-.9 0l-6.266 6.266-.9 1.8z"/></svg>
                <div>
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-text-muted">
          &copy; 2024 FoodDrop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;