import CategoryTemplate from '../components/CategoryTemplate';

function Dairy() {
  const items = [
    { id: 1, name: "Fresh Milk", weight: "1L", price: 1.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Cheddar Cheese", weight: "250g", price: 4.99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Greek Yogurt", weight: "500g", price: 3.49, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Butter", weight: "250g", price: 3.99, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Eggs", weight: "12pcs", price: 4.49, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Cream", weight: "250ml", price: 2.49, image: "https://images.unsplash.com/photo-1628155176021-721043637f05?auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Mozzarella", weight: "250g", price: 5.49, image: "https://images.unsplash.com/photo-1531290188777-c6c9599e446d?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Almond Milk", weight: "1L", price: 3.99, image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Dairy & Eggs" items={items} />;
}

export default Dairy;
