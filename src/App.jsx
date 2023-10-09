import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState, useRef } from "react";
import HandleShape from "./scripts/dataHandler";
import ShapeRelation from "./components/ShapeRelation";

const App = () => {
  const [shapeData, setShapeData] = useState(null);
  const canvasRef = useRef(null);

  const handleShapeCreated = (data) => {
    if (data) {
      if (data.shapeType === "circle") {
        setShapeData((prevShapeData) => new Map(prevShapeData).set("circle", data));
      } else if (data.shapeType === "rectangle") {
        setShapeData((prevShapeData) => new Map(prevShapeData).set("rectangle", data));
      }
    }
  }


  const handleClearCanvas = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      setShapeData(null)
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return (
    <Container>
      <Content>
        {shapeData && <HandleShape shapeData={shapeData} canvasRef={canvasRef} />}
      </Content>
      <Toolbar>
        <CreateShape onShapeCreated={handleShapeCreated} />
        <Button onClick={handleClearCanvas}>清除图形</Button>
        <ShapeRelation shapeData={shapeData} />
      </Toolbar>
    </Container>
  )
}

export default App;
