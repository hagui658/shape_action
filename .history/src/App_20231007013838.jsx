import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import { HandleShape } from "./scripts/dataHandler";
import React from "react";

const App = () => {

  const createButton = () => {
    alert("显示弹出框或执行其他逻辑");
  }
  return (
    <Container>
      <Content>
      </Content>
      <Toolbar>
        <CreateShape onClick={createButton} />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
