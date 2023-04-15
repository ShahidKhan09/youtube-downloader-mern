import React from "react";
import * as api from "../../services/content.api";
type Props = {};

const FormSection = (props: Props) => {
  const get = async () => {
    console.log("hello");
  };
  return (
    <div>
      <button onClick={get}>hello</button>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eveniet
      suscipit porro, omnis mollitia similique. Illo neque consectetur
      consequuntur tempora!
    </div>
  );
};

export default FormSection;
