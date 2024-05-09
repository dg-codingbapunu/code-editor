import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: black;
  height: 9vh;

  /* For small screens (phones, 600px and below) */
  @media only screen and (max-width: 600px) {
    height: 8vh; /* Adjust height for small screens */
  }
`;

const Header = () => {
  return (
    <Container position="static">
      <Toolbar></Toolbar>
    </Container>
  );
};

export default Header;
