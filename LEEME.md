# Monster Party: El Dado del Terror

Prototipo funcional sin dependencias externas, preparado para alojamiento estático HTTPS y uso como PWA. No necesita comprar un dominio. Los archivos de esta carpeta son el sitio completo; no se requiere compilación.

## Publicación gratuita con GitHub Pages

1. Entra a https://github.com e inicia sesión. Crea un repositorio **público** llamado `monster-party`. GitHub Pages está disponible con GitHub Free para repositorios públicos.
2. Descomprime el ZIP en tu computadora. En el repositorio elige **Add file → Upload files**. Sube el contenido de la carpeta `monster-party`, de modo que `index.html` quede en la raíz del repositorio, no dentro de otra carpeta. Incluye todos los archivos PNG, SVG, JS, CSS y el manifiesto. Confirma la carga con **Commit changes**. No subas solamente el ZIP.
3. Abre **Settings → Pages → Build and deployment**. Selecciona **Deploy from a branch**, rama `main`, carpeta `/(root)` y guarda.
4. Espera a que Pages muestre la dirección publicada, normalmente `https://TU-USUARIO.github.io/monster-party/`. La dirección `github.io` evita comprar un dominio. Usa HTTPS; en Pages activa **Enforce HTTPS** si está disponible.
5. Abre la dirección y espera **Lista para jugar offline**. Si no aparece, comprueba que los archivos se subieron completos y recarga con conexión.

