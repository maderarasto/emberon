import {EmptyObject} from "./utils";

export default class Component {
  /**
   * Initializes a component with props and empty state.
   *
   * @param {SparkJS.Props} props
   */
  constructor(props) {
    this.props = props;
    this.state = EmptyObject
  }

  /**
   * Sets a new state.
   *
   * @param {Record<string, any>} state
   */
  setState(state) {
    this.state = state;
    $app.onStateChanged(this);
  }

  /**
   * Renders component as JSX structure.
   *
   * @returns {SparkJS.RenderResult}
   */
  render() {
    return null;
  }

  /**
   * Hook is triggered when component is mounted into DOM.
   */
  async mounted() {}

  /**
   * Hook is triggered when application is resumed into component.
   */
  async resumed() {}

  /**
   * Hook is triggered when component is re-rendered.
   */
  async updated() {}

  /**
   * Hook is triggered before component is destroyed.
   */
  async destroyed() {}
}