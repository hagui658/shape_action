import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState, useRef } from "react";
import HandleShape from "./scripts/dataHandler";

const App = () => {
  const [shapeData, setShapeData] = useState(null);
  const canvasRef = useRef(null);
  const map = new Map()

  const handleShapeCreated = (data) => {
    if (data) {
      setShapeData(data);

      if (data.shapeType === "circle") {
        map.set("circle", data);
        map.delete("rectangle");
      } else if (data.shapeType === "rectangle") {
        map.set("rectangle", data);
        map.delete("circle");
      }
    }
  }

  if (shapeData.shapeType === "circle") {
    map.set("circle", shapeData)
  } else if (shapeData.shapeType === "rectangle") {
    map.set("rectangle", shapeData)
  }

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return (
    <Container>
      <Content>
        {shapeData && <HandleShape shapeData={Array.from(map.values())} canvasRef={canvasRef} />}
      </Content>
      <Toolbar>
        <CreateShape onShapeCreated={handleShapeCreated} />
        <Button onClick={handleClearCanvas}>清除图形</Button>
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
