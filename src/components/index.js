import React from "react";

// Components Cleanup
import { Button } from "./Button";
import { Header } from "./Header";
import { Fieldset } from "./Fieldset";
import { Checkbox } from "./Checkbox";
import { Card } from "./Card";
import { Tab } from "./Tab";
import { Wallet } from "./Wallet";
import { Modal } from "./Modal";
import { Radiobox } from "./Radiobox";
import { List } from "./List";
import { Box } from "./Box";
import { Result } from "./Result";
import { Label } from "./Label";
import { Text } from "./Text";
import { Select } from "./Select";
import { Hook } from "./Hook";

const Components = {
  button: (props) => <Button {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  fieldset: (props) => <Fieldset {...props} />,
  label: (props) => <Label {...props} />,
  radiobox: (props) => <Radiobox {...props} />,
  select: (props) => <Select {...props} />,
  text: (props) => <Text {...props} />,
  hook: (props) => <Hook {...props} />,
  header: (props) => <Header {...props} />,
  tab: (props) => <Tab {...props} />,
  modal: (props) => <Modal {...props} />,
  card: (props) => <Card {...props} />,
  box: (props) => <Box {...props} />,
  list: (props) => <List {...props} />,
  result: (props) => <Result {...props} />,
  wallet: (props) => <Wallet {...props} />,
};

export const renderComponent = (type, propsItems) => {
  // find the respective type from dictionary
  const SelectedComponent = Components && Components[type];
  // to ensure it is not undefined
  // prevent rendering error
  if (SelectedComponent === undefined) return null;

  // return component with container together
  return SelectedComponent({ ...propsItems });
  //return renderContainer(selectedComponent({ ...propsItems }))
};

// const renderContainer = (children) => <View style={{ flex: 1 }}>{children}</View>;

export const validationResolver = {
  noteq: async (item, value) => {
    return !(value === item.value);
    // return (value !== "" && !item.value.includes(value)) || false;
  },
  eq: async (item, value) => {
    return value === item.value;
  },
  exist: async (item, value) => {
    return value !== "";
  },
  eq1: async (item, value) => {
    return (value !== "" && item.value.includes(value)) || false;
  },
};
