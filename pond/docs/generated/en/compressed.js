// Automatically generated file.  Do not edit!
 // This version is modified by viet1pro, Komaz from MIS!

'use strict';/*

 Copyright 2013 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var e=Number,f,g=window.location.search.match(/[?&]level=([^&]+)/);f=g?decodeURIComponent(g[1].replace(/\+/g,"%20")):"NaN";e(f);if(!h){var h,k="";"undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent&&(k=navigator.userAgent);var l=0==k.indexOf("Opera");h={l:{g:"ScriptEngine"in window},i:l,h:!l&&-1!=k.indexOf("MSIE"),j:!l&&-1!=k.indexOf("WebKit")}}if(!m)var m={};if(!n)var n={};if(!p)var p={};if(!q)var q={};if(!r)var r={};if(!t)var t={};/*

 Copyright 2014 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function u(b){b=b.currentTarget;var a=document.getElementById(b.id+"-content"),c="zippy-content-expanded"==a.className;b.className="zippy-header-"+(c?"collapsed":"expanded");a.className="zippy-content-"+(c?"collapsed":"expanded");a.style.maxHeight=c?0:a.scrollHeight+"px"}
window.addEventListener("load",function(){var b=window.location.search.match(/[?&]mode=([^&]+)/);b=b?Number(b[1]):Infinity;var a=b%2?"blocks":"js";document.body.innerHTML='<h1>Pond Documentation</h1><h2 id="pond">Pond</h2><div id="pond-content"><h3>Angles</h3><p>The compass is oriented so that due east (right) is 0 degrees, 90 is north, 180 is west, 270 is south. Angles wrap as expected: -90 is south, 450 is north.</p><p><img src="docs/compass.png" height="145" width="150" style="padding: 0 2em;"></p><h3>Cannon</h3>'+("blocks"==
a?'<p><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51,5.5 v 27 h -36.02 M 83.89,24.3 l 3.68,-2.1 M 193.9,5.5 v 27 h -38.31 M 149.99,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4,10)">);</text><g transform="translate(89.99,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><g transform="translate(156.09,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">70</text></g></g></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">cannon(<i>angle</i>, <i>range</i>)</pre>':"")+"<p>The <code>cannon()</code> function fires a cannonball towards the specified angle and range.  The angle is independent of the direction of the duck. The range can be 0-70 metres, with greater ranges truncated to 70.</p><p>The cannon takes about one second to reload after firing. If <code>cannon()</code> is called during this time, nothing happens."+("js"==a?" <code>cannon()</code> returns <code>true</code> if a cannonball was fired, or <code>false</code> if the cannon is reloading.":
"")+"</p>"+(5<=b?"<h3>Scan</h3>"+("blocks"==a?'<p><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38,5.5 v 27 h -36.02 M 66.76,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.97,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88,10)">)</text><g transform="translate(72.86,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">scan(<i>angle</i>)\nscan(<i>angle</i>, <i>width</i>)</pre>':"")+"<p>The <code>scan()</code> function activates the duck's radar.  This function returns the range to the nearest opponent in the specified direction. The angle is independent of the direction of the duck.  Sunk opponents are not detected.  If there is no opponent in that direction, then <code>Infinity</code> is returned.</p>"+("js"==a?"<p>The second (optional) parameter of <code>scan()</code> specifies the width of the scanning beam.  This can be from 1 degree to 20 degrees.  Advanced players may wish to start scanning with a width of 20 for a fast scan, then progressively decrease the width to get more accuracy.  If not specified, the width is 5. This parameter is only available with JavaScript, not with blocks.</p>":
""):"")+(7<=b?"<h3>Swim</h3>"+("blocks"==a?'<p><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.75 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.8,5.5 v 27 h -36.02 M 69.18,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.39,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.3,10)">);</text><g transform="translate(75.28,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">swim(<i>angle</i>)\nswim(<i>angle</i>, <i>speed</i>)</pre>':"")+"<p>The <code>swim()</code> function starts the duck moving.  The duck will continue moving in the specified direction indefinitely.</p>"+("js"==a?"<p>The second (optional) parameter of <code>swim()</code> specifies the speed. This can be from 0 (stopped) to 100 (fast).  Direction of movement may only be changed if the speed is 50 or less.  If not specified, the speed is 50. This parameter is only available with JavaScript, not with blocks.</p>":
"")+"<p>Crashing into the edges of the pond will damage your duck.  Crashing into other ducks will damage both ducks.  The amount of damage is proportional to your speed.</p>":"")+(9<=b?"<h3>Stop</h3>"+("blocks"==a?'<p><svg height="31" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06 M 81.06,0.5 M 2.69,21.3 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.71,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.6,5)">);</text></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">stop()</pre>':"")+"<p>The <code>stop()</code> function stops the duck from moving.  The duck will take a moment to slow down before stopping completely."+("js"==a?"This is the same as calling <code>swim()</code> with a speed of zero.":"")+"</p>":"")+(9<=b?"<h3>Location</h3>"+("blocks"==a?'<p><svg height="26" width="90"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></svg> &nbsp; <svg height="26" width="90"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getY</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">getX()\ngetY()</pre>':"")+'<p>The <code>getX()</code> and <code>getY()</code> functions return the duck\'s horizontal and vertical positions.  Values are between 0 and 100, starting from the lower-left corner.</p><p><img src="docs/map.png" height="190" width="244" style="padding: 0 2em;"></p>':"")+(11<=b?"<h3>Speed</h3>"+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 89.72 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 89.72 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 89.22 M 89.22,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">speed</text><text class="blocklyText" y="12.5" transform="translate(59.95,5)">(</text><text class="blocklyText" y="12.5" transform="translate(74.83,5)">)</text></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">speed()</pre>':"")+"<p>The <code>speed()</code> function returns the duck's current speed. Values are between 0 (stopped) and 100 (fast).  This function may be used to detect collisions (which instantly stop the duck).</p>":"")+(11<=b?"<h3>Health</h3>"+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 89.72 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 89.72 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 89.22 M 89.22,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">health</text><text class="blocklyText" y="12.5" transform="translate(59.95,5)">(</text><text class="blocklyText" y="12.5" transform="translate(74.83,5)">)</text></g></svg></p>':
"js"==a?'<pre class="pondSpec spec">health()</pre>':"")+"<p>The <code>health()</code> function returns the duck's current health level. Values are between 0 (sunk) and 100 (perfect).  Advanced players may wish to store the health in a variable, then periodically check to see if the health has decreased, thus indicating that the duck is under attack.</p><p>There is no way to repair health.</p>":"")+"</div>"+(3<=b?'\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="logic">Logic</h2><div id="logic-content">'+
(9<=b?"<h3>If</h3>"+("blocks"==a?'<p><svg height="90" width="250"><g><path transform="translate(1,1)" fill="#496684" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 117.64 v 35 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 83.79,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path fill="#5b80a5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 117.64 v 35 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 83.79,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 117.14 M 49.5,35.5 M 21.98,58.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,60.5 H 49.5 M 2.69,82.3 A 7.5,7.5 0 0,1 0.5,77 V 8 M 84.29,5.5 v 26 h -14.5 M 64.19,24.3 l 3.68,-2.1"></path><g class="blocklyIconGroup" display="block" transform="translate(10,5)"><rect class="blocklyIconShape" rx="4" ry="4" height="16" width="16"></rect><path class="blocklyIconSymbol" d="m4.2,7.29 0,1.36 -0.92,0.67 -0.11,0.41 0.9,1.55 0.41,0.11 1.04,-0.45 1.18,0.68 0.12,1.13 0.3,0.3 1.8,0 0.3,-0.29 0.12,-1.13 1.18,-0.68 1.04,0.45 0.4,-0.11 0.9,-1.55 -0.11,-0.41 -0.92,-0.67 0,-1.36 0.92,-0.67 0.11,-0.41 -0.9,-1.55 -0.4,-0.1 -1.04,0.45 -1.18,-0.68 -0.12,-1.13 -0.3,-0.29 -1.8,0 -0.3,0.3 -0.12,1.13 -1.18,0.68 -1.04,-0.45 -0.41,0.11 -0.89,1.55 0.1,0.4z"></path><circle class="blocklyIconShape" r="2.7" cx="8" cy="8"></circle></g><text class="blocklyText" y="12.5" transform="translate(37,10)">if&#160;(</text><text class="blocklyText" y="12.5" transform="translate(93.79,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,65)">}</text></g></svg></p>':
"js"==a?'<pre class="logicSpec spec">if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else {\n  <i>statements</i>\n}</pre>':"")+"<p>If the condition is true, then execute the contained statements. The <code>if</code> may be followed by any number of other <code>else if</code> conditions, and at the end by an optional <code>else</code> condition that executes if none of the previous conditions were true.</p>":
"")+(9<=b?"<h3>Equality</h3>"+("blocks"==a?'<p><svg height="36" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 111.56 v 35 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 30.5,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z M 101.56,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 111.56 v 35 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 30.5,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z M 101.56,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 111.06 M 0.5,34.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 31,5.5 v 26 h -14.5 M 10.9,24.3 l 3.68,-2.1 M 102.06,5.5 v 26 h -14.5 M 81.96,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(40.5,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="40.56"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">==<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g></g></svg></p>':
"js"==a?'<pre class="logicSpec spec">==    !=    &lt;    &lt;=    &gt;    &gt;=</pre>':"")+"<p>These expressions compare two numbers and return <code>true</code> or <code>false</code>. The six available equality operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Equals</td><td><code>5 == 10</code></td><td><code>false</code></td></tr><tr><td>Not equals</td><td><code>5 != 10</code></td><td><code>true</code></td></tr><tr><td>Less than</td><td><code>5 &lt; 10</code></td><td><code>true</code></td></tr><tr><td>Less than or equal</td><td><code>5 &lt;= 10</code></td><td><code>true</code></td></tr><tr><td>Greater than</td><td><code>5 &gt; 10</code></td><td><code>false</code></td></tr><tr><td>Greater than or equal</td><td><code>5 &gt;= 10</code></td><td><code>false</code></td></tr></table><p>Use of <code>!=</code> may be dangerous if the numbers being compared are fractions.  Consider this code that is designed to swim to 50 then stop:</p><pre>while (getY() <b>!=</b> 50) {\n  swim(90"+
("js"==a?", 50":"")+");\n}\nstop();</pre><p>The above code will fail because <code>getY()</code> may be 49.4 on one execution, then 50.6 on the next execution.  Since the value was not seen at exactly 50, the loop continues forever.  Below is better code:</p><pre>while (getY() <b>&lt;</b> 50) {\n  swim(90"+("js"==a?", 50":"")+");\n}\nstop();</pre>":"")+(11<=b?"<h3>And/Or</h3>"+("blocks"==a?'<p><svg height="36" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 114.0 v 35 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 30.5,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z M 104.0,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 114.0 v 35 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 30.5,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z M 104.0,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 113.5 M 0.5,34.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 31,5.5 v 26 h -14.5 M 10.9,24.3 l 3.68,-2.1 M 104.5,5.5 v 26 h -14.5 M 84.4,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(40.5,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="43.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&amp;&amp;<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g></g></svg></p>':
"js"==a?'<pre class="logicSpec spec">&&    ||</pre>':"")+"<p>'And' is represented by the <code>&&</code> operator. It returns <code>true</code> only if both inputs are <code>true</code>. For example this code will only fire the cannon if the range is both greater than 5 and less than 70:</p><pre>if (range &gt; 5 <b>&amp;&amp;</b> range &lt; 70) {\n  cannon(angle, range);\n}</pre><p>'Or' is represented by the <code>||</code> operator. It returns <code>true</code> if either input is <code>true</code>. For example this code will stop if the duck is close to any wall:</p><pre>if (getX() &lt; 10 <b>||</b> getX() &gt; 90 <b>||</b>\n    getY() &lt; 10 <b>||</b> getY() &gt; 90) {\n  stop();\n}</pre>":
"")+"<h3>Booleans</h3>"+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b80a5" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21 M 58.21,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g></g></svg></p>':
"js"==a?'<pre class="logicSpec spec">true    false</pre>':"")+"<p>The value <code>true</code> is mainly used by the while loop to make a loop that executes forever.  The value <code>false</code> is also available.</p></div>":"")+(3<=b?'\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="loops">Loops</h2><div id="loops-content"><h3>While</h3>'+("blocks"==a?'<p><svg height="90" width="250"><g><path transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 116.73 v 35 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 82.87,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 116.73 v 35 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 82.87,5 h -14.5 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 14.5 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 116.23 M 49.5,35.5 M 21.98,58.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,60.5 H 49.5 M 2.69,82.3 A 7.5,7.5 0 0,1 0.5,77 V 8 M 83.37,5.5 v 26 h -14.5 M 63.27,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(92.87,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,65)">}</text></g></svg></p>':
"js"==a?'<pre class="loopsSpec spec">while (<i>condition</i>) {\n  <i>statements</i>\n}</pre>':"")+"<p>Loops will repeat executing the enclosed statements as long as the condition is true.  Thus, the following will fire the cannon west forever:</p><pre>while (true) {\n  cannon(180, 50);\n}</pre><p>Whereas the following will fire the canon west as long as an opponent is in range:</p><pre>while (scan(180"+("js"==a?", 5":"")+") &lt;= 70) {\n  cannon(180, scan(180"+("js"==a?", 5":"")+"));\n}</pre></div>":
"")+'\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="math">Math</h2><div id="math-content"><h3>Number</h3>'+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">0</text></g></g></svg></p>':
"js"==a?'<pre class="mathSpec spec">123</pre>':"")+"<p>Numbers are used for many things, including ranges, angles, and counters. Numbers may be negative (e.g. -360), or fractional (e.g. 3.14159), or very large (e.g. 9007199254740992). There is even a special number called <code>Infinity</code>.</p><p>Do not use thousands separators (e.g. 9,000).</p>"+(11<=b?"<h3>Arithmetic</h3>"+("blocks"==a?'<p><svg height="36" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 20 H 134.31 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 46.15,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z M 124.31,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path fill="#5b67a5" d="m 0,0 H 20 H 134.31 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 46.15,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z M 124.31,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 133.81 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 46.65,5.5 v 27 h -30.15 M 10.9,24.3 l 3.68,-2.1 M 124.81,5.5 v 27 h -30.15 M 89.06,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(56.15,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">+<tspan style="fill: rgb(91, 103, 165);"> \u25be</tspan></text></g><g transform="translate(95.16,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">2</text></g></g><g transform="translate(16.99,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">1</text></g></g></g></svg></p>':
"js"==a?'<pre class="mathSpec spec">+    -    *    /</pre>':"")+"<p>These operators take two numbers and return a single number. The four available arithmetic operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Plus</td><td><code>3 + 4</code></td><td><code>7</code></td></tr><tr><td>Minus</td><td><code>3 - 4</code></td><td><code>-1</code></td></tr><tr><td>Multiply</td><td><code>3 * 4</code></td><td><code>12</code></td></tr><tr><td>Divide</td><td><code>3 / 4</code></td><td><code>0.75</code></td></tr></table>":
"")+(11<=b?"<h3>Trigonometry</h3>"+("blocks"==a?'<p><svg height="36" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 20 H 170.48 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 145.6,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path fill="#5b67a5" d="m 0,0 H 20 H 170.48 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 145.6,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 169.98 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 146.1,5.5 v 27 h -30.15 M 110.34,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(10,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="84.56"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">Math.sqrt<tspan style="fill: rgb(91, 103, 165);"> \u25be</tspan></text></g><text class="blocklyText" y="12.5" transform="translate(94.56,10)">(</text><text class="blocklyText" y="12.5" transform="translate(155.6,10)">)</text><g transform="translate(116.44,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">9</text></g></g></g></svg></p>':
"js"==a?'<pre class="mathSpec spec">Math.<i>operation</i>(<i>number</i>)</pre>':"")+"<p>These functions take a number and return a number. The eight available functions are:</p><table><tr><th>Function</td><th>Example</td><th>Returns</td></tr><tr><td>Square root</td><td><code>Math.sqrt(25)</code></td><td><code>5</code></td></tr><tr><td>Absolute</td><td><code>Math.abs(-25)</code></td><td><code>25</code></td></tr><tr><td>Sine</td><td><code>Math.sin_deg(30)</code></td><td><code>0.5</code></td></tr><tr><td>Cosine</td><td><code>Math.cos_deg(30)</code></td><td><code>0.86</code></td></tr><tr><td>Tangent</td><td><code>Math.tan_deg(30)</code></td><td><code>0.577</code></td></tr><tr><td>Arcsine</td><td><code>Math.asin_deg(0.5)</code></td><td><code>30</code></td></tr><tr><td>Arccosine</td><td><code>Math.acos_deg(0.866)</code></td><td><code>30.003</code></td></tr><tr><td>Arctangent</td><td><code>Math.atan_deg(0.577)</code></td><td><code>29.985</code></td></tr></table><p>Note that these trigonmetric functions are custom to the Pond game and all use degrees.  The standard JavaScript functions use radians.</p>":
"")+(11<=b?"<h3>Random</h3>"+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 132.46 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 132.46 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 131.96 M 131.96,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">Math.random&#160;&#160;(&#160;&#160;)</text></g></svg></p>':
"js"==a?'<pre class="mathSpec spec">Math.random()</pre>':"")+"<p>This function returns a random fraction from 0.0 to 1.0.  To get a random number in a larger range, just multiply it by the maximum value. Here's an example of getting a random angle:</p><pre>var angle = Math.random() * 360;</pre>":"")+"</div>"+(11<=b?'\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="variables">Variables</h2><div id="variables-content"><h3>Assigning</h3>'+("blocks"==a?'<p><svg height="40" width="250"><g><path transform="translate(1,1)" fill="#844966" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 179.29 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 155.21,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path fill="#a55b80" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 179.29 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 155.21,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path class="blocklyPathLight" stroke="#c08ca6" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 178.79 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 155.71,5.5 v 27 h -30.15 M 119.96,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">var</text><g class="blocklyEditableText" transform="translate(40.37,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="60.12"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">name<tspan style="fill: rgb(165, 91, 128);"> \u25be</tspan></text></g><text class="blocklyText" y="12.5" transform="translate(100.49,10)">=</text><text class="blocklyText" y="12.5" transform="translate(165.21,10)">;</text><g transform="translate(126.06,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">0</text></g></g></g></svg></p>':
"js"==a?'<pre class="variablesSpec spec">var <i>name</i> = <i>value</i>;</pre>':"")+"<p>Assigns a value (usually a number) to the named variable. The name of the variable should be something that makes sense, such as <code>range</code> or <code>angle</code>.</p>"+("js"==a?"<p>Note that variable names are case-sensitive, thus <code>angle</code> and <code>Angle</code> are two completely different variables.  Variable names must only use the English letters a-z, and numbers. Variable names may not start with a number.</p><p>The <code>var</code> keyword may be omitted on all but the first assignment, but there is no harm in using it.</p>":
"")+"<h3>Incrementing</h3>"+("blocks"==a?'<p><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#844966" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 157.48 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 133.4,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path fill="#a55b80" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 157.48 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 133.4,5 h -30.15 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 30.15 z"></path><path class="blocklyPathLight" stroke="#c08ca6" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 156.98 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 133.9,5.5 v 27 h -30.15 M 98.15,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(10,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="60.12"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">name<tspan style="fill: rgb(165, 91, 128);"> \u25be</tspan></text></g><text class="blocklyText" y="12.5" transform="translate(70.12,10)">+=</text><text class="blocklyText" y="12.5" transform="translate(143.4,10)">;</text><g transform="translate(104.25,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 28.15 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 27.65 M 27.65,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)"><rect rx="4" ry="4" x="-5" y="0" height="16" width="18.15"></rect><text class="blocklyText" y="12.5">1</text></g></g></g></svg></p>':
"js"==a?'<pre class="variablesSpec spec"><i>name</i> += <i>number</i>;</pre>':"")+"<p>This is a shortcut for adding a number to an existing variable. There is no difference between the following two lines:</p><pre>angle += 10;\nvar angle = angle + 10;</pre><p>Do not use <code>+=</code> on a variable that has not already been defined. If in doubt, assign the variable to 0 at the beginning of the program.</p><h3>Retrieving</h3>"+("blocks"==a?'<p><svg height="26" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#844966" d="m 0,0 H 70.12 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#a55b80" d="m 0,0 H 70.12 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#c08ca6" d="m 0.5,0.5 H 69.62 M 69.62,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="60.12"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">name<tspan style="fill: rgb(165, 91, 128);"> \u25be</tspan></text></g></g></svg></p>':
"js"==a?'<pre class="variablesSpec spec"><i>name</i></pre>':"")+"<p>Retrieves the value (usually a number) that had previously been assigned to the named variable.</p></div>":"")+(11<=b?'\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="functions">Functions</h2><div id="functions-content"><p>TODO</p></div>':"");b=document.getElementsByTagName("h2");a=0;for(var c;c=b[a];a++){var d=document.createElement("img");d.src="../common/1x1.gif";c.insertBefore(d,c.firstChild);
c.className="zippy-header-collapsed";document.getElementById(c.id+"-content").className="zippy-content-collapsed";d=u;if(!c)throw TypeError("Element not found: "+c);"string"==typeof c&&(c=document.getElementById(c));c.addEventListener("click",d,!0);c.addEventListener("touchend",d,!0)}});
