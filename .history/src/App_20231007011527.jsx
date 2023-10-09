import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import { HandleShape } from "./scripts/dataHandler";
import React, { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const createButton = () => {
    HandleShape()
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
