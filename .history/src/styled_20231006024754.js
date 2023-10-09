import styled from "styled-components";
import Url from "../src/image/view";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-image: url(${Url});
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
