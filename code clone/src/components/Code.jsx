import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";
import { Box, styled } from "@mui/material";
import { useContext } from "react";

const Container = styled(Box)`
  display: flex;
  background-color: black;
  height: 53vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />

      <Editor
        heading="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Javascript"
        icon="()"
        color="yellow"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
