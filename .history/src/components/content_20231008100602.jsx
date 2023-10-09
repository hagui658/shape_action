import React, { forwardRef } from "react";
import { Content } from "../styled";

const Contents = forwardRef((props, ref) => {
    return <Content ref={ref}></Content>;
});

export default Content;