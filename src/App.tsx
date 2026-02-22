import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// --- Types ---
interface MenuItem {
  title: string;
  desc: string;
  img: string;
  price: number; 
  id: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

// --- Components ---

const ConciergeNavbar: React.FC<{ cartCount: number; onOpenCart: () => void }> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["The Experience", "Signature Menu", "Our Story", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-midnight/90 backdrop-blur-md border-b border-gold/10 py-4" 
            : "bg-midnight/90 backdrop-blur-md border-b border-gold/10 py-4"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-widest text-gold z-50 relative">
            AYAM<span className="text-white">LATAROMBO</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm uppercase tracking-widest text-text-high/80 hover:text-gold transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-gold hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
             <button 
              onClick={onOpenCart}
              className="relative p-2 text-gold hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="text-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-8 h-px bg-current mb-2 transition-all ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
              <div className={`w-8 h-px bg-current mb-2 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-8 h-px bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-midnight z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-3xl text-gold hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CinematicHero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div id="the-experience" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/40 z-10" />
        <img 
          src="/images/outlet.jpg" 
          alt="Latarombo Ambience" 
          className="w-full h-full object-cover scale-110 grayscale-[80%] opacity-50"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
        >
          Refined Local Heritage
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 italic"
        >
          Mbak Anna.
        </motion.h1>
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2, duration: 1 }}
         >
           <a 
             href="#signature-menu"
             className="inline-block px-8 py-3 border border-white/20 text-white/80 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-500"
           >
             Discover The Menu
           </a>
         </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
      </motion.div>
    </div>
  );
};

const MenuCard: React.FC<{
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  delay: number;
}> = ({ item, onAdd, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className="group"
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/5] cursor-pointer">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={item.img} 
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <button 
          onClick={() => onAdd(item)}
          className="absolute bottom-4 right-4 bg-gold text-midnight p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl md:text-2xl text-white group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        <span className="font-sans text-gold text-lg">{item.price}k</span>
      </div>
      <p className="text-text-muted font-sans font-light text-sm leading-relaxed max-w-[90%]">
        {item.desc}
      </p>
    </motion.div>
  );
};

const SignatureMenu: React.FC<{ onAddToCart: (item: MenuItem) => void }> = ({ onAddToCart }) => {
    const menuItems: MenuItem[] = [
    { id: "1", title: "Ayam Bakar", desc: "Pilihan Bagian: Dada / Paha / Ceker.", img: "/images/real_bakar.png", price: 16 },
    { id: "2", title: "Ayam Goreng", desc: "Pilihan Bagian: Dada / Paha / Ceker.", img: "/images/real_goreng.png", price: 15 },
    { id: "3", title: "Ayam Geprek", desc: "Pilihan Bagian: Dada / Paha / Ceker.", img: "/images/real_geprek.png", price: 15 },
    { id: "4", title: "Ayam Tepong", desc: "Spesial Krispi Tepong (Paha Atas).", img: "/images/real_tepong.png", price: 15 },
  ];

  return (
    <section id="signature-menu" className="py-32 bg-midnight relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl mb-4 italic"> Signature Selection</h2>
            <div className="h-px w-24 bg-gold"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-text-muted mt-6 md:mt-0 font-light max-w-sm text-sm"
          >
            Hanya menyajikan potongan ayam terbaik tanpa tambahan nasi atau minuman. Murni kenikmatan daging pilihan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
             <MenuCard key={item.id} item={item} onAdd={onAddToCart} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full border border-gold/20 z-0 hidden md:block"></div>
              <img src="/images/bento.png" alt="Plating" className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">The Philosophy of Taste</h2>
            <p className="text-text-muted font-light leading-loose mb-8">
              At Ayamlatarombo Mbak Anna, we believe that true luxury lies in authenticity. 
              Our journey began with a simple desire: to elevate the humble chicken dish into a memorable culinary experience.
            </p>
            <p className="text-text-muted font-light leading-loose mb-12">
              Every ingredient is hand-selected, every spice is ground daily, and every plate is served with the warmth of Karanganyar hospitality. 
              We invite you to taste the difference that passion makes.
            </p>
            <a href="https://wa.me/6289649580754" className="text-gold uppercase tracking-widest text-sm border-b border-gold/50 pb-1 hover:text-white hover:border-white transition-colors">
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-midnight py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h3 className="text-2xl font-serif text-gold mb-8">AYAM<span className="text-white">LATAROMBO</span></h3>
        <p className="text-text-muted font-light text-sm mb-8">
          Jalan Duwet, RT.2/RW.2, Duwet, Brujul, Kec. Jaten,<br/> 
          Kabupaten Karanganyar, Jawa Tengah
        </p>
        <div className="flex justify-center gap-8 mb-12">
           {['Instagram', 'WhatsApp', 'Maps'].map(social => (
             <a key={social} href="#" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors">
               {social}
             </a>
           ))}
        </div>
        <p className="text-white/20 text-xs tracking-widest">© 2026 Ayamlatarombo. Refined by Antigravity.</p>
      </div>
    </footer>
  );
};

const FloatingConcierge: React.FC = () => {
    return (
        <motion.a
            href="https://wa.me/6289649580754"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gold text-midnight px-5 py-3 rounded-full shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 group"
        >
            <span className="text-xs font-bold uppercase tracking-wide hidden md:block">Personal Concierge</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </motion.a>
    );
};

const CartDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}> = ({ isOpen, onClose, cart, onUpdateQuantity, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl flex flex-col border-l border-gold/10"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-2xl font-serif text-gold">Your Selection</h2>
              <button onClick={onClose} className="text-text-muted hover:text-white">Close</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-text-muted mt-20">
                  <p>Your cart is empty.</p>
                  <p className="text-sm mt-2">Discover our signature menu to add items.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gold text-sm">{item.price}k</p>
                    </div>
                    <div className="flex items-center gap-3 bg-midnight px-3 py-1 rounded-full border border-white/10">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-text-muted hover:text-white">-</button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-text-muted hover:text-white">+</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-white/5 bg-midnight/50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-text-muted">Total</span>
                <span className="text-2xl font-serif text-gold">Rp {total}k</span>
              </div>
              <button 
                onClick={onCheckout}
                disabled={cart.length === 0}
                className="w-full bg-gold text-midnight py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const PaymentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
}> = ({ isOpen, onClose, cart, total }) => {
  const handleConfirm = () => {
    // Generate WhatsApp Message
    const itemsList = cart.map(item => `- ${item.title} (${item.quantity}x) : Rp ${item.price * item.quantity}k`).join('%0A');
    const message = `Halo Mbak Anna, saya ingin konfirmasi pesanan via QRIS:%0A%0A${itemsList}%0A%0A*Total: Rp ${total}k*%0A%0AMohon diproses ya!`;
    window.open(`https://wa.me/6289649580754?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={onClose}
             className="absolute inset-0 bg-midnight/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-surface p-8 max-w-sm w-full rounded-2xl border border-gold/20 text-center shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-gold mb-2">Scan to Pay</h3>
            <p className="text-text-muted text-sm mb-6">QRIS Universal Payment</p>
            
            <div className="bg-white p-4 rounded-xl mb-6 mx-auto w-fit">
              <img src="/images/qris.png" alt="QRIS Code" className="w-48 h-48 object-contain" />
            </div>

            <div className="mb-8">
              <p className="text-text-muted text-sm mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-white">Rp {total}k</p>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-500 transition-colors mb-3"
            >
              I Have Paid (Confirm via WA)
            </button>
            <button 
              onClick={onClose}
              className="text-text-muted text-sm hover:text-white"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-midnight min-h-screen text-text-high antialiased selection:bg-gold selection:text-midnight">
      <ConciergeNavbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <CinematicHero />
      <SignatureMenu onAddToCart={addToCart} />
      <OurStory />
      <Footer />
      <FloatingConcierge />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsPaymentOpen(true);
        }}
      />
      
      <PaymentModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        cart={cart}
        total={cartTotal}
      />
    </div>
  );
};

export default App;
