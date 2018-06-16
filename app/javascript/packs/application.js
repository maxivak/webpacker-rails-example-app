/* eslint no-console:0 */

//console.log('Hello World from Webpacker')


// jquery

import $ from 'jquery'
global.$ = $
global.jQuery = $



// jquery-ujs
import {} from 'jquery-ujs';


// jquery-ui
import 'jquery-ui';


// bootstrap
import 'bootstrap/dist/js/bootstrap';



//
$.widget.bridge('uitooltip', $.ui.tooltip);
$.widget.bridge('uibutton', $.ui.button);




//
require.context('../images/', true, /\.(gif|jpg|png|svg)$/i)


