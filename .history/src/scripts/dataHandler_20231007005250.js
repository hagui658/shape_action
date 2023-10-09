import React, { useState } from "react";

export const HandleShape = () => {
  let shapeType = "";
  let centerX = "";
  let centerY = "";
  let radius = "";
  let width = "";
  let height = "";
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleDrawShape = () => {};

  return (
    <div>
      {showForm && (
        <select onChange={(e) => (shapeType = e.target.value)}>
          <option value="">请选择图形类型</option>
          <option value="circle">圆</option>
          <option value="rectangle">矩形</option>
        </select>
      )}
    </div>
  );
};
