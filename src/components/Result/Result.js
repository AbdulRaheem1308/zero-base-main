import TemplateList from "./templates";

const Result = (props) => {
  const { item } = props;
  const { templateName = "" } = item || {};
  //Access to all props that introduced in element.
  return (
    (TemplateList[templateName] && TemplateList[templateName](props)) || null
  );
};

export default Result;
