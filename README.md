# WhatMovieApp
## Setup
Intsall node, cordova and framework7

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