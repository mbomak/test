'use strict';

import polyfills from './libraries/polyfills';

import './plugins/slick/slick';
import './plugins/popup/jquery.popup';
import './plugins/validate/jquery.validate.min';

import 'components/tabs/tabs';
import 'components/slider/slider';
import 'components/popup/popup';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});
