import React, { forwardRef } from "react";
import { Content as StyledContent } from "./styled";

const Content = forwardRef((props, ref) => {
  return <StyledContent ref={ref}></StyledContent>;
});

export default Content;
