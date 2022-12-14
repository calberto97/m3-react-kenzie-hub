import React from "react";
import StyledHeader from "./style";
import logo from "./logo.svg"

const Header = ({ flex, width, children }) => {
    return (
        <StyledHeader flex={flex} width={width} children={children}>
      <img srcSet={logo} alt=""/>
      {children}
    </StyledHeader>
  );
};

export default Header;
