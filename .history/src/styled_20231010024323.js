import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    background-color: #000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &::before {
    width: 1px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    width: 100%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Toolbar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Button = styled.button`
  display: block;
  margin-bottom: 10px;
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 5px;
`;

export const ButtonInForm = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const ButtonInSubmit = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const Canvas = styled.canvas`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
`;

export const ButtonInRelation = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px auto; /* 居中 */
  bottom: 10px; /* 距离底部10像素 */
  transform: translateX(-50%); /* 调整水平居中 */
`;
