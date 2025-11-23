import CategoryTemplate from '../components/CategoryTemplate';

function Meat() {
  const items = [
    { id: 1, name: "Chicken Breast", weight: "1kg", price: 9.99, image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Ground Beef", weight: "1kg", price: 12.99, image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Salmon Fillet", weight: "500g", price: 14.99, image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Pork Chops", weight: "1kg", price: 10.99, image: "https://images.unsplash.com/photo-1602491950787-e7361986f726?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Lamb Chops", weight: "500g", price: 16.99, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6f54262?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Sausages", weight: "500g", price: 6.99, image: "https://images.unsplash.com/photo-1591964475467-f086342a6224?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Bacon", weight: "250g", price: 5.99, image: "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Turkey Breast", weight: "1kg", price: 11.99, image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd71?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Meat & Seafood" items={items} />;
}

export default Meat;
