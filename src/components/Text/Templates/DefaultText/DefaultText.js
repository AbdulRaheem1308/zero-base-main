import React from "react";
import { Input } from "antd-mobile";
import Block from "components/block";
import Error from "components/error";
import { getStyle } from "components/tailwind";

const DefaultText = (props) => {
  const { name, item, field, error } = props;
  const { theme = "", tooltip = "", label = "", placeholder = "" } = item || {};
  const { value, onChange } = field;

  return (
    <Block
      title={label}
      tooltip={tooltip}
      blockClassName="inputBlock"
      titleClassName="inputTitle"
      style={getStyle(theme)}
    >
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && error[name] && error[name].message && "inputError"}
      />
      <Error {...props} />
    </Block>
  );
};

export default DefaultText;
