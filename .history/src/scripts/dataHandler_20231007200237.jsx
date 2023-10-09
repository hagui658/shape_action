import React, { useRef, useEffect } from "react";
import { Canvas } from "../styled"

function HandleShape(shapeData) {
  console.log(shapeData);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (shapeData) {
      console.log(1111);
      const { centerX, centerY, radius } = shapeData;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.fillStyle = "blue";
      context.fill();
      context.closePath();
    } else if (shapeData && shapeData.shapeType === "rectangle") {
      const { x, y, width, height } = shapeData;
      context.beginPath();
      context.rect(x, y, width, height);
      context.fillStyle = "green";
      context.fill();
      context.closePath();
    }
  }, [shapeData]);

  return <Canvas ref={canvasRef} width={500} height={500}></Canvas>;
}

export default HandleShape;
