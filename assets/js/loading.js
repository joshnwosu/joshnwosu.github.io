// pause all animations until website fully loaded
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('js-loading');
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', showPage, false);

  function showPage() {
    document.body.classList.remove('js-loading');
    document.body.style.overflow = 'auto';
    document.querySelector('.time-line').classList.remove('hidden');
  }
})