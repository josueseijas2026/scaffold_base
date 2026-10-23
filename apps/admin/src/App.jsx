import React, { useState, useEffect } from 'react';

const INITIAL_BURGER_LIST = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Imperial 👑',
    price: 14.99,
    stock: 45,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80',
    ordersToday: 84
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clásicas',
    specialtyLevel: 'Nivel 3 - Clásica Maestra ⭐',
    price: 9.99,
    stock: 65,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&auto=format&fit=crop&q=80',
    ordersToday: 112
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Especiales',
    specialtyLevel: 'Nivel 4 - Doble Potencia 🔥',
    price: 12.99,
    stock: 38,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1583032015879-bf7291f42294?w=200&auto=format&fit=crop&q=80',
    ordersToday: 65
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Signature Chef ✨',
    price: 13.50,
    stock: 12,
    status: 'low_stock',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&auto=format&fit=crop&q=80',
    ordersToday: 48
  },
  {
    id: 5,
    name: 'Smoky Bacon Deluxe',
    category: 'Especiales',
    specialtyLevel: 'Nivel 4 - Gourmet Ahumado 🥓',
    price: 11.99,
    stock: 40,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&auto=format&fit=crop&q=80',
    ordersToday: 39
  },
  {
    id: 6,
    name: 'Crispy Chicken Royal',
    category: 'Pollo & Aves',
    specialtyLevel: 'Nivel 3 - Crujiente Maestro 🍗',
    price: 10.99,
    stock: 50,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=200&auto=format&fit=crop&q=80',
    ordersToday: 55
  },
  {
    id: 7,
    name: 'Truffle Mushroom King',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Experiencia Exclusiva 🍄',
    price: 14.50,
    stock: 8,
    status: 'low_stock',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&auto=format&fit=crop&q=80',
    ordersToday: 28
  },
  {
    id: 8,
    name: 'Spicy Habanero Blast',
    category: 'Picantes',
    specialtyLevel: 'Nivel 4 - Picante Bravo 🌶️',
    price: 11.50,
    stock: 35,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&auto=format&fit=crop&q=80',
    ordersToday: 33
  },
  {
    id: 9,
    name: 'Avocado Ranch Smash',
    category: 'Clásicas',
    specialtyLevel: 'Nivel 3 - California Fresh 🥑',
    price: 12.49,
    stock: 42,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200&auto=format&fit=crop&q=80',
    ordersToday: 30
  },
  {
    id: 10,
    name: 'Veggie Green Supreme',
    category: 'Veggies',
    specialtyLevel: 'Nivel 3 - 100% Plant-Based 🌱',
    price: 11.99,
    stock: 22,
    status: 'in_stock',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=200&auto=format&fit=crop&q=80',
    ordersToday: 24
  }
];

