---

# 🎬 CineMágico - Aplicación de Cine

Una aplicación móvil completa desarrollada con Ionic Angular para la gestión de un cine, que incluye cartelera, venta de snacks, sistema de tickets y más.

## 📱 Características Principales

🎭 **Cartelera (Home)**  
- Visualización de películas en cartelera  
- Botón de trailer para ver avances de cada película  
- Horarios disponibles por película  
- Formatos 2D, 3D y 4D  
- Promociones especiales  
- Diseño responsivo con cards atractivas  

🍿 **Snacks & Bebidas**  
- Catálogo completo de productos  
- Combos especiales con descuentos  
- Carrito de compras funcional  
- Sistema de agregar/eliminar productos
- Cálculo automático de totales  

👤 **Login/Registro**  
- Formulario de inicio de sesión  
- Registro de nuevos usuarios  
- Recuperación de contraseña  
- Integración con login social (Google/Facebook)  

ℹ️ **Acerca de**  
- Historia y misión de la empresa  
- Servicios ofrecidos  
- Información del equipo  
- Información de contacto  
- Mapa integrado con ubicación del cine  
- Horarios de atención  
- Reconocimientos  

🎫 **Tickets**  
- Visualización de reservas confirmadas  
- Reservas pendientes de pago  
- Sistema de cancelación de reservas  
- Historial completo de tickets  

## 🛠️ Tecnologías Utilizadas

- **Framework**: Ionic 7 + Angular  
- **Lenguaje**: TypeScript  
- **Estilos**: SCSS/CSS  
- **Iconos**: Ionic Icons  
- **Componentes**: Ionic Components  

## 📋 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:  
- Node.js (versión 16 o superior)  
- npm (incluido con Node.js)  
- Ionic CLI → `npm install -g @ionic/cli`  
- Angular CLI → `npm install -g @angular/cli`  
- Visual Studio Code (recomendado para desarrollo)  

## 🛠️ Editor Recomendado: Visual Studio Code

Se recomienda usar Visual Studio Code con las siguientes extensiones para una mejor experiencia de desarrollo:  

**Extensiones Esenciales**  

*Ionic*  
- WebNative  
- Ionic 2 Commands with Snippets  
- Ionic 3 snippets  
- Ionic Essentials  
- Ionic 3 ionView Snippets  
- Ionic Snippets  

*Angular*  
- Angular Files  
- Angular Language Service  
- Angular Schematics  
- Angular Essentials (LTS)  
- Angular Snippets (LTS)  
- Angular 17 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout  

*TypeScript Hero*  
- Organización automática de imports  

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/DanMox-24/App_CineMagico.git
cd cine-realm
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
ionic serve
```

La aplicación se abrirá automáticamente en **http://localhost:8100**

### 4. Ejecutar en dispositivo móvil

**Para Android:**

```bash
ionic capacitor add android
ionic capacitor run android
```

## 📁 Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── explore-container/         # Contenedor para componentes reutilizables
│   ├── tab1/                      # 🏠 Cartelera (Home)
│   │   ├── tab1-routing.module.ts
│   │   ├── tab1.module.ts
│   │   ├── tab1.page.html
│   │   ├── tab1.page.scss
│   │   ├── tab1.page.spec.ts
│   │   └── tab1.page.ts
│   ├── tab2/                      # 🍿 Snacks & Bebidas
│   ├── tab3/                      # 👤 Login / Cuenta
│   ├── tab4/                      # ℹ️ Acerca de
│   ├── tab5/                      # 🎟️ Tickets
│   ├── tabs/                      # 🧭 Configuración de navegación por tabs
│   ├── app-routing.module.ts      # Rutas principales
│   ├── app.component.*            # Componente raíz con menú lateral
│   └── app.module.ts              # Módulo principal
├── assets/
│   ├── icon/                      # Iconos personalizados
│   └── images/                    # Imágenes de la app
├── theme/
│   └── global.scss                # Estilos globales
```

## 🎨 Características de Diseño

- Diseño responsivo adaptable a todas las pantallas  
- Menú lateral con navegación completa  
- Tema personalizado con colores cinematográficos y gradientes  
- Animaciones fluidas y micro-interacciones  
- Iconografía coherente con Ionic Icons  
- UX moderna e intuitiva  

## 📱 Navegación

La aplicación utiliza un sistema de 5 tabs principales:  
1. 🏠 Cartelera — Películas y horarios  
2. 🍿 Snacks — Productos y carrito  
3. 👤 Cuenta — Login y registro  
4. ℹ️ Acerca de — Información del cine  
5. 🎫 Tickets — Reservas y códigos QR  

Además incluye un menú lateral accesible desde todas las páginas.  

## 🔧 Funcionalidades Técnicas

- Navegación programática entre componentes  
- Reproducción de trailers en ventana externa  
- Gestión de estado local en cada componente  
- Responsive design para móviles y tablets  
- Componentes reutilizables de Ionic  

## 📊 Componentes Ionic Utilizados

- `ion-tabs`, `ion-tab-bar`, `ion-tab-button`  
- `ion-header`, `ion-toolbar`, `ion-title`  
- `ion-content`, `ion-card`, `ion-card-content`  
- `ion-list`, `ion-item`, `ion-label`  
- `ion-button`, `ion-input`, `ion-textarea`  
- `ion-select`, `ion-checkbox`, `ion-radio`  
- `ion-menu`, `ion-split-pane`  
- `ion-grid`, `ion-row`, `ion-col`  

## 🎯 Próximas Mejoras

- Integración con backend real  
- Reproductor de trailers integrado (sin abrir ventana externa)  
- Sistema de pagos online  
- Notificaciones push  
- Comentarios y reseñas  

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como una aplicación completa de cine para un parcial práctico, implementando las mejores prácticas de Ionic y Angular.  

## 🧰 Comandos Útiles

```bash
# Desarrollo
ionic serve

# Build de producción
ionic build

# Agregar plataformas
ionic capacitor add android

# Ejecutar en dispositivo
ionic capacitor run android --livereload

# Generar componentes
ionic generate page nombre-pagina
ionic generate component nombre-componente
```

## 🧑‍🎓 Autor

Desarrollado por **Daniel Mateus** usando Ionic Framework

---
