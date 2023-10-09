import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-image: url("https://th.bing.com/th/id/R.664a0f86929f270b2f1a6a66f11b2b6a?rik=av9UnNnSqVPbWQ&pid=ImgRaw&r=0");
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
