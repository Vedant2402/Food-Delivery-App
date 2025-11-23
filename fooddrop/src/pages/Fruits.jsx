import CategoryTemplate from '../components/CategoryTemplate';

function Fruits() {
  const items = [
    { id: 1, name: "Red Apples", weight: "1kg", price: 3.99, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Bananas", weight: "1kg", price: 1.99, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Oranges", weight: "1kg", price: 4.49, image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Strawberries", weight: "500g", price: 5.99, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Grapes", weight: "500g", price: 4.99, image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Pineapple", weight: "1pc", price: 3.49, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Mangoes", weight: "1kg", price: 6.99, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Watermelon", weight: "1pc", price: 5.49, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Fruits" items={items} />;
}

export default Fruits;
