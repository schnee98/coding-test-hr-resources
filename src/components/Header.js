import { appendChildren } from '../utils/nodeUtils.js';

const handleMenuClick = (menu, link) => {
  menu.addEventListener('click', () => {
    window.location.href = link;
  })
}

export default function Header() {
  const header = document.createElement('header');

  const headerLeft = document.createElement('div');
  headerLeft.className = 'header header_left';

  const homeText = document.createElement('span');
  homeText.className = 'menu_name';
  homeText.id = 'menu_home';
  homeText.innerText = 'HOME';
  handleMenuClick(homeText, '/');
  headerLeft.appendChild(homeText);

  const headerRight = document.createElement('div');
  headerRight.className = 'header header_right';

  const signupText = document.createElement('span');
  signupText.className = 'menu_name';
  signupText.id = 'menu_signup';
  signupText.innerText = 'SIGNUP';
  handleMenuClick(signupText, '/signup');
  headerRight.appendChild(signupText);

  appendChildren([headerLeft, headerRight], header);

  return header;
}