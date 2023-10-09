import React, { useRef, useEffect } from "react";
import { Canvas } from "../styled"

const dpi = window.devicePixelRatio;

const centimetersToPixels = (centimeters, dpi = 96) => {
  return (centimeters / 2.54) * dpi;
};

const HandleShape = ({ shapeData }) => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (shapeData && shapeData.shapeType === "circle") {
      const { centerX, centerY, radius } = shapeData;
      const radiusInPixels = centimetersToPixels(radius);
      const centerXInCm = centimetersToPixels(centerX, dpi);
      const centerYInCm = centimetersToPixels(centerY, dpi);
      console.log(centerXInCm);
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

  return <Canvas ref={canvasRef} width="500" height="500" ></Canvas>;
}

export default HandleShape;
