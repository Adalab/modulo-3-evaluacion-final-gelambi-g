**Módulo 3: Evaluación final Gemma Gelambí**

Este es el proyecto de avaluación del módulo 3: React

El proyecto consiste en desarrollar una página web con un listado de personajes de Harry Potter, realizado con React.

En el proyecto se ha trabajado con componentes, cada uno con su hoja de estilo (SCSS). La petición de datos a la API se ha hecho en una función en un fichero a parte, guardado en la carpeta de services (api.js). También se han utilizado las props, pasandolas entre componentes con el destructuring y haciendo los propTypes correspondientes. 


El árbol de componentes es el siguiente:
App.jsx
  - CharacterList.jsx
      - CharacterCard.jsx
  - Filters.jsx
      - FilterCharacter.jsx
      - FilterHouse.jsx
  - CharacterDetail.jsx

**Componentes**
APP.jsx: 
  - Como componente principal contiene todas las variables de estado
  - UseEffect: hook recibe los datos de la API, con el parametro del filtro de la casa, para que se pinte la lista dependiendo de la casa seleccionada por la usuaria
  - Función para que aparezca mensaje si la busqueda por nombre no coincide con ningún personaje
  - Función con el filtro para poder buscar por nombre los personajes
  - UseLocation: hook que personaliza la url, en este caso con el id de cada personaje. Combinado con el matchPath que compara enlaces.
  - Routes, Route: se ha trabajado con el componente que nos sirve para poder crear rutas y se asegura de renderizar sólo el componente asociado. Dentro de cada route, se ha puesto el componente, dejando el documento App lo más limpio posible

CharacterList.jsx:
  - Función para pintar la lista de personajes con map, importando el componente CharacterCard

CharacterCard.jsx:
  - Petición de los datos que nos interesa mostrar de cada personaje al cargar la página
  - Link: componente para crear enlazes que naveguen dentro del proyecto. En este caso, cada enlaze se crea con el id de cada personaje
  - Condicionles: para que si no hay imagen se muestre una genèrica y para que el dato se pinte en español

Filters.jsx:
  - Formulario que continene los dos filtros (Character y House)
  - Formulario con un evento onSubmit para evitar limpiar los campos si se recarga la página

FilterCharacter.jsx:
  - Input tipo texto para que la usuaria pueda buscar a los personajes
  - Input con un evento onChange, para que cuando la usuaria escriva en el input, le aparezcan los personajes
  - Input controlado con el value
  - Span: en el caso que no coincida el valor del input, salga el mensaje definidio en App

FilterHouse:
  - Select con 4 options
  - Select con un evento onChange que va a pintar la lista de los personajes dependiendo de la casa seleccionada
  - Select controlado con el value

CharacterDetail.jsx:
  - Página que se abre si se clica encima de un personaje (vinculado con el link de CharacterCard)
  - Return con operador ternario, para si se recarga la página siga saliendo la tarjeta (sólo funciona con la casa Gryffindor, en desarrollo las otras 3 casas) y si el enlace no coincide, salga un mensaje
  - Article con más datos que si piden a la API y que amplian la información de cada personaje. Los datos que devuelven información en inglés tienen un operador ternario para que los pinte en español

**Services**
API.js:
  - Función con la petición de los datos a la API
  - Petición con parámetro para que se pinten la lista dependiendo de la casa seleccionada por la usuária
  - Función sort() para que el array de los personajes se ordene alfabéticamente

**SCSS**
  - Cada componente tiene su fichero SCSS, importado y con el mismo nombre
  - En la maquetación se ha utilitzado tanto flex como grid
  - Mediaqueries: en tablet los personajes se ponen en dos columnas, en desktop en tres
