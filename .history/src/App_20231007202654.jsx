import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState } from "react";
import HandleShape from "./scripts/dataHandler";

const App = () => {
  const [shapeData, setShapeData] = useState(null);

  const handleShapeCreated = (data) => {
    setShapeData(data);
  }

  return (
    <Container>
      <Content>
        {<HandleShape shapeData={shapeData} />}
      </Content>
      <Toolbar>
        <CreateShape onShapeCreated={handleShapeCreated} />
        <Button>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
