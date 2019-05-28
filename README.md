# WhatMovieApp
## Introduction

For this project we wanted to make an application that gives you an overview over movies and TV show, and allows you to customize your own watch list. This is only available as an application for iSO and android. Our goal is to advance this application so it can be personlized to you need, such as what movies goes the cinemas near you, it should be able to recommed things to you based previous likes, and perhaps allow you to dicuss with others that have seen it. This project will be complete indepentent from movie studios and thier businesses. No one will not be able to promote thier films or TV shows on here, or in anyway effect what you are recommended. 

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
