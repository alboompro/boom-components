/* eslint-disable react/no-string-refs */
/* eslint-disable global-require */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Portal from "../../shared/portal";

import {
  SelectContainer,
  Label,
  SelectContent,
  SelectItem,
  OptionContainer,
  OptionScroll,
  Option,
  DropdownBackdrop,
  Placeholder,
  ActionsContainer
} from "./styles";

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
    const { manualClose } = this.props;

    this.setSelect();

    manualClose && manualClose(this.closeDropdown);
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
    const { roundedBorder } = this.props;
    document.removeEventListener("keydown", this.keyDownEvents);

    if (roundedBorder) {
      this.getSelectRef().style.borderRadius = `${roundedBorder}px`;
    }

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

  selectOption = onClick => {
    if (onClick) {
      onClick();
    } else {
      const { options, onChange, autoUpdate } = this.props;
      const { hovered } = this.state;

      if (autoUpdate) {
        this.setState({
          selected: hovered
        });
      }

      onChange && onChange(options[hovered]);
    }

    this.closeDropdown();
  };

  // eslint-disable-next-line consistent-return
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

  getSelectRef = () => {
    const { selectItem } = this.refs;
    return selectItem.refs ? selectItem.refs.selectItem : selectItem;
  };

  renderDropdown = () => {
    const {
      dropdownStyle,
      dropdownClassName,
      options,
      optionsStyle,
      target,
      actions,
      roundedBorder,
      dropdownDirection,
      selectMaxHeight,
      zIndex
    } = this.props;

    const selectRef = this.getSelectRef();
    const { selected, hovered } = this.state;
    const {
      width,
      top,
      bottom,
      left,
      height
    } = selectRef.getBoundingClientRect();
    const scope = typeof window === "undefined" ? global : window;

    let positionTop = top + scope.scrollY + height;
    const positionLeft = left + scope.scrollX;

    const targetDOM = document.querySelector(target);
    let border = "top";
    const borderRadius = {
      bottom: `0 0 ${roundedBorder}px ${roundedBorder}px`,
      top: `${roundedBorder}px ${roundedBorder}px 0 0`
    };

    if (targetDOM) {
      const positionTarget = targetDOM.getBoundingClientRect();
      const heightItem =
        (optionsStyle && optionsStyle.height.match(/^\d+/)[0]) || 30;
      const optionsHeight =
        (((actions && actions.length) || 0) + options.length) * heightItem;

      const topDistance = top - positionTarget.top;
      const bottomDistance = positionTarget.bottom - bottom;

      if (dropdownDirection) {
        if (dropdownDirection === "top") {
          positionTop = top - optionsHeight - 1;
          border = "bottom";
        } else {
          positionTop = top + height;
        }
      } else {
        // condition is true render select options in top select
        // eslint-disable-next-line no-lonely-if
        if (topDistance > bottomDistance && optionsHeight > bottomDistance) {
          positionTop = top - optionsHeight - 1;
          border = "bottom";
        } else {
          positionTop = top + height;
        }
      }

      selectRef.style.borderRadius = borderRadius[border];
    }

    return (
      <Portal node={targetDOM || document.body}>
        <DropdownBackdrop
          zIndex={zIndex}
          onClick={this.closeBackdrop}
          ref="backdrop"
          innerRef="backdrop"
          style={
            !targetDOM ? { height: document.documentElement.scrollHeight } : {}
          }
        >
          <OptionContainer
            className={dropdownClassName}
            roundedBorder={
              roundedBorder && borderRadius[border === "top" ? "bottom" : "top"]
            }
            border={border}
            style={{
              width,
              left: positionLeft,
              top: positionTop,
              ...dropdownStyle
            }}
          >
            <OptionScroll maxHeight={selectMaxHeight}>
              {options.map((item, index) => (
                <Option
                  selected={selected === index}
                  hovered={hovered === index}
                  key={`option-${item.value}`}
                  onClick={() =>
                    !item.selected &&
                    this.selectOption(item.props && item.props.onClick)
                  }
                  onMouseEnter={() =>
                    !item.selected && this.setState({ hovered: index })
                  }
                  onMouseLeave={() =>
                    !item.selected && this.setState({ hovered: null })
                  }
                  multiSelected={item.selected}
                  ref={`optionRef${index}`}
                  innerRef={`optionRef${index}`}
                  style={{ ...optionsStyle }}
                >
                  {React.isValidElement(item) ? item : item.label}
                </Option>
              ))}
            </OptionScroll>
            {actions && (
              <ActionsContainer onClick={this.closeDropdown}>
                {actions.map(action => action)}
              </ActionsContainer>
            )}
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
      showArrow,
      roundedBorder
    } = this.props;
    const { open, selected } = this.state;

    return (
      <SelectContainer className={className}>
        {label && <Label>{label}</Label>}
        <SelectContent>
          <SelectItem
            className={selectClassName}
            roundedBorder={roundedBorder}
            showArrow={showArrow}
            open={open}
            onClick={this.openDropdown}
            ref="selectItem"
            innerRef="selectItem"
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
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      }),
      PropTypes.node
    ])
  ).isRequired,
  /** update type */
  autoUpdate: PropTypes.bool,
  /** actions; you must specify a key to nodes */
  actions: PropTypes.arrayOf(PropTypes.node),
  /** rounded border */
  roundedBorder: PropTypes.number,
  /** choose dropdown direction */
  dropdownDirection: PropTypes.oneOf(["top", "bottom"]),
  /** scroll max height */
  selectMaxHeight: PropTypes.number,
  /** zindex */
  zIndex: PropTypes.number,
  /** close by parent function */
  manualClose: PropTypes.func,
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
  /** target when select is render  */
  target: PropTypes.string,
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
  target: null,
  value: "",
  autoUpdate: true,
  actions: [],
  roundedBorder: 0,
  dropdownDirection: null,
  selectMaxHeight: 210,
  zIndex: 9999,
  manualClose: null
};

export default Select;
