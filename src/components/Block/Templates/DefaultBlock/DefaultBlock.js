import React from "react";
import PropTypes from "prop-types";
import { DefaultTooltip as Tooltip } from "components/Tooltip/Templates/DefaultTooltip";

const DefaultBlock = (props) => {
  const {
    title,
    padding,
    background,
    children,
    blockClassName,
    titleClassName,
    childrenClassName,
    variant,
    tooltip,
  } = props;
  return (
    <div variant={variant} className={`${blockClassName} `}>
      {title && (
        <div className={`${titleClassName} `}>
          {title}
          <div
            style={{ marginLeft: "4px", display: "flex", alignItems: "center" }}
          >
            {tooltip && <Tooltip />}
          </div>
        </div>
      )}
      {children && (
        <div
          className={childrenClassName}
          style={{
            padding: padding,
            background: background,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

DefaultBlock.defaultProps = {
  title: "",
  padding: "",
  background: "",
  blockClassName: "",
  titleClassName: "",
  childrenClassName: "",
  tooltip: true,
};

DefaultBlock.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  blockClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  childrenClassName: PropTypes.string,
};

export default DefaultBlock;
