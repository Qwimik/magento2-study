// require(['jquery', 'mage/translate'], function ($, $t) {
//     $(document).ready(function () {
//         const translatedStr = $t('Text to translate');
//     })
// });
// або
// define(['jquery'], function ($) {

// });
// define тільки в окремому файлі

define([
    "Magento_Theme/js/dep1",
    "Magento_Theme/js/dep2",
    "Magento_Theme/js/dep3",
], function () {
    console.log("after deps");
});
