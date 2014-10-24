// ==UserScript==
// @name        hideSideBar
// @namespace   aland
// @description Hide the related and hot questions which distract me
// @include     http://stackoverflow.com/*
// @include     http://serverfault.com/*
// @include     http://superuser.com/*
// @include     http://*.stackexchange.com/*
// @version     2014-10-24
// @grant       none
// ==/UserScript==

// may be a bit OTT, could be nice to show linked & related but just hide 'hot' questions?
document.getElementById('sidebar').style.display = 'none';