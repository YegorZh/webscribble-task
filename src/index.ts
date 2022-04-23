import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './styles/index.scss';

setTimeout(function () {
  document.body.className = '';
}, 200);

const AddListenerExpandOnClick = (className: string) => {
  document.querySelectorAll(`.${className}`).forEach((element) => {
    element.addEventListener('click', () => {
      element.querySelector(`.${className}-content`)?.classList.add('expanded');
    });
    element.addEventListener('click', () => {
      element.querySelector(`.${className}-content`)?.classList.add('expanded');
    });
  });
};

const classList = [
  'header__top-item-dropdown',
  'header__main-nav-item--dropdown',
];

classList.forEach((className) => AddListenerExpandOnClick(className));
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  document.querySelectorAll('.expanded').forEach((expandElement) => {
    const element = expandElement as HTMLElement;
    let isValid = false;
    classList.forEach((className) => {
      if (target.closest(`.${className}`)) isValid = true;
    });
    if (
      !isValid ||
      (isValid &&
        !target.contains(element) &&
        target.closest('.expanded') !== element)
    )
      element.classList.remove('expanded');
  });
});
