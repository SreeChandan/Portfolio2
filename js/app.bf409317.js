(function(t){function e(e){for(var c,i,a=e[0],s=e[1],p=e[2],f=0,u=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],c=!0,a=1;a<o.length;a++){var s=o[a];0!==n[s]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var c={},n={app:0},r=[];function i(e){if(c[e])return c[e].exports;var o=c[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=c,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(o,c,function(e){return t[e]}.bind(null,c));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"10ab":function(t,e,o){t.exports=o.p+"img/html-5.9c8e1cea.svg"},"21f5":function(t,e,o){t.exports=o.p+"img/sass.e2c86a27.svg"},3535:function(t,e,o){t.exports=o.p+"img/tictactoe.fc455705.png"},"387e":function(t,e,o){t.exports=o.p+"img/github.28b8e8cf.svg"},"3a19":function(t,e,o){t.exports=o.p+"img/profile.d24f9065.jpg"},"3c64":function(t,e,o){t.exports=o.p+"img/javascript.61ed8b05.svg"},"3e55":function(t,e,o){t.exports=o.p+"img/Connect4.1d7dd4c8.png"},"41d0":function(t,e,o){},"5e49":function(t,e,o){t.exports=o.p+"img/typescript.3de182d2.svg"},9342:function(t,e,o){t.exports=o.p+"img/fiverr.3846a592.svg"},"9a4f":function(t,e,o){t.exports=o.p+"img/figma.80505242.svg"},a3df:function(t,e,o){t.exports=o.p+"img/twitter.f536b6fb.svg"},be3b:function(t,e,o){t.exports=o.p+"img/Calculator.7f137983.png"},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23"),n=(o("99af"),o("d81d"),o("2909")),r=Object(c["b"])({name:"App",setup:function(t){var e={logoVue:o("cf05"),profile:o("3a19"),logFigma:o("9a4f"),logoJavaScript:o("3c64"),logoTypeScript:o("5e49"),logoHtml5:o("10ab"),logoCss3:o("fe58"),logoSass:o("21f5"),logoTwitter:o("a3df"),logoGithub:o("387e"),logoFiverr:o("9342"),projectTictactoe:o("3535"),projectConnect4:o("3e55"),projectCalculator:o("be3b"),project2048Game:o("d45f")};console.log(e);var r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{section:[],title:[],content:[]},r=function(t){var e=o[t];return e||[]};return Object(c["c"])("section",{class:["vertical","titledContent"].concat(Object(n["a"])(r("section")))},[Object(c["c"])("p",{class:["title"].concat(Object(n["a"])(r("title")))},t),Array.isArray(e)?e.map((function(t){return Object(c["c"])("string"===typeof t?"p":"div",{class:["content"].concat(Object(n["a"])(r("content")))},t)})):Object(c["c"])("string"===typeof e?"p":"div",{class:["content"].concat(Object(n["a"])(r("content")))},e)])},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(c["c"])("div",{class:["img-container"].concat(Object(n["a"])(e))},Object(c["c"])("img",{src:t}))},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.logoVue,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Project Name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"project description project description project description project description project description project description project description project description project description project description";return Object(c["c"])("section",{class:["vertical","project-showcase-card"]},[i(t),r(o,n)])},s=[Object(c["c"])("section",{class:["bio"]},[r("Sree Chandan",["Front-end developer, UI/UX designer, freelancer","I am a self learner."]),i(e.profile)]),r("Projects Showcase: Vue3",Object(c["c"])("section",[a(e.projectTictactoe,"Tictactoe","It only has been a month since vue 3 was released. I wanted to learn it. So this is a simple implementation of tictactoe. No computer AI. Only player vs player."),a(e.projectConnect4,"Connect4","tictactoe was too simple to use composition API so I was in search of a bit more complex tasks. So this is a simple implementation of Connect4. No computer AI. Only player vs player."),a(e.projectCalculator,"Calculator","At this point I wanted to get better at css a bit and learn css animations for hover effects. Also I had to figure out how to show ascii characters in web for that backspace button. That was something."),a(e.project2048Game,"2048 Game","Its a 2048 game.")]),{section:["projects-showcase"]}),r("My tech stack",[r("Languages",Object(c["c"])("section",[i(e.logoJavaScript,["object-fit-contain"]),i(e.logoTypeScript,["object-fit-contain"]),i(e.logoHtml5,["object-fit-contain"]),i(e.logoCss3,["object-fit-contain"]),i(e.logoSass,["object-fit-contain"])])),r("Frameworks & Tools",Object(c["c"])("section",[i(e.logoVue,["object-fit-contain"]),i(e.logFigma,["object-fit-contain"])]))],{section:["tech-stack"]}),r("Socials",Object(c["c"])("section",[Object(c["c"])("a",{href:"https://twitter.com/sreechandan98",target:"_blank"},i(e.logoTwitter,["object-fit-contain"])),Object(c["c"])("a",{href:"https://github.com/SreeChandan",target:"_blank"},i(e.logoGithub,["object-fit-contain"])),Object(c["c"])("a",{href:"https://www.fiverr.com/karmakast",target:"_blank"},i(e.logoFiverr,["object-fit-contain"]))]),{section:["socials"]})];return function(){return Object(c["c"])("div",{id:"theme-default",class:["layout-handler"]},Object(c["c"])("div",{class:"app-content"},s))}}});o("41d0");Object(c["a"])(r).mount("#app")},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d45f:function(t,e,o){t.exports=o.p+"img/2048Game.f04e46a2.png"},fe58:function(t,e,o){t.exports=o.p+"img/css-3.8aa55110.svg"}});
//# sourceMappingURL=app.bf409317.js.map