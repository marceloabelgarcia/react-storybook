# Project Architecture

### Special packages

- react-router-dom: Administración de rutas del proyecto
- Sistema de componentes Ant design
- Hoja de estilos con Less
- raw-loader: Para leer archivos js
- react-syntax-highlighter: Para visualizar código
- markdown-to-jsx: Convierte coidog .md en html/jsx [https://www.npmjs.com/package/markdown-to-jsx]

### Layouts

En el sistema de diseño existen 2 layouts: Layout1 y Layout2. En el proyecto están en la carpeta /src/layouts Un Layout principal: "Main" que contiene el menú de arriba y el cuerpo con los contenidos, donde cargan los demás layouts dentro de un "Outlet" de react-router-dom (que solo recarga el contido dentro de outlet) El Layout2 tiene el menú lateral porque contiene subpaginas con la misma ruta, y carga en segundo nivel las sub-páginas en otro "Outlet"

### Routes

Las rutas están definidas en /src/routes/index.js Las rutas principales coinciden con el menú principal. Y Se define con un mapeo las subrutas por cada menú. Los páginas dentro de cada subrutas están diferenciadas por nombre de parámetro dinámico. De esta manera coincide el sistema de layouts con las rutas. Y los parámetros dinámicos son utilizados para cambiar contenido con la misma estructura dentro de el layout cargado.

### Transitions & animation

React y react-router-dom no tiene un sistema de transición propio. Por lo que se tiene que hacer uno apropido según las necesidades o instalar un paquete de tercero. Debido al uso conveniente de "Outlet", se realizó un componente para transición que abarque la funcionalidad de manetener los layouts cargados y solo animar el contenido que cambia.

Se realizó un hook y un componente dentro de la carpeta /src/components/Transition

- El hook controla la carga y los cambios de rutas, y pausa la animación cuando hay llamada asyncrona

- El componente está dentro de cada layout como un objeto jsx contenedor de la animación.

Hay un script dentro del hook que es quien determina que animación iniciar, dependiendo del cambio de profundida en el sistema de rutas.

    Ej: /pag-1/subpag-1 -> /pag-1/subpag-2

> en el ejemplo se ve un cambio solo en subpag que inicia la animación en ese nivel

    Ej: /pag-1/subpag-1 -> /pag-2

> en el ejemplo se ve que cambia de página, inicia la animación de todo el layout

El proceso de animación

Cuando se detecta cambio de ruta, se lanza animación fadeout con pagina que está visible. Termina la animación y se ejecuta script antes de cargar la página nueva. Cuando termina el script. Lanza el fadin de la página que se va a cargar.

El Router de react-router-dom permite manejar el flujo principal de las rutas que siempre coincide con la ruta del navegador. Y por otro lado se especifíca en el componente Router atributo **location** la ruta que tiene que mostrarse dentro del mapeo de rutas.

Con esta posibilidad podemos cambiar la ruta visible, justo en el momento que termina el fadeout, para preparar la carga de la siguiente ruta, con la animación de la nueva carga.
