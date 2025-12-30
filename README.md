# Bernat Alcudia Portfolio 🚀

Portfolio profesional de Bernat Alcudia - Desarrollador Full Stack. Un sitio web moderno, rápido y totalmente accesible, diseñado para mostrar mis habilidades, experiencia y proyectos.

## ✨ Características Principales

- 🌍 **Multilingüe:** Soporte completo para Español e Inglés con detección automática.
- 🎨 **Tematización Dinámica:** Tres modos de visualización: Claro, Oscuro y un tema especial Navy/Green.
- 📄 **Descarga de CV:** Descarga dinámica del Currículum en el idioma seleccionado (ES/EN).
- 📧 **Formulario de Contacto:** Integración real con Nodemailer para recepción de correos.
- ⚡ **Alto Rendimiento:** Optimizado con Next.js 15, Server Components y compresión de activos.
- 📱 **Diseño Responsive:** Totalmente adaptado a cualquier dispositivo y tamaño de pantalla.
- ♿ **Accesibilidad:** Enfoque prioritario en navegación por teclado y lectores de pantalla (ARIA).

## 🛠️ Tecnologías

- **Framework:** Next.js 15 (App Router)
- **UI & Logic:** React 19 + TypeScript
- **Estilos:** Tailwind CSS + Vanilla CSS para efectos avanzados
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Envío de Emails:** Nodemailer
- **Iconografía:** Lucide React (SVG) / Custom SVGs

## 📦 Instalación y Desarrollo Técnico

```bash
# 1. Clonar el repositorio
git clone https://github.com/bernatalcudia/my-Portfolio.git

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crea un archivo .env basado en .env.example
cp .env.example .env

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Compilar para producción y validar tipos
npm run build
```

## 🏗️ Estructura del Proyecto

```
myPortfolio/
├── app/                    # App Router de Next.js
│   ├── about/             # Página "Sobre Mí" con descarga de CV
│   ├── skills/            # Habilidades técnicas y en aprendizaje
│   ├── experience/        # Trayectoria profesional y formación
│   ├── contact/           # Interfaz de contacto
│   └── api/               # API Routes (envío de emails)
├── components/            # Componentes modulares y reutilizables
│   ├── ui/               # Botones, Cards, Badges, etc.
│   ├── layout/           # Header y Footer con toggles de idioma/tema
│   └── sections/         # Composiciones de páginas
├── lib/                  # Lógica de negocio y estados
│   ├── contexts/         # LanguageContext y ThemeToggle
│   └── data/            # Datos centralizados (CV, Proyectos, Skills)
└── public/               # Activos estáticos (CVs en PDF, imágenes)
```

## 🌐 Despliegue en Vercel

Este proyecto está preparado para ser desplegado en Vercel con un solo clic. Solo asegúrate de configurar las siguientes variables de entorno en el panel de Vercel:

- `EMAIL_USER`: Tu dirección de correo (Gmail).
- `EMAIL_PASS`: Tu contraseña de aplicación de Google.

## 📝 Licencia

© 2025 Bernat Alcudia. Todos los derechos reservados.
