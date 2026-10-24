# 🍔 Hamburger Rapid — Primera Versión Comercial

Plataforma comercial full-stack de comida rápida y fast-gourmet construida con arquitectura moderna multi-aplicación:
- **E-commerce Landing Page** en **Astro 4** (`apps/ecommerce`)
- **PWA Móvil con Pestañas Inferiores** en **React 18** (`apps/pwa`)
- **Panel Administrativo & Dashboard de Control** en **React 18** (`apps/admin`)
- **Backend API & Servidor de Distribución** en **Node.js + Express + MySQL / In-Memory Cache** (`server`)

Diseñada íntegramente bajo un estándar de **Paleta Bold Fast-Food & Gourmet**:
- **Landing E-commerce**: Rediseñada adoptando el estilo visual, paleta de colores y componentes de la imagen de referencia ubicada en:
  `assets-references\images\Burger Restaurant Website Design _ Bold Fast Food Landing Page UI Inspiration.jpg`
- **PWA Móvil & Admin Dashboard**: Paleta clara premium coordinada (tonos marfil `#FAF8F5`, acentos ámbar gourmet `#D97706`, bordes suaves y microinteracciones de alta gama).

---

## 🎨 Referencia Visual & Identidad de Marca (Landing E-commerce)

El portal Landing E-commerce (`apps/ecommerce`) implementa la identidad visual inspirada en:
📁 **`assets-references\images\Burger Restaurant Website Design _ Bold Fast Food Landing Page UI Inspiration.jpg`**

### Elementos de Diseño Implementados:
1. **Paleta de Colores Bold Fast-Food**:
   - **Fondos Oscuros de Alto Impacto**: Deep Black `#0C0C0E`, Charcoal `#141417` y superficie `#18181D` en Header, Hero, Barra de Atributos, Banner Promocional y Footer.
   - **Acentos Dorado Ambarino**: Oro vibrante `#FFA800`, hover `#E09400` y resplandor sutil para botones principales, estrellas y badges.
   - **Catálogo Contrastado "CUSTOMER FAVORITES"**: Fondo claro limpio `#F5F5F7` con tarjetas blancas puras `#FFFFFF`, tipografía oscura `#111827`, ingredientes en gris `#6B7280` y precio destacado en oro.
2. **Tipografías Google Fonts**:
   - `Bebas Neue`: Titulares masivos y condensados en mayúsculas (*"BURGERS DONE RIGHT"*, *"CUSTOMER FAVORITES"*, *"MEAL!"*, *"BURGERS BUILT ON PASSION"*).
   - `Caveat`: Acentos manuscritos y artesanales (*"Made Fresh. Made to Crave."*, *"Our Menu"*, *"Make it a"*, *"About Us"*, *"Real Good Burgers"*).
   - `Plus Jakarta Sans`: Cuerpo de lectura, fichas técnicas, precios e información nutricional.
3. **Componentes y Bloques Visuales**:
   - **Header & Navbar**: Logo Burger Factory ("• EST. 2016 •"), enlaces de navegación en mayúsculas y botón CTA "ORDER ONLINE".
   - **Hero Section**: Titular imponente a dos tonos, acento script con destellos (`\ | /`), calificación 4.8 con 5 estrellas doradas, botones de acción rápida y badge circular estampado *"100% FRESH BEEF • NEVER FROZEN"*.
   - **Barra de 4 Atributos de Calidad**: *PREMIUM QUALITY*, *HAND-CUT FRIES*, *HAND-SPUN SHAKES* y *MADE FRESH DAILY* con iconografía lineal dorada.
   - **Catálogo "CUSTOMER FAVORITES"**: Tarjetas con bordes redondeados (16px), sombra suave, ingredientes detallados, precio dorado y botón circular negro (+) con enlace directo a la PWA Móvil.
   - **Banner Promocional Split**:
     - *Columna Izquierda*: Fondo dark con oferta *"Make it a MEAL! Add fries & a drink for just $3.99"*.
     - *Columna Derecha*: Fondo dorado con *"About Us / BURGERS BUILT ON PASSION"*, botón *"OUR STORY >"* y sello estampado *"REAL INGREDIENTS • REAL GOOD Burgers"*.
   - **Footer 4 Columnas**: Marca, Quick Links, Horarios de atención con semáforo verde en vivo, redes sociales y tarjeta *"ORDER AHEAD & SKIP THE LINE! ORDER ONLINE >"*.
   - **Modal Interactivo de Especialidades**: Desglose dinámico de ingredientes con checkmarks, tiempos de parrilla, maridaje sugerido y nota de cata del chef.

---

## 🏗️ Arquitectura de Aplicaciones

