import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState } from "react";
import HandleShape from "./scripts/dataHandler";

const App = () => {
  const [shapeData, setShapeData] = useState(null);
  return (
    <Container>
      <Content>
        {shapeData && <HandleShape shapeData={shapeData} />}
      </Content>
      <Toolbar>
        <CreateShape setShapeData={setShapeData} />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
