import React, { useRef, useEffect } from "react";
import { Canvas } from "../styled"

const HandleShape = (props) => {
  console.log(props);
  const { shapeData, contentRef } = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const contentElement = contentRef.current;
    const contentWidth = contentElement.offsetWidth;
    const contentHeight = contentElement.offsetHeight;

    canvas.width = contentWidth
    canvas.height = contentHeight

    const context = canvas.getContext("2d");

    if (shapeData && shapeData.shapeType === "circle") {
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
  }, [shapeData, contentRef]);

  return <Canvas ref={canvasRef} ></Canvas>;
}

export default HandleShape;
