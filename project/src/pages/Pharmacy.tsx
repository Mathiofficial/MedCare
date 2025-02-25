import React, { useState } from 'react';
import { Search, ShoppingCart, XCircle } from 'lucide-react';

function Pharmacy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const medicines = [
    { id: 1, name: "Paracetamol 500mg", category: "Pain Relief", price: 9.99, stock: 50 },
    { id: 2, name: "Vitamin C 1000mg", category: "Supplements", price: 14.99, stock: 30 },
    { id: 3, name: "First Aid Kit", category: "Medical Supplies", price: 24.99, stock: 15 },
    { id: 4, name: "Digital Thermometer", category: "Medical Devices", price: 19.99, stock: 25 },
    { id: 5, name: 'Omega-3 Fish Oil', category: 'Supplements', price: 29.99, stock: 40 },
    { id: 6, name: 'Blood Pressure Monitor', category: 'Medical Devices', price: 49.99, stock: 10 }
  ];

  const filteredMedicines = medicines.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Online Pharmacy</h1>
          <button onClick={() => setShowCart(true)} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <ShoppingCart className="h-5 w-5 mr-2" /> Cart ({cart.length})
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.length > 0 ? filteredMedicines.map(med => (
            <MedicineCard key={med.id} medicine={med} addToCart={addToCart} />
          )) : <p className="text-center col-span-3">No medicines found.</p>}
        </div>
      </div>

      {showCart && <CartModal cart={cart} removeFromCart={removeFromCart} closeCart={() => setShowCart(false)} />}
    </div>
  );
}

function MedicineCard({ medicine, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-semibold text-gray-800">{medicine.name}</h3>
      <p className="text-sm text-gray-500">{medicine.category}</p>
      <p className="text-lg font-bold text-gray-800">${medicine.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-2" onClick={() => addToCart(medicine)}>
        Add to Cart
      </button>
    </div>
  );
}

function CartModal({ cart, removeFromCart, closeCart }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                <XCircle className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
        <div className="mt-4 flex justify-between">
          <button onClick={closeCart} className="bg-gray-400 text-white px-4 py-2 rounded-lg">Close</button>
          {cart.length > 0 && <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Purchase</button>}
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
