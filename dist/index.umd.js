!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact"),require("font-awesome/css/font-awesome.css"),require("classnames"),require("preact-habitat")):"function"==typeof define&&define.amd?define(["exports","preact","font-awesome/css/font-awesome.css","classnames","preact-habitat"],t):t(e.dpsNav={},e.preact,e.fontAwesome_css,e.classnames,e.habitat)}(this,function(e,t,o,s,a){s=s&&s.hasOwnProperty("default")?s.default:s,a=a&&a.hasOwnProperty("default")?a.default:a;var n=function(e){function o(t){e.call(this,t),this.state={collapsed:!1},this.toggleSideNav=this.toggleSideNav.bind(this)}return e&&(o.__proto__=e),(o.prototype=Object.create(e&&e.prototype)).constructor=o,o.prototype.toggleSideNav=function(){this.setState({collapsed:!this.state.collapsed}),console.log("collapsed:",this.state.collapsed)},o.prototype.render=function(e){return t.h("div",null,"Success")},o}(t.Component);a(n).render({selector:"#test",clean:!0});var r=function(){};r.init=function(e){a(n).render({selector:"[id="+e.id+"]",clean:!0})},e.DPSNavigation=r});
//# sourceMappingURL=index.umd.js.map
