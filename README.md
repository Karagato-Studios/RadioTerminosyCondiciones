# Radio Station - Avisos Legales

Aplicación web moderna para estaciones de radio con páginas de avisos legales enfocadas en la privacidad del usuario.

## Características

- **Aviso de Privacidad**: Detalla explícitamente que no se recolectan ni guardan datos personales del usuario
- **Términos de Uso**: Reglas y condiciones para usar la aplicación
- **Política de Anuncios**: Información transparente sobre los anuncios (sin seguimiento comportamental)
- **Almacenamiento Local**: Todos los favoritos y preferencias se guardan en el dispositivo del usuario
- **Diseño Moderno**: Interfaz responsive con TailwindCSS y gradientes modernos
- **Navegación Intuitiva**: Menú de navegación fácil de usar

## Tecnologías

- React 18
- Vite
- React Router DOM
- TailwindCSS
- Lucide React (iconos)

## Instalación

1. Navega al directorio del proyecto:
```bash
cd radio-station-legal
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist`.

## Páginas

- **Inicio (`/`)**: Página principal con resumen de la política de privacidad y enlaces a los avisos
- **Privacidad (`/privacy`)**: Aviso de privacidad detallado
- **Términos (`/terms`)**: Términos de uso de la aplicación
- **Anuncios (`/ads`)**: Política de anuncios y publicidad

## Política de Privacidad

Esta aplicación enfatiza que:

- **NO** se recolectan datos personales
- **NO** se guardan datos en servidores externos
- **NO** se utilizan cookies de seguimiento
- **NO** se hace analytics o seguimiento de comportamiento
- Todos los favoritos y preferencias se guardan **localmente** en el dispositivo del usuario usando localStorage
- La transmisión de audio es directa entre el dispositivo y la estación de radio, sin intermediarios

## Licencia

© 2024 Radio Station. Todos los derechos reservados.
