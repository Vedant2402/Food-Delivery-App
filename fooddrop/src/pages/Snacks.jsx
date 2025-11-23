import CategoryTemplate from '../components/CategoryTemplate';

function Snacks() {
  const items = [
    { id: 1, name: "Potato Chips", weight: "150g", price: 2.49, image: "https://images.unsplash.com/photo-1566478919030-26d9c2860952?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Chocolate Bar", weight: "100g", price: 1.99, image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Popcorn", weight: "200g", price: 2.99, image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Pretzels", weight: "200g", price: 2.49, image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Nuts Mix", weight: "250g", price: 5.99, image: "https://images.unsplash.com/photo-1536591375315-1988d6960991?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Crackers", weight: "200g", price: 2.99, image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Gummy Bears", weight: "150g", price: 1.99, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Granola Bar", weight: "6pcs", price: 3.99, image: "https://images.unsplash.com/photo-1517093725432-a9ac7d7d0da7?auto=format&fit=crop&w=800&q=80" },
  ];

  return <CategoryTemplate title="Snacks" items={items} />;
}

export default Snacks;
