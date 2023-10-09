import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-image: url("https://img.mianfeiwendang.com/pic/19920aaf71ff84275525d125/1-828-png_6_0_0_23_9_850_851_892.979_1262.879-816-0-0-816.jpg");
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
