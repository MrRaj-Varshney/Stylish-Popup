const button = document.getElementById('openBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

button.addEventListener('click', () => {
  popup.classList.add('show');
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  popup.classList.remove('show');
  overlay.style.display = 'none';
  button.focus();
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
  overlay.style.display = 'none';
  button.focus();
});
