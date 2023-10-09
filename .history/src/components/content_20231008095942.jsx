import React, { forwardRef } from "react";
import { Content as StyledContent } from "../styled";

const Content = forwardRef((props, ref) => {
    return <StyledContent ref={ref}>111</StyledContent>;
});

export default Content;