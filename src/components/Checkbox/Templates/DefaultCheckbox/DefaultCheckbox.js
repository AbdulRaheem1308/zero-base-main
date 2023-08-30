import React from "react";
import { Checkbox } from "antd-mobile";
import Block from "components/block";
import Error from "components/error";
import Tooltip from "components/tooltip";
import { getStyle } from "components/tailwind";

const DefaultCheckbox = (props) => {
  const { item, field, managedCallback } = props;
  const { theme = "", tooltip = "", label = "", action } = item || {};
  const { value, onChange } = field || {};

  const onValueChange = () => {
    if (action) {
      managedCallback({ item });
      return;
    }
    onChange(!value);
  };

  return (
    <Block style={getStyle(theme)}>
      <Checkbox value={value} onChange={onValueChange}>
        {label}
      </Checkbox>
      {tooltip && <Tooltip tooltip={tooltip} title={label} />}
      <Error {...props} />
    </Block>
  );
};

export default DefaultCheckbox;
