import React, { Fragment, Component, Children } from "react";
import PropTypes from "prop-types";
import shallowEqual from "shallowequal";
import { isFragment } from "react-is";
import { noop } from "../../helpers";
import Panel from "./Panel";
import { CollapseWrapper } from "./styles";

function toArray(activeKey) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

class Collapse extends Component {
  constructor(props) {
    super(props);
    const { activeKey, defaultActiveKey } = props;
    let currentActiveKey = defaultActiveKey;
    if ("activeKey" in props) {
      currentActiveKey = activeKey;
    }
    this.state = {
      activeKey: toArray(currentActiveKey)
    };
  }

  /**
   * Only update our component if our state or props changed.
   *
   * @param {Objecct} nextProps next properties to be applied
   * @param {Object} nextState next state to be applied
   * @returns {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  /**
   * When an user clicks on the header of a panel, if we're in accordion
   * mode, we need to check whether is the same header or not. If not,
   * clean the activeKey and set the new one.
   *
   * If we're not in accordion mode, when an user clicks on the header
   * of a panel, we need to check if we're expanding or retracting the
   * panel (we do that by checking the existence of our key in our activeKey array)
   * Then we either add or remove the key from the array.
   *
   * @param {String} key key of the panel which the user clicked
   */
  onClickItem = key => {
    let { activeKey } = this.state;
    const { accordion } = this.props;
    if (accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [...activeKey];
      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    this.setActiveKey(activeKey);
  };

  /**
   * Returns a new child with our collapse logic.
   *
   * @param {ReactNode} child a children panel
   * @param {Number} index map iterator
   * @returns {ReactNode} cloned element with our logic applied.
   */
  getNewChild = (child, index) => {
    if (!child) return null;
    const { activeKey } = this.state;
    const {
      accordion,
      expandIcon,
      expandIconPosition,
      expandOnlyInIcon
    } = this.props;
    // if there is no key provided, use the panel order as default key
    const key = child.key || String(index);
    const { header, disabled } = child.props;
    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    const props = {
      key,
      panelKey: key,
      header,
      isActive,
      accordion,
      children: child.props.children,
      onItemClick: disabled ? null : this.onClickItem,
      expandOnlyInIcon,
      expandIcon,
      expandIconPosition
    };

    return React.cloneElement(child, props);
  };

  /**
   * This will map each of children passed and manipulete it in
   * order to add our collapse logic.
   */
  getItems = () => {
    const { children } = this.props;
    // in case our list is inside a fragment, we need to get the children of that fragment.
    // if not, it'll break design.
    const childList = isFragment(children) ? children.props.children : children;
    const newChildren = Children.map(childList, this.getNewChild);

    // If it's a fragment, remember to keep it as a fragment, consistency.
    if (isFragment(children)) {
      return <Fragment>{newChildren}</Fragment>;
    }
    return newChildren;
  };

  /**
   * Updates our activeKey and invoke the provided
   * callback (if any)
   *
   * @param {String||Array} key New activeKey
   */
  setActiveKey = activeKey => {
    const { accordion, onChange } = this.props;
    if (!("activeKey" in this.props)) {
      this.setState({ activeKey });
    }
    onChange(accordion ? activeKey[0] : activeKey);
  };

  render() {
    const { accordion, className } = this.props;
    return (
      <CollapseWrapper
        className={className}
        role={accordion ? "tablist" : null}
      >
        {this.getItems()}
      </CollapseWrapper>
    );
  }
}

Collapse.propTypes = {
  /** Se true, o comportamento do Collapse será como Accordion */
  accordion: PropTypes.bool,
  /** Key do painel ativo */
  // eslint-disable-next-line react/require-default-props
  activeKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** Classes para customização do estilo do Collapse */
  className: PropTypes.string,
  /** Key do painel que inicia como ativo */
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** Função utilizada para customizar o icone de expansão */
  expandIcon: PropTypes.func,
  /** Define a posição do icone de expansão */
  expandIconPosition: PropTypes.oneOf(["left", "right"]),
  /** Define se o painel é expandido apenas ao clicar no icone */
  expandOnlyInIcon: PropTypes.bool,
  /** Função de callback */
  onChange: PropTypes.func
};

Collapse.defaultProps = {
  accordion: false,
  className: "",
  defaultActiveKey: null,
  expandIcon: null,
  expandIconPosition: "left",
  expandOnlyInIcon: false,
  onChange: noop
};

Collapse.Panel = Panel;

export default Collapse;
