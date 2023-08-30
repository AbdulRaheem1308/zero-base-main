import React, { useState } from "react";
import { Button, Picker, Space } from "antd-mobile";
import { DownOutline } from "antd-mobile-icons";
import Block from "components/block";
import Error from "components/error";
import { getStyle } from "components/tailwind";

const DefaultSelect = (props) => {
  const [visible, setVisible] = useState(false);
  const { item, field } = props;

  const { value, onChange } = field || {};
  const { theme = "", label = "", tooltip = "", options = {} } = item || {};

  const onClick = () => setVisible(true);
  const onClose = () => setVisible(false);
  const onConfirm = (val, extend) => onChange(extend.items[0].label);
  return (
    <Block
      title={label}
      tooltip={tooltip}
      blockClassName="pickerBlock"
      titleClassName="pickerTitle"
      style={getStyle(theme)}
    >
      <Space direction="vertical" block>
        <Button className="pickerButton" onClick={onClick}>
          <Space justify="between" style={{ width: "100%" }}>
            <span>{value ? value : "Please Select"}</span>
            <DownOutline
              style={{ color: "black", fontSize: "20px", marginRight: "16px" }}
            />
          </Space>
        </Button>
      </Space>
      <Picker
        style={{
          "--item-height": "44px",
        }}
        columns={[options]}
        visible={visible}
        onClose={onClose}
        value={[value]}
        onConfirm={onConfirm}
        confirmText={<Button className="doneButton">Done</Button>}
        cancelText={<Button className="cancelButton">Cancel</Button>}
        mouseWheel={true}
      />
      <Error {...props} />
    </Block>
  );
};

export default DefaultSelect;
