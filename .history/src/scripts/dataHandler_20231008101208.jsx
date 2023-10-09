import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "../styled"


const centimetersToPixels = (centimeters, dpi = 96) => {
  return (centimeters / 2.54) * dpi;
};

const HandleShape = ({ shapeData, contentRef }) => {
  console.log(11111111);

  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (shapeData && shapeData.shapeType === "circle") {
      const { centerX, centerY, radius } = shapeData;
      const radiusInPixels = centimetersToPixels(radius);
      const centerXInCm = centimetersToPixels(centerX);
      const centerYInCm = centimetersToPixels(centerY);
      context.beginPath();
      context.arc(centerXInCm, centerYInCm, radiusInPixels, 0, 2 * Math.PI);
      context.fillStyle = "blue";
      context.fill();
      context.closePath();
    } else if (shapeData && shapeData.shapeType === "rectangle") {
      const { x, y, width, height } = shapeData;
      const xInPixels = centimetersToPixels(x);
      const yInPixels = centimetersToPixels(y);
      const widthInPixels = centimetersToPixels(width);
      const heightInPixels = centimetersToPixels(height);
      context.beginPath();
      context.rect(xInPixels, yInPixels, widthInPixels, heightInPixels);
      context.fillStyle = "green";
      context.fill();
      context.closePath();
    }
  }, [shapeData]);

  useEffect(() => {
    const contentElement = contentRef.current;
    const contentWidth = contentElement?.offsetWidth || 0;
    const contentHeight = contentElement?.offsetHeight || 0;

    setCanvasSize({ width: contentWidth, height: contentHeight });
  }, [contentRef]);

  return <Canvas ref={canvasRef}
    width={canvasSize.width}
    height={canvasSize.height} ></Canvas>;
}

export default HandleShape;
