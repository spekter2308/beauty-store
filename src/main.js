/*Main files*/
require("./css/main.less")
require("./index.html")


/* libraries */
require("../node_modules/bootstrap-4-grid/css/grid.min.css")
require("../node_modules/font-awesome/css/font-awesome.min.css")
require("../node_modules/hamburgers/dist/hamburgers.css")
require("../node_modules/jquery.mmenu/dist/jquery.mmenu.all.js")
require("../node_modules/jquery.mmenu/dist/jquery.mmenu.all.css")

import $ from 'jquery';                 /* jquery in webpack 4 */
    import jQuery from 'jquery';
    window.$ = jQuery;


/* Other files */
require('./js/mmenu.js')
