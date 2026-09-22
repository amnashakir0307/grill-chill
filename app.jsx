import React, { useState } from 'react';
import { ShoppingBag, Sparkles, ChevronRight, CheckCircle2, Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Buns = [
  { id: 'brioche', name: 'Artisanal Brioche', price: 120, description: 'Soft, buttery toasted bun' },
  { id: 'sesame', name: 'Classic Sesame', price: 90, description: 'Toasted bun with sesame seeds' },
  { id: 'potato', name: 'Potato Bun', price: 110, description: 'Extra pillow-soft savory potato bun' }
];

const Patties = [
  { id: 'angus', name: 'Smash Angus Beef', price: 350, description: '100% Prime crushed beef patty' },
  { id: 'zinger', name: 'Crispy Zinger', price: 280, description: 'Hand-battered extra crispy fillet' },
  { id: 'grilled', name: 'Flame Grilled Chicken', price: 290, description: 'Juicy herb-marinated chicken' }
];

const Toppings = [
  { id: 'cheddar', name: 'Aged Cheddar', price: 80 },
  { id: 'bacon', name: 'Crispy Beef Bacon', price: 120 },
  { id: 'jalapenos', name: 'Pickled Jalapeños', price: 40 },
  { id: 'sauce', name: 'Signature Secret Sauce', price: 50 }
];

const Reviews = [
  { id: 1, name: 'Ali Ahmed', rating: 5, comment: 'Karachi mein aisa smashed burger pehle kabhi nahi khaya! Lab customizer zabardast hai.', date: 'Yesterday' },
  { id: 2, name: 'Sara Khan', rating: 5, comment: 'Packaging premium hai aur food hamesha hot and fresh delivery hota hai.', date: '3 days ago' },
  { id: 3, name: 'Hamza Malik', rating: 5, comment: 'Custom burger builder option is next level. Highly recommended!', date: '1 week ago' }
];

export default function ProfessionalBurgerLab() {
  const [selectedBun, setSelectedBun] = useState(Buns[0]);
  const [selectedPatty, setSelectedPatty] = useState(Patties[0]);
  const [pattyCount, setPattyCount] = useState(2);
  const [selectedToppings, setSelectedToppings] = useState(['cheddar', 'sauce']);

  const toggleTopping = (id) => {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const bunPrice = selectedBun.price;
    const pattyPrice = selectedPatty.price * pattyCount;
    const toppingsPrice = selectedToppings.reduce((acc, topId) => {
      const topping = Toppings.find(t => t.id === topId);
      return acc + (topping ? topping.price : 0);
    }, 0);
    return bunPrice + pattyPrice + toppingsPrice;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white text-xs font-semibold py-2 px-4 text-center tracking-wider uppercase shadow-md">
        🚀 Free Express Delivery on orders over Rs. 1500 | Code: <span className="font-extrabold underline">GRILLNOW</span>
      </div>

      {/* Modern Fixed Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800/80 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30">
              G
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tight text-white leading-none">GRILL & CHILL</h1>
              <span className="text-[9px] tracking-widest text-red-500 uppercase font-extrabold">The Burger Lab</span>
            </div>
          </div>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-xs font-semibold tracking-wider uppercase text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#deals" className="hover:text-white transition-colors">Hot Deals</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#lab" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">Burger Lab</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#branches" className="hover:text-white transition-colors">Branches</a>
          </nav>

          {/* Action Button (White Box Removed) */}
          <div className="flex items-center space-x-4">
            <button className="relative bg-neutral-900 border border-neutral-800 hover:border-red-500/50 text-white px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all">
              <ShoppingBag className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Cart</span>
              <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">2</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Burger Builder Section */}
      <main id="lab" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 bg-red-950/60 border border-red-800/40 text-red-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Burger Lab</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Craft Your Gourmet Burger</h2>
          <p className="text-neutral-400 mt-3 text-sm">Select your premium buns, patties, and melted cheeses in real-time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 space-y-8 bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 rounded-3xl backdrop-blur-sm shadow-xl">
            
            {/* Step 1: Bun Selection */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Choose Bun</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Buns.map((bun) => (
                  <button
                    key={bun.id}
                    onClick={() => setSelectedBun(bun)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      selectedBun.id === bun.id
                        ? 'bg-neutral-800 border-red-500 text-white shadow-lg shadow-red-500/10'
                        : 'bg-neutral-900/80 border-neutral-800/80 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{bun.name}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">{bun.description}</div>
                    <div className="text-xs font-bold text-red-400 mt-3">+Rs. {bun.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Patty Selection */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Select Patty Type</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Patties.map((patty) => (
                  <button
                    key={patty.id}
                    onClick={() => setSelectedPatty(patty)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      selectedPatty.id === patty.id
                        ? 'bg-neutral-800 border-red-500 text-white shadow-lg shadow-red-500/10'
                        : 'bg-neutral-900/80 border-neutral-800/80 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{patty.name}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">{patty.description}</div>
                    <div className="text-xs font-bold text-red-400 mt-3">+Rs. {patty.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Patty Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-xs font-bold">3</span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Patty Count</h3>
                </div>
                <span className="text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full">
                  {pattyCount} {pattyCount === 1 ? 'Patty' : 'Patties'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value={pattyCount}
                onChange={(e) => setPattyCount(parseInt(e.target.value))}
                className="w-full accent-red-500 h-2 bg-neutral-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Step 4: Toppings */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-xs font-bold">4</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Add Toppings & Cheese</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Toppings.map((topping) => {
                  const isChecked = selectedToppings.includes(topping.id);
                  return (
                    <button
                      key={topping.id}
                      onClick={() => toggleTopping(topping.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                        isChecked
                          ? 'bg-neutral-800 border-red-500/60 text-white'
                          : 'bg-neutral-900/80 border-neutral-800/80 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-red-500' : 'text-neutral-600'}`} />
                        <span className="text-xs font-medium text-white">{topping.name}</span>
                      </div>
                      <span className="text-xs font-bold text-neutral-400">+Rs. {topping.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Preview Side Panel */}
          <div className="lg:col-span-5 sticky top-28 bg-neutral-900/60 border border-neutral-800 p-6 md:p-8 rounded-3xl backdrop-blur-md space-y-6 shadow-2xl">
            <div className="text-center border-b border-neutral-800 pb-4">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live Visualizer</span>
              <h3 className="text-xl font-black text-white mt-1">Custom Stack Preview</h3>
            </div>

            {/* Visual Layers Stack */}
            <div className="py-6 flex flex-col items-center justify-center space-y-1.5 min-h-[220px]">
              {/* Top Bun */}
              <div className="w-48 h-10 bg-amber-600 rounded-t-full border-b-2 border-amber-700 shadow-inner flex items-center justify-center text-[11px] font-bold text-amber-100">
                {selectedBun.name} (Top)
              </div>

              {/* Toppings Visuals */}
              {selectedToppings.includes('sauce') && (
                <div className="w-44 h-2 bg-red-500 rounded-full opacity-90 animate-pulse" />
              )}
              {selectedToppings.includes('cheddar') && (
                <div className="w-46 h-2 bg-yellow-400 rounded-sm shadow-sm" />
              )}
              {selectedToppings.includes('jalapenos') && (
                <div className="w-40 h-2 bg-emerald-600 rounded-full" />
              )}
              {selectedToppings.includes('bacon') && (
                <div className="w-42 h-2.5 bg-red-900 rounded-sm" />
              )}

              {/* Patties Visuals */}
              {Array.from({ length: pattyCount }).map((_, i) => (
                <div key={i} className="w-48 h-6 bg-amber-950 rounded-lg border-b border-amber-900 flex items-center justify-center text-[10px] font-semibold text-amber-200/80 shadow-md">
                  {selectedPatty.name} #{i + 1}
                </div>
              ))}

              {/* Bottom Bun */}
              <div className="w-48 h-6 bg-amber-700 rounded-b-xl border-t border-amber-800 flex items-center justify-center text-[10px] font-bold text-amber-100">
                {selectedBun.name} (Bottom)
              </div>
            </div>

            {/* Price & Checkout */}
            <div className="pt-4 border-t border-neutral-800 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Total Price</span>
                <div className="text-right">
                  <span className="text-xs text-neutral-500 mr-1">PKR</span>
                  <span className="text-3xl font-black text-white">Rs. {calculateTotal()}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-red-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]">
                <span>Add Custom Burger</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Customer Reviews Section */}
      <section id="reviews" className="border-t border-neutral-800/80 bg-neutral-900/20 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Customer Feedback</span>
            <h2 className="text-3xl font-black text-white mt-1">Loved By Foodies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Reviews.map((rev) => (
              <div key={rev.id} className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 italic">"{rev.comment}"</p>
                <div className="flex justify-between items-center text-xs text-neutral-500 pt-2 border-t border-neutral-800">
                  <span className="font-bold text-neutral-200">{rev.name}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Classy Footer */}
      <footer id="branches" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center font-bold text-white">G</div>
              <span className="font-black text-white tracking-tight">GRILL & CHILL</span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-500">
              Karachi & Lahore's premier smash burger destination. Fresh ingredients, artisanal buns, and signature sauces daily.
            </p>
            <div className="flex space-x-4 text-neutral-400 pt-2">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Branches</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2"><MapPin className="w-3.5 h-3.5 text-red-500" /><span>Karachi: DHA Phase 6 & Gulshan</span></li>
              <li className="flex items-center space-x-2"><MapPin className="w-3.5 h-3.5 text-red-500" /><span>Lahore: MM Alam Road & Gulberg</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-white transition-colors">Gourmet Burgers</a></li>
              <li><a href="#lab" className="hover:text-white transition-colors">Custom Burger Builder</a></li>
              <li><a href="#deals" className="hover:text-white transition-colors">Exclusive Combos</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Working Hours</h4>
            <p className="text-xs text-neutral-500">Monday - Sunday: 12:00 PM – 03:00 AM</p>
            <div className="pt-2 text-xs space-y-1">
              <p className="flex items-center space-x-2"><Phone className="w-3.5 h-3.5 text-red-500" /><span>+92 300 1234567</span></p>
              <p className="flex items-center space-x-2"><Mail className="w-3.5 h-3.5 text-red-500" /><span>orders@grillandchill.pk</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-600">
          <p>© 2026 Grill & Chill - The Burger Lab. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
