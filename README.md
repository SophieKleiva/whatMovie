# WhatMovieApp
## Setup
### Installation
Before you make the project you need to install [node.js](https://nodejs.org/en/).

After installing node.js, make sure you have globally installed Cordova (may require "sudo"):
```
$ npm install -g cordova
```

Then install Framework7 CLI (may require "sudo"):
```
$ npm install -g framework7-cli
```
If you have issues with installation related to access errors, you may try to run the command with additional flags:
```
$ npm install -g framework7-cli --unsafe-perm=true --allow-root
```

### Create project

Create a new framework7 project
```
framewotk7 create --ui
```

Create with following options:
```
{
  "type": [
    "cordova"
  ],
  "name": "WhatMovie",
  "framework": "core",
  "template": "tabs",
  "bundler": "webpack",
  "cssPreProcessor": false,
  "customColor": false,
  "iconFonts": true,
  "pkg": "org.evilcorp.whatmovie",
  "platform": [
    "ios",
    "android"
  ],
  "cordovaFolder": "cordova",
  "cwd": "/Users/dagaasmund/Documents/AppProjects/whatMovieApp"
}
```