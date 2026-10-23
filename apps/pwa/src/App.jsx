import React, { useState, useEffect } from 'react';

const BURGERS_DATA = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales',
    badge: '👑 Ultra Premium',
    specialtyLevel: 'Nivel 5 - Imperial',
    badgeBg: '#FEF3C7',
    badgeColor: '#92400E',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    description: 'Doble Angus 360g flameada al roble, cheddar 12 meses, cebolla al bourbon y bacon.',
    prepTime: '7-9 min'
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clásicas',
    badge: '⭐ Clásica Maestra',
    specialtyLevel: 'Nivel 3 - Esencial',
    badgeBg: '#EFF6FF',
    badgeColor: '#1E40AF',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80',
    description: 'Smash 180g jugosa, queso americano, pepinillos dulces, tomate, lechuga y aderezo.',
    prepTime: '5-6 min'
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Especiales',
    badge: '🔥 Doble Corona',
    specialtyLevel: 'Nivel 4 - Doble Potencia',
    badgeBg: '#FEE2E2',
    badgeColor: '#991B1B',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1583032015879-bf7291f42294?w=500&auto=format&fit=crop&q=80',
    description: 'Doble carne a la brasa (300g), doble queso gouda fundido, bacon y salsa BBQ leña.',
    prepTime: '6-8 min'
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Especiales',
    badge: '✨ Signature Chef',
    specialtyLevel: 'Nivel 5 - Suprema',
    badgeBg: '#F3E8FF',
    badgeColor: '#6B21A8',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80',
    description: 'Doble Wagyu blend (300g), queso Emmental suizo, champiñones portobello y alioli trufa.',
    prepTime: '7-8 min'
  },
  {
    id: 5,
    name: 'Smoky Bacon Deluxe',
    category: 'Especiales',
    badge: '🥓 Gourmet Ahumado',
    specialtyLevel: 'Nivel 4 - Ahumada',
    badgeBg: '#FFEDD5',
    badgeColor: '#9A3412',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop&q=80',
    description: 'Carne Angus, triple capa de bacon caramelizado con maple, Monterey Jack y aros crujientes.',
    prepTime: '6-7 min'
  },
  {
    id: 6,
    name: 'Crispy Chicken Royal',
    category: 'Pollo & Aves',
    badge: '🍗 Crujiente Maestro',
    specialtyLevel: 'Nivel 3 - Crujiente',
    badgeBg: '#FEF9C3',
    badgeColor: '#854D0E',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=80',
    description: 'Pechuga marinada 24h en buttermilk con rebozado 11 especias, coleslaw manzana y honey mustard.',
    prepTime: '5-6 min'
  },
  {
    id: 7,
    name: 'Truffle Mushroom King',
    category: 'Especiales',
    badge: '🍄 Experiencia Exclusiva',
    specialtyLevel: 'Nivel 5 - Lujo Trufado',
    badgeBg: '#F1F5F9',
    badgeColor: '#334155',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=80',
    description: 'Medallón Dry-Aged 28 días, fondue provolone, hongos silvestres salteados y mayo de trufa blanca.',
    prepTime: '8-9 min'
  },
  {
    id: 8,
    name: 'Spicy Habanero Blast',
    category: 'Picantes',
    badge: '🌶️ Fuego Extremo',
    specialtyLevel: 'Nivel 4 - Picante Bravo',
    badgeBg: '#FEE2E2',
    badgeColor: '#B91C1C',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=80',
    description: 'Carne cajún, queso Pepper Jack picante, jalapeños al escabeche, guacamole rústico y mango habanero.',
    prepTime: '6-7 min'
  },
  {
    id: 9,
    name: 'Avocado Ranch Smash',
    category: 'Clásicas',
    badge: '🥑 California Fresh',
    specialtyLevel: 'Nivel 3 - Frescura Autor',
    badgeBg: '#DCFCE7',
    badgeColor: '#15803D',
    price: 12.49,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=80',
    description: 'Doble smash, aguacate Hass fresco laminado, queso suizo alpino y aderezo ranch de eneldo.',
    prepTime: '5-6 min'
  },
  {
    id: 10,
    name: 'Veggie Green Supreme',
    category: 'Veggies',
    badge: '🌱 Green Gourmet',
    specialtyLevel: 'Nivel 3 - 100% Plant-Based',
    badgeBg: '#D1FAE5',
    badgeColor: '#065F46',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=80',
    description: 'Medallón artesano de quinoa y lentejas, queso vegetal derretido, pimientos asados y alioli al pesto.',
    prepTime: '6-7 min'
  }
];

