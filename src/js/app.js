import Alpine from 'alpinejs';
import burgerMenu from './modules/burger_menu';
import modal from './modules/modal';
import router from './modules/router';

window.Alpine = Alpine;

Alpine.data('burgerMenu', burgerMenu);
Alpine.data('modal', modal);
Alpine.data('router', router);

Alpine.start();