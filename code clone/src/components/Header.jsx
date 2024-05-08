import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
const Container = styled(AppBar)`
  background: black;
  height: 9vh;
`;

const Header = () => {
  return (
    <Container position="static">
      <Toolbar></Toolbar>
    </Container>
  );
};

export default Header;
