/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var interval = false;
	var userId = 0;
	var conversations = [];

	self.onmessage = function (e) {

	    if (!interval) {
	        userId = e.data.userId;
	        interval = setInterval(function () {
	            return checkForNewConversations(userId);
	        }, 10000);
	    } else {
	        clearInterval(interval);
	        interval = setInterval(function () {
	            return checkForNewConversations(userId);
	        }, 10000);
	    }
	};

	function checkForNewConversations(userId) {

	    fetch("/api/users/" + userId + "/conversations/").then(function (response) {
	        return response.json();
	    }).then(function (conversations) {

	        var newConversations = conversations;
	        console.log(conversations);
	        if (!conversations.equals(newConversations)) postMessage({ conversations: newConversations });

	        conversations = newConversations;
	    });
	}

/***/ }
/******/ ]);