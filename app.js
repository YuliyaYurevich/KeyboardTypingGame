const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function (e) {
  let clicked = e.key.toUpperCase();
  let keyJiggled;
  const random = keys[Math.floor(Math.random() * keys.length)];

  keys.forEach((key) => {
    if (key.classList.contains('jiggle')) {
      keyJiggled = key.dataset.key;

      if (clicked === keyJiggled) {
        key.classList.remove('jiggle');
        random.classList.add('jiggle');
      }
    }
  });
});
