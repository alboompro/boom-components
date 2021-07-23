import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = ({
  alt,
  fontSize,
  fullName,
  badge,
  badgePosition,
  size,
  square,
  src
}) => {
  const firstInitial = fullName.split(" ")[0].substr(0, 1);
  const secondInitial = fullName.split(" ")[1].substr(0, 1);
  const initials = (firstInitial + secondInitial).toUpperCase();

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: size,
        height: size,
        borderRadius: square ? "unset" : "50%",
        backgroundColor: "#D467E5",
        color: "#FFFFFF",
        fontSize
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: size,
            height: size,
            borderRadius: square ? "unset" : "50%"
          }}
        />
      ) : (
        initials
      )}
      {badge && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: badgePosition.top,
            right: badgePosition.right,
            bottom: badgePosition.bottom,
            left: badgePosition.left,
            borderRadius: "50%",
            backgroundColor: "#FFFFFF"
          }}
        >
          {badge}
        </div>
      )}
    </div>
  );
};

ProfilePicture.propTypes = {
  /** alternative text describing the image */
  alt: PropTypes.string.isRequired,
  /** component of a badge that have position absolute, need to fill badgePosition */
  badge: PropTypes.element,
  /** defines the top, right, bottom, left of the badge */
  badgePosition: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  /** defines the font size of the initials, example: "16px", "1rem" */
  fontSize: PropTypes.string.isRequired,
  /** if the user does not have a src, his initials will appear */
  fullName: PropTypes.string.isRequired,
  /** size of profile picture, example: "16px", "50%" */
  size: PropTypes.string.isRequired,
  /** whether profile picture should be square */
  square: PropTypes.bool,
  /** url address of the image */
  src: PropTypes.string
};

ProfilePicture.defaultProps = {
  badge: null,
  badgePosition: {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset"
  },
  square: false,
  src: null
};

export default ProfilePicture;