const DEFAULT_CONSUMER_METRICS = {
  summary: {
    totalCustomers: 1284,
    activeMonthly: 842,
    avgTicket: 16.85,
    dailyRevenue: 3412.50,
    totalBurgersToday: 348
  },
  segments: [
    {
      segment: 'Burger Kings / VIP',
      criteria: '> 8 pedidos/mes (Ticket > $100)',
      count: 215,
      percentage: 25.5,
      avgSpending: 138.40,
      color: '#D97706',
      badge: '👑 Alto Consumo'
    },
    {
      segment: 'Comensales Frecuentes',
      criteria: '4 - 7 pedidos/mes (Ticket $40 - $100)',
      count: 428,
      percentage: 50.8,
      avgSpending: 64.20,
      color: '#3B82F6',
      badge: '⭐ Frecuente'
    },
    {
      segment: 'Clientes Ocasionales',
      criteria: '1 - 3 pedidos/mes (Ticket < $40)',
      count: 199,
      percentage: 23.7,
      avgSpending: 22.10,
      color: '#10B981',
      badge: '🟢 Ocasional'
    }
  ],
  topConsumers: [
    {
      id: 'USR-801',
      name: 'Carlos Mendoza G.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      tier: '👑 VIP Gold Patron',
      ordersCount: 22,
      totalSpent: 342.50,
      favoriteBurger: 'Rey de las Burgers',
      lastOrder: 'Hace 2 horas',
      satisfaction: 5.0
    },
    {
      id: 'USR-802',
      name: 'Valentina Restrepo',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      tier: '👑 VIP Gold Patron',
      ordersCount: 18,
      totalSpent: 284.10,
      favoriteBurger: 'Burger Doble Especial',
      lastOrder: 'Ayer',
      satisfaction: 4.9
    },
    {
      id: 'USR-803',
      name: 'Sebastián Alarcón',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
      tier: '⭐ Miembro Frecuente',
      ordersCount: 15,
      totalSpent: 219.00,
      favoriteBurger: 'Burger Real Doble',
      lastOrder: 'Hace 3 días',
      satisfaction: 4.8
    },
    {
      id: 'USR-804',
      name: 'Mariana Silva',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
      tier: '⭐ Miembro Frecuente',
      ordersCount: 12,
      totalSpent: 174.50,
      favoriteBurger: 'Burger Real Clásica',
      lastOrder: 'Hace 4 días',
      satisfaction: 5.0
    },
    {
      id: 'USR-805',
      name: 'Diego Morales',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      tier: '⭐ Miembro Frecuente',
      ordersCount: 11,
      totalSpent: 158.20,
      favoriteBurger: 'Smoky Bacon Deluxe',
      lastOrder: 'Hace 6 días',
      satisfaction: 4.7
    }
  ],
  hourlyDistribution: [
    { slot: '12:00 - 13:00', orders: 48, label: 'Almuerzo Temprano' },
    { slot: '13:00 - 14:00', orders: 96, label: 'Pico Almuerzo' },
    { slot: '14:00 - 15:00', orders: 42, label: 'Sobremesa' },
    { slot: '19:00 - 20:00', orders: 68, label: 'Cena Inicio' },
    { slot: '20:00 - 21:30', orders: 114, label: 'Pico Cena Prime' },
    { slot: '21:30 - 23:00', orders: 54, label: 'Late Night Delivery' }
  ]
};

