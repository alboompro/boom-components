/* eslint-disable react/no-string-refs */
/* eslint-disable global-require */
import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  SelectContainer,
  Label,
  SelectContent,
  SelectItem,
  OptionContainer,
  Option,
  DropdownBackdrop,
  Placeholder
} from "./styles";

const reactVersion = parseInt(React.version.split(".")[0]);
let Portal;
if (reactVersion >= 16) {
  const ReactDOM = require("react-dom");
  Portal = ({ children, node }) =>
    ReactDOM.createPortal(children, document.body);
} else {
  // eslint-disable-next-line prefer-destructuring
  Portal = require("react-portal").Portal;
}

export class Select extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      selected: null,
      hovered: null
    };
  }

  componentDidMount() {
    this.setSelect();
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setSelect();
    }
  }

  setSelect = () => {
    const { value, options } = this.props;
    const hoveredItem = options.findIndex(item => item.value === value);
    this.setState({ selected: hoveredItem, hovered: hoveredItem });
  };

  openDropdown = () => {
    const { disabled } = this.props;
    if (!disabled) {
      document.addEventListener("keydown", this.keyDownEvents);
      this.setState({ open: true });
    }
  };

  closeDropdown = () => {
    document.removeEventListener("keydown", this.keyDownEvents);
    this.setState({ open: false });
  };

  changeHoveredItem = event => {
    const { hovered } = this.state;
    const { options } = this.props;
    let newHovered;
    let eventRef;

    if (event === 38) {
      newHovered =
        hovered === 0
          ? (newHovered = options.length - 1)
          : (newHovered = hovered - 1);
      eventRef = "up";
    } else {
      newHovered =
        hovered === options.length - 1
          ? (newHovered = 0)
          : (newHovered = hovered + 1);
      eventRef = "down";
    }
    if (newHovered >= 0) {
      this.setState(
        { hovered: newHovered },
        this.setHoverPosition(newHovered, eventRef)
      );
    }
  };

  setHoverPosition = (hovered, event) => {
    const refItem = this.refs[`optionRef${hovered}`];
    const parentItem = refItem.parentElement;
    const { height } = refItem.getBoundingClientRect();
    const parentHeight = parentItem.getBoundingClientRect().height;

    if (event === "down") {
      const refItemPosition = refItem.offsetTop + height - parentItem.scrollTop;
      if (refItem.offsetTop === 0) {
        parentItem.scrollTop = 0;
      }
      if (refItemPosition > parentHeight) {
        parentItem.scrollTop = refItem.offsetTop + height - parentHeight;
      }
    } else {
      const refItemPosition = refItem.offsetTop - parentItem.scrollTop;
      if (refItem.offsetTop + height === parentItem.scrollHeight) {
        parentItem.scrollTop = parentItem.scrollHeight;
      }
      if (refItemPosition < 0) {
        parentItem.scrollTop = refItem.offsetTop;
      }
    }
  };

  selectOption = () => {
    const { options, onChange } = this.props;
    const { hovered } = this.state;

    this.setState({
      selected: hovered
    });

    onChange && onChange(options[hovered]);
    this.closeDropdown();
  };

  keyDownEvents = e => {
    const { hovered } = this.state;
    e.preventDefault();
    switch (e.keyCode) {
      case 27:
        this.closeDropdown();
        break;
      case 38:
        this.changeHoveredItem(38);
        break;
      case 40:
        this.changeHoveredItem(30);
        break;
      case 13:
        hovered && this.selectOption();
        break;
      default:
        return e;
    }
  };

  closeBackdrop = e => {
    const { backdrop } = this.refs;
    if (e.target === (backdrop.refs ? backdrop.refs.backdrop : backdrop)) {
      this.closeDropdown();
    }
  };

  renderDropdown = () => {
    const {
      dropdownStyle,
      dropdownClassName,
      options,
      optionsStyle
    } = this.props;
    const { selectItem } = this.refs;
    const { selected, hovered } = this.state;
    const { width, top, left, height } = selectItem.getBoundingClientRect();
    const scope = window || global;
    const positionLeft = left + scope.scrollX;
    const positionTop = top + scope.scrollY + height;

    return (
      <Portal>
        <DropdownBackdrop
          onClick={this.closeBackdrop}
          ref="backdrop"
          innerRef="backdrop"
          style={{ height: document.documentElement.scrollHeight }}
        >
          <OptionContainer
            className={dropdownClassName}
            style={{
              width,
              left: positionLeft,
              top: positionTop,
              ...dropdownStyle
            }}
          >
            {options.map((item, index) => (
              <Option
                selected={selected === index}
                hovered={hovered === index}
                onClick={() => this.selectOption()}
                onMouseEnter={() => this.setState({ hovered: index })}
                onMouseLeave={() => this.setState({ hovered: null })}
                ref={`optionRef${index}`}
                innerRef={`optionRef${index}`}
                style={{ ...optionsStyle }}
              >
                {item.label}
              </Option>
            ))}
          </OptionContainer>
        </DropdownBackdrop>
      </Portal>
    );
  };

  render() {
    const {
      className,
      disabled,
      label,
      options,
      placeholder,
      selectClassName,
      selectStyle,
      showArrow
    } = this.props;
    const { open, selected } = this.state;

    return (
      <SelectContainer className={className}>
        {label && <Label>{label}</Label>}
        <SelectContent>
          <SelectItem
            className={selectClassName}
            showArrow={showArrow}
            open={open}
            onClick={this.openDropdown}
            ref="selectItem"
            disabled={disabled}
            style={selectStyle}
          >
            {options[selected] ? (
              options[selected].label
            ) : (
              <Placeholder>{placeholder}</Placeholder>
            )}
          </SelectItem>
        </SelectContent>
        {open && this.renderDropdown()}
      </SelectContainer>
    );
  }
}

/**
 * Basic select field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */

Select.propTypes = {
  /** set className to input */
  className: PropTypes.string,
  /** disable select */
  disabled: PropTypes.bool,
  /** dropdown className */
  dropdownClassName: PropTypes.string,
  /** dropdown style */
  dropdownStyle: PropTypes.object,
  /** set label value */
  label: PropTypes.string,
  /** set onChange function */
  onChange: PropTypes.func,
  /**
   * set array with options value, receive a array width value and label
   * and label and can be a string/number or node
   */
  options: PropTypes.array.isRequired,
  /** options style */
  optionsStyle: PropTypes.object,
  /** set placeholder value */
  placeholder: PropTypes.string,
  /** select className */
  selectClassName: PropTypes.string,
  /** select style */
  selectStyle: PropTypes.object,
  /** set dropdown arrow show */
  showArrow: PropTypes.bool,
  /** set input value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Select.defaultProps = {
  className: null,
  disabled: false,
  dropdownClassName: null,
  dropdownStyle: null,
  label: "",
  onChange: null,
  optionsStyle: null,
  placeholder: "",
  selectClassName: null,
  selectStyle: null,
  showArrow: true,
  value: ""
};

export default Select;
