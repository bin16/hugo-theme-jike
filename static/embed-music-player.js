(function() {
  window.togglePlay = (id) => {
    const audio = document.getElementById(id);
    if (audio) {
      if (audio.paused) {
        audio.play();
        audio.parentElement.classList.remove('paused');
      } else {
        audio.pause();
        audio.parentElement.classList.add('paused');
      }
    }
  }
  document.querySelectorAll('audio').forEach(el => {
    el.addEventListener('ended', () => {
      el.parentElement.classList.add('paused');
    });
  });
})();