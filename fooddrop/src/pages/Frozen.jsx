import CategoryTemplate from '../components/CategoryTemplate';

function Frozen() {
  const items = [
    { id: 1, name: "Ice Cream Vanilla", weight: "1L", price: 4.99, image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Frozen Pizza", weight: "1pc", price: 5.99, image: "https://images.unsplash.com/photo-1571407970349-bc16e6961601?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Frozen Peas", weight: "1kg", price: 2.99, image: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Fish Sticks", weight: "500g", price: 6.49, image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Frozen Berries", weight: "500g", price: 4.99, image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Dumplings", weight: "500g", price: 5.49, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "French Fries", weight: "1kg", price: 3.49, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Ice Cream Chocolate", weight: "1L", price: 4.99, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Frozen Foods" items={items} />;
}

export default Frozen;
