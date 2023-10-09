import React from "react";

export const HandleShape = ({ showForm, setShowForm }) => {
  let shapeType = "";
  let centerX = "";
  let centerY = "";
  let radius = "";
  let width = "";
  let height = "";

  const handleDrawShape = () => {};

  return (
    <div>
      {showForm && (
        <div>
          <select onChange={(e) => (shapeType = e.target.value)}>
            <option value="">请选择图形类型</option>
            <option value="circle">圆</option>
            <option value="rectangle">矩形</option>
          </select>

          <div>
            <label>中心X坐标:</label>
            <input type="text" onChange={(e) => (centerX = e.target.value)} />
          </div>

          <div>
            <label>中心Y坐标:</label>
            <input type="text" onChange={(e) => (centerY = e.target.value)} />
          </div>

          <button onClick={handleDrawShape}>确定</button>
        </div>
      )}
    </div>
  );
};
