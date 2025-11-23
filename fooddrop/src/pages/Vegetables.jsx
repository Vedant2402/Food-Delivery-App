import CategoryTemplate from '../components/CategoryTemplate';

function Vegetables() {
  const items = [
    { id: 1, name: "Bell Pepper Red", weight: "1kg", price: 4.99, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Organic Carrots", weight: "1kg", price: 2.99, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Fresh Broccoli", weight: "1kg", price: 3.49, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Tomatoes", weight: "1kg", price: 3.99, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Potatoes", weight: "2kg", price: 5.99, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Onions", weight: "1kg", price: 1.99, image: "https://images.unsplash.com/photo-1508747703703-06f55765894f?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Spinach", weight: "250g", price: 2.49, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Cucumber", weight: "500g", price: 1.49, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Vegetables" items={items} />;
}

export default Vegetables;
