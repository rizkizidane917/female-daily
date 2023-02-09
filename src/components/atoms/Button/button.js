import React, { forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const classes = {
  base: "inline-flex items-center gap-1 rounded leading-6 font-medium",
  disabled: "border-transparent bg-secondary text-gray-100 cursor-not-allowed",
  size: {
    normal: "px-6 py-4 text-h2",
    medium: "px-6 py-3 text-h3",
    small: "px-5 py-2 text-h5",
  },
  variant: {
    primary: "bg-primary hover:bg-primary/90 text-white",
    custom: "",
  },
};

const Button = forwardRef(
  ({ children, type, className, disabled, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={clsx(
          `
          ${classes.base}
          ${classes.size[size]}
          ${disabled ? "" : classes.variant[variant]}
          ${disabled && classes.disabled}
          ${className}
          `
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
  variant: PropTypes.oneOf(["primary", "custom"]),
  size: PropTypes.oneOf(["normal", "medium", "small"]),
  classes: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  variant: "primary",
  disabled: false,
  className: "",
};

export default Button;

{
  /* <button
on
className="text-h3 bg-primary text-white px-6 py-2 rounded font-light"
>
See My Matches
</button> */
}
