import burger from "./modules/burger.js";
// import dynamicAdapt from "./modules/dynamicAdapt";
// import slider from "./modules/slider";
import toSwitchTabs from './modules/tabs.js'; 
// import popup from "./modules/popup";
// import toggleButton from "./modules/toggleBtn";
// import calculator from "./modules/calculator";
// import maskPhone from "./modules/maskPhone";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // dynamicAdapt(); 
    burger();
    // slider();
    toSwitchTabs(); 
    // toSwitchTabs(".formula__item.tab-menu__item ", ".formula__wrapper-content.panel");
    // popup(); 
    // toggleButton(".slider__toggle.toggle-btn", ".slider__speedometer");
    // toggleButton(".formula__toggle.toggle-btn.toggle-btn--white", ".formula__tabs");
    // calculator(); 
    // maskPhone();
    console.log('js подключен');
});