Documentación oficial: [GitHub Pages](https://docs.github.com/en/pages/quickstart), [crear un sitio](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) y [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

El paquete no ha sido publicado en una cuenta externa. La vista local de Codex sirve para revisar el prototipo en esta computadora, no es una dirección pública para el iPhone.

## Instalar y probar en Safari iPhone

1. Abre la dirección **HTTPS publicada** en Safari con conexión. Evita navegación privada.
2. Espera a que aparezca **Lista para jugar offline**: indica que el service worker terminó de guardar los recursos necesarios, incluido el fondo.
3. Pulsa **Compartir → Añadir a pantalla de inicio**. Si aparece **Abrir como app web**, actívalo. Pulsa **Añadir**. Los nombres o posiciones pueden variar según la versión de iOS.
4. Abre el nuevo icono una vez con conexión y espera nuevamente el aviso de disponibilidad offline.
5. Gira el iPhone a horizontal y desactiva el bloqueo de orientación si hace falta. La app solicita orientación horizontal en el manifiesto, pero Safari/iOS puede ignorar esta preferencia: no hay bloqueo forzado. En vertical el contenido se reorganiza y permite desplazarse.
6. Pon el teléfono en modo avión, cierra la app y vuelve a abrirla desde su icono. Deben aparecer el fondo, las ilustraciones y los ocho juegos. Sortea, confirma un juego, cambia puntos, cierra y vuelve a abrir: deben conservarse.
7. Prueba el temporizador, el reinicio y el final doble. Verifica que textos y botones sean cómodos en tu tamaño de pantalla.

[Instrucciones oficiales de Apple](https://support.apple.com/guide/iphone/iphea86e5236/ios).

**El ZIP es un paquete de archivos para publicar. El visor de Archivos del iPhone no es un servidor web y no se afirma que ejecute el JavaScript del ZIP o de un HTML local.** Abrir `index.html` mediante `file://` tampoco activa el modo PWA/offline.

## Uso de la fiesta

- **¡GIRAR!:** elige de forma aleatoria entre los juegos no confirmados. El dado ilustrado gira; después aparece el detalle del juego. Un cubo visual representa el sorteo de los ocho juegos; no simula probabilidades de un dado físico de seis caras.
- **Comenzar juego:** inicia el cronómetro. Se puede pausar y reiniciar. El tiempo se calcula por reloj real mientras la página sigue abierta; emite un aviso sonoro si el sonido está activado y la app sigue visible; no promete alarmas con la app cerrada. Al recargar se conserva el juego, pero se reinicia su cronómetro.
- **Confirmar que ya se jugó:** pide confirmación y retira ese juego del sorteo. Cancelar conserva el juego. **Volver al dado** devuelve el juego sin marcarlo como jugado.
- **Parejas y puntos:** seis parejas iniciales, nombres y puntos editables, botones +/−, alta y eliminación con confirmación. El marcador inferior abre esta sección. Los puntos de los juegos se anotan manualmente; confirmar un juego no inventa una pareja ganadora.
- **Gran final:** concurso de disfraces fuera del sorteo. Introduce los puntos base por pareja; se muestra su valor ×2. Al confirmar se suman una sola vez y se bloquea la acción para impedir duplicados. Las correcciones posteriores pueden hacerse en el marcador.
- **Reiniciar fiesta:** tras confirmar, devuelve los ocho juegos, borra puntos y votos y habilita el final; conserva nombres y duraciones personalizadas.
- No hay servidor de puntuaciones ni sincronización entre dispositivos. Los datos se guardan en el almacenamiento de este navegador/app. Borrar los datos del sitio, desinstalar o las políticas de almacenamiento de iOS pueden eliminarlos. Anota los resultados importantes antes de hacerlo.

## Juegos y valores propuestos

Se respetan las reglas proporcionadas: Thriller es un concurso votado, Cazafantasmas usa globos blancos con valores chico 1 / mediano 3 / grande 5, la momia usa vendas reutilizables y Retrato del terror usa pizarrón por parejas. No se incluyen Calabaza explosiva ni Caldero maldito.

El historial accesible no contenía todas las reglas originales. Las reglas adicionales para lotería, mejor asustador, ojo de Mike y mímica, así como las duraciones, desempates y puntuaciones distintas de Cazafantasmas y el multiplicador del final, son propuestas para completar el prototipo; no se presentan como acuerdos recuperados. Se usa 10 puntos al ganador en lotería/asustador/Thriller/momia/ojo de Mike, 1 por acierto en mímica/retrato y 1 punto base por voto en disfraces. Las duraciones se editan en pantalla y los puntos en el marcador. Las reglas se pueden modificar en `GAMES`, al inicio de `app.js`.

Los materiales físicos, las tarjetas, los tableros y la música de Thriller no se incluyen como archivos. El anfitrión los prepara. No se requieren servicios de música para que la app funcione offline.

## Archivos y mantenimiento

- `index.html`: estructura y controles.
- `style.css`: diseño adaptable, animaciones y aspecto inspirado en el boceto.
- `app.js`: juegos, sorteo, cronómetro, parejas, marcador y persistencia local.
- `sw.js`: caché offline de todos los recursos de la app.
- `manifest.webmanifest`: nombre, iconos y preferencias de instalación.
- `icon.svg`, `icon-192.png`, `icon-512.png`: iconos locales.
- `castle.png`: fondo generado a partir de la dirección artística de la referencia.
- `.nojekyll`: conserva el sitio como archivos estáticos en GitHub Pages.

Para publicar cambios, modifica los archivos y cambia la versión de `CACHE` en `sw.js` (por ejemplo, de `monster-party-v10` a `monster-party-v11`). Vuelve a subirlos. Abre la app con conexión, espera la actualización y recarga de nuevo. La versión anterior puede aparecer durante la primera visita de actualización. El almacenamiento del marcador no depende del número de versión de la caché.

## Diseño y procedencia

La imagen suministrada por el usuario se utilizó como referencia: castillo, morado/naranja, marcos dorados, pergamino y parejas al pie. Este prototipo adapta esa dirección visual; no es una reproducción exacta de la ilustración. Las caras del dado, el logo, el pergamino y los retratos del marcador son imágenes locales generadas a partir de la referencia. El dado tiene seis superficies 3D animadas y los controles se construyen con HTML/CSS.

Fondo creado con la herramienta integrada de generación de imágenes, sin API key. Prompt: “Create a background asset for a functional Halloween party web game. Reference is the attached Monster Party mockup, use only its art direction. Wide landscape 16:9 whimsical polished 3D cartoon haunted castle interior with purple stone arches, warm orange candles, purple magical lighting, small friendly ghosts and jack-o-lanterns confined to outer edges, stone floor. Center and right quiet darker empty space for actual UI overlay. No text, no logos, no buttons, no dice, no parchment, no scoreboard. This is only the background environment, not a UI screenshot.” Archivo: `castle.png`.



## Rediseño visual · 23 de octubre de 2026

Logo ilustrado, dado 3D con ocho ilustraciones rotatorias y marcos dorados con calaveras, pergamino ilustrado, botones con relieve y marcador inferior con seis retratos. Los botones +/− del marcador cambian los puntos directamente; pulsa el nombre de pareja para editarla. El listado de juegos y el reinicio están en «Los ocho juegos». Se conservaron la clave de almacenamiento y los resultados existentes.

Nuevos recursos offline: `logo-art.png`, `game-cards.png` (atlas 4×2), `portraits.png` (atlas 3×2) y `parchment.png`. Se incluyen en el paquete y la caché. Detalles de generación en ARTE.md.


## Giro fluido y sonidos · 24 de octubre de 2026

El giro dura 3,2 segundos, realiza tres vueltas en X y cuatro en Y y frena gradualmente. Las caras se mantienen estables durante la animación. El dado se desplaza suavemente al mostrar el resultado. Si el dispositivo tiene activada la preferencia de movimiento reducido, se muestra una transición breve sin giros.

Sonidos locales de lanzamiento, revelación del juego, cambio de puntos y final del cronómetro. El botón «Sonido» permite silenciarlos y conserva la preferencia. Se sintetizan mediante Web Audio, funcionan offline y no contienen música comercial. En iPhone, el audio se habilita tras tocar un control; comprueba el volumen del dispositivo. No se garantiza una alarma con la pantalla bloqueada o la app en segundo plano.
