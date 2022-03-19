import React from "react";

import LogoSVG from "../../images/logo.png";

import "./Logo.sass";

const Logo = () => {
  return <img src={LogoSVG} alt="company logo" className="logo logo__header" />;
};

export default Logo;