### 1. `apps/ecommerce` — Landing Page Fast-Gourmet (Astro)
- **Catálogo de 10 Variantes Destacadas**:
  1. 👑 **Rey de las Burgers** ($14.99) — *Nivel 5: Ultra Premium / Imperial*
  2. ⭐ **Burger Real Clásica** ($9.99) — *Nivel 3: Clásica Maestra / Autor*
  3. 🔥 **Burger Real Doble** ($12.99) — *Nivel 4: Doble Corona / Potencia*
  4. ✨ **Burger Doble Especial** ($13.50) — *Nivel 5: Signature Chef / Suprema*
  5. 🥓 **Smoky Bacon Deluxe** ($11.99) — *Nivel 4: Gourmet Ahumado*
  6. 🍗 **Crispy Chicken Royal** ($10.99) — *Nivel 3: Crujiente Maestro*
  7. 🍄 **Truffle Mushroom King** ($14.50) — *Nivel 5: Experiencia Exclusiva*
  8. 🌶️ **Spicy Habanero Blast** ($11.50) — *Nivel 4: Fuego Extremo*
  9. 🥑 **Avocado Ranch Smash** ($12.49) — *Nivel 3: California Fresh*
  10. 🌱 **Veggie Green Supreme** ($11.99) — *Nivel 3: 100% Plant-Based*
- **Badge de Nivel de Especialidad**: Diferenciación visual de especialidad por receta, ingredientes y técnica de brasa.
- **Botón & Modal Interactivo de Detalles**: Visualización dinámica de ingredientes, tiempo de cocción, calorías, maridaje sugerido y enlace directo a compra en la PWA.
- **Secciones Comerciales**: Hero con estadísticas (`+50K` burgers servidas, `<25 min` entrega), pilares de calidad artesanal, opiniones reales y llamadas a la acción para la app móvil y panel admin.

### 2. `apps/pwa` — App Móvil PWA (React)
- **Pestañas Inferiores Fijas**:
  - 🍔 **Menú**: Búsqueda en vivo, filtrado por categorías, tarjetas con precio, badge de especialidad, selector de cantidades y barra flotante de carrito con checkout rápido.
  - 🏷️ **Ofertas**: Cuponera exclusiva PWA (*Combo Rey Duo 25% OFF*, *Viernes 2x1 Smash*, *Pack Degustación*) y simulador de cupones promocionales (ej. `RAPID50` para 50% de descuento).
  - 🛵 **Órdenes**: Historial de órdenes con barra de trazabilidad en vivo (Confirmado ➔ En Brasa ➔ En Moto ➔ Entregado), tiempos estimados (ETA) y botón de simulación de compra instantánea.
  - 👤 **Perfil**: Ficha del cliente (Carlos Mendoza), saldo de puntos fidelidad (*Club Rapid*), direcciones guardadas, método de pago y enlaces directos a la web y panel admin.

### 3. `apps/admin` — Panel Administrativo & Dashboard (React)
- **Métricas Resumen en Tiempo Real**:
  - Ventas Totales del Día ($3,412.50 — ↑ +18.4%)
  - Hamburguesas Despachadas (348 unidades)
  - Clientes Registrados (1,284 clientes, 842 activos)
  - Ticket Promedio ($16.85)
- **Gestión de Hamburguesas y Stock**: Tabla completa de las 10 variantes con badges de especialidad, precio, estado de existencias (*Disponible / Stock Bajo / Agotado*), ventas del día y ajuste interactivo de inventario (+/-). Modal para dar de alta nuevas variantes.
- **Métricas de Consumidores por Nivel de Consumo**:
  - Segmentación: *Burger Kings / VIP* (>8 pedidos/mes, ticket >$100), *Comensales Frecuentes* (4-7 pedidos/mes) y *Clientes Ocasionales*.
  - Top 5 Consumidores Estrella del Mes con foto, órdenes, gasto total y hamburguesa predilecta.
  - Gráfico de barras de franjas horarias (pico almuerzo vs pico cena).
- **Salud del Sistema & Base de Datos**:
  - Modo dual MySQL Pool / Motor In-Memory de alta velocidad.
  - Medidor de latencia en milisegundos y capacidad concurrente.
  - Enlaces de diagnóstico de red (`/api/debug-network`) y endpoints de salud (`/api/health`).

---

## 🚀 Comandos de Construcción y Ejecución

```bash
# 1. Instalar dependencias en todas las aplicaciones
npm run install:all

# 2. Compilar individualmente
npm run build:ecommerce   # Compila landing Astro en apps/ecommerce/dist
npm run build:pwa         # Compila PWA React en apps/pwa/dist
npm run build:admin       # Compila Admin React en apps/admin/dist

# 3. Compilar y sincronizar todo el monorepo
npm run build:all

# 4. Iniciar servidor Node.js
npm run server
```

## 🌐 Rutas de Acceso Local
- **Landing E-commerce**: `http://localhost:3000/`
- **PWA Mobile**: `http://localhost:3000/app`
- **Panel Administrativo**: `http://localhost:3000/admin`
- **Health Check API**: `http://localhost:3000/api/health`
- **API Catálogo Productos**: `http://localhost:3000/api/products`
- **API Métricas Consumidores**: `http://localhost:3000/api/consumers`
