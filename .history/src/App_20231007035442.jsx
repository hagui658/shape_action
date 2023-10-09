import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React from "react";

const App = () => {
  return (
    <Container>
      <Content>
      </Content>
      <Toolbar>
        <CreateShape />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
