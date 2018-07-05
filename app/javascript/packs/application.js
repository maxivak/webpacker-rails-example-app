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


//
//$.widget.bridge('uitooltip', $.ui.tooltip);
//$.widget.bridge('uibutton', $.ui.button);


// bootstrap
import 'bootstrap/dist/js/bootstrap';




//
require.context('../images/', true, /\.(gif|jpg|png|svg)$/i)


