# Verificación del prototipo

Fecha: 19 de octubre de 2026.

## Comprobado en el navegador de escritorio de Codex

- La página responde por HTTP local y carga sin dependencias remotas.
- Los ocho sorteos de una fiesta produjeron ocho juegos únicos. Orden observado: Lotería, Mímica, Ojo de Mike, Momia, Retrato, Mejor asustador, Thriller y Cazafantasmas.
- La confirmación retira el juego; al llegar a 8/8 se deshabilita el sorteo.
- El marcador permite sumar puntos y el reinicio restaura juegos y puntuaciones.
- Se corrigió el guardado de los campos para conservar los valores mientras se escriben.
- Tres puntos base en disfraces producen seis puntos en el marcador. El botón del final queda desactivado después de confirmar.
- Tras recargar permanecen los seis puntos, los votos y el bloqueo del final.
- El service worker termina la instalación y muestra disponibilidad offline.
- Con el servidor local apagado, se pudo recargar la página, reiniciar la fiesta y sortear Retrato del terror. El fondo y las ilustraciones siguieron disponibles desde caché.
- El cronómetro pasó de 02:00 a 01:51, se pausó y se restauró a 02:00.
- Se inspeccionó la disposición estrecha y la disposición de dos columnas. En la vista de 516 píxeles, el documento no excedía el ancho de pantalla; el marcador inferior tiene desplazamiento horizontal propio.
- JavaScript revisado con el comprobador de sintaxis de Node.

## Pendiente en el dispositivo del usuario

- Publicación HTTPS real en GitHub Pages.
- Instalación desde Safari en un iPhone físico.
- Reapertura desde el icono en modo avión, orientación y comodidad táctil en su modelo de iPhone.

La prueba con el servidor apagado verifica la caché en el navegador utilizado; no equivale a haber probado Safari/iOS. Los pasos de prueba móvil y publicación están en LEEME.md.

## Rediseño visual · 23 de octubre de 2026

- Sustituidos el logo, los símbolos simples del dado y los avatares emoji por arte ilustrado local basado en la referencia.
- Dado construido con seis superficies 3D; caras de juegos tomadas de un atlas con ocho ilustraciones.
- Marcador inferior con botones +/−: comprobado el cambio 0 → 1 → 0, dejando intacta la puntuación original.
- Comprobado acceso a Equipos y conservación del juego seleccionado y del juego ya marcado como jugado.
- Revisadas vistas de 1440×960, 844×390 y 390×844. No se detectó desbordamiento horizontal del documento en las dos vistas móviles; el marcador tiene desplazamiento propio. En móvil se permite desplazamiento vertical para mantener controles legibles.
- Panel de pergamino, logo, caras y retratos incluidos en la lista de recursos offline, versión de caché v8.
- No se ha realizado una nueva prueba en un iPhone físico ni una publicación externa.

## Giro y sonidos · 24 de octubre de 2026

- En una pestaña de prueba aislada, el sorteo llegó a su resultado y desbloqueó la confirmación sin errores de consola.
- Inspeccionada la animación activa: 3200 ms; rotación X −24° → 1056° (1080°), Y −30° → 1410° (1440°). Se observó visualmente el cubo girando con sus caras posteriores.
- Web Audio creó un contexto de salida y osciladores para lanzamiento y revelación. Verificada la generación en el navegador; no equivale a una escucha en iPhone físico.
- El botón de silencio cambió a apagado y conservó aria-pressed=false tras recargar.
- La partida del usuario se mantuvo intacta; las pruebas de sorteo se ejecutaron bajo localhost, separado del origen 127.0.0.1 de su partida.

## Corrección del logo · 24 de octubre de 2026

El logo ahora es un control interno que vuelve al dado sin navegar ni recargar. Se comprobó desde el marcador que mantiene la misma dirección y muestra el dado. El inicio de la PWA apunta explícitamente a index.html. Caché v11.
