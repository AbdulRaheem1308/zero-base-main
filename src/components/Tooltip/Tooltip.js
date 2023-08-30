import TemplateList from "./templates";

const Tooltip = (props) => {
  const { item } = props;
  const { templateName = "" } = item || {};
  return (
    (TemplateList[templateName] && TemplateList[templateName](props)) || null
  );
};

export default Tooltip;
