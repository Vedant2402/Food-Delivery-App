import CategoryTemplate from '../components/CategoryTemplate';

function Bakery() {
  const items = [
    { id: 1, name: "Sourdough Bread", weight: "1pc", price: 4.99, image: "https://images.unsplash.com/photo-1585478259539-e6215b1e88ea?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Croissants", weight: "4pcs", price: 5.99, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Bagels", weight: "6pcs", price: 3.99, image: "https://images.unsplash.com/photo-1585478259539-e6215b1e88ea?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Chocolate Cake", weight: "1pc", price: 12.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Muffins", weight: "4pcs", price: 4.99, image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Baguette", weight: "1pc", price: 2.49, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Donuts", weight: "6pcs", price: 6.99, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Cookies", weight: "12pcs", price: 5.49, image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&w=500&q=80" },
  ];

  return <CategoryTemplate title="Bakery" items={items} />;
}

export default Bakery;
