const burger = () => {
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header');

  burger.addEventListener('click', () => {
    header.classList.toggle('header--open');
    burger.classList.toggle('burger--active');
  });

  header.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      header.classList.remove('header--open');
      burger.classList.remove('burger--active');
    }
  });
};

export default burger;

