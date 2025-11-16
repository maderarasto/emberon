import {Spark} from "@/lib/spark";


export {createRef} from './lib/spark';
export Component from './lib/component';

/**
 *
 * @param {SparkJS.AppConfig} config
 */
export function createApp(config) {
  if (typeof config !== "object") {
    throw new Error('Missing necessary options defined in given config.');
  }

  window.$app = new Spark();
  window.$app.setRootFunction(config.render);

  document.addEventListener('DOMContentLoaded', () => {
    $app.mount(config.mountEl);
  });
}