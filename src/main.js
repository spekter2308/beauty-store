/*Main files*/
require("./css/main.less")
require("./index.html")


/* libraries */
require("../node_modules/bootstrap-4-grid/css/grid.min.css")
require("../node_modules/font-awesome/css/font-awesome.min.css")
require("../node_modules/hamburgers/dist/hamburgers.css")
require("../node_modules/jquery.mmenu/dist/jquery.mmenu.all.js")
require("../node_modules/jquery.mmenu/dist/jquery.mmenu.all.css")
require("../node_modules/equal-height/dist/jquery.equalHeight.min.js")
require("../node_modules/owl.carousel/dist/assets/owl.carousel.css")
require("../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css")
require("../node_modules/owl.carousel/dist/owl.carousel.min.js")
require("../node_modules/fotorama/fotorama.css")
require("../node_modules/fotorama/fotorama.js")
require("../node_modules/selectize/dist/css/selectize.default.css")
require("../node_modules/selectize/dist/js/standalone/selectize.min.js")


import $ from 'jquery';                 /* jquery in webpack 4 */
    import jQuery from 'jquery';
    window.$ = jQuery;


/* Other files */
require('./js/mmenu.js')
