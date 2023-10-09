import { Container, Content, Toolbar, Button } from "./styled"
import CreateShape from "./components/CreateShape";
import React, { useState, useRef } from "react";
import HandleShape from "./scripts/dataHandler";

const App = () => {
  const [shapeData, setShapeData] = useState(null);
  const canvasRef = useRef(null);

  const handleShapeCreated = (data) => {
    setShapeData(data);
  }

  const handleClearCanvas = () => {
    // 获取Canvas元素的引用
    const canvas = canvasRef.current;

    if (canvas) {
      // 使用Canvas的getContext方法获取2D上下文
      const context = canvas.getContext("2d");

      // 使用clearRect方法清除Canvas上的内容
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
        <Button>图形关系</Button>
      </Toolbar>
    </Container>
  )
}

export default App;
