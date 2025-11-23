import CategoryTemplate from '../components/CategoryTemplate';

function Drinks() {
  const items = [
    { id: 1, name: "Orange Juice", weight: "1L", price: 3.99, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Cola", weight: "2L", price: 2.49, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Mineral Water", weight: "6x1.5L", price: 4.99, image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Iced Tea", weight: "1.5L", price: 2.99, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Energy Drink", weight: "250ml", price: 1.99, image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Coffee Beans", weight: "500g", price: 12.99, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Green Tea", weight: "20 bags", price: 3.49, image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Smoothie", weight: "300ml", price: 3.99, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Drinks" items={items} />;
}

export default Drinks;
