function changeMode(size, weight, transform, background, color) {
    return function () {
      document.documentElement.style['font-size'] = size;
      document.documentElement.style['font-weight'] = weight;
      document.documentElement.style['text-transform'] = transform;
      document.documentElement.style['background-color'] = background;
      document.documentElement.style['color'] = color;
    };
  }

  function main() {
    // Crear los modos
    const spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');

    // Crear párrafo
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Botón Spooky
    const buttonSpooky = document.createElement('button');
    buttonSpooky.innerHTML = 'Spooky';
    buttonSpooky.onclick = spooky;
    document.body.appendChild(buttonSpooky);

    // Botón Dark mode
    const darkButton = document.createElement('button');
    darkButton.innerHTML = 'Dark mode';
    darkButton.onclick = darkMode;
    document.body.appendChild(darkButton);

    // Botón Scream mode
    const screamButton = document.createElement('button');
    screamButton.innerHTML = 'Scream mode';
    screamButton.onclick = screamMode;
    document.body.appendChild(screamButton);
  }

  // Llamar a main para que corra al cargar
  main();
