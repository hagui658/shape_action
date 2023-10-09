import React, { useRef, useEffect } from "react";
import { Canvas } from "../styled"


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
      const centerXInCm = centimetersToPixels(centerX);
      const centerYInCm = centimetersToPixels(centerY);
      const canvasCenterX = canvas.width / 2;
      const canvasCenterY = canvas.height / 2;
      const drawX = canvasCenterX - radiusInPixels + (centerXInCm - canvasCenterX);
      const drawY = canvasCenterY - radiusInPixels + (centerYInCm - canvasCenterY);

      context.beginPath();
      context.arc(drawX + radiusInPixels, drawY + radiusInPixels, radiusInPixels, 0, 2 * Math.PI);
      context.fillStyle = "blue";
      context.fill();
      context.closePath();
    } else if (shapeData && shapeData.shapeType === "rectangle") {
      const { x, y, width, height } = shapeData;
      const xInPixels = centimetersToPixels(x);
      const yInPixels = centimetersToPixels(y);
      const widthInPixels = centimetersToPixels(width);
      const heightInPixels = centimetersToPixels(height);
      const canvasCenterX = canvas.width / 2;
      const canvasCenterY = canvas.height / 2;
      const drawX = canvasCenterX - widthInPixels / 2 + (xInPixels - canvasCenterX);
      const drawY = canvasCenterY - heightInPixels / 2 + (yInPixels - canvasCenterY);

      context.beginPath();
      context.rect(drawX, drawY, widthInPixels, heightInPixels);
      context.fillStyle = "green";
      context.fill();
      context.closePath();
    }
  }, [shapeData]);

  return <Canvas ref={canvasRef} width="1500" height="1500"
    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  ></Canvas>;
}

export default HandleShape;
