import Alpine from 'alpinejs';
import burgerMenu from './modules/burger_menu';
import modal from './modules/modal';

window.Alpine = Alpine;

Alpine.data('burgerMenu', burgerMenu);
Alpine.data('modal', modal);

Alpine.start();