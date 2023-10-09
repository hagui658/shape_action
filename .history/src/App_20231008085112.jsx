import { Container, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState, useRef } from "react";
import HandleShape from "./scripts/dataHandler";
import Content from "./components/Content";

const App = () => {
  const [shapeData, setShapeData] = useState(null);
  const contentRef = useRef(null)

  const handleShapeCreated = (data) => {
    setShapeData(data);
  }

  return (
    <Container>
      <Content ref={contentRef}>
        {shapeData && <HandleShape contentRef={contentRef} shapeData={shapeData} />}
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
