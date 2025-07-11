const body = document.body;
const toggleBtn = document.querySelector('header label');
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('show-sidebar');
});
