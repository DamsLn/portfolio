import Alpine from 'alpinejs';
import burgerMenu from './modules/burger_menu';

window.Alpine = Alpine;

Alpine.data('burgerMenu', burgerMenu);

Alpine.start();