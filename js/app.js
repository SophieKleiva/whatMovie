import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import theMovieDb API Key
import { config } from './apikey.js'

$$(document).on('page:init', '.page[data-name="home"]', function () {
  Framework7.request.json('https://api.themoviedb.org/3/movie/now_playing?api_key=' + config.APIKEY + '&language=en-US&page=1', function (data) {
    var imgUrl = 'https://image.tmdb.org/t/p/w500/';

    data.results.forEach(function(entry) {
      var cardsWrapper = $$('#cards');

      var card = document.createElement('div');
      $$(card).addClass('card card-expandable');
      cardsWrapper.append(card);

      var cardContent = document.createElement('div');
      $$(cardContent).addClass('card-content');
      card.append(cardContent);

      var cardBackground = document.createElement('div');
      $$(cardBackground).attr('style', 'background: url(' + imgUrl + entry.poster_path + ') no-repeat center bottom; background-size: cover; height: 500px');
      cardContent.append(cardBackground);
      
      var closeCard = document.createElement('a');
      $$(closeCard).attr('href', '#');
      $$(closeCard).addClass('link card-close card-opened-fade-in color-white');
      $$(closeCard).attr('style', 'position: absolute; right: 15px; top: 15px');
      cardBackground.append(closeCard);

      var closeCardIcon = document.createElement('i');
      $$(closeCard).addClass('icon f7-icons');
      $$(closeCard).html('close_round_fill');
      closeCard.append(closeCardIcon);

      var cardContentPadding = document.createElement('div');
      $$(cardContentPadding).addClass('card-content-padding');
      cardContent.append(cardContentPadding);

      var cardH2 = document.createElement('h2');
      $$(cardH2).html(entry.title);
      cardContentPadding.append(cardH2);

      var cardP = document.createElement('p');
      $$(cardP).html(entry.overview);
      cardContentPadding.append(cardP);
    });
  });
});

var app = new Framework7({
  root: '#app', // App root element
  id: 'org.evilcorp.whatmovie', // App bundle ID
  name: 'WhatMovie', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,



  // Input settings
  input: {
    scrollIntoViewOnFocus: !!Framework7.device.cordova,
    scrollIntoViewCentered: !!Framework7.device.cordova,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});



// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