const PROMO_OFFERS = [
  {
    id: 'OFF-1',
    title: '👑 Combo Rey Duo',
    badge: '25% OFF',
    desc: '2x Rey de las Burgers + 1 Papas Familiares Trufadas + 2 Bebidas Artesanales.',
    originalPrice: 38.00,
    price: 28.50,
    burgerId: 1,
    tag: 'Más Popular'
  },
  {
    id: 'OFF-2',
    title: '⭐ Viernes de 2x1 Smash',
    badge: '2x1 PROMO',
    desc: 'Lleva 2 Burger Real Clásica al precio de 1. ¡Solo por tiempo limitado!',
    originalPrice: 19.98,
    price: 9.99,
    burgerId: 2,
    tag: 'Exclusivo App'
  },
  {
    id: 'OFF-3',
    title: '✨ Pack Degustación Doble',
    badge: 'AHORRO $8',
    desc: '1x Burger Doble Especial + 1x Smoky Bacon Deluxe + Aros de cebolla crocantes.',
    originalPrice: 32.50,
    price: 24.50,
    burgerId: 4,
    tag: 'Gourmet'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'ofertas' | 'ordenes' | 'perfil'
  const [cart, setCart] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCartSheetOpen, setIsCartSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  // Simulated initial order
  const [orders, setOrders] = useState([
    {
      id: 'ORD-9824',
      date: 'Hoy, 19:42',
      items: [
        { name: 'Rey de las Burgers', qty: 1, price: 14.99 },
        { name: 'Papas Rústicas Trufadas', qty: 1, price: 4.50 }
      ],
      total: 19.49,
      status: 'delivering', // 'preparing' | 'delivering' | 'delivered'
      statusText: '🛵 En camino con repartidor',
      step: 3,
      eta: '12 min'
    }
  ]);

  // Online / offline detector
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const setOn = () => setIsOnline(true);
    const setOff = () => setIsOnline(false);
    window.addEventListener('online', setOn);
    window.addEventListener('offline', setOff);
    return () => {
      window.removeEventListener('online', setOn);
      window.removeEventListener('offline', setOff);
    };
  }, []);

  // Cart operations
  const addToCart = (burger, isCombo = false, comboTitle = '', comboPrice = null) => {
    setCart(prev => {
      const itemPrice = comboPrice !== null ? comboPrice : burger.price;
      const itemName = isCombo ? comboTitle : burger.name;
      const existing = prev.find(i => i.name === itemName);
      if (existing) {
        return prev.map(i => i.name === itemName ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, {
        id: isCombo ? `combo-${Date.now()}` : burger.id,
        name: itemName,
        price: itemPrice,
        image: burger.image,
        qty: 1,
        specialtyBadge: burger.badge
      }];
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (!existing) return prev;
      if (existing.qty === 1) {
        return prev.filter(i => i.name !== name);
      }
      return prev.map(i => i.name === name ? { ...i, qty: i.qty - 1 } : i);
    });
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discountAmount = appliedCoupon ? (subtotal * appliedCoupon.discount) : 0;
  const deliveryFee = subtotal > 0 ? 0.00 : 0; // Free delivery promo!
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);
  const totalCartCount = cart.reduce((acc, i) => acc + i.qty, 0);

  // Apply Coupon
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (code === 'RAPID50') {
      setAppliedCoupon({ code: 'RAPID50', discount: 0.50, label: '50% OFF Primera Compra' });
      setCouponFeedback('🎉 ¡Cupón RAPID50 aplicado! Tienes 50% de descuento.');
    } else if (code === 'BURGER10') {
      setAppliedCoupon({ code: 'BURGER10', discount: 0.10, label: '10% OFF Fidelidad' });
      setCouponFeedback('✅ Cupón BURGER10 aplicado con 10% de descuento.');
    } else {
      setCouponFeedback('❌ Código no válido. Prueba usando RAPID50.');
    }
  };

  // Confirm Simulated Purchase
  const handleConfirmOrder = () => {
    if (cart.length === 0) return;
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: 'Ahora mismo',
      items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
      total: finalTotal,
      status: 'preparing',
      statusText: '👨‍🍳 En la brasa de roble',
      step: 2,
      eta: '18 min'
    };
    setOrders([newOrder, ...orders]);
    clearCart();
    setIsCheckoutOpen(false);
    setIsCartSheetOpen(false);
    setActiveTab('ordenes');
  };

  // Simulate instant quick demo order
  const handleQuickDemoOrder = () => {
    const demoOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: 'Simulado Reciente',
      items: [
        { name: 'Burger Real Doble', qty: 1, price: 12.99 },
        { name: 'Burger Real Clásica', qty: 1, price: 9.99 }
      ],
      total: 22.98,
      status: 'preparing',
      statusText: '👨‍🍳 Sellando en la plancha a 220°C',
      step: 2,
      eta: '15 min'
    };
    setOrders([demoOrder, ...orders]);
    setActiveTab('ordenes');
  };

  // Filter burgers
  const filteredBurgers = BURGERS_DATA.filter(b => {
    const matchesCategory = selectedCategory === 'Todas' || b.category.includes(selectedCategory);
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Top Mobile App Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: '#FFFFFF',
        borderBottom: '1px solid var(--surface-border)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
            border: '1px solid #FCD34D',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem'
          }}>
            🍔
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: '900', color: '#92400E', lineHeight: '1.1' }}>
              HAMBURGER RAPID
            </div>
            <div style={{ fontSize: '0.68rem', fontWeight: '700', color: '#B45309', textTransform: 'uppercase' }}>
              App Móvil Oficial &bull; PWA
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '0.7rem',
            padding: '3px 8px',
            borderRadius: '10px',
            fontWeight: '700',
            background: isOnline ? '#DCFCE7' : '#FEE2E2',
            color: isOnline ? '#15803D' : '#B91C1C'
          }}>
            {isOnline ? '🟢 Online' : '🔴 Offline'}
          </span>
          <button 
            onClick={() => setIsCartSheetOpen(true)}
            aria-label="Abrir Carrito"
            style={{
              position: 'relative',
              background: '#FFFBEB',
              border: '1px solid #FCD34D',
              borderRadius: '10px',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >
            🛒
            {totalCartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#DC2626',
                color: '#FFFFFF',
                fontSize: '0.7rem',
                fontWeight: '900',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Tab Content */}
      <main style={{ flex: 1, paddingBottom: totalCartCount > 0 ? '135px' : '85px' }}>
        
        {/* ================= TAB 1: MENÚ ================= */}
        {activeTab === 'menu' && (
          <div className="fade-in" style={{ padding: '16px' }}>
            {/* Delivery address chip */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--surface-border)',
              borderRadius: '12px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem' }}>📍</span>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                    Entregar en
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#1E293B' }}>
                    Av. Principal 1240, Las Condes
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#D97706', background: '#FEF3C7', padding: '3px 8px', borderRadius: '8px' }}>
                ~22 min
              </span>
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Buscar por 'Rey', 'Real Clásica', 'Doble'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: '12px',
                  border: '1px solid var(--surface-border)',
                  background: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                  color: '#1E293B'
                }}
              />
              <span style={{ position: 'absolute', left: '14px', top: '12px', fontSize: '1rem', color: '#94A3B8' }}>
                🔍
              </span>
            </div>

            {/* Category horizontal scrolling chips */}
            <div className="no-scrollbar" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '16px' }}>
              {['Todas', 'Especiales', 'Clásicas', 'Pollo & Aves', 'Veggies'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '8px 14px',
                    borderRadius: '20px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    background: selectedCategory === cat ? '#92400E' : '#FFFFFF',
                    color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                    boxShadow: 'var(--shadow-sm)',
                    border: selectedCategory === cat ? '1px solid #92400E' : '1px solid var(--surface-border)'
                  }}
                >
                  {cat === 'Todas' ? '🍔 Todas (10)' : cat}
                </button>
              ))}
            </div>

            {/* Burgers List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredBurgers.map((burger) => {
                const itemInCart = cart.find(i => i.name === burger.name);
                return (
                  <div
                    key={burger.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--surface-border)',
                      padding: '12px',
                      display: 'flex',
                      gap: '12px',
                      boxShadow: 'var(--shadow-sm)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ position: 'relative', width: '105px', height: '105px', flexShrink: 0 }}>
                      <img
                        src={burger.image}
                        alt={burger.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                      />
                      <span style={{
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        fontSize: '0.62rem',
                        fontWeight: '800',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: burger.badgeBg,
                        color: burger.badgeColor,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}>
                        {burger.badge}
                      </span>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1E293B', lineHeight: '1.2' }}>
                            {burger.name}
                          </h3>
                        </div>
                        <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#B45309', margin: '2px 0' }}>
                          {burger.specialtyLevel}
                        </div>
                        <p style={{
                          fontSize: '0.78rem',
                          color: '#64748B',
                          lineHeight: '1.4',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {burger.description}
                        </p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: '900', color: '#92400E' }}>
                          ${burger.price.toFixed(2)}
                        </span>

                        {itemInCart ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FEF3C7', borderRadius: '12px', padding: '4px 8px' }}>
                            <button
                              onClick={() => removeFromCart(burger.name)}
                              style={{ width: '24px', height: '24px', borderRadius: '6px', border: 'none', background: '#FFFFFF', color: '#92400E', fontWeight: '900', cursor: 'pointer' }}
                            >
                              -
                            </button>
                            <span style={{ fontSize: '0.88rem', fontWeight: '900', color: '#92400E' }}>
                              {itemInCart.qty}
                            </span>
                            <button
                              onClick={() => addToCart(burger)}
                              style={{ width: '24px', height: '24px', borderRadius: '6px', border: 'none', background: '#D97706', color: '#FFFFFF', fontWeight: '900', cursor: 'pointer' }}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(burger)}
                            style={{
                              background: '#D97706',
                              color: '#FFFFFF',
                              border: 'none',
                              padding: '6px 14px',
                              borderRadius: '20px',
                              fontSize: '0.82rem',
                              fontWeight: '800',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              boxShadow: '0 4px 10px rgba(217,119,6,0.3)'
                            }}
                          >
                            <span>+</span> Agregar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 2: OFERTAS ================= */}
        {activeTab === 'ofertas' && (
          <div className="fade-in" style={{ padding: '16px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
              border: '1.5px solid #FCD34D',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '2rem' }}>🏷️</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#78350F', margin: '4px 0' }}>
                Cuponera Exclusiva PWA
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#92400E' }}>
                Canjea combos con descuento directo o ingresa códigos secretos de promoción.
              </p>
            </div>

            {/* Coupon Code Simulator Box */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--surface-border)', borderRadius: '14px', padding: '14px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#B45309', textTransform: 'uppercase', marginBottom: '6px' }}>
                Ingresar Código de Descuento
              </div>
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Ej: RAPID50"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--surface-border)',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    outline: 'none',
                    textTransform: 'uppercase'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#92400E',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  Aplicar
                </button>
              </form>
              {couponFeedback && (
                <div style={{ marginTop: '8px', fontSize: '0.8rem', fontWeight: '700', color: appliedCoupon ? '#059669' : '#DC2626' }}>
                  {couponFeedback}
                </div>
              )}
            </div>

            {/* Promo Offers Cards */}
            <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1E293B', marginBottom: '12px' }}>
              Combos & Descuentos Disponibles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {PROMO_OFFERS.map((promo) => (
                <div
                  key={promo.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--surface-border)',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', background: '#DCFCE7', color: '#15803D', padding: '3px 8px', borderRadius: '6px' }}>
                      {promo.tag}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: '900', background: '#FEE2E2', color: '#991B1B', padding: '3px 8px', borderRadius: '6px' }}>
                      {promo.badge}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B', marginBottom: '4px' }}>
                    {promo.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: '1.4', marginBottom: '12px' }}>
                    {promo.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ textDecoration: 'line-through', color: '#94A3B8', fontSize: '0.85rem', marginRight: '6px' }}>
                        ${promo.originalPrice.toFixed(2)}
                      </span>
                      <span style={{ fontSize: '1.25rem', fontWeight: '900', color: '#B45309' }}>
                        ${promo.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const burgerMatch = BURGERS_DATA.find(b => b.id === promo.burgerId) || BURGERS_DATA[0];
                        addToCart(burgerMatch, true, promo.title, promo.price);
                        setIsCartSheetOpen(true);
                      }}
                      style={{
                        background: '#D97706',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: '800',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(217,119,6,0.3)'
                      }}
                    >
                      Canjear Combo 🛒
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: ÓRDENES ================= */}
        {activeTab === 'ordenes' && (
          <div className="fade-in" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#1E293B' }}>Tus Órdenes</h2>
                <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Seguimiento en vivo de preparación y reparto</div>
              </div>
              <button
                onClick={handleQuickDemoOrder}
                style={{
                  background: '#FFFBEB',
                  border: '1px solid #FCD34D',
                  color: '#92400E',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                + Simular Pedido
              </button>
            </div>

            {orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--surface-border)' }}>
                <span style={{ fontSize: '3rem' }}>🛍️</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1E293B', marginTop: '12px' }}>
                  No tienes órdenes activas
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#64748B', margin: '6px 0 16px' }}>
                  Explora nuestro menú y simula tu primer pedido ahora.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  style={{
                    background: '#D97706',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  Ver Menú de Hamburguesas
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--surface-border)',
                      padding: '16px',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div>
                        <span style={{ fontSize: '0.92rem', fontWeight: '900', color: '#1E293B' }}>{order.id}</span>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{order.date}</div>
                      </div>
                      <span style={{
                        background: order.step === 4 ? '#DCFCE7' : '#FEF3C7',
                        color: order.step === 4 ? '#15803D' : '#92400E',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '800'
                      }}>
                        {order.statusText}
                      </span>
                    </div>

                    {/* Progress tracking bar */}
                    <div style={{ background: '#FAF8F5', border: '1px solid var(--surface-border)', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: '800', color: '#64748B', marginBottom: '6px' }}>
                        <span>Confirmado</span>
                        <span>En Brasa</span>
                        <span>En Moto</span>
                        <span>Entregado</span>
                      </div>
                      <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${(order.step / 4) * 100}%`,
                          background: 'linear-gradient(90deg, #D97706, #10B981)',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                        <small style={{ color: '#92400E', fontWeight: '700', fontSize: '0.72rem' }}>
                          ⏱️ Tiempo estimado: {order.eta}
                        </small>
                        <small style={{ color: '#64748B', fontSize: '0.72rem' }}>
                          Repartidor: Jorge V. (Moto #12)
                        </small>
                      </div>
                    </div>

                    {/* Items in order */}
                    <div style={{ borderTop: '1px dashed var(--surface-border)', paddingTop: '10px' }}>
                      {order.items.map((it, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                          <span style={{ color: '#334155' }}>{it.qty}x {it.name}</span>
                          <span style={{ fontWeight: '700', color: '#1E293B' }}>${(it.price * it.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--surface-border)', paddingTop: '10px', marginTop: '8px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#64748B' }}>Total Pagado</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: '900', color: '#B45309' }}>
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: PERFIL ================= */}
        {activeTab === 'perfil' && (
          <div className="fade-in" style={{ padding: '16px' }}>
            {/* User Info Header */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--surface-border)',
              padding: '18px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                margin: '0 auto 10px',
                border: '3px solid #FCD34D',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                  alt="Carlos Mendoza"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1E293B', marginBottom: '2px' }}>
                Carlos Mendoza G.
              </h2>
              <div style={{ fontSize: '0.8rem', color: '#92400E', fontWeight: '800' }}>
                👑 Socio VIP Gold Patron &bull; Club Rapid
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                carlos.mendoza@email.com &bull; +56 9 8844 2200
              </div>
            </div>

            {/* Loyalty points card */}
            <div style={{
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
              border: '1.5px solid #FCD34D',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#78350F', textTransform: 'uppercase' }}>
                  RapidPoints Acumulados
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#92400E' }}>
                  480 pts
                </span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.7)', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ height: '100%', width: '80%', background: '#B45309' }} />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#78350F', fontWeight: '600' }}>
                ¡Te faltan solo 20 puntos para una "Burger Real Clásica" gratis! 🎁
              </div>
            </div>

            {/* Quick settings list */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--surface-border)', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ padding: '14px', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>📍</span>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1E293B' }}>Direcciones Guardadas</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Casa, Oficina</div>
                  </div>
                </div>
                <span style={{ color: '#94A3B8' }}>›</span>
              </div>

              <div style={{ padding: '14px', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>💳</span>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1E293B' }}>Método de Pago Predeterminado</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Visa •••• 4242</div>
                  </div>
                </div>
                <span style={{ color: '#94A3B8' }}>›</span>
              </div>

              <div style={{ padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🍔</span>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1E293B' }}>Hamburguesa Favorita</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Rey de las Burgers (Pedida 14 veces)</div>
                  </div>
                </div>
                <span style={{ color: '#94A3B8' }}>›</span>
              </div>
            </div>

            {/* Navigation to other platforms */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="/"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid var(--surface-border)',
                  color: '#92400E',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                🌐 Ir al Portal Web E-commerce
              </a>
              <a
                href="/admin"
                style={{
                  background: '#92400E',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                ⚙️ Ir al Panel Administrativo
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Bar (if items in cart) */}
      {totalCartCount > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '72px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '460px',
          padding: '0 12px',
          zIndex: 45
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #92400E 0%, #D97706 100%)',
            borderRadius: '16px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            boxShadow: '0 10px 25px -4px rgba(180, 83, 9, 0.4)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                background: '#FFFFFF',
                color: '#92400E',
                fontSize: '0.8rem',
                fontWeight: '900',
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'}
              </span>
              <div>
                <div style={{ fontSize: '0.72rem', opacity: 0.9 }}>Total del Pedido</div>
                <div style={{ fontSize: '1.15rem', fontWeight: '900' }}>
                  ${finalTotal.toFixed(2)}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCartSheetOpen(true)}
              style={{
                background: '#FFFFFF',
                color: '#92400E',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: '900',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Ver Carrito ›
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal / Sheet */}
      {isCartSheetOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}>
          <div style={{
            background: '#FFFFFF',
            width: '100%',
            maxWidth: '480px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            padding: '20px',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 -10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#1E293B' }}>
                Tu Carrito ({totalCartCount})
              </h3>
              <button
                onClick={() => setIsCartSheetOpen(false)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  fontWeight: '900',
                  cursor: 'pointer'
                }}
              >
                &times;
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--surface-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#1E293B' }}>{item.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: '700' }}>${item.price.toFixed(2)} c/u</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--surface-border)', background: '#FFFFFF', fontWeight: '900', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ fontWeight: '900', fontSize: '0.9rem' }}>{item.qty}</span>
                    <button
                      onClick={() => addToCart({ name: item.name, price: item.price, image: item.image, badge: item.specialtyBadge })}
                      style={{ width: '26px', height: '26px', borderRadius: '6px', border: 'none', background: '#D97706', color: '#FFFFFF', fontWeight: '900', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations breakdown */}
            <div style={{ background: '#FAF8F5', borderRadius: '12px', padding: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                <span style={{ color: '#64748B' }}>Subtotal</span>
                <span style={{ fontWeight: '700' }}>${subtotal.toFixed(2)}</span>
              </div>
              {appliedCoupon && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#059669', marginBottom: '4px', fontWeight: '700' }}>
                  <span>Descuento ({appliedCoupon.code})</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                <span style={{ color: '#64748B' }}>Envío Express</span>
                <span style={{ color: '#10B981', fontWeight: '800' }}>GRATIS (Promo)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '900', color: '#92400E', borderTop: '1px solid var(--surface-border)', paddingTop: '6px' }}>
                <span>Total Final</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartSheetOpen(false);
                setIsCheckoutOpen(true);
              }}
              style={{
                background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px',
                borderRadius: '16px',
                fontWeight: '900',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(217,119,6,0.35)'
              }}
            >
              Continuar al Pago (${finalTotal.toFixed(2)}) ›
            </button>
          </div>
        </div>
      )}

      {/* Checkout Confirmation Modal */}
      {isCheckoutOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(6px)',
          zIndex: 70,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: '#FFFFFF',
            width: '100%',
            maxWidth: '420px',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            border: '1px solid var(--surface-border)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.5rem' }}>🍔⚡</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#1E293B', marginTop: '6px' }}>
                Confirmar Compra Instantánea
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Simula el pedido comercial de tus hamburguesas
              </p>
            </div>

            <div style={{ background: '#FAF8F5', borderRadius: '12px', padding: '12px', marginBottom: '16px', fontSize: '0.82rem' }}>
              <div style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#64748B' }}>Dirección:</strong> Av. Principal 1240, Las Condes
              </div>
              <div style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#64748B' }}>Pago:</strong> Tarjeta Visa terminada en 4242
              </div>
              <div style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#64748B' }}>Tiempo Estimado:</strong> ~18-22 minutos
              </div>
              <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '6px', display: 'flex', justifyContent: 'space-between', fontWeight: '900', color: '#92400E', fontSize: '0.95rem' }}>
                <span>Total a debitar:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                style={{
                  flex: 1,
                  background: '#F1F5F9',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  color: '#475569',
                  cursor: 'pointer'
                }}
              >
                Modificar
              </button>
              <button
                onClick={handleConfirmOrder}
                style={{
                  flex: 1.5,
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: '900',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  boxShadow: '0 6px 15px rgba(16,185,129,0.3)'
                }}
              >
                ¡Confirmar Pedido! ✅
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FIXED BOTTOM TAB NAVIGATION ================= */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '480px',
        background: '#FFFFFF',
        borderTop: '1px solid var(--surface-border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '8px 0 calc(8px + env(safe-area-inset-bottom))',
        boxShadow: 'var(--shadow-nav)',
        zIndex: 50
      }}>
        {/* Tab 1: Menú */}
        <button
          onClick={() => setActiveTab('menu')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer',
            color: activeTab === 'menu' ? '#D97706' : '#94A3B8'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>🍔</span>
          <span style={{ fontSize: '0.72rem', fontWeight: activeTab === 'menu' ? '800' : '600' }}>Menú</span>
        </button>

        {/* Tab 2: Ofertas */}
        <button
          onClick={() => setActiveTab('ofertas')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer',
            color: activeTab === 'ofertas' ? '#D97706' : '#94A3B8'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>🏷️</span>
          <span style={{ fontSize: '0.72rem', fontWeight: activeTab === 'ofertas' ? '800' : '600' }}>Ofertas</span>
        </button>

        {/* Tab 3: Órdenes */}
        <button
          onClick={() => setActiveTab('ordenes')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer',
            position: 'relative',
            color: activeTab === 'ordenes' ? '#D97706' : '#94A3B8'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>🛵</span>
          <span style={{ fontSize: '0.72rem', fontWeight: activeTab === 'ordenes' ? '800' : '600' }}>Órdenes</span>
          {orders.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '0px',
              right: '25%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#D97706'
            }} />
          )}
        </button>

        {/* Tab 4: Perfil */}
        <button
          onClick={() => setActiveTab('perfil')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer',
            color: activeTab === 'perfil' ? '#D97706' : '#94A3B8'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>👤</span>
          <span style={{ fontSize: '0.72rem', fontWeight: activeTab === 'perfil' ? '800' : '600' }}>Perfil</span>
        </button>
      </nav>
    </div>
  );
}
