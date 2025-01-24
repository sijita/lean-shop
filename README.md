# Leanshop 🛒

## Requisitos Previos
- Node.js (v18 o superior)
- npm

## Configuración del Proyecto

### Clonar el Repositorio
```bash
git clone https://github.com/sijita/lean-shop.git
cd lean-shop 
```

### Instalación de Dependencias
```bash
npm install
```

### Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
NEXT_PUBLIC_API_URL=https://pm3uf3zsxf.us-east-1.awsapprunner.com/
```

## Ejecución del Proyecto

### Iniciar ambiente de desarrollo
```bash
npm run dev
```

### Iniciar ambiente de producción
```bash
npm run build
npm run start
```

## Scripts Disponibles
- `dev`: Inicia la aplicación en modo desarrollo
- `build`: Genera la versión de producción
- `start`: Inicia la aplicación en modo producción
- `lint`: Ejecuta el linter

## Tecnologías Principales
- Next.js 14
- React 18
- Tailwind CSS con SCSS
- TypeScript

## Estructura del Proyecto (Screaming Architecture)
```
/src
├── api/
├── components/
├── hooks/
├── pages/
├── store/
├── styles/
├── types/
└── utils/
```
