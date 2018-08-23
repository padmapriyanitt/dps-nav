//let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./components/nav-container";

let _habitat = habitat(Widget);
_habitat.render({
  selector: '#test',
  clean: true
});

export class DPSNavigation {
   
  static init(options) {
    let _habitat = habitat(Widget);
    _habitat.render({
      selector: `[id=${options.id}]`,
      clean: true
    });
   }
}



