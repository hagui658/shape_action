import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #000; /* 线的颜色 */
    position: absolute;
  }

  &::before {
    width: 1px;
    height: 100%;
    left: 50%; /* 水平居中 */
    transform: translateX(-50%);
  }

  &::after {
    width: 100%;
    height: 1px;
    top: 50%; /* 垂直居中 */
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
