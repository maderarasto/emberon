import {Spark} from "@/spark";

const CORDOVA_DEVICE_READY = 'deviceready';

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

  document.addEventListener(CORDOVA_DEVICE_READY, () => {
    $app.mount(config.mountEl);
  });
}

createApp({
  mountEl: '#app',
  render() {
    return <div>App</div>
  }
})