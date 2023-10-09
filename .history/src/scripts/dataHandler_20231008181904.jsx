import React, { useEffect } from "react";
import { Canvas } from "../styled"


const centimetersToPixels = (centimeters, dpi = 96) => {
  return (centimeters / 2.54) * dpi;
};

const HandleShape = ({ shapeData, canvasRef }) => {

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (shapeData && shapeData.shapeType === "circle") {
      const { centerX, centerY, radius } = shapeData;
      const radiusInPixels = centimetersToPixels(radius);
      const centerXInCm = centimetersToPixels(centerX);
      const centerYInCm = centimetersToPixels(centerY);
      context.beginPath();
      context.arc(canvas.width / 2 + centerXInCm, canvas.height / 2 - centerYInCm, radiusInPixels, 0, 2 * Math.PI);
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
      context.rect(canvas.width / 2 + widthInPixels / 2, canvas.height / 2 - yInPixels - heightInPixels / 2, widthInPixels, heightInPixels);
      context.fillStyle = "green";
      context.fill();
      context.closePath();
    }
  }, [canvasRef, shapeData]);

  return <Canvas ref={canvasRef} width="1646" height="1318"
    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  ></Canvas>;
}

export default HandleShape;
