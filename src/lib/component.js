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
   * A hook is triggered when component is mounted into DOM.
   */
  async mounted() {}

  /**
   * a hook is triggered when application is resumed into component.
   */
  async resumed() {}

  /**
   * A hook is triggered when component is re-rendered.
   */
  async updated() {}

  /**
   * A hook is triggered before component is destroyed.
   */
  async destroyed() {}
}