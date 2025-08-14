# 🌙 Luna&Leo Tetris 2025 - PWA

Un Tetris clásico y moderno con estética neon-arcade, completamente funcional offline como Progressive Web App (PWA).

## 🎮 Características

- **Modo Clásico**: Tetris tradicional con velocidad progresiva
- **Modo Desafío**: Comienza con líneas pre-llenadas
- **6 Paletas de colores**: Pastel HC, Vaporwave, Arctic, Okabe-Ito, NES-like, Game Boy
- **Efectos de sonido**: Rotación, movimiento, bloqueo, limpieza de filas, hold, hard drop, game over
- **Música de fondo**: 11 pistas diferentes con control de volumen
- **Sistema de puntuación**: Guardado local con ranking
- **Controles táctiles**: Optimizado para móviles con botones ergonómicos
- **Funcionamiento offline**: PWA que funciona sin internet

## 📱 Instalación en Android

### Opción 1: Instalación desde navegador (Recomendado)

1. **Abre el juego** en Chrome/Edge en tu Android
2. **Toca el menú** (⋮) en la esquina superior derecha
3. **Selecciona "Instalar app"** o "Añadir a pantalla de inicio"
4. **Confirma la instalación**
5. **¡Listo!** El juego aparecerá como una app nativa

### Opción 2: Instalación manual

1. **Abre el juego** en tu navegador
2. **Espera** a que se carguen todos los recursos (primera vez)
3. **Toca el banner** "Instalar Luna&Leo Tetris 2025"
4. **Sigue las instrucciones** del navegador

## 🎯 Controles

### Teclado (PC)
- **Flechas ←→**: Mover pieza
- **Flecha ↓**: Bajar suave
- **Flecha ↑ / X**: Rotar horario
- **Z**: Rotar antihorario
- **C**: Hold (intercambiar pieza)
- **Espacio**: Hard drop (caída instantánea)
- **P**: Pausar/Reanudar

### Táctil (Móvil)
- **Botones izquierda/derecha**: Mover pieza
- **Botón abajo**: Bajar suave
- **Botones rotación**: Rotar pieza
- **Botón H**: Hold
- **Botón ⤓**: Hard drop

## 🎨 Paletas de Colores

1. **Pastel HC**: Colores suaves y armoniosos
2. **Vaporwave**: Estética cyberpunk vibrante
3. **Arctic**: Inspirada en Nord, tonos fríos
4. **Okabe-Ito**: Amigable para daltónicos
5. **NES-like**: Estilo 8-bit vívido
6. **Game Boy**: Verde monocromático clásico

## 🎵 Música y Sonidos

### Pistas Musicales
- Adventures in Adventureland
- Artblock
- Bruno Belotti - Nel giardino dello Zar
- Ether Vox
- Galactic Rap
- Gods of Trance
- Invention 4-1 Loop
- Limit 70
- Mesmerizing Galaxy Loop
- Paradise Found
- The Return

### Efectos de Sonido
- **Rotación**: Sonido suave para girar piezas
- **Movimiento**: Feedback táctil para desplazamiento
- **Bloqueo**: Sonido cuando la pieza se fija
- **Limpieza**: Efectos progresivos según líneas eliminadas
- **Hold**: Sonido distintivo para intercambio
- **Hard Drop**: Efecto más fuerte para caída rápida
- **Game Over**: Sonido dramático al perder

## 🏆 Sistema de Puntuación

- **Puntos por línea**: 100 × nivel × líneas simultáneas
- **Puntos por hard drop**: 2 puntos por celda
- **Puntos por soft drop**: 1 punto por celda
- **Nivel**: Aumenta cada 10 líneas
- **Velocidad**: Se incrementa con el nivel

## 📊 Funciones del PWA

### Offline First
- **Funciona sin internet** después de la primera carga
- **Cache automático** de todos los recursos
- **Actualizaciones automáticas** cuando hay conexión

### Experiencia Nativa
- **Pantalla completa** en móviles
- **Ícono personalizado** en la pantalla de inicio
- **Splash screen** al abrir
- **Navegación fluida** sin barras del navegador

### Almacenamiento Local
- **Puntuaciones guardadas** automáticamente
- **Configuración persistente** (paleta, música, sonidos)
- **Ranking local** de mejores puntuaciones

## 🛠️ Archivos del Proyecto

```
luna-leo-tetris-2025/
├── index_solo_html-8-11.html    # Juego principal
├── manifest.json                 # Configuración PWA
├── sw.js                         # Service Worker
├── generate-icons.html           # Generador de íconos
├── README-PWA.md                 # Este archivo
├── icons/                        # Íconos del PWA
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── screenshots/                  # Capturas para la tienda
│   ├── gameplay.png
│   └── mobile.png
└── assets/
    └── audio/
        ├── [pistas musicales]
        └── fx/
            └── [efectos de sonido]
```

## 🚀 Despliegue

### Servidor Local
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Servidor Web
1. **Sube todos los archivos** a tu servidor web
2. **Asegúrate** de que el servidor sirva HTTPS
3. **Verifica** que el manifest.json sea accesible
4. **Prueba** la instalación PWA

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `:root`:
```css
:root {
  --bg: #02050f;        /* Fondo principal */
  --accent: #00e5ff;    /* Color neón */
  --text: #e9f4ff;      /* Texto */
}
```

### Añadir Música
1. **Coloca** el archivo en `assets/audio/`
2. **Añádelo** al array `AUDIO_TRACKS` en el HTML
3. **Actualiza** el Service Worker con la nueva ruta

### Modificar Íconos
1. **Abre** `generate-icons.html` en el navegador
2. **Edita** la función `drawIcon()` para cambiar el diseño
3. **Descarga** los nuevos íconos
4. **Reemplaza** los archivos en la carpeta `icons/`

## 🐛 Solución de Problemas

### El PWA no se instala
- **Verifica** que uses HTTPS
- **Asegúrate** de que el manifest.json sea válido
- **Revisa** que el Service Worker esté registrado

### Los sonidos no funcionan
- **Permite** el audio en el navegador
- **Verifica** que los archivos estén en la ruta correcta
- **Revisa** la consola para errores

### El juego no carga offline
- **Espera** a que se complete la primera carga
- **Verifica** que el Service Worker esté activo
- **Limpia** la caché del navegador si es necesario

## 📞 Soporte

Para reportar bugs o sugerir mejoras:
- **Issues**: Crea un issue en el repositorio
- **Email**: [tu-email@ejemplo.com]

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.

---

**¡Disfruta jugando Luna&Leo Tetris 2025!** 🎮✨
