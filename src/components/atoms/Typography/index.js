import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const classes = {
  type: {
    h1: "lg:text-h1 text-h2",
    h2: "lg:text-h2 text-h3",
    h3: "lg:text-h3 text-h4",
    h4: "lg:text-h4 text-h5",
    h5: "text-h5",
    p: "text-p",
  },
};

const Typography = forwardRef(
  ({ children, type, className, style, ...props }, ref) => {
    let Typography = `${type}`;
    if (Typography === "custom") {
      Typography = "p";
    }
    return (
      <Typography
        ref={ref}
        style={style}
        className={clsx(
          `
          ${classes.type[type]}
          ${className}
          `
        )}
        {...props}
      >
        {children}
      </Typography>
    );
  }
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: "",
};

export default Typography;
