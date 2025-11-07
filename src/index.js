import {Spark} from "@/spark";
import App from "@/App";

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

createApp({
  mountEl: '#app',
  render() {
    return (
      <App />
    )
  }
})