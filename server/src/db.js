const mysql = require('mysql2/promise');

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Ultra Premium 👑',
    price: 14.99,
    stock: 45,
    rating: 4.95,
    reviewsCount: 312,
    prepTime: '7-9 min',
    calories: '890 kcal',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    description: 'Nuestra joya de la corona: carne 100% Angus flameada a la leña de roble, queso cheddar añejo 12 meses, cebolla caramelizada al bourbon, bacon crocante ahumado al nogal y salsa secreta Rapid King sobre pan brioche tostado.',
    badge: '👑 Especialidad Imperial',
    badgeColor: '#D97706',
    ingredients: ['Doble medallón Angus (360g)', 'Cheddar añejo 12 meses', 'Bacon al nogal', 'Cebolla al bourbon', 'Salsa Rapid King', 'Brioche dorado']
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clásicas',
    specialtyLevel: 'Nivel 3 - Clásica Maestra ⭐',
    price: 9.99,
    stock: 65,
    rating: 4.88,
    reviewsCount: 420,
    prepTime: '5-6 min',
    calories: '640 kcal',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80',
    description: 'La tradición elevada al máximo estándar: medallón smash jugoso con costra dorada a la plancha, queso americano derretido, lechuga romana fresca, tomate Roma maduro, pepinillos agridulces y aderezo imperial.',
    badge: '⭐ Clásica de Autor',
    badgeColor: '#B45309',
    ingredients: ['Medallón smash de res (180g)', 'Queso americano cremoso', 'Pepinillos encurtidos', 'Tomate fresco', 'Lechuga crocante', 'Aderezo imperial']
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Especiales',
    specialtyLevel: 'Nivel 4 - Doble Potencia 🔥',
    price: 12.99,
    stock: 38,
    rating: 4.92,
    reviewsCount: 275,
    prepTime: '6-8 min',
    calories: '820 kcal',
    image: 'https://images.unsplash.com/photo-1583032015879-bf7291f42294?w=600&auto=format&fit=crop&q=80',
    description: 'Doble ración de intensidad: dos medallones de res a la brasa con costra perfecta, doble queso gouda fundido, panceta artesanal crocante y salsa barbacoa leña de cerezo en pan brioche artesano.',
    badge: '🔥 Doble Corona',
    badgeColor: '#DC2626',
    ingredients: ['Doble carne a la brasa (300g)', 'Doble queso Gouda fundido', 'Bacon crujiente', 'Cebolla morada', 'Salsa BBQ leña']
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Signature Chef ✨',
    price: 13.50,
    stock: 32,
    rating: 4.97,
    reviewsCount: 198,
    prepTime: '7-8 min',
    calories: '860 kcal',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
    description: 'Creación gourmet exclusiva: blend de doble medallón wagyu, queso suizo Emmental fundido, champiñones portobello salteados a la mantequilla francesa con romero y emulsión de alioli de trufa negra.',
    badge: '✨ Suprema Especial',
    badgeColor: '#7C3AED',
    ingredients: ['Doble blend Wagyu (300g)', 'Queso Emmental suizo', 'Portobellos salteados', 'Alioli de trufa negra', 'Rúcula fresca']
  },
  {
    id: 5,
    name: 'Smoky Bacon Deluxe',
    category: 'Especiales',
    specialtyLevel: 'Nivel 4 - Gourmet Ahumado 🥓',
    price: 11.99,
    stock: 40,
    rating: 4.89,
    reviewsCount: 164,
    prepTime: '6-7 min',
    calories: '780 kcal',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&auto=format&fit=crop&q=80',
    description: 'Para los devotos del humo y el dulzor: carne Angus bañada en glaseado de maple y chipotle, triple capa de bacon crocante, queso Monterey Jack y aros de cebolla crujientes.',
    badge: '🥓 Selección Ahumada',
    badgeColor: '#EA580C',
    ingredients: ['Carne Angus (200g)', 'Triple bacon caramelizado', 'Queso Monterey Jack', 'Aros de cebolla crispy', 'Glaseado maple-chipotle']
  },
  {
    id: 6,
    name: 'Crispy Chicken Royal',
    category: 'Pollo & Aves',
    specialtyLevel: 'Nivel 3 - Crujiente Maestro 🍗',
    price: 10.99,
    stock: 50,
    rating: 4.85,
    reviewsCount: 230,
    prepTime: '5-6 min',
    calories: '710 kcal',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop&q=80',
    description: 'Suprema pechuga de pollo marinada 24h en buttermilk y especias secretas, frita a punto ultra crocante, ensalada coleslaw de manzana verde y mayonesa honey mustard casera.',
    badge: '🍗 Crujiente Maestro',
    badgeColor: '#D97706',
    ingredients: ['Pechuga de pollo marinada (220g)', 'Rebozado crujiente de 11 especias', 'Coleslaw fresco con manzana', 'Pepinillos dulces', 'Mayo honey mustard']
  },
  {
    id: 7,
    name: 'Truffle Mushroom King',
    category: 'Especiales',
    specialtyLevel: 'Nivel 5 - Experiencia Exclusiva 🍄',
    price: 14.50,
    stock: 25,
    rating: 4.96,
    reviewsCount: 142,
    prepTime: '8-9 min',
    calories: '830 kcal',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
    description: 'La máxima expresión del lujo cárnico: medallón de res madurada, fondue de provolone ahumado, reducción de hongos silvestres y mayo artesanal de trufa sobre brioche con mantequilla clarificada.',
    badge: '🍄 Gourmet Trufado',
    badgeColor: '#475569',
    ingredients: ['Medallón Dry-Aged (200g)', 'Hongos shiitake y portobello', 'Fondue provolone', 'Mayonesa trufada', 'Brioche dorado']
  },
  {
    id: 8,
    name: 'Spicy Habanero Blast',
    category: 'Especiales Picantes',
    specialtyLevel: 'Nivel 4 - Picante Bravo 🌶️',
    price: 11.50,
    stock: 35,
    rating: 4.79,
    reviewsCount: 188,
    prepTime: '6-7 min',
    calories: '750 kcal',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&auto=format&fit=crop&q=80',
    description: 'Atrévete al fuego: medallón de res con sazonador cajún, queso Pepper Jack fundido, jalapeños al escabeche, guacamole rústico y salsa casera de mango habanero.',
    badge: '🌶️ Fuego Extremo',
    badgeColor: '#DC2626',
    ingredients: ['Carne cajún (190g)', 'Pepper Jack picante', 'Jalapeños encurtidos', 'Guacamole rústico', 'Salsa mango-habanero']
  },
  {
    id: 9,
    name: 'Avocado Ranch Smash',
    category: 'Clásicas',
    specialtyLevel: 'Nivel 3 - California Fresh 🥑',
    price: 12.49,
    stock: 42,
    rating: 4.87,
    reviewsCount: 156,
    prepTime: '5-6 min',
    calories: '690 kcal',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&auto=format&fit=crop&q=80',
    description: 'Frescura californiana: doble smash con costra caramelizada, abanico de aguacate fresco en láminas finas, queso suizo alpino y aderezo ranch de cebollino y eneldo.',
    badge: '🥑 California Fresh',
    badgeColor: '#16A34A',
    ingredients: ['Doble smash (160g c/u)', 'Aguacate fresco Hass', 'Queso suizo alpino', 'Tomate grillado', 'Ranch al eneldo']
  },
  {
    id: 10,
    name: 'Veggie Green Supreme',
    category: 'Veggies & Plant-Based',
    specialtyLevel: 'Nivel 3 - 100% Plant-Based 🌱',
    price: 11.99,
    stock: 30,
    rating: 4.82,
    reviewsCount: 120,
    prepTime: '6-7 min',
    calories: '520 kcal',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&auto=format&fit=crop&q=80',
    description: '100% vegetal sin renunciar al sabor: medallón casero de lentejas pardas y quinoa real, queso vegetal derretido, pimientos asados, brotes tiernos y mayonesa vegana al pesto.',
    badge: '🌱 Green Gourmet',
    badgeColor: '#059669',
    ingredients: ['Medallón de quinoa y hongos (180g)', 'Queso vegano ahumado', 'Pimientos asados a la leña', 'Espinacas baby', 'Mayo al pesto']
  }
];

