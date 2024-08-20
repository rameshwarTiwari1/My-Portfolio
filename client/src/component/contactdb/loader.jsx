import React from "react";
import "./loader.css";
import { Oval } from "react-loader-spinner";
const loader = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color='yellow'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='white'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default loader;