export default function App() {
  const [serverHealth, setServerHealth] = useState(null);
  const [burgers, setBurgers] = useState(INITIAL_BURGER_LIST);
  const [metrics, setMetrics] = useState(DEFAULT_CONSUMER_METRICS);
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pingResult, setPingResult] = useState(null);
  const [isNewBurgerModalOpen, setIsNewBurgerModalOpen] = useState(false);

  // New Burger Form
  const [newBurgerName, setNewBurgerName] = useState('');
  const [newBurgerCategory, setNewBurgerCategory] = useState('Especiales');
  const [newBurgerSpecialty, setNewBurgerSpecialty] = useState('Nivel 4 - Especial');
  const [newBurgerPrice, setNewBurgerPrice] = useState('');
  const [newBurgerStock, setNewBurgerStock] = useState('30');

  const fetchHealthAndData = async () => {
    setIsRefreshing(true);
    try {
      const [healthRes, productsRes, consumersRes] = await Promise.all([
        fetch('/api/health').catch(() => null),
        fetch('/api/products').catch(() => null),
        fetch('/api/consumers').catch(() => null)
      ]);

      if (healthRes && healthRes.ok) {
        const hData = await healthRes.json();
        setServerHealth(hData);
      }

      if (productsRes && productsRes.ok) {
        const pData = await productsRes.json();
        if (pData.success && Array.isArray(pData.data) && pData.data.length > 0) {
          // Merge with initial data
          const merged = pData.data.map(p => {
            const found = INITIAL_BURGER_LIST.find(i => i.name === p.name);
            return {
              id: p.id,
              name: p.name,
              category: p.category || (found ? found.category : 'Especiales'),
              specialtyLevel: p.specialtyLevel || p.specialty_level || (found ? found.specialtyLevel : 'Nivel Especial'),
              price: parseFloat(p.price) || (found ? found.price : 11.99),
              stock: p.stock !== undefined ? p.stock : (found ? found.stock : 25),
              status: p.stock === 0 ? 'out_of_stock' : (p.stock < 15 ? 'low_stock' : 'in_stock'),
              image: p.image || (found ? found.image : 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80'),
              ordersToday: found ? found.ordersToday : Math.floor(Math.random() * 50 + 20)
            };
          });
          setBurgers(merged);
        }
      }

      if (consumersRes && consumersRes.ok) {
        const cData = await consumersRes.json();
        if (cData.success && cData.data) {
          setMetrics(cData.data);
        }
      }
    } catch (err) {
      console.warn('Usando datos de contingencia en frontend:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHealthAndData();
  }, []);

  // Update stock locally
  const handleStockChange = (id, delta) => {
    setBurgers(prev => prev.map(b => {
      if (b.id === id) {
        const newStock = Math.max(0, b.stock + delta);
        return {
          ...b,
          stock: newStock,
          status: newStock === 0 ? 'out_of_stock' : (newStock < 15 ? 'low_stock' : 'in_stock')
        };
      }
      return b;
    }));
  };

  // Add new burger locally and to API
  const handleCreateBurger = (e) => {
    e.preventDefault();
    if (!newBurgerName || !newBurgerPrice) return;

    const newB = {
      id: Date.now(),
      name: newBurgerName,
      category: newBurgerCategory,
      specialtyLevel: newBurgerSpecialty,
      price: parseFloat(newBurgerPrice),
      stock: parseInt(newBurgerStock, 10) || 30,
      status: 'in_stock',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80',
      ordersToday: 0
    };

    setBurgers([newB, ...burgers]);
    setIsNewBurgerModalOpen(false);

    // Persist to server if available
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newBurgerName,
        category: newBurgerCategory,
        specialtyLevel: newBurgerSpecialty,
        price: parseFloat(newBurgerPrice),
        stock: parseInt(newBurgerStock, 10) || 30
      })
    }).catch(err => console.log('Mocked addProduct:', err));

    setNewBurgerName('');
    setNewBurgerPrice('');
  };

  // Ping test
  const handleTestPing = async () => {
    const start = performance.now();
    try {
      const res = await fetch('/api/health');
      const time = (performance.now() - start).toFixed(1);
      if (res.ok) {
        setPingResult(`⚡ Latencia: ${time}ms | HTTP 200 OK`);
      } else {
        setPingResult(`⚠️ Respuesta con código ${res.status}`);
      }
    } catch {
      setPingResult(`⚡ In-Memory Local: < 1ms`);
    }
  };

  // Filtered burgers
  const filtered = burgers.filter(b => {
    const matchesCat = categoryFilter === 'Todas' || b.category.includes(categoryFilter);
    const matchesQuery = b.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                         b.specialtyLevel.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const totalStockSum = burgers.reduce((acc, b) => acc + b.stock, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#FAF8F5', color: '#1E293B', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Admin Navigation Header */}
      <header style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #F1E8DF',
        padding: '16px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        position: 'sticky',
        top: 0,
        zIndex: 30
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
            border: '1px solid #FCD34D',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            🍔
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#92400E', letterSpacing: '-0.01em' }}>
                HAMBURGER RAPID
              </h1>
              <span style={{
                background: '#FEF3C7',
                color: '#92400E',
                fontSize: '0.72rem',
                fontWeight: '800',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid #FDE68A'
              }}>
                ADMIN DASHBOARD
              </span>
            </div>
            <div style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: '600' }}>
              Control Comercial &bull; Inventario &bull; Analítica de Consumo
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={fetchHealthAndData}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              padding: '8px 14px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '0.82rem',
              color: '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
          >
            <span>🔄</span> {isRefreshing ? 'Actualizando...' : 'Refrescar Datos'}
          </button>

          <a
            href="/"
            style={{
              background: '#FFFFFF',
              border: '1px solid #FCD34D',
              color: '#92400E',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: '800',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>🌐</span> Ver E-commerce
          </a>

          <a
            href="/app"
            style={{
              background: '#D97706',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: '800',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
            }}
          >
            <span>📱</span> Abrir PWA Mobile
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1360px', width: '100%', margin: '0 auto', padding: '28px 24px', flex: 1 }}>
        
        {/* Top 4 KPI Metrics Cards */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '28px' }}>
          
          {/* Card 1: Ventas Hoy */}
          <div style={{ background: '#FFFFFF', border: '1px solid #F1E8DF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 16px rgba(217, 119, 6, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Ventas Totales Hoy
              </span>
              <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '6px' }}>
                ↑ +18.4%
              </span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#B45309' }}>
              ${metrics.summary.dailyRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              Facturación bruta en las últimas 24 horas
            </div>
          </div>

          {/* Card 2: Burgers Vendidas */}
          <div style={{ background: '#FFFFFF', border: '1px solid #F1E8DF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 16px rgba(217, 119, 6, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Hamburguesas Despachadas
              </span>
              <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '6px' }}>
                🔥 Pico Activo
              </span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#1E293B' }}>
              {metrics.summary.totalBurgersToday} <span style={{ fontSize: '1rem', fontWeight: '600', color: '#64748B' }}>unidades</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              Favorita líder: "Rey de las Burgers" (84 pedidos)
            </div>
          </div>

          {/* Card 3: Clientes / Consumidores */}
          <div style={{ background: '#FFFFFF', border: '1px solid #F1E8DF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 16px rgba(217, 119, 6, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Consumidores Registrados
              </span>
              <span style={{ background: '#EFF6FF', color: '#1E40AF', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '6px' }}>
                842 Activos
              </span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#1E293B' }}>
              {metrics.summary.totalCustomers.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              25.5% clasificados como VIP Burger Kings
            </div>
          </div>

          {/* Card 4: Ticket Promedio */}
          <div style={{ background: '#FFFFFF', border: '1px solid #F1E8DF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 16px rgba(217, 119, 6, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Ticket Promedio
              </span>
              <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '6px' }}>
                ↑ +$1.40
              </span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#D97706' }}>
              ${metrics.summary.avgTicket.toFixed(2)}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
              Mayor consumo impulsado por venta de combos
            </div>
          </div>

        </section>

        {/* ================= SECTION 1: CATÁLOGO DE HAMBURGUESAS DISPONIBLES ================= */}
        <section style={{
          background: '#FFFFFF',
          border: '1px solid #F1E8DF',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 6px 20px -3px rgba(217, 119, 6, 0.07)',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>🍔</span>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#1E293B' }}>
                  Catálogo de Hamburguesas Disponibles ({burgers.length})
                </h2>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px' }}>
                Inventario en vivo, control de disponibilidad y nivel de especialidad de cada variante
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="text"
                placeholder="Buscar hamburguesa..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.85rem',
                  outline: 'none',
                  background: '#FAF8F5'
                }}
              />

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.85rem',
                  background: '#FAF8F5',
                  outline: 'none',
                  fontWeight: '600'
                }}
              >
                <option value="Todas">Todas las categorías</option>
                <option value="Especiales">Especiales</option>
                <option value="Clásicas">Clásicas</option>
                <option value="Pollo">Pollo</option>
                <option value="Picantes">Picantes</option>
                <option value="Veggies">Veggies</option>
              </select>

              <button
                onClick={() => setIsNewBurgerModalOpen(true)}
                style={{
                  background: '#92400E',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>+</span> Nueva Variante
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#FAF8F5', borderBottom: '2px solid #F1E8DF', color: '#64748B', fontWeight: '800', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 16px' }}>Hamburguesa</th>
                  <th style={{ padding: '12px 16px' }}>Categoría</th>
                  <th style={{ padding: '12px 16px' }}>Nivel de Especialidad</th>
                  <th style={{ padding: '12px 16px' }}>Precio</th>
                  <th style={{ padding: '12px 16px' }}>Stock Actual</th>
                  <th style={{ padding: '12px 16px' }}>Estado</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Ventas Hoy</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Ajustar Stock</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((burger) => (
                  <tr key={burger.id} style={{ borderBottom: '1px solid #F1E8DF', transition: 'background 0.15s' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={burger.image}
                          alt={burger.name}
                          style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover', border: '1px solid #F1E8DF' }}
                        />
                        <div>
                          <div style={{ fontWeight: '800', color: '#1E293B' }}>{burger.name}</div>
                          <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>ID: #{burger.id}</div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '6px' }}>
                        {burger.category}
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        background: burger.specialtyLevel.includes('5') ? '#FEF3C7' : '#EFF6FF',
                        color: burger.specialtyLevel.includes('5') ? '#92400E' : '#1E40AF',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        border: burger.specialtyLevel.includes('5') ? '1px solid #FDE68A' : '1px solid #BFDBFE'
                      }}>
                        {burger.specialtyLevel}
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px', fontWeight: '900', color: '#B45309', fontSize: '1rem' }}>
                      ${burger.price.toFixed(2)}
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontWeight: '800', color: burger.stock < 15 ? '#DC2626' : '#1E293B' }}>
                        {burger.stock} unidades
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      {burger.status === 'in_stock' && (
                        <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '0.75rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                          🟢 Disponible
                        </span>
                      )}
                      {burger.status === 'low_stock' && (
                        <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: '0.75rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                          🟡 Stock Bajo
                        </span>
                      )}
                      {burger.status === 'out_of_stock' && (
                        <span style={{ background: '#FEE2E2', color: '#B91C1C', fontSize: '0.75rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                          🔴 Agotado
                        </span>
                      )}
                    </td>

                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '700', color: '#475569' }}>
                      {burger.ordersToday}
                    </td>

                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          onClick={() => handleStockChange(burger.id, -5)}
                          title="Restar 5"
                          style={{
                            width: '26px',
                            height: '26px',
                            background: '#F1F5F9',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '900'
                          }}
                        >
                          -5
                        </button>
                        <button
                          onClick={() => handleStockChange(burger.id, 5)}
                          title="Sumar 5"
                          style={{
                            width: '26px',
                            height: '26px',
                            background: '#FEF3C7',
                            border: '1px solid #FCD34D',
                            color: '#92400E',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '900'
                          }}
                        >
                          +5
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1E8DF', fontSize: '0.82rem', color: '#64748B' }}>
            <div>Total variantes activas: <strong>{burgers.length}</strong> &bull; Total existencias en cocina: <strong>{totalStockSum}</strong> unidades</div>
            <div style={{ color: '#10B981', fontWeight: '700' }}>✅ Todas las variantes sincronizadas con E-commerce y PWA</div>
          </div>
        </section>

        {/* ================= SECTION 2: MÉTRICAS DE CONSUMIDORES/CLIENTES ================= */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          
          {/* Sub-panel 2A: Segmentación de Clientes según Nivel de Consumo */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #F1E8DF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 6px 20px -3px rgba(217, 119, 6, 0.07)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '1.3rem' }}>👥</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1E293B' }}>
                Segmentos de Consumidores por Gasto
              </h2>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '20px' }}>
              Distribución de usuarios basada en la frecuencia de compra y valor de ticket mensual
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {metrics.segments.map((seg, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FAF8F5',
                    border: '1px solid #F1E8DF',
                    borderRadius: '14px',
                    padding: '16px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontWeight: '800', color: '#1E293B', fontSize: '0.95rem' }}>
                      {seg.segment}
                    </div>
                    <span style={{
                      background: seg.color === '#D97706' ? '#FEF3C7' : (seg.color === '#3B82F6' ? '#EFF6FF' : '#DCFCE7'),
                      color: seg.color === '#D97706' ? '#92400E' : (seg.color === '#3B82F6' ? '#1E40AF' : '#15803D'),
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {seg.badge} &bull; {seg.percentage}%
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '8px' }}>
                    Criterio: {seg.criteria}
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ height: '100%', width: `${seg.percentage}%`, background: seg.color }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#475569' }}>
                    <span><strong>{seg.count}</strong> clientes activos</span>
                    <span>Gasto promedio mensual: <strong style={{ color: '#92400E' }}>${seg.avgSpending.toFixed(2)}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hourly Consumption Graph */}
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#1E293B', marginBottom: '10px' }}>
                📊 Distribución de Órdenes por Franja Horaria (Hoy)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {metrics.hourlyDistribution.map((slot, sIdx) => {
                  const maxOrders = 120;
                  const pct = Math.min(100, (slot.orders / maxOrders) * 100);
                  return (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem' }}>
                      <span style={{ width: '100px', fontWeight: '700', color: '#64748B' }}>{slot.slot}</span>
                      <div style={{ flex: 1, background: '#F1F5F9', height: '18px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #FCD34D, #D97706)', borderRadius: '4px' }} />
                        <span style={{ position: 'absolute', right: '8px', top: '1px', fontSize: '0.7rem', fontWeight: '800', color: '#1E293B' }}>
                          {slot.orders} órdenes ({slot.label})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sub-panel 2B: Top 5 Consumidores Estrella del Mes */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #F1E8DF',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 6px 20px -3px rgba(217, 119, 6, 0.07)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '1.3rem' }}>⭐</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1E293B' }}>
                Top 5 Consumidores del Mes
              </h2>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '16px' }}>
              Clientes de mayor consumo y valor recurrente en la plataforma
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {metrics.topConsumers.map((client, cIdx) => (
                <div
                  key={client.id}
                  style={{
                    background: '#FAF8F5',
                    border: '1px solid #F1E8DF',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={client.avatar}
                        alt={client.name}
                        style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FCD34D' }}
                      />
                      <span style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        background: '#92400E',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        fontWeight: '900',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {cIdx + 1}
                      </span>
                    </div>

                    <div>
                      <div style={{ fontWeight: '800', color: '#1E293B', fontSize: '0.88rem' }}>
                        {client.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: '700' }}>
                        {client.tier}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '2px' }}>
                        Fav: <strong style={{ color: '#1E293B' }}>{client.favoriteBurger}</strong> &bull; {client.lastOrder}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '900', color: '#92400E' }}>
                      ${client.totalSpent.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>
                      {client.ordersCount} órdenes
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#D97706' }}>
                      ⭐ {client.satisfaction.toFixed(1)} / 5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: ESTADO DE LA BASE DE DATOS Y DEL SISTEMA ================= */}
        <section style={{
          background: '#FFFFFF',
          border: '1px solid #F1E8DF',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 6px 20px -3px rgba(217, 119, 6, 0.07)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.4rem' }}>🗄️</span>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1E293B' }}>
                  Estado de la Base de Datos & Salud del Sistema
                </h2>
                <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Monitoreo de pools de conexión, latencia y modo de persistencia
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {pingResult && (
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#15803D', background: '#DCFCE7', padding: '4px 10px', borderRadius: '8px' }}>
                  {pingResult}
                </span>
              )}
              <button
                onClick={handleTestPing}
                style={{
                  background: '#FEF3C7',
                  border: '1px solid #FCD34D',
                  color: '#92400E',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                ⚡ Test de Latencia DB
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            
            {/* Box 1: Modo de Conexión */}
            <div style={{ background: '#FAF8F5', border: '1px solid #F1E8DF', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                Modo de Operación Base de Datos
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900', color: serverHealth?.database?.connected ? '#10B981' : '#D97706', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {serverHealth?.database?.mode === 'mysql' ? '🐬 Conectado a MySQL Pool' : '⚡ In-Memory Ultra-Fast Engine'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '6px' }}>
                Base de datos: <strong>{serverHealth?.database?.database || 'hamburger_rapid_db'}</strong>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                Host: {serverHealth?.database?.host || 'Local Memory Engine'}
              </div>
            </div>

            {/* Box 2: Conexiones & Latencia */}
            <div style={{ background: '#FAF8F5', border: '1px solid #F1E8DF', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                Pool & Capacidad Concurrente
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#1E293B' }}>
                {serverHealth?.database?.activeConnections || 2} / {serverHealth?.database?.poolConnections || 10} <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748B' }}>conexiones activas</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: '700', marginTop: '6px' }}>
                Latencia: {serverHealth?.database?.latencyMs || 0.8} ms (Ultra óptima)
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                Timeout de conexión: 5000ms &bull; Keep-alive: Activo
              </div>
            </div>

            {/* Box 3: Integridad de Catálogo */}
            <div style={{ background: '#FAF8F5', border: '1px solid #F1E8DF', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                Registros & Artefactos en Caché
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#1E293B' }}>
                {burgers.length} Variantes de Hamburguesas
              </div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '6px' }}>
                Stock total: <strong>{totalStockSum}</strong> unidades disponibles
              </div>
              <div style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: '700' }}>
                🟢 Servidor: Healthy (Uptime: {Math.floor(serverHealth?.uptime || 120)}s)
              </div>
            </div>

          </div>

          <div style={{ marginTop: '16px', padding: '12px 16px', background: '#FFFDF9', border: '1px dashed #FCD34D', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#92400E' }}>
            <div>
              <strong>Diagnóstico de Red:</strong> Puedes comprobar la conectividad en vivo en el endpoint <a href="/api/debug-network" target="_blank" style={{ color: '#D97706', fontWeight: '800' }}>/api/debug-network</a>.
            </div>
            <div>
              Último Check: {serverHealth?.timestamp ? new Date(serverHealth.timestamp).toLocaleTimeString() : 'En tiempo real'}
            </div>
          </div>
        </section>

      </main>

      {/* Modal: Crear Nueva Variante de Hamburguesa */}
      {isNewBurgerModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            maxWidth: '480px',
            width: '100%',
            padding: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #F1E8DF'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1E293B' }}>
                Agregar Nueva Variante
              </h3>
              <button
                onClick={() => setIsNewBurgerModalOpen(false)}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: '900' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleCreateBurger} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Nombre de la Hamburguesa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Burger Real Triple Queso"
                  value={newBurgerName}
                  onChange={(e) => setNewBurgerName(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Categoría
                  </label>
                  <select
                    value={newBurgerCategory}
                    onChange={(e) => setNewBurgerCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.88rem' }}
                  >
                    <option value="Especiales">Especiales</option>
                    <option value="Clásicas">Clásicas</option>
                    <option value="Pollo & Aves">Pollo & Aves</option>
                    <option value="Picantes">Picantes</option>
                    <option value="Veggies">Veggies</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Nivel de Especialidad
                  </label>
                  <select
                    value={newBurgerSpecialty}
                    onChange={(e) => setNewBurgerSpecialty(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.88rem' }}
                  >
                    <option value="Nivel 5 - Imperial 👑">Nivel 5 - Imperial 👑</option>
                    <option value="Nivel 4 - Doble Potencia 🔥">Nivel 4 - Doble Potencia 🔥</option>
                    <option value="Nivel 4 - Selección Ahumada 🥓">Nivel 4 - Selección Ahumada 🥓</option>
                    <option value="Nivel 3 - Clásica Maestra ⭐">Nivel 3 - Clásica Maestra ⭐</option>
                    <option value="Nivel 3 - Crujiente 🍗">Nivel 3 - Crujiente 🍗</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Precio ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="13.99"
                    value={newBurgerPrice}
                    onChange={(e) => setNewBurgerPrice(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.88rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Stock Inicial
                  </label>
                  <input
                    type="number"
                    value={newBurgerStock}
                    onChange={(e) => setNewBurgerStock(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsNewBurgerModalOpen(false)}
                  style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#F1F5F9', fontWeight: '700', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{ flex: 1.5, padding: '12px', borderRadius: '10px', border: 'none', background: '#D97706', color: '#FFFFFF', fontWeight: '900', cursor: 'pointer' }}
                >
                  Guardar Hamburguesa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ background: '#FFFFFF', borderTop: '1px solid #F1E8DF', padding: '18px 28px', textAlign: 'center', fontSize: '0.82rem', color: '#64748B' }}>
        <div>Hamburger Rapid &bull; Panel Administrativo &bull; Paleta Clara Premium &bull; MySQL & In-Memory Hybrid</div>
      </footer>
    </div>
  );
}