// Simulated Consumer Analytics based on consumption habits
const CONSUMER_METRICS = {
  summary: {
    totalCustomers: 1284,
    activeMonthly: 842,
    avgTicket: 16.85,
    totalBurgersSoldToday: 348,
    dailyRevenue: 3412.50
  },
  segments: [
    {
      segment: 'Burger Kings / VIP',
      criteria: '> 8 pedidos/mes (Ticket > $100)',
      count: 215,
      percentage: 25.5,
      avgSpending: 138.40,
      color: '#D97706'
    },
    {
      segment: 'Comensales Frecuentes',
      criteria: '4 - 7 pedidos/mes (Ticket $40 - $100)',
      count: 428,
      percentage: 50.8,
      avgSpending: 64.20,
      color: '#3B82F6'
    },
    {
      segment: 'Clientes Ocasionales',
      criteria: '1 - 3 pedidos/mes (Ticket < $40)',
      count: 199,
      percentage: 23.7,
      avgSpending: 22.10,
      color: '#10B981'
    }
  ],
  topConsumers: [
    {
      id: 'USR-801',
      name: 'Carlos Mendoza G.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
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

let inMemoryProducts = [...INITIAL_PRODUCTS];
let pool = null;
let isConnectedToMySQL = false;
let lastDbError = null;

async function initDB() {
  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'pablovaldivia';
  const password = process.env.DB_PASSWORD || 'masterclass_secret_2026';
  const database = process.env.DB_NAME || 'demo';
  const port = parseInt(process.env.DB_PORT, 10) || 3306;

  try {
    pool = mysql.createPool({
      host,
      user,
      password,
      database,
      port,
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout: 5000
    });

    const conn = await pool.getConnection();
    console.log(`✅ [DB] Conectado exitosamente a MySQL en ${host}:${port}/${database}`);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        stock INT NOT NULL DEFAULT 0,
        image VARCHAR(500),
        description TEXT,
        specialty_level VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await conn.query('SELECT COUNT(*) as count FROM products');
    if (rows[0].count === 0) {
      console.log('🌱 [DB] Sembrando las 10 hamburguesas maestras en MySQL...');
      for (const p of INITIAL_PRODUCTS) {
        await conn.query(
          'INSERT INTO products (name, category, price, stock, image, description, specialty_level) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [p.name, p.category, p.price, p.stock, p.image, p.description, p.specialtyLevel]
        );
      }
    }

    conn.release();
    isConnectedToMySQL = true;
    lastDbError = null;
  } catch (error) {
    lastDbError = error.message;
    console.warn(`⚠️ [DB] No se pudo conectar a MySQL: ${error.message}. Operando en modo In-Memory ultrarrápido.`);
    isConnectedToMySQL = false;
  }
}

async function getProducts() {
  if (!isConnectedToMySQL && (process.env.DB_HOST || process.env.DATABASE_URL)) {
    await initDB();
  }

  if (isConnectedToMySQL && pool) {
    try {
      const [rows] = await pool.query('SELECT * FROM products ORDER BY id ASC');
      return rows;
    } catch (err) {
      console.error('Error consultando MySQL, recurriendo a memoria temporal:', err.message);
      lastDbError = err.message;
    }
  }
  return inMemoryProducts;
}

async function addProduct({ name, category, price, stock, image, description, specialtyLevel }) {
  if (!isConnectedToMySQL && (process.env.DB_HOST || process.env.DATABASE_URL)) {
    await initDB();
  }

  if (isConnectedToMySQL && pool) {
    const [result] = await pool.query(
      'INSERT INTO products (name, category, price, stock, image, description, specialty_level) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, category, parseFloat(price) || 0, parseInt(stock, 10) || 0, image || '', description || '', specialtyLevel || 'Nivel Especial']
    );
    return { id: result.insertId, name, category, price: parseFloat(price) || 0, stock: parseInt(stock, 10) || 0, image, description, specialtyLevel };
  }

  const newProduct = {
    id: Date.now(),
    name,
    category: category || 'Especiales',
    specialtyLevel: specialtyLevel || 'Nivel Especial',
    price: parseFloat(price) || 0,
    stock: parseInt(stock, 10) || 0,
    image: image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    description: description || 'Hamburguesa gourmet artesanal de autor.',
    badge: '🍔 Nueva Creación',
    badgeColor: '#D97706',
    ingredients: ['Carne Angus seleccionada', 'Queso fundido', 'Pan brioche']
  };
  inMemoryProducts.unshift(newProduct);
  return newProduct;
}

async function deleteProduct(id) {
  const numId = parseInt(id, 10);
  if (isConnectedToMySQL && pool) {
    await pool.query('DELETE FROM products WHERE id = ?', [numId]);
    return true;
  }
  inMemoryProducts = inMemoryProducts.filter(p => p.id !== numId);
  return true;
}

async function resetProducts() {
  if (isConnectedToMySQL && pool) {
    await pool.query('TRUNCATE TABLE products');
    for (const p of INITIAL_PRODUCTS) {
      await pool.query(
        'INSERT INTO products (name, category, price, stock, image, description, specialty_level) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [p.name, p.category, p.price, p.stock, p.image, p.description, p.specialtyLevel]
      );
    }
    return;
  }
  inMemoryProducts = [...INITIAL_PRODUCTS];
}

function getDbStatus() {
  return {
    mode: isConnectedToMySQL ? 'mysql' : 'in-memory',
    connected: isConnectedToMySQL,
    host: process.env.DB_HOST || (process.env.DATABASE_URL ? 'via-database-url' : 'in-memory-engine'),
    database: process.env.DB_NAME || 'hamburger_rapid_db',
    user: process.env.DB_USER || 'root',
    poolConnections: isConnectedToMySQL ? 10 : 0,
    activeConnections: isConnectedToMySQL ? 2 : 0,
    latencyMs: isConnectedToMySQL ? 4 : 0.8,
    lastSync: new Date().toISOString(),
    error: lastDbError
  };
}

function getConsumerMetrics() {
  return CONSUMER_METRICS;
}

module.exports = {
  initDB,
  getProducts,
  addProduct,
  deleteProduct,
  resetProducts,
  getDbStatus,
  getConsumerMetrics,
  INITIAL_PRODUCTS
};
