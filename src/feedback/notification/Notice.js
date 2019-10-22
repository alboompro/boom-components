import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Icon from "../../general/icon";
import { Container, Message, IconContainer } from "./styles";
import { noop } from "../../helpers";

class Notice extends PureComponent {
  state = { visible: false };

  static defaultProps = {
    duration: 5,
    closable: true,
    iconColor: "#000",
    onClose: noop,
    style: {},
    title: ""
  };

  componentDidMount() {
    this.startCloseTimer();
  }

  startCloseTimer = () => {
    const { duration } = this.props;

    setTimeout(() => {
      this.setState({ visible: true });
      if (duration) {
        this.closeTimer = setTimeout(this.close, duration * 1000);
      }
    }, 300);
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  close = () => {
    const { onClose } = this.props;
    this.clearCloseTimer();
    this.setState({ visible: false });

    setTimeout(() => onClose(), 300);
  };

  render() {
    const { closable, iconColor, style, title, message } = this.props;
    const { visible } = this.state;

    return (
      <Container visible={visible} style={style}>
        {closable && (
          <IconContainer onClick={this.close}>
            <Icon
              kind="regular"
              group="interface-essential"
              category="form-validation"
              file="close.svg"
              size="14"
              color={`${iconColor || "#212121"}`}
            />
          </IconContainer>
        )}
        {title}
        <Message>{message}</Message>
      </Container>
    );
  }
}

Notice.propTypes = {
  /** title of notification box */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** content of notification box */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** time in seconds before notificaiton is closed. If it's set to NULL notification will never be closed automatically. */
  duration: PropTypes.number,
  /** callback when notification is close */
  onClose: PropTypes.func,
  /** Style notification */
  style: PropTypes.object,
  /** show close button */
  closable: PropTypes.bool,
  /** color icon close */
  iconColor: PropTypes.string
};

export default Notice;
