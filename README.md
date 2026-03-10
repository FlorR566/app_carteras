# **👜 Lady Valentina**

Aplicación web para visualizar el catálogo de productos de Lady Valentina, una marca de carteras, mochilas y billeteras de cuero artesanal. Está pensada como un proyecto moderno, rápido y fácil de mantener.

Desarrollada con React + Vite, consume una API REST propia para obtener los productos en tiempo real desde una base de datos en la nube.

### **Características**

Catálogo de productos con imágenes desde Cloudinary.

Diseño responsive (apto para móvil y escritorio).

Componentes reutilizables en React.

Fetching con Axios, con estados de carga y error.

Custom hooks para lógica de UI (viewport, scroll lock)

Deploy continuo en Vercel desde `main`.

Actualizada a React 19.2.1 (con parches de seguridad).

### **Proximamente**

Filtros por nombre, categoría y color

Panel de administración de productos

---

## **Deploy**

El proyecto se despliega automáticamente en Vercel mediante la branch main.

## Stack

| Tecnología     | Uso                      |
| -------------- | ------------------------ |
| React 19       | UI y componentes         |
| Vite 7         | Bundler y dev server     |
| Axios          | Consumo de API REST      |
| CSS Modules    | Estilos encapsulados     |
| Cloudinary     | Hosting de imágenes      |
| Node + Express | Backend y API REST       |
| MongoDB Atlas  | Base de datos en la nube |
| Render         | Deploy del backend       |
| Vercel         | Deploy del frontend      |

---

## Variables de entorno

El proyecto requiere una variable de entorno para conectarse a la API:

```env
VITE_API_URL=https://tu-api.onrender.com/api/products
```

Para desarrollo local, creá un archivo `.env.local` en la raíz con esa variable.
En producción, configurala desde el dashboard de Vercel.

---

## Estructura

```bash
src/
├── components/        # Un componente por carpeta con su CSS Module
├── constants/         # Datos estáticos y configuración de UI
├── hooks/             # Custom hooks reutilizables
├── services/          # Lógica de comunicación con la API
└── assets/
```

---

## Deploy

Frontend en **Vercel** — se despliega automáticamente con cada push a `main`.  
Backend en **Render** — API REST con base de datos en la nube.
