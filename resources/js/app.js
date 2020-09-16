require('./bootstrap');

window.Vue = require('vue');

//Requiring vue-kompo after Vue has been set
require('vue-kompo');

//Requiring Kompo optional components
require('kompo-ckeditor')
require('kompo-googlemaps')
require('kompo-trix')

//Booting the app!
const app = new Vue({ el: '#app' });
